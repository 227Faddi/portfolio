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
    "Unit Tests",
    "Git",
    "GitHub",
    "GitHub Actions",
    "Vercel",
    "Supabase",
    "Netlify",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#skills", icon: Code2, label: "Skills" },
    { href: "/#projects", icon: BriefcaseBusiness, label: "Work" },
    { href: "/#contact", icon: Contact, label: "Contact" },
    // { href: "/links", icon: Link, label: "Links" },
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
        showInLinks: true,
        order: 8,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/faliloukhouma/",
        icon: Icons.linkedin,
        navbar: true,
        showInLinks: true,
        order: 7,
      },
      X: {
        name: "X/Twitter",
        url: "https://x.com/intent/follow?screen_name=asyncfaddi",
        icon: Icons.x,
        navbar: true,
        showInLinks: true,
        order: 5,
      },
      Email: {
        name: "Email",
        url: "mailto:contact@faliloukhouma.com",
        icon: Icons.email,
        navbar: true,
        showInLinks: true,
        order: 8,
      },
      Call: {
        name: "Schedule a Chat",
        url: "https://cal.com/falilou-khouma-2oywjv/30min",
        icon: Coffee,
        navbar: true,
        showInLinks: false,
        order: 10,
      },
      YouTube: {
        name: "YouTube",
        url: "https://www.youtube.com/@asyncfaddi",
        icon: Icons.youtube,
        navbar: false,
        showInLinks: true,
        order: 6,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/asyncfaddi",
        icon: Icons.instagram,
        navbar: false,
        showInLinks: true,
        order: 4,
      },
      TikTok: {
        name: "TikTok",
        url: "https://www.tiktok.com/@asyncfaddi",
        icon: Icons.tiktok,
        navbar: false,
        showInLinks: true,
        order: 3,
      },
      Portfolio: {
        name: "Portfolio",
        url: "/",
        icon: Icons.portfolio,
        navbar: false,
        showInLinks: true,
        order: 2,
      },
      fixsleep: {
        name: "Download FixSleep",
        url: "https://www.fixsleep.app/get?utm_source=portfolio",
        icon: Icons.fixsleep,
        navbar: false,
        showInLinks: true,
        order: 1,
      },
    },
  },
  githubUsername: "227Faddi",
  projects: [
    {
      title: "FixSleep - Sleep Cycle Alarm",
      href: "https://www.fixsleep.app/get?utm_source=portfolio",
      active: true,
      dates: "",
      description:
        "A smart alarm app helping people wake up feeling rested. Features sleep sounds, bedtime reminders, and personalized wake-up suggestions. 5,000+ downloads across iOS & Android.",
      technologies: [
        "TypeScript",
        "React Native",
        "Expo",
        "NativeWind",
        "Next.js",
        "Supabase",
        "Tailwind CSS",
        "CI/CD",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.fixsleep.app",
          icon: <Icons.globe />,
        },
      ],
      image: "",
      video: "/fixsleep.mp4",
    },
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
          icon: <Icons.globe />,
        },
      ],
      image: "",
      video:
        "https://github.com/user-attachments/assets/b2db95df-9e15-45f8-93fd-a1dd8bcb2121",
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
  features: {
    solving: {
      name: "Solving Problems with Creativity",
      description:
        "I love using my creative side and tech skills to build solutions.",
      image: "/me.webp",
      cta: "See my work",
      href: "#projects",
    },
    chat: {
      name: "Let's chat!",
      description:
        "I’m always open to meeting new people and exchanging ideas.",
      cta: "Book a Coffee Chat",
      href: "https://cal.com/falilou-khouma-2oywjv/30min",
    },
    community: {
      name: "Building Community Through Tech",
      description:
        "I actively take part in meetups and conferences to keep learning and connect with people who share the same passion.",
      image: "/builders.webp",
      cta: "Learn more",
      href: "#community",
      modal: {
        url: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7303170251662200833/",
        title: "LinkedIn post",
      },
    },
  },
  community: [
    {
      name: "Speaking at Shopify",
      description:
        "Turning personal lessons into resources others can learn from.",
      image: "/talk.webp",
      href: "https://www.linkedin.com/feed/update/urn:li:activity:7419842128199180288/",
      cta: "Learn more",
      modal: {
        url: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7419842128199180288",
        title: "LinkedIn post",
      },
    },
    {
      name: "Volunteering at Confoo",
      description:
        "Helping build the events that bring the community together.",
      image: "/confoo.webp",
      href: "https://www.linkedin.com/posts/faliloukhouma_confoo-softwareengineering-networking-activity-7303170251662200833-2dvl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEsWqmkB4kk1GeJW-XjUswuBVHfCkXxXJAs",
      cta: "Learn more",
      modal: {
        url: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7303170251662200833/",
        title: "LinkedIn post",
      },
    },
  ],
  sections: {
    about: {
      name: "About",
      title: "My Journey into Tech",
    },
    skills: {
      name: "Skills",
      title: "Tech I Work With",
      description:
        "From frontend to backend, these are the tools and technologies I use to build modern, scalable applications.",
    },
    projects: {
      name: "Projects",
      title: "What I’ve Built",
      description:
        "From simple websites to complex web applications, here are some of my favorite projects.",
    },
    community: {
      name: "Community",
      title: "Beyond the Code",
      description:
        "I grow by pushing myself outside my comfort zone. I stay active in the community to connect, learn, and contribute.",
    },
    contact: {
      name: "Contact",
      title: "Get in Touch",
      description:
        "Looking to build a website or have a quick coffee chat? You can schedule a meeting, reach out on LinkedIn, or simply send me a message using the form below.",
    },
  },
  other: {
    theme: {
      label: "Theme",
    },
    contactForm: {
      name: {
        label: "Name",
        placeholder: "Your name",
      },
      email: {
        label: "Email",
        placeholder: "you@example.com",
      },
      message: {
        label: "Message",
        placeholder: "Your message...",
      },
      submit: {
        default: "Send Message",
        sending: "Sending...",
      },
      success: {
        title: "Thank you!",
        description: "Your message has been successfully sent.",
      },
    },
  },
} as const;
