import { AuroraText } from "@/components/magicui/aurora-text";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const metadata = {
  title: "Links",
  description: "All links to falilou's socials",
};

const BLUR_FADE_DELAY = 0.04;

export default function LinksPage() {
  return (
    <section className="flex flex-col items-center justify-center py-12">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex flex-col items-center gap-2 mb-10">
          <h1 className="font-bold text-3xl sm:text-5xl">
            <AuroraText colors={["#93c5fd", "#3b82f6"]}>Links</AuroraText>
          </h1>
          <p className="text-muted-foreground text-center">
            Where you can find me
          </p>
        </div>
      </BlurFade>

      <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.showInLinks)
          .sort((a, b) => a[1].order - b[1].order)
          .map(([name, social], idx) => (
            <BlurFade
              key={name}
              delay={BLUR_FADE_DELAY + (idx + 1) * 0.05}
              className="w-full"
            >
              <Link
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group flex items-center justify-between w-full p-4 rounded-3xl border border-input bg-background px-6 hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                )}
              >
                <div className="flex items-center gap-4">
                  <social.icon className="size-6 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium text-base">{social.name}</span>
                </div>
              </Link>
            </BlurFade>
          ))}
      </div>
    </section>
  );
}
