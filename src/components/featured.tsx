"use client";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import { PartyPopper, PencilRuler } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Icons } from "./icons";
import HeroVideoDialog from "./magicui/hero-video-dialog";
import { Calendar } from "./ui/calendar";

export const Featured = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} setIsOpen={setIsOpen} />
        ))}
      </BentoGrid>
      <HeroVideoDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        className="pointer-events-auto"
        animationStyle="from-center"
      />
    </>
  );
};

const StackCard = ({ icon, name }: { icon: any; name: string }) => {
  return (
    <div
      className={cn(
        "relative h-full w-full sm:w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center justify-center gap-2">
        {icon}
        <p className="text-sm font-medium dark:text-white">{name}</p>
      </div>
    </div>
  );
};

const tech = [
  {
    name: "Next.js",
    icon: Icons.nextjs({ className: "w-6 h-6" }),
  },
  {
    name: "TypeScript",
    icon: Icons.typescript({ className: "w-6 h-6" }),
  },
  {
    name: "React",
    icon: Icons.react({ className: "w-6 h-6" }),
  },
  {
    name: "Node.js",
    icon: Icons.nodejs({ className: "w-5 h-5" }),
  },
  {
    name: "Python",
    icon: Icons.python({ className: "w-5 h-5" }),
  },
];

const features = [
  {
    Icon: PencilRuler,
    name: "Solving Problems with Creativity",
    description:
      "I love using my creative side and tech skills to build solutions.",
    href: "#projects",
    cta: "See my work",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Image
        unoptimized
        src="/me.webp"
        alt={"image of falilou during an hackathon"}
        fill
        className="rounded-xl object-cover absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90"
      />
    ),
  },
  {
    Icon: undefined,
    name: "",
    description: "",
    href: "#",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
        <Marquee pauseOnHover vertical reverse className="[--duration:20s]">
          {tech.map((review, index) => (
            <StackCard key={index + 1} {...review} />
          ))}
        </Marquee>
        <Marquee
          pauseOnHover
          vertical
          className="[--duration:20s] hidden sm:flex  lg:hidden"
        >
          {tech.map((review, index) => (
            <StackCard key={index + 2} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
      </div>
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Let's chat!",
    description: "I’m always open to meeting new people and exchanging ideas.",
    className: "col-span-3 lg:col-span-1",
    href: DATA.contact.social.Call.url,
    cta: "Book a Coffee Chat",
    background: (
      <Calendar
        mode="single"
        className="absolute right-0 top-10 origin-top scale-75 rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-90"
      />
    ),
  },
  {
    Icon: PartyPopper,
    name: "Building Community Through Tech",
    description:
      "I actively take part in meetups and conferences to keep learning and connect with people who share the same passion.",
    href: "https://www.linkedin.com/posts/faliloukhouma_confoo-softwareengineering-networking-activity-7303170251662200833-2dvl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEsWqmkB4kk1GeJW-XjUswuBVHfCkXxXJAs",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    modal: true,
    background: (
      <Image
        unoptimized
        src="/confoo.webp"
        alt={"volunteers team at Confoo.Ca"}
        fill
        className="rounded-xl object-cover absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90"
      />
    ),
  },
];
