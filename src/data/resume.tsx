import { Icons } from "@/components/icons";
import {
  BriefcaseBusiness,
  Code2,
  Coffee,
  Contact,
  HomeIcon,
} from "lucide-react";

export const DATA = {
  name: "Falilou Khouma",
  initials: "FK",
  url: "https://faliloukhouma.com",
  location: "Montrèal, QC",
  locationLink: "https://www.google.com/maps/place/montreal",
  title: "Full Stack Developer",
  description:
    "I build and manage websites and software to help businesses grow and achieve their goals.",
  summary:
    "I've always been curious about how things work and enjoy learning by doing, whether it’s solving problems or building something useful. After moving from Italy to Canada, I was pushed out of my comfort zone and learned how to adapt to new environments, cultures, and challenges. This journey led me to specialize in software development, where I use my skills to create impactful solutions.",
  avatarUrl: "./profile-photo.webp",
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Python",
    "Next.js",
    "Node.js",
    "Express",
    "Flask",
    "REST API",
    "Tailwind CSS",
    "Bootstrap",
    "Redux",
    "React Native",
    "Expo",
    "TanStack Query",
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "CI/CD",
    "Git",
    "GitHub",
    "GitHub Actions",
    "Vercel",
    "Netlify",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#skills", icon: Code2, label: "Skills" },
    { href: "/#projects", icon: BriefcaseBusiness, label: "Work" },
    { href: "/#contact", icon: Contact, label: "Contact" },
  ],
  contact: {
    email: "contact@faliloukhouma.com",
    tel: "+15149621927",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/227Faddi",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/faliloukhouma/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/intent/follow?screen_name=khoumadev",
        icon: Icons.x,
        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:contact@faliloukhouma.com",
        icon: Icons.email,
        navbar: true,
      },
      Call: {
        name: "Schedule a Chat",
        url: "https://cal.com/falilou-khouma-2oywjv/30min",
        icon: Coffee,
        tooltip: "ssf",
        navbar: true,
      },
    },
  },
  projects: [
    {
      title: "LeadFlow - AI Powered CRM",
      href: "https://app.leadflow.buzz",
      active: true,
      dates: "",
      description:
        "A CRM platform designed specifically for freelancers to organize leads, track their progress, and make data-driven decisions through comprehensive analytics with the assistance of AI.",
      technologies: [
        "TypeScript",
        "React",
        "Tailwind CSS",
        "PostgreSQL",
        "Node.js",
        "TanStack Query",
        "CI/CD",
      ],
      links: [
        {
          type: "Website",
          href: "https://app.leadflow.buzz",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://github.com/user-attachments/assets/b2db95df-9e15-45f8-93fd-a1dd8bcb2121",
    },
    {
      title: "FixSleep - Sleep Cycle Planner",
      href: "https://www.fixsleep.app",
      active: true,
      dates: "",
      description:
        "A mobile app designed to improve sleep quality by calculating optimal sleep cycles. It features gentle sleep sounds, bedtime reminders, and smart wake-up suggestions.",
      technologies: [
        "TypeScript",
        "React Native",
        "Expo",
        "NativeWind",
        "Next.js",
        "Tailwind CSS",
        "CI/CD",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.fixsleep.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/fixsleep.mp4",
    },
    // {
    //   title: "Istana Loft - Rental Property",
    //   href: "https://www.istanaloft.com",
    //   active: true,
    //   dates: "",
    //   description:
    //     "A multilingual website designed for an Airbnb property in Italy, featuring a sleek design, smooth navigation, and a contact form for seamless guest inquiries.",
    //   technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS", "CI/CD"],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://www.istanaloft.com",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://github.com/user-attachments/assets/6a756f16-8a91-457e-955b-06e6227c7e43",
    // },
    // {
    //   title: "Momentum - Goal Tracker",
    //   href: "https://momentumgoal.netlify.app",
    //   active: true,
    //   dates: "",
    //   description:
    //     "A goal-tracking platform that helps users set and achieve their goals. Users can categorize their goals, earn points for completing them, and compete with others on the leaderboard.",
    //   technologies: [
    //     "TypeScript",
    //     "React",
    //     "Tailwind CSS",
    //     "Node.js",
    //     "MongoDB",
    //     "Redux",
    //     "CI/CD",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://momentumgoal.netlify.app",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://github.com/user-attachments/assets/6dfbe639-aeed-4494-9582-37a9c64a6f5a",
    // },
  ],
} as const;
