import { ContactForm } from "@/components/contact-form";
import { Featured, communityFeatures } from "@/components/featured";
import GithubCalendar from "@/components/GithubCalendar";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { TweetCard } from "@/components/magicui/tweet-card";
import { MyAuroraText } from "@/components/MyAuroraText";
import { ProjectCard } from "@/components/project-card";
import { Socials } from "@/components/socials";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-24 2xl:space-y-32">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8 pt-12 sm:pt-8 md:pt-4">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-2">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFade delay={BLUR_FADE_DELAY}>
                <MyAuroraText className="md:text-xl font-bold">
                  {DATA.title}
                </MyAuroraText>
              </BlurFade>
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
      <section id="about" className="space-y-8">
        <BlurFade delay={BLUR_FADE_DELAY * 3} className="text-center space-y-3">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            About
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            My Journey into Tech
          </h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="bento" className="space-y-8 flex flex-col items-center">
        <Featured />
        <TweetCard className="rounded-3xl" id="1979970338315223064" hideMedia />
      </section>
      <section id="skills" className="space-y-6">
        <div className="flex min-h-0 flex-col gap-y-8">
          <BlurFade
            delay={BLUR_FADE_DELAY * 9}
            className="text-center space-y-3"
          >
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Skills
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Tech I Work With
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From frontend to backend, these are the tools and technologies I
              use to build modern, scalable applications.
            </p>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-16">
        <GithubCalendar />
        <TweetCard className="rounded-3xl" id="1875013280634405238" />
      </section>
      <section id="projects">
        <div className="space-y-8 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What I’ve Built
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From simple websites to complex web applications, here are
                  some of my favorite projects.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-[800px] mx-auto">
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
      <section id="community" className="space-y-8">
        <BlurFade
          delay={BLUR_FADE_DELAY * 13}
          className="text-center space-y-3"
        >
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            Community
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Beyond the Code
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-2xl mx-auto">
            I grow by pushing myself outside my comfort zone. I stay active in
            the community to connect, learn, and contribute.
          </p>
        </BlurFade>
        <div>
          <Featured features={communityFeatures} cols={2} />
        </div>
      </section>
      <section id="contact" className="space-y-8">
        <div className="grid items-center justify-center gap-8 px-4 text-center md:px-6 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Looking to build a website or have a quick coffee chat? You can{" "}
                <Link
                  href={DATA.contact.social.Call.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  schedule a meeting
                </Link>
                , reach out on{" "}
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  LinkedIn
                </Link>
                , or simply send me a message using the form below.
              </p>
            </div>
          </BlurFade>
        </div>
        <ContactForm />
        <Socials />
      </section>
    </main>
  );
}
