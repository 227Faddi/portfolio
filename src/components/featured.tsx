"use client";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import { MicVocal, PartyPopper, PencilRuler, Users } from "lucide-react";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { Icons } from "./icons";
import HeroVideoDialog from "./magicui/hero-video-dialog";
import { Calendar } from "./ui/calendar";

export type TechItem = {
  name: string;
  icon: ReactNode;
};

export type FeatureItem = {
  Icon?: React.ElementType;
  name: string;
  description: string;
  href: string;
  cta?: string;
  className: string;
  background: ReactNode;
  modal?: boolean;
  modalUrl?: string;
  modalTitle?: string;
  modalHeight?: string;
};

export const Featured = ({
  features: providedFeatures,
  tech: providedTech,
  cols = 3,
}: {
  features?: FeatureItem[];
  tech?: TechItem[];
  cols?: 2 | 3;
} = {}) => {
  const tech = providedTech ?? defaultTech;

  // If features are provided, use them as-is
  // If not provided but tech is provided, update defaultFeatures to use the provided tech
  // Otherwise, use defaultFeatures with defaultTech
  let features: FeatureItem[];
  if (providedFeatures) {
    features = providedFeatures;
  } else if (providedTech) {
    // Replace the tech marquee feature in defaultFeatures with one using provided tech
    features = defaultFeatures.map((feature) => {
      // Find the feature that uses the tech marquee (empty name/description)
      if (feature.name === "" && feature.description === "") {
        return {
          ...feature,
          background: createTechMarquee(tech),
        };
      }
      return feature;
    });
  } else {
    features = defaultFeatures;
  }

  const [dialogState, setDialogState] = useState<{
    isOpen: boolean;
    url?: string;
    title?: string;
    height?: string;
  }>({
    isOpen: false,
  });

  const handleSetIsOpen = (state: {
    isOpen: boolean;
    url?: string;
    title?: string;
    height?: string;
  }) => {
    setDialogState(state);
  };

  const handleClose = (value: boolean | ((prev: boolean) => boolean)) => {
    if (typeof value === "boolean") {
      setDialogState((prev) => ({ ...prev, isOpen: value }));
    } else {
      setDialogState((prev) => ({ ...prev, isOpen: value(prev.isOpen) }));
    }
  };

  return (
    <>
      <BentoGrid cols={cols}>
        {features.map((feature, idx) => (
          <BentoCard
            key={idx}
            {...feature}
            setIsOpen={handleSetIsOpen}
            modalUrl={feature.modalUrl}
            modalTitle={feature.modalTitle}
            modalHeight={feature.modalHeight}
          />
        ))}
      </BentoGrid>
      <HeroVideoDialog
        isOpen={dialogState.isOpen}
        setIsOpen={handleClose}
        className="pointer-events-auto"
        animationStyle="from-center"
        url={dialogState.url}
        title={dialogState.title}
        height={dialogState.height}
      />
    </>
  );
};

const StackCard = ({ icon, name }: { icon: any; name: string }) => {
  return (
    <div
      className={cn(
        "relative h-full w-full sm:w-36 cursor-pointer overflow-hidden rounded-2xl border p-4",
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

const createTechMarquee = (tech: TechItem[]) => (
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
);

/**
 * Helper function to create a feature item with a tech marquee background
 */
export const createTechMarqueeFeature = (tech: TechItem[]): FeatureItem => ({
  Icon: undefined,
  name: "",
  description: "",
  href: "#",
  className: "col-span-3 lg:col-span-1",
  background: createTechMarquee(tech),
});

export const defaultTech: TechItem[] = [
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

export const defaultFeatures: FeatureItem[] = [
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
        alt={"Falilou during an hackathon"}
        fill
        className="rounded-3xl object-cover absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90"
      />
    ),
  },
  {
    Icon: undefined,
    name: "",
    description: "",
    href: "#",
    className: "col-span-3 lg:col-span-1",
    background: createTechMarquee(defaultTech),
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
    href: "#community",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    modal: false,
    modalUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:activity:7303170251662200833/",
    modalTitle: "LinkedIn post",
    modalHeight: "600px",
    background: (
      <Image
        unoptimized
        src="/builders.webp"
        alt={"Shopify Builders Sunday"}
        fill
        className="rounded-3xl object-cover absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90"
      />
    ),
  },
];

export const communityFeatures: FeatureItem[] = [
  {
    Icon: MicVocal,
    name: "Speaking at Shopify",
    description:
      "Turning personal lessons into resources others can learn from.",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7419842128199180288/",
    cta: "Learn more",
    className: "col-span-2 lg:col-span-1",
    modal: true,
    modalUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:activity:7419842128199180288",
    modalTitle: "LinkedIn post",
    modalHeight: "600px",
    background: (
      <Image
        unoptimized
        src="/talk.webp"
        alt={"Falilou presenting at Shopify"}
        fill
        className="rounded-3xl object-cover absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90"
      />
    ),
  },
  {
    Icon: Users,
    name: "Volunteering at Confoo",
    description: "Helping build the events that bring the community together.",
    href: "https://www.linkedin.com/posts/faliloukhouma_confoo-softwareengineering-networking-activity-7303170251662200833-2dvl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEsWqmkB4kk1GeJW-XjUswuBVHfCkXxXJAs",
    cta: "Learn more",
    className: "col-span-2 lg:col-span-1",
    modal: true,
    modalUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:activity:7303170251662200833/",
    modalTitle: "LinkedIn post",
    modalHeight: "600px",
    background: (
      <Image
        unoptimized
        src="/confoo.webp"
        alt={"volunteers team at Confoo.Ca"}
        fill
        className="rounded-3xl object-cover absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90"
      />
    ),
  },
];
