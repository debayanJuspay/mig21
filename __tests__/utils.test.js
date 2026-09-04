import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  slug,
  createTr,
  parseHash,
  isValidLanguage,
  readMilestoneState,
  milestoneIsUnlocked,
  cascadeUncheck,
  searchableText,
  filterSearchResults,
  SUPPORTED_LANGUAGES,
} from "../utils.js";

describe("slug", () => {
  it("converts a string to a lowercase slug", () => {
    expect(slug("Hello World")).toBe("hello-world");
  });

  it("removes special characters", () => {
    expect(slug("Phase 1: Getting Started!")).toBe("phase-1-getting-started");
  });

  it("trims leading and trailing hyphens", () => {
    expect(slug("--hello--")).toBe("hello");
  });

  it("collapses multiple hyphens", () => {
    expect(slug("a   b")).toBe("a-b");
  });

  it("handles empty string", () => {
    expect(slug("")).toBe("");
  });

  it("preserves numbers", () => {
    expect(slug("Step 2: Auth")).toBe("step-2-auth");
  });
});

describe("createTr", () => {
  const translations = {
    hi: { Hello: "नमस्ते", Welcome: "स्वागत है" },
    kn: { Hello: "ನಮಸ್ಕಾರ" },
  };

  it("returns translated value when available", () => {
    const tr = createTr(translations, "hi");
    expect(tr("Hello")).toBe("नमस्ते");
  });

  it("returns original value when translation missing", () => {
    const tr = createTr(translations, "hi");
    expect(tr("Missing")).toBe("Missing");
  });

  it("returns original value for unsupported language", () => {
    const tr = createTr(translations, "fr");
    expect(tr("Hello")).toBe("Hello");
  });

  it("returns original value for English (no translations needed)", () => {
    const tr = createTr(translations, "en");
    expect(tr("Hello")).toBe("Hello");
  });
});

describe("parseHash", () => {
  it("strips the leading hash", () => {
    expect(parseHash("#introduction")).toBe("introduction");
  });

  it("returns empty string for bare hash", () => {
    expect(parseHash("#")).toBe("");
  });

  it("returns empty string for empty input", () => {
    expect(parseHash("")).toBe("");
  });

  it("handles hash with special characters", () => {
    expect(parseHash("#connect-shopify")).toBe("connect-shopify");
  });
});

describe("isValidLanguage", () => {
  it("returns true for supported languages", () => {
    for (const lang of SUPPORTED_LANGUAGES) {
      expect(isValidLanguage(lang)).toBe(true);
    }
  });

  it("returns false for unsupported languages", () => {
    expect(isValidLanguage("fr")).toBe(false);
    expect(isValidLanguage("de")).toBe(false);
    expect(isValidLanguage("")).toBe(false);
  });
});

describe("readMilestoneState", () => {
  const milestones = [
    { id: "account" },
    { id: "shopify" },
    { id: "shipping" },
  ];

  const store = {};
  const mockStorage = {
    getItem: vi.fn((key) => store[key] ?? null),
    setItem: vi.fn((key, value) => { store[key] = value; }),
    clear: vi.fn(() => { for (const key in store) delete store[key]; }),
  };

  beforeEach(() => {
    vi.stubGlobal("localStorage", mockStorage);
    mockStorage.clear();
  });

  it("returns all false when localStorage is empty", () => {
    const state = readMilestoneState(milestones, "test-milestones");
    expect(state).toEqual({ account: false, shopify: false, shipping: false });
  });

  it("reads saved milestone state", () => {
    store["test-milestones"] = JSON.stringify({ account: true, shopify: false });
    const state = readMilestoneState(milestones, "test-milestones");
    expect(state.account).toBe(true);
    expect(state.shopify).toBe(false);
    expect(state.shipping).toBe(false);
  });

  it("returns all false on malformed JSON", () => {
    store["test-milestones"] = "not-json";
    const state = readMilestoneState(milestones, "test-milestones");
    expect(state).toEqual({ account: false, shopify: false, shipping: false });
  });

  it("ignores extra keys not in milestones", () => {
    store["test-milestones"] = JSON.stringify({ account: true, extra: true });
    const state = readMilestoneState(milestones, "test-milestones");
    expect(state).toEqual({ account: true, shopify: false, shipping: false });
  });
});

describe("milestoneIsUnlocked", () => {
  it("unlocks milestones with no prerequisites", () => {
    const milestone = { id: "account" };
    expect(milestoneIsUnlocked(milestone, {})).toBe(true);
  });

  it("unlocks when all prerequisites are met", () => {
    const milestone = { id: "review", prerequisites: ["account", "shopify"] };
    const state = { account: true, shopify: true };
    expect(milestoneIsUnlocked(milestone, state)).toBe(true);
  });

  it("locks when some prerequisites are unmet", () => {
    const milestone = { id: "review", prerequisites: ["account", "shopify"] };
    const state = { account: true, shopify: false };
    expect(milestoneIsUnlocked(milestone, state)).toBe(false);
  });

  it("locks when all prerequisites are unmet", () => {
    const milestone = { id: "publish", prerequisites: ["review"] };
    const state = { review: false };
    expect(milestoneIsUnlocked(milestone, state)).toBe(false);
  });
});

describe("cascadeUncheck", () => {
  const milestones = [
    { id: "account" },
    { id: "shopify" },
    { id: "payment" },
    { id: "review", prerequisites: ["account", "shopify", "payment"] },
    { id: "publish", prerequisites: ["review"] },
  ];

  it("unchecks a milestone", () => {
    const state = { account: true, shopify: true, payment: true, review: true, publish: true };
    const result = cascadeUncheck("review", false, milestones, state);
    expect(result.review).toBe(false);
    expect(result.publish).toBe(false);
  });

  it("cascades uncheck to dependent milestones", () => {
    const state = { account: true, shopify: true, payment: true, review: true, publish: true };
    const result = cascadeUncheck("account", false, milestones, state);
    expect(result.account).toBe(false);
    expect(result.review).toBe(false);
    expect(result.publish).toBe(false);
  });

  it("does not uncheck unrelated milestones", () => {
    const state = { account: true, shopify: true, payment: true, review: true, publish: true };
    const result = cascadeUncheck("account", false, milestones, state);
    expect(result.shopify).toBe(true);
    expect(result.payment).toBe(true);
  });

  it("checks a milestone without side effects", () => {
    const state = { account: false, shopify: true, payment: true, review: false, publish: false };
    const result = cascadeUncheck("account", true, milestones, state);
    expect(result.account).toBe(true);
    expect(result.review).toBe(false);
  });
});

describe("searchableText", () => {
  const pages = {
    intro: {
      title: "Welcome",
      description: "Getting started guide",
      groups: [{ title: "Setup", description: "Set up your store" }],
    },
    setup: {
      title: "Install App",
      description: "How to install",
      phases: [{ title: "Phase 1", steps: [["Step One", "Do this"]] }],
    },
    apps: {
      title: "Apps",
      description: "Available apps",
      apps: [{ name: "Cart", label: "Shopify", description: "Cart drawer", features: ["Upsells"] }],
    },
  };

  const identity = (v) => v;

  it("returns title and description for group pages", () => {
    const text = searchableText("intro", pages, identity);
    expect(text).toContain("Welcome");
    expect(text).toContain("Getting started guide");
    expect(text).toContain("Setup");
  });

  it("returns title, description, and phase text", () => {
    const text = searchableText("setup", pages, identity);
    expect(text).toContain("Install App");
    expect(text).toContain("Phase 1");
    expect(text).toContain("Step One");
  });

  it("returns title, description, and app text", () => {
    const text = searchableText("apps", pages, identity);
    expect(text).toContain("Cart");
    expect(text).toContain("Shopify");
    expect(text).toContain("Upsells");
  });
});

describe("filterSearchResults", () => {
  const flatPages = [
    { id: "intro", title: "Introduction", section: "Overview" },
    { id: "setup", title: "Install App", section: "Getting Started" },
  ];

  const pages = {
    intro: {
      title: "Introduction",
      description: "Welcome to Breeze",
      groups: [{ title: "Getting Started", description: "Set up your account" }],
    },
    setup: {
      title: "Install App",
      description: "How to install the Breeze app",
      phases: [{ title: "Phase 1", steps: [["Connect Store", "Link your Shopify"]] }],
    },
  };

  const identity = (v) => v;

  it("returns matching pages", () => {
    const results = filterSearchResults("Shopify", flatPages, pages, identity);
    expect(results).toHaveLength(1);
    expect(results[0].id).toBe("setup");
  });

  it("returns empty for no match", () => {
    const results = filterSearchResults("nonexistent", flatPages, pages, identity);
    expect(results).toHaveLength(0);
  });

  it("matches case-insensitively", () => {
    const results = filterSearchResults("shopify", flatPages, pages, identity);
    expect(results).toHaveLength(1);
  });

  it("returns all pages for empty query", () => {
    const results = filterSearchResults("", flatPages, pages, identity);
    expect(results).toHaveLength(2);
  });

  it("trims whitespace from query", () => {
    const results = filterSearchResults("  Shopify  ", flatPages, pages, identity);
    expect(results).toHaveLength(1);
  });
});
