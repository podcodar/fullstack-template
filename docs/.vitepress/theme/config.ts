// reference https://github.com/brenoepics/vitepress-carbon/blob/main/packages/theme/src/theme/config/baseConfig.ts
import type { UserConfig } from "vitepress";
import type { ThemeConfig } from "vitepress-carbon";

const deps = ["vitepress/theme", "@vueuse/core", "body-scroll-lock"];

export const carbonConfig: UserConfig<ThemeConfig> = {
  scrollOffset: ["header", ".VPLocalNav"],
  appearance: {
    initialValue: "dark",
  },
  vite: {
    ssr: {
      noExternal: [...deps, /\.css$/, /^vitepress-carbon/],
    },
    optimizeDeps: {
      exclude: deps,
    },
  },

  head: [],

  markdown: {
    headers: {
      level: [2, 3],
    },
    config(_md) {},
  },

  transformHead({ assets }) {
    const font = assets.find((file) => /Mona-Sans\.\w+\.woff2/.test(file));
    if (font) {
      return [
        [
          "link",
          {
            rel: "preload",
            href: font,
            as: "font",
            type: "font/woff2",
            crossorigin: "",
          },
        ],
      ];
    }
  },

  shouldPreload(link) {
    // make algolia chunk prefetch instead of preload
    return !link.includes("Algolia");
  },
};
