import { Dock, DockIcon } from "@/components/magicui/dock";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Socials = () => {
  return (
    <Dock>
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
    </Dock>
  );
};
