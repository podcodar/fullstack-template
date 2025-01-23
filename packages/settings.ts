export const site = {
  homepage: "https://fullstack-template-bng.pages.dev/",
  title: "Welcome to the new world 🌎",
  description:
    "We've created this fullstack template with React Rounter Framework, Bun, Tailwind CSS, and TypeScript so you don't have to.",
};

export const cookies = {
  maxAge: 2147483647,
};

export const sitemap = {
  url: `${site.homepage}/sitemap.xml`,
  urls: [
    {
      loc: site.homepage,
      lastmod: "2024-12-26T09:10:00-03:00",
      priority: 1.0,
    },
    {
      loc: `${site.homepage}/team/`,
      lastmod: "2024-12-26T09:10:00-03:00",
      priority: 1.0,
    },
    {
      loc: `${site.homepage}/transparency/`,
      lastmod: "2024-12-26T09:10:00-03:00",
      priority: 1.0,
    },
  ],
};

export const images = {
  icon: "/images/favicon.svg",
  logo: "/images/favicon.svg",
  og: "https://podcodar.org/images/favicon.svg",
  pixQRCode: "/images/pix-qrcode.png",
};

export const links = {
  // add links
  home: "/",

  cta: {
    primary: "https://podcodar.org",
    secondary: "/",
  },

  social: {
    linkedin: "https://www.linkedin.com/podcodar",
    github: "https://github.com/podcodar/fullstack-template",
  },
};

export const texts = {
  home: "Homepage",
  join: "Join us",
  cta: {
    primary: "Join us",
    secondary: "Learn more",
  },
};
