import { expect, test } from "bun:test";
import * as themeModule from "./theme";

// mock document
const setDatasetTheme = (theme: string) => {
  (globalThis.document as object) = {
    documentElement: {
      dataset: {
        theme,
      },
    },
  };
};

// mock document
const setSystemTheme = (isDark: boolean) => {
  (globalThis.window as object) = {
    matchMedia: () => ({
      matches: isDark,
    }),
  };
};

test("test_theme_module", () => {
  const theme = themeModule.strToTheme("dark");
  expect(theme).toBe("dark");
});

test("test_theme_module_with_invalid_theme", () => {
  const theme = themeModule.strToTheme("invalid");
  expect(theme).toBe("system");
});

test("test_get_selected_theme", () => {
  setDatasetTheme("system");
  setSystemTheme(false);

  let theme = themeModule.getSelectedTheme();
  expect(theme).toBe("light");

  setSystemTheme(true);
  theme = themeModule.getSelectedTheme();
  expect(theme).toBe("dark");

  setDatasetTheme("light");
  theme = themeModule.getSelectedTheme();
  expect(theme).toBe("light");

  setDatasetTheme("dark");
  theme = themeModule.getSelectedTheme();
  expect(theme).toBe("dark");
});

test("test_toggle_theme", () => {
  let theme = themeModule.toggleTheme("light");
  expect(theme).toBe("dark");

  theme = themeModule.toggleTheme("dark");
  expect(theme).toBe("light");

  theme = themeModule.toggleTheme("system");
  expect(theme).toBe("light");
});
