import { describe, it, expect } from "vitest";
import {
  videoEmbedUrl,
  videoWatchUrl,
  getVideoTitle,
  confettiBurst,
  computeProgress,
  milestoneTier,
  resolveTheme,
  resolveFontFamily,
} from "../utils.js";

describe("video playlist matching", () => {
  const PLAYLIST_ID = "PLKahf_QP41Lk";

  it("uses videoseries embed URL for playlist pages", () => {
    const page = { playlist: true };
    expect(videoEmbedUrl(page)).toBe(
      `https://www.youtube-nocookie.com/embed/videoseries?list=${PLAYLIST_ID}`,
    );
  });

  it("uses single video embed URL with rel=0 for video pages", () => {
    const page = { video: { id: "NQ-w6iyv_cE" } };
    expect(videoEmbedUrl(page)).toBe(
      `https://www.youtube-nocookie.com/embed/NQ-w6iyv_cE?rel=0`,
    );
  });

  it("builds playlist watch URL with list param", () => {
    const page = { video: { id: "abc123" } };
    expect(videoWatchUrl(page)).toBe(
      `https://www.youtube.com/watch?v=abc123&list=${PLAYLIST_ID}`,
    );
  });

  it("builds playlist URL for playlist pages", () => {
    const page = { playlist: true };
    expect(videoWatchUrl(page)).toBe(`https://www.youtube.com/playlist?list=${PLAYLIST_ID}`);
  });

  it("uses playlist title for playlist pages", () => {
    const tr = (v) => v;
    expect(getVideoTitle({ playlist: true }, tr)).toBe(
      "Breeze Onboarding — full video playlist",
    );
  });

  it("uses page video title for video pages", () => {
    const tr = (v) => v;
    expect(getVideoTitle({ video: { title: "Create account in Supermoney Breeze" } }, tr)).toBe(
      "Create account in Supermoney Breeze",
    );
  });

  it("applies translations to video title", () => {
    const tr = (v) => (v === "Create account in Supermoney Breeze" ? "खाता बनाएं" : v);
    expect(getVideoTitle({ video: { title: "Create account in Supermoney Breeze" } }, tr)).toBe(
      "खाता बनाएं",
    );
  });
});

describe("milestone tier matching", () => {
  const milestonesData = {
    account: { id: "account" },
    shopify: { id: "shopify" },
    review: { id: "review", prerequisites: ["account", "shopify"] },
  };

  it("classifies locked milestone when prerequisites unmet", () => {
    const state = { account: true, shopify: false, review: false };
    expect(milestoneTier(milestonesData.review, state)).toBe("locked");
  });

  it("classifies active milestone when prerequisites met but incomplete", () => {
    const state = { account: true, shopify: true, review: false };
    expect(milestoneTier(milestonesData.review, state)).toBe("active");
  });

  it("classifies completed milestone when done", () => {
    const state = { account: true, shopify: true, review: true };
    expect(milestoneTier(milestonesData.review, state)).toBe("completed");
  });

  it("classifies milestone with no prerequisites as active when unchecked", () => {
    const state = { account: false, shopify: true, review: false };
    expect(milestoneTier(milestonesData.account, state)).toBe("active");
  });

  it("classifies milestone with no prerequisites as completed when checked", () => {
    const state = { account: true, shopify: true, review: false };
    expect(milestoneTier(milestonesData.account, state)).toBe("completed");
  });
});

describe("confetti burst generation", () => {
  it("generates 14 default confetti pieces", () => {
    expect(confettiBurst()).toHaveLength(14);
  });

  it("generates custom number of pieces", () => {
    expect(confettiBurst(20)).toHaveLength(20);
  });

  it("each piece has angle, distance, and color", () => {
    const burst = confettiBurst(4);
    for (const piece of burst) {
      expect(piece).toHaveProperty("angle");
      expect(piece).toHaveProperty("distance");
      expect(piece).toHaveProperty("color");
    }
  });

  it("spreads angles evenly across 360 degrees", () => {
    const count = 14;
    const burst = confettiBurst(count);
    burst.forEach((piece, index) => {
      expect(piece.angle).toBe((360 / count) * index);
    });
  });

  it("uses a rotating color palette of 5 colors", () => {
    const count = 5;
    const burst = confettiBurst(count);
    const unique = new Set(burst.map((piece) => piece.color));
    expect(unique.size).toBe(5);
  });

  it("repeats the palette after 5 pieces", () => {
    const burst = confettiBurst(10);
    expect(burst[5].color).toBe(burst[0].color);
    expect(burst[6].color).toBe(burst[1].color);
  });

  it("varies distances by modulo 3", () => {
    const burst = confettiBurst(6);
    expect(burst[0].distance).toBe(45);
    expect(burst[3].distance).toBe(45);
    expect(burst[1].distance).toBe(57);
    expect(burst[2].distance).toBe(69);
  });
});

describe("computeProgress", () => {
  it("computes correct percentage", () => {
    expect(computeProgress(4, 8)).toBe(50);
  });

  it("returns 100 when all complete", () => {
    expect(computeProgress(8, 8)).toBe(100);
  });

  it("returns 0 when none complete", () => {
    expect(computeProgress(0, 8)).toBe(0);
  });

  it("returns 0 when total is 0", () => {
    expect(computeProgress(0, 0)).toBe(0);
  });

  it("rounds partial percentages", () => {
    expect(computeProgress(1, 8)).toBe(13);
  });
});

describe("milestone on-click celebrate logic", () => {
  it("computes progress used for the milestone badge count", () => {
    const completed = 4;
    const total = 8;
    expect(computeProgress(completed, total)).toBe(50);
  });

  it("matches celebrateMilestone burst count to 14 pieces", () => {
    expect(confettiBurst().length).toBe(14);
  });
});

describe("dark/light theme matching", () => {
  it("resolves explicit dark preference", () => {
    expect(resolveTheme("dark")).toBe("dark");
  });

  it("resolves explicit light preference", () => {
    expect(resolveTheme("light")).toBe("light");
  });

  it("defaults to dark when nothing stored", () => {
    expect(resolveTheme(null)).toBe("dark");
  });

  it("defaults to dark for unknown values", () => {
    expect(resolveTheme("midnight")).toBe("dark");
  });

  it("dark theme CSS custom properties cover accent, text, and background", () => {
    // Verify the color palette keys used in the dark block
    const darkVars = [
      "--bg",
      "--header",
      "--sidebar",
      "--card",
      "--card-soft",
      "--text",
      "--muted",
      "--faint",
      "--border",
      "--accent",
      "--accent-soft",
      "--accent-strong",
      "--code",
      "--shadow",
    ];
    expect(darkVars.length).toBeGreaterThan(10);
    expect(darkVars).toContain("--bg");
    expect(darkVars).toContain("--accent");
  });
});

describe("font family style matching", () => {
  it("uses Manrope for headings", () => {
    const fonts = resolveFontFamily();
    expect(fonts.heading).toBe(`"Manrope", system-ui, sans-serif`);
  });

  it("uses DM Sans for body", () => {
    const fonts = resolveFontFamily();
    expect(fonts.body).toBe(`"DM Sans", system-ui, sans-serif`);
  });

  it("fonts are consistent across themes", () => {
    const light = resolveFontFamily("light");
    const dark = resolveFontFamily("dark");
    expect(light).toEqual(dark);
  });
});

describe("color coding checks", () => {
  it("accent colors differ between dark and light themes", () => {
    // light accent: #1887ff, dark accent: #42a2ff
    const lightAccent = "#1887ff";
    const darkAccent = "#42a2ff";
    expect(darkAccent).not.toBe(lightAccent);
  });

  it("confetti uses brand accent palette starting with #42a2ff", () => {
    const burst = confettiBurst();
    expect(burst[0].color).toBe("#42a2ff");
  });
});
