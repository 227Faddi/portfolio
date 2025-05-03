import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, PartyPopper } from "lucide-react";
import Image from "next/image";
import { Icons } from "./icons";

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
    icon: Icons.nodejs({ className: "w-6 h-6" }),
  },
  {
    name: "Python",
    icon: Icons.python({ className: "w-2 h-2" }),
  },
];

const StackCard = ({ icon, name }: { icon: any; name: string }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-fit sm:w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {icon}
        <p className="text-sm font-medium dark:text-white">{name}</p>
      </div>
    </figure>
  );
};

export const Featured = () => {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
};

const features = [
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "#",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {tech.map((review) => (
            <StackCard key={review.name} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
      </div>
    ),
  },
  {
    Icon: BellIcon,
    name: "Coding is my Passion!",
    description: "I Love Being part of the community",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Image
        src={"/./me.webp"}
        alt={"sdf"}
        fill
        className="rounded-xl object-cover absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90"
      />
    ),
  },
  {
    Icon: PartyPopper,
    name: "Volunteering at Confoo.Ca",
    description: "Supports 100+ integrations and counting.",
    href: "https://www.linkedin.com/posts/faliloukhouma_confoo-softwareengineering-networking-activity-7303170251662200833-2dvl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEsWqmkB4kk1GeJW-XjUswuBVHfCkXxXJAs",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    modal: true,
    background: (
      <Image
        src={"/./confoo.jpg"}
        alt={"volunteers group photo"}
        fill
        className="rounded-xl object-cover absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90"
      />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Let's chat!",
    description: "I love to meet people let's have a coffee chat.",
    className: "col-span-3 lg:col-span-1",
    href: DATA.contact.social.Call.url,
    cta: "Book a Coffee Chat",
    background: "",
  },
];
