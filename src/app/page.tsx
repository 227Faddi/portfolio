"use client";
import { Icons } from "@/components/icons";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { Marquee } from "@/components/magicui/marquee";
import { ProjectCard } from "@/components/project-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, PartyPopper } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GitHubCalendar from "react-github-calendar";
import Markdown from "react-markdown";

const reviews = [
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

const ReviewCard = ({ icon, name }: { icon: any; name: string }) => {
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

const BLUR_FADE_DELAY = 0.04;

const features = [
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "#",
    cta: "",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {reviews.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
      </div>
    ),
  },
  {
    Icon: BellIcon,
    name: "Notifications",
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

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-20">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8 pt-12 sm:pt-8 md:pt-4">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about" className="space-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 3} className="text-center space-y-3">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            About
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            More about me
          </h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="bento">
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </section>
      <section id="skills" className="space-y-6">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade
            delay={BLUR_FADE_DELAY * 9}
            className="text-center space-y-3"
          >
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Skills
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Tech Stack
            </h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
        <GitHubCalendar username="227Faddi" />
      </section>

      {/* <div className="bg-black p-4 rounded-xl shadow-lg">
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7303170251662200833/"
          className="h-[800px] w-full rounded-lg"
          title="Embedded post"
        ></iframe>
      </div> */}
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="space-y-6">
        <div className="grid items-center justify-center gap-6 px-4 text-center md:px-6 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Looking to build a website/app, or up for a coffee chat? Feel
                free to schedule a meeting{" "}
                <Link
                  href={DATA.contact.social.Call.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  Here
                </Link>{" "}
                or send me a direct message on{" "}
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href={DATA.contact.social.LinkedIn.url}
                  className="text-blue-500 hover:underline"
                >
                  LinkedIn
                </Link>{" "}
                or{" "}
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  X
                </Link>
                .
              </p>
            </div>
          </BlurFade>
        </div>
        <Dock className="pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-4 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
          {Object.entries(DATA.contact.social)
            .filter(([_, social]) => social.navbar)
            .map(([name, social]) => (
              <DockIcon key={name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={social.url}
                      rel="noopener noreferrer"
                      target="_blank"
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                          size: "icon",
                        }),
                        "size-14"
                      )}
                    >
                      <social.icon className="size-5" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>{social.name}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
          <BorderBeam
            duration={6}
            size={400}
            className="from-transparent via-purple-500 to-transparent"
          />
          <BorderBeam
            duration={6}
            delay={3}
            size={400}
            className="from-transparent via-blue-500 to-transparent"
          />
        </Dock>
      </section>
    </main>
  );
}
