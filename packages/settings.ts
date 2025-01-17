import { homepage } from "#/package.json";

export const site = {
  homepage,
  title: "Welcome to a the new world 🌎",
  description:
    "This is your PodCodar react-router Framework bootstrap, to facilitate your project criation",
};

export const cookies = {
  maxAge: 2147483647,
};

export const sitemap = {
  url: `${homepage}/sitemap.xml`,
  urls: [
    {
      loc: homepage,
      lastmod: "2024-12-26T09:10:00-03:00",
      priority: 1.0,
    },
    {
      loc: `${homepage}/team/`,
      lastmod: "2024-12-26T09:10:00-03:00",
      priority: 1.0,
    },
    {
      loc: `${homepage}/transparency/`,
      lastmod: "2024-12-26T09:10:00-03:00",
      priority: 1.0,
    },
  ],
};

export const images = {
  icon: "/images/favicon.svg",
  logo: "/images/just-llama.png",
  pixQRCode: "/images/pix-qrcode.png",
};

export const links = {
  // add links
  home: "/",

  social: {
    linkedin: "https://www.linkedin.com/masouzajr",
    github: "https://github.com/marco-souza",
  },
};

export const texts = {
  home: "Homepage",
  join: "Join us",
};
