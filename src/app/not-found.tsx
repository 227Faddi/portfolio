import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] space-y-8 text-center">
      <div className="space-y-2 flex flex-col items-center">
        <BlurFadeText
          delay={0.1}
          className="text-6xl font-bold tracking-tighter sm:text-8xl"
          text="404"
        />
        <BlurFade delay={0.2}>
          <h2 className="text-2xl font-semibold sm:text-3xl">Page Not Found</h2>
        </BlurFade>
      </div>
      <BlurFade delay={0.3}>
        <p className="text-muted-foreground max-w-[500px] text-lg">
          Oops! The page you are looking for doesn&apos;t exist. It might have
          been moved or deleted.
        </p>
      </BlurFade>
      <BlurFade delay={0.4}>
        <Button asChild variant="outline" size="lg" className="rounded-full">
          <Link href="/">Return Home</Link>
        </Button>
      </BlurFade>
    </main>
  );
}
