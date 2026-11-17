import { cn } from "@/lib/utils";

interface Props {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

export function SectionHeading({ eyebrow, title, description, align = "center", tone = "light" }: Props) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className={cn("eyebrow", tone === "light" ? "text-ocean" : "text-turquoise")}>{eyebrow}</p>
      <h2
        className={cn(
          "mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]",
          tone === "light" ? "text-navy" : "text-navy-foreground",
        )}
      >
        {title}
      </h2>
      <div className={cn("wave-line mt-5", align === "center" && "mx-auto")} aria-hidden="true" />
      {description && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            tone === "light" ? "text-muted-foreground" : "text-navy-foreground/80",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
