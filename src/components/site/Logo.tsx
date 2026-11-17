import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src={siteConfig.logo.full}
      alt={`${siteConfig.name} — ${siteConfig.slogan}`}
      width={860}
      height={540}
      className={cn("h-12 w-auto object-contain sm:h-14", className)}
    />
  );
}
