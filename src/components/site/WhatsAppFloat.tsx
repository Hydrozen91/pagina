import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { WhatsAppLink } from "./WhatsAppLink";

export function WhatsAppFloat() {
  return (
    <WhatsAppLink
      message={siteConfig.messages.quote}
      variant="whatsapp"
      aria-label="Solicitar cotización por WhatsApp"
      className="fixed bottom-5 right-5 z-40 size-16 rounded-full p-0 shadow-2xl [&_svg]:size-8"
    >
      <WhatsAppIcon />
    </WhatsAppLink>
  );
}
