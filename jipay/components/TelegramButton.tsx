import { site } from "@/lib/content";
import { TelegramIcon } from "@/components/Icon";

type Props = {
  label?: string;
  size?: "md" | "lg";
  className?: string;
};

export function TelegramButton({ label = "Chat on Telegram", size = "md", className = "" }: Props) {
  const sizing = size === "lg" ? "px-7 py-4 text-base" : "px-5 py-2.5 text-sm";
  return (
    <a
      href={site.telegramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#229ED9] font-semibold text-white shadow-lg shadow-[#229ED9]/30 transition hover:-translate-y-0.5 hover:bg-[#1c8cc2] ${sizing} ${className}`}
    >
      <TelegramIcon className={size === "lg" ? "h-5 w-5" : "h-4 w-4"} />
      {label}
    </a>
  );
}

export function FloatingTelegram() {
  return (
    <a
      href={site.telegramUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with JIPAY on Telegram"
      className="fixed right-4 bottom-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#229ED9] text-white shadow-xl shadow-[#229ED9]/40 transition hover:scale-105 sm:right-6 sm:bottom-6"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#229ED9] opacity-30" />
      <TelegramIcon className="relative h-7 w-7" />
    </a>
  );
}
