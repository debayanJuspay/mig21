const SUPPORTED_LANGUAGES = ["en", "kn", "hi", "bn"];
const LANGUAGE_STORAGE_KEY = "breeze-language";
const MILESTONE_STORAGE_KEY = "breeze-merchant-milestones";

function slug(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function createTr(translations, currentLanguage) {
  return function tr(value) {
    return translations[currentLanguage]?.[value] ?? value;
  };
}

function parseHash(hash) {
  return hash.replace(/^#/, "");
}

function isValidLanguage(lang) {
  return SUPPORTED_LANGUAGES.includes(lang);
}

function readMilestoneState(milestones, storageKey = MILESTONE_STORAGE_KEY) {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    return Object.fromEntries(milestones.map(({ id }) => [id, saved[id] === true]));
  } catch {
    return Object.fromEntries(milestones.map(({ id }) => [id, false]));
  }
}

function milestoneIsUnlocked(milestone, milestoneState) {
  return !milestone.prerequisites || milestone.prerequisites.every((id) => milestoneState[id]);
}

function cascadeUncheck(changedId, checked, milestones, milestoneState) {
  const state = { ...milestoneState, [changedId]: checked };
  if (checked) return state;

  let changed = true;
  while (changed) {
    changed = false;
    for (const milestone of milestones) {
      if (state[milestone.id] && !milestoneIsUnlocked(milestone, state)) {
        state[milestone.id] = false;
        changed = true;
      }
    }
  }
  return state;
}

function searchableText(id, pages, tr) {
  const page = pages[id];
  const phaseText = page.phases
    ? page.phases.flatMap((phase) => [tr(phase.title), ...phase.steps.flat().map(tr)]).join(" ")
    : page.groups
      ? page.groups.flatMap((group) => [tr(group.title), tr(group.description)]).join(" ")
      : page.apps
        ? page.apps.flatMap((app) => [app.name, tr(app.label), tr(app.description), ...app.features.map(tr)]).join(" ")
        : "";
  return `${page.title} ${page.description} ${tr(page.title)} ${tr(page.description)} ${phaseText}`;
}

function filterSearchResults(query, flatPages, pages, tr) {
  const value = query.trim().toLowerCase();
  return flatPages.filter((page) =>
    searchableText(page.id, pages, tr).toLowerCase().includes(value),
  );
}

const PLAYLIST_ID = "PLKahf_QP41Lk";
const PLAYLIST_URL = `https://www.youtube.com/playlist?list=${PLAYLIST_ID}`;

function videoEmbedUrl(page) {
  if (page.playlist) {
    return `https://www.youtube-nocookie.com/embed/videoseries?list=${PLAYLIST_ID}`;
  }
  return `https://www.youtube-nocookie.com/embed/${page.video.id}?rel=0`;
}

function videoWatchUrl(page) {
  if (page.playlist) {
    return PLAYLIST_URL;
  }
  return `https://www.youtube.com/watch?v=${page.video.id}&list=${PLAYLIST_ID}`;
}

function getVideoTitle(page, tr) {
  if (page.playlist) return tr("Breeze Onboarding — full video playlist");
  return tr(page.video.title);
}

function confettiBurst(count = 14) {
  const colors = ["#42a2ff", "#10b981", "#f97316", "#a855f7", "#facc15"];
  return Array.from({ length: count }, (_, index) => ({
    angle: (360 / count) * index,
    distance: 45 + (index % 3) * 12,
    color: colors[index % colors.length],
  }));
}

function computeProgress(completedCount, totalCount) {
  return totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);
}

function milestoneTier(milestone, milestoneState) {
  const unlocked = milestoneIsUnlocked(milestone, milestoneState);
  if (!unlocked) return "locked";
  return milestoneState[milestone.id] ? "completed" : "active";
}

function resolveTheme(storedValue) {
  if (storedValue === "dark") return "dark";
  if (storedValue === "light") return "light";
  return "dark";
}

function resolveFontFamily(theme) {
  return {
    heading: `"Manrope", system-ui, sans-serif`,
    body: `"DM Sans", system-ui, sans-serif`,
  };
}

export {
  SUPPORTED_LANGUAGES,
  LANGUAGE_STORAGE_KEY,
  MILESTONE_STORAGE_KEY,
  PLAYLIST_ID,
  slug,
  createTr,
  parseHash,
  isValidLanguage,
  readMilestoneState,
  milestoneIsUnlocked,
  cascadeUncheck,
  searchableText,
  filterSearchResults,
  videoEmbedUrl,
  videoWatchUrl,
  getVideoTitle,
  confettiBurst,
  computeProgress,
  milestoneTier,
  resolveTheme,
  resolveFontFamily,
};
