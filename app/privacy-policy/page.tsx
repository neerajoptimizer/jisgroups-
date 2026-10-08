import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects information submitted through this website.`,
  path: "/privacy-policy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy-policy"
      updated="8 October 2026"
      sections={[
        { heading: "Who we are", body: [`This website is operated by ${site.name}, ${site.address.full}. This policy explains how we handle personal information you share with us through this website.`] },
        { heading: "Information we collect", body: ["When you submit an enquiry or job application we collect the details you enter, such as your name, company, designation, phone number, email address, city and message. We also collect basic technical information (such as browser type and pages visited) to keep the website secure and improve it."] },
        { heading: "How we use your information", body: ["We use your information only to respond to your enquiry, prepare proposals, process job applications and communicate with you about our services. We do not sell your personal information."] },
        { heading: "Sharing", body: ["We may share information with service providers who help us operate the website and deliver email, under appropriate confidentiality obligations, or where required by law."] },
        { heading: "Retention & security", body: ["We keep enquiry data only as long as needed for the purposes above and apply reasonable technical and organisational measures to protect it."] },
        { heading: "Your rights", body: [`You may request access to, correction of, or deletion of your personal information by writing to ${site.emails[0]}. We will respond in accordance with applicable Indian law, including the Digital Personal Data Protection Act, 2023.`] },
        { heading: "Contact", body: [`Questions about this policy can be sent to ${site.emails[0]} or by calling ${site.phone}.`] },
      ]}
    />
  );
}
