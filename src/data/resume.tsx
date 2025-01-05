import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Falilou Khouma",
  initials: "FK",
  url: "https://faliloukhouma.com/",
  location: "Montrèal, QC",
  locationLink: "https://www.google.com/maps/place/montreal",
  description:
    "a Full Stack Developer. I build and manage websites and software to help businesses grow and achieve their goals.",
  summary:
    "After moving to Canada from Italy, I pursued my passion for technology and began building projects that brought ideas to life. This journey led me to specialize in web development, where I create intuitive, design-driven frontends with React and JavaScript and robust backends with Node.js. I’m dedicated to developing secure, scalable applications that empower businesses and deliver meaningful value.",
  avatarUrl: "./me.webp",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TypeScript",
    "Node.js",
    "MySQL",
    "MongoDB",
    "Tailwind CSS",
    "Bootstrap",
    "CI/CD",
    "Git",
    "GitHub",
    "Vercel",
    "Netlify",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
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
      title: "Istana Loft",
      href: "https://istanaloft.netlify.app",
      active: true,
      dates: "",
      description:
        "A multilingual website designed for an Airbnb property in Italy, featuring a sleek design, smooth navigation, and a contact form for seamless guest inquiries.",
      technologies: ["JavaScript", "React", "TailwindCSS", "i18next"],
      links: [
        {
          type: "Website",
          href: "https://istanaloft.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/227Faddi/istana-loft",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "istanaloft.mp4",
    },
    {
      title: "Momentum",
      href: "https://momentum-n9xf.onrender.com",
      active: true,
      dates: "",
      description:
        "A goal-setting and productivity app designed to help users track personal, career, and financial goals. It includes a rewarding point system to boost motivation and keep users engaged as they achieve their objectives.",
      technologies: [
        "JavaScript",
        "React",
        "MongoDB",
        "TailwindCSS",
        "Node.js",
        "JWT",
      ],
      links: [
        {
          type: "Website",
          href: "https://momentum-n9xf.onrender.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/227Faddi/momentum",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "./momentum.mp4",
    },
  ],
} as const;
