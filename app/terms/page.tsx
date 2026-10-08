import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: `Terms governing the use of the ${site.name} website.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      path="/terms"
      updated="8 October 2026"
      sections={[
        { heading: "Use of this website", body: [`By using this website you agree to these terms. The content is provided for general information about the services of ${site.name} and may change without notice.`] },
        { heading: "No offer", body: ["Information on this website does not constitute a binding offer. Services are provided only under a written agreement or work order between JIS and the client, which will govern scope, pricing and obligations."] },
        { heading: "Recruitment", body: ["JIS does not charge candidates any fee for employment. Any request for money in the name of JIS should be reported to us immediately."] },
        { heading: "Intellectual property", body: ["The JIS name, logo, text and photographs on this website belong to JIS Business Solutions Pvt. Ltd. or are used with permission. Client logos are the property of their respective owners and are shown only to identify organisations we have served."] },
        { heading: "Limitation of liability", body: ["We make reasonable efforts to keep the website accurate and available but do not guarantee that it is error-free or uninterrupted, and are not liable for losses arising from its use."] },
        { heading: "Governing law", body: ["These terms are governed by the laws of India, and courts at Gautam Buddh Nagar (Noida), Uttar Pradesh shall have jurisdiction."] },
      ]}
    />
  );
}
