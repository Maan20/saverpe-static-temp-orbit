import { LegalPage } from "@/components/ui";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

// TODO: legal review (see CONTENT-TODO.md)
export const metadata = pageMeta({
  title: "Privacy Policy",
  description: "How Orbit by SaverPe collects, uses and protects business contact information submitted through our website and sales enquiries.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" path="/privacy-policy" updated="17 September 2026">
      <p>This Privacy Policy explains how Orbit by SaverPe (&ldquo;Orbit&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects, uses, shares and protects information when you visit orbit.saverpe.com or communicate with our business team. By using the website you agree to the practices described here.</p>
      <h2>1. Information we collect</h2>
      <ul>
        <li><strong>Information you provide:</strong> your name, work email, company name, company size, gifting requirements (brands, denominations, quantities), use case and message when you submit the Contact Sales form or email us.</li>
        <li><strong>Automatically collected information:</strong> IP address, browser type, device information, pages visited and referring URLs, collected through server logs and analytics tools.</li>
        <li><strong>Cookies:</strong> small files used to remember preferences and understand how the site is used. You can control cookies through your browser settings.</li>
      </ul>
      <h2>2. How we use information</h2>
      <ul>
        <li>To respond to sales enquiries, prepare quotes and fulfil business orders.</li>
        <li>To operate, maintain, secure and improve the website.</li>
        <li>To understand aggregate usage trends and improve our content and catalog.</li>
        <li>To detect and prevent spam, fraud and abuse.</li>
        <li>To comply with applicable laws, including the Digital Personal Data Protection Act, 2023.</li>
      </ul>
      <h2>3. Sharing of information</h2>
      <p>We do not sell your personal information. We may share information with service providers who help us operate the website (such as hosting, email and analytics providers) under confidentiality obligations, with brand partners where necessary to fulfil an order or resolve an issue, or with authorities when required by law.</p>
      <h2>4. Data retention</h2>
      <p>We retain sales enquiries and order records for as long as needed to serve your business relationship and meet legal, tax and accounting obligations, after which the data is deleted or anonymised.</p>
      <h2>5. Security</h2>
      <p>We use reasonable technical and organisational safeguards, including encrypted connections (HTTPS), access controls and rate limiting, to protect your information. No method of transmission over the internet is 100% secure.</p>
      <h2>6. Your rights</h2>
      <p>You may request access to, correction of, or deletion of your personal data, and withdraw consent where processing is based on consent. Write to <a href={`mailto:${site.email}`}>{site.email}</a> and we will respond within a reasonable time.</p>
      <h2>7. Recipient data</h2>
      <p>When businesses share recipient details for delivery, we process that information only to fulfil the order on the business&apos;s instructions.</p>
      <h2>8. Third-party links</h2>
      <p>Brand pages may link to third-party websites. Their privacy practices are governed by their own policies.</p>
      <h2>9. Changes to this policy</h2>
      <p>We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the top shows when it was last revised.</p>
      <h2>10. Contact</h2>
      <p>For privacy questions or grievances, email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
    </LegalPage>
  );
}
