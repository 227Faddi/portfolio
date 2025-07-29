import { Metadata } from "next";
import { DATA } from "./resume";

const mymetadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: "Falilou Khouma – Full Stack Developer",
    template: `%s | Full Stack Developer – Falilou Khouma`,
  },
  description:
    "Montreal-based Full Stack Developer building fast, scalable web and mobile applications with React, Next.js, and Node.js. Open to freelance, contract, or full-time roles. Let’s build something great together.",
  openGraph: {
    title: "Falilou Khouma – Full Stack Developer",
    description:
      "Experienced Full Stack Developer crafting web and mobile apps with modern tools like React, Next.js, and Node.js. Based in Montreal, available for remote opportunities.",
    url: DATA.url,
    siteName: "Falilou Khouma Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${DATA.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Falilou Khouma – Full Stack Developer Portfolio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Falilou Khouma – Full Stack Developer",
    description:
      "React, Next.js, and Node.js developer crafting robust full stack apps. Based in Montreal, available for freelance or remote work.",
  },
  verification: {
    google: "",
    yandex: "",
  },
  keywords: [
    "Full Stack Developer",
    "React Developer Montreal",
    "Next.js Developer",
    "Node.js Developer",
    "Remote Web Developer",
    "Freelance Full Stack Developer",
    "Portfolio Developer Montreal",
    "Software Engineer",
  ],
};

export default mymetadata;
