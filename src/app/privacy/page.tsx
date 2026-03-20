import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy | LendKaki",
  description:
    "Read LendKaki's Privacy Policy. Learn how Lendkaki Pay Pte. Ltd. collects, uses, and protects your personal data under the PDPA.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="February 2026">
      <p>
        This Privacy Policy describes how <strong>Lendkaki Pay Pte. Ltd.</strong> (UEN:
        202607335C) (&quot;LendKaki&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
        collects, uses, and discloses your personal data in accordance with the Personal Data
        Protection Act 2012 (&quot;PDPA&quot;) of Singapore.
      </p>

      <h2>1. Data We Collect</h2>
      <p>When you use our platform, we may collect the following personal data:</p>
      <ul>
        <li>Full name</li>
        <li>Mobile phone number</li>
        <li>Email address</li>
        <li>Desired loan amount and purpose</li>
        <li>Nationality / residency status</li>
        <li>Device and browser information (via cookies and analytics)</li>
        <li>IP address and usage data</li>
      </ul>

      <h2>2. How We Use Your Data</h2>
      <p>We use your personal data to:</p>
      <ul>
        <li>Match you with suitable licensed lenders in our network</li>
        <li>Contact you via WhatsApp, phone, or email with loan offers and updates</li>
        <li>Send you marketing messages about our services (with your consent)</li>
        <li>Improve our platform and user experience</li>
        <li>Comply with legal and regulatory obligations</li>
      </ul>

      <h2>3. Disclosure to Third Parties</h2>
      <p>
        By submitting your information on our platform, you consent to us sharing your personal
        data with:
      </p>
      <ul>
        <li>
          Our network of MAS-regulated banks and MinLaw-licensed moneylenders for the purpose of
          assessing your loan eligibility
        </li>
        <li>
          Service providers who assist us in operating our platform (e.g., analytics, hosting)
        </li>
      </ul>
      <p>
        We do not sell your personal data to any third party. We only share data as described in
        this policy or with your explicit consent.
      </p>

      <h2>4. Data Retention</h2>
      <p>
        We retain your personal data for as long as necessary to fulfil the purposes for which it
        was collected, or as required by law. You may request deletion of your data at any time by
        contacting us.
      </p>

      <h2>5. Marketing Communications</h2>
      <p>
        By submitting a form on our platform and consenting to receive marketing messages, you
        agree to receive communications from LendKaki and our partner lenders via WhatsApp, SMS, or
        email. You may opt out at any time by contacting us at{" "}
        <a href="mailto:support@lendkaki.sg">support@lendkaki.sg</a>.
      </p>

      <h2>6. Cookies</h2>
      <p>
        We use cookies and similar tracking technologies to analyse traffic, personalise content,
        and improve your experience. You may disable cookies in your browser settings, though this
        may affect platform functionality.
      </p>

      <h2>7. Security</h2>
      <p>
        We implement industry-standard security measures to protect your personal data from
        unauthorised access, disclosure, or loss. All data is transmitted over encrypted (SSL/TLS)
        connections.
      </p>

      <h2>8. Your Rights</h2>
      <p>Under the PDPA, you have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you</li>
        <li>Correct inaccurate personal data</li>
        <li>Withdraw consent for us to use your personal data</li>
        <li>Request deletion of your personal data</li>
      </ul>
      <p>
        To exercise any of these rights, please contact our Data Protection Officer at{" "}
        <a href="mailto:support@lendkaki.sg">support@lendkaki.sg</a>.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of significant
        changes by posting the new policy on this page with an updated date. Continued use of our
        platform constitutes acceptance of the revised policy.
      </p>

      <h2>10. Contact Us</h2>
      <p>For any privacy-related queries or concerns, please contact us at:</p>
      <p className="address-block">
        Lendkaki Pay Pte. Ltd. · UEN: 202607335C
        <br />
        2 Venture Drive, #19-21, Vision Exchange, Singapore 608526
        <br />
        Email: <a href="mailto:support@lendkaki.sg">support@lendkaki.sg</a>
      </p>
    </LegalPage>
  );
}
