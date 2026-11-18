import type { Metadata } from "next";
import { ThankYou } from "@/components/ThankYou";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your request has been received.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return <ThankYou />;
}
