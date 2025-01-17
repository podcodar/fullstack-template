export const THEME_OPTIONS = ["light", "dark", "system"] as const;

export type Theme = (typeof THEME_OPTIONS)[number];

export function strToTheme(str: string): Theme {
  if (THEME_OPTIONS.includes(str as Theme)) {
    return str as Theme;
  }

  return "system";
}

export function getSelectedTheme() {
  let selectedTheme = document.documentElement.dataset.theme;
  if (!selectedTheme || selectedTheme === "system") {
    selectedTheme = window.matchMedia("(prefers-color-scheme: dark)")?.matches
      ? "dark"
      : "light";
  }

  return strToTheme(selectedTheme);
}

export function toggleTheme(selectedTheme: Theme) {
  return selectedTheme === "light" ? "dark" : "light";
}
