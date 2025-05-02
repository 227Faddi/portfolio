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
  url: "https://faliloukhouma.com/",
  location: "Montrèal, QC",
  locationLink: "https://www.google.com/maps/place/montreal",
  description:
    "a Full Stack Developer. I build and manage websites and software to help businesses grow and achieve their goals.",
  summary:
    "After moving to Canada from Italy, I pursued my passion for technology and began building projects that brought ideas to life. This journey led me to specialize in web development, where I create intuitive, design-driven frontends with React and TypeScript and robust backends with Node.js. I’m dedicated to developing secure, scalable applications that empower businesses and deliver meaningful value.",
  avatarUrl: "./profile-photo.png",
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Python",
    "Next.js",
    "Node.js",
    "Flask",
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
    { href: "/#skills", icon: Code2, label: "Tech Stack" },
    { href: "/#projects", icon: BriefcaseBusiness, label: "Work" },
    { href: "/#contact", icon: Contact, label: "Contact" },
  ],
  contact: {
    email: "falukhouma27@gmail.com",
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
        url: "https://x.com/khoumaDev",
        icon: Icons.x,

        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:falukhouma27@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
      Call: {
        name: "Schedule a Chat",
        url: "https://calendly.com/falukhouma27/30min",
        icon: Coffee,
        tooltip: "ssf",
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "MTL Web Designs",
      href: "",
      badges: [],
      location: "Montrèal, QC",
      title: "Software Developer",
      logoUrl: "./coding.webp",
      start: "October 2024",
      end: "Present",
      description:
        "Helped small businesses enhance their online presence by building websites tailored to their specific needs, enabling them to reach more clients and grow their customer base.",
    },
    {
      company: "100Devs",
      badges: [],
      href: "https://100devs.org/",
      location: "Remote",
      title: "Full Stack Software Developer",
      logoUrl: "./100devs.webp",
      start: "October 2023",
      end: "Present",
      description:
        "Designed and delivered multiple responsive web applications and websites, collaborating with a team of developers to implement best practices and tailor solutions to client needs, resulting in increased online engagement.",
    },
  ],
  education: [
    {
      school: "I.T. Attilio Deffenu",
      href: "https://www.deffenu.edu.it/",
      degree: "Diploma in Administration, Finance, and Marketing",
      logoUrl: "./deffenu.webp",
      start: "2016",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Lead Flow",
      href: "https://app.leadflow.buzz",
      active: true,
      dates: "",
      description:
        "A CRM platform designed specifically for freelancers to organize leads, track their progress, and make data-driven decisions through comprehensive analytics with the assistance of AI.",
      technologies: [
        "TypeScript",
        "React",
        "Tailwind CSS",
        "MySQL",
        "Node.js",
        "CI/CD",
        "TanStack Query",
      ],
      links: [
        {
          type: "Website",
          href: "https://app.leadflow.buzz",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/227Faddi/leadflow",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://github.com/user-attachments/assets/b2db95df-9e15-45f8-93fd-a1dd8bcb2121",
    },
    {
      title: "Fix Sleep",
      href: "https://app.leadflow.buzz",
      active: true,
      dates: "",
      description:
        "A CRM platform designed specifically for freelancers to organize leads, track their progress, and make data-driven decisions through comprehensive analytics with the assistance of AI.",
      technologies: [
        "TypeScript",
        "React Native",
        "Expo",
        "NativeWind",
        "Next.js",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://app.leadflow.buzz",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/227Faddi/leadflow",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://github.com/user-attachments/assets/b2db95df-9e15-45f8-93fd-a1dd8bcb2121",
    },
    {
      title: "Istana Loft",
      href: "https://www.istanaloft.com",
      active: true,
      dates: "",
      description:
        "A multilingual website designed for an Airbnb property in Italy, featuring a sleek design, smooth navigation, and a contact form for seamless guest inquiries.",
      technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS", "CI/CD"],
      links: [
        {
          type: "Website",
          href: "https://www.istanaloft.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://github.com/user-attachments/assets/6a756f16-8a91-457e-955b-06e6227c7e43",
    },
    {
      title: "Momentum",
      href: "https://momentumgoal.netlify.app",
      active: true,
      dates: "",
      description:
        "A goal-tracking platform that helps users set and achieve their goals. Users can categorize their goals, earn points for completing them, and compete with others on the leaderboard.",
      technologies: [
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Redux",
        "CI/CD",
      ],
      links: [
        {
          type: "Website",
          href: "https://momentumgoal.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/227Faddi/momentum",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://github.com/user-attachments/assets/6dfbe639-aeed-4494-9582-37a9c64a6f5a",
    },
  ],
  // hackathons: [
  //   {
  //     title: "ConFoo",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "Montréal, Québec",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image: "https://confoo.ca/images/design/logo.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "ConFoo",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "Montréal, Québec",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image: "https://confoo.ca/images/design/logo.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  // ],
} as const;
