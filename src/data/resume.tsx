import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Falilou Khouma",
  initials: "SK",
  url: "https://faliloukhouma.com/",
  location: "Montrèal, QC",
  locationLink: "https://www.google.com/maps/place/montreal",
  description: "Full Stack Software Developer",
  summary:
    "Specialized in web development, building design-focused frontends with React and JavaScript and efficient backends with Node.js. Passionate about creating secure, scalable applications that empower businesses and deliver value to users.",
  avatarUrl: "./me.png",
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
      email: {
        name: "Send Email",
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
      title: "Full Stack Software Developer",
      logoUrl: "./coding.png",
      start: "October 2024",
      end: "Present",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "100Devs",
      badges: [],
      href: "https://100devs.org/",
      location: "Remote",
      title: "Full Stack Software Developer",
      logoUrl: "./100devs.png",
      start: "October 2023",
      end: "Present",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
  ],
  education: [
    {
      school: "I.T. Attilio Deffenu",
      href: "https://www.deffenu.edu.it/",
      degree: "Diploma in Administration, Finance, and Marketing",
      logoUrl: "./deffenu.png",
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
