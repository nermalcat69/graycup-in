import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";

export const metadata: Metadata = {
  title: `Privacy Policy - ${siteConfig.name}`,
  description:
    "Privacy Policy for Coldran App - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-card border border-border rounded-lg shadow-sm p-8 md:p-12">
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-foreground">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground text-lg">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
              {/* Introduction */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
                  Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to {siteConfig.name}. We respect your privacy and are
                  committed to protecting your personal data. This privacy
                  policy explains how we collect, use, and safeguard your
                  information when you use our platform.
                </p>
              </section>

              {/* Information We Collect */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
                  Information We Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">
                      Personal Information
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li>Name and email address when you create an account</li>
                      <li>
                        Profile information from OAuth providers (GitHub,
                        Google, GitLab, Bitbucket)
                      </li>
                      <li>Communication preferences and settings</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">
                      Usage Information
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li>How you interact with our platform</li>
                      <li>Features you use and time spent on the platform</li>
                      <li>Device information and browser type</li>
                      <li>IP address and general location data</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Use Your Information */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
                  How We Use Your Information
                </h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>To provide and maintain our services</li>
                  <li>To authenticate and secure your account</li>
                  <li>To communicate with you about updates and features</li>
                  <li>To improve our platform and user experience</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              {/* Data Sharing */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
                  Data Sharing and Disclosure
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share your information only in the
                  following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements or court orders</li>
                  <li>To protect our rights, property, or safety</li>
                  <li>
                    With trusted service providers who assist in operating our
                    platform (under strict confidentiality agreements)
                  </li>
                </ul>
              </section>

              {/* Data Security */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
                  Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security
                  measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction.
                  This includes encryption, secure authentication, and regular
                  security assessments.
                </p>
              </section>

              {/* Your Rights */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
                  Your Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the following rights regarding your personal data:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>
                    <strong>Access:</strong> Request a copy of your personal
                    data
                  </li>
                  <li>
                    <strong>Correction:</strong> Update or correct inaccurate
                    information
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal
                    data
                  </li>
                  <li>
                    <strong>Portability:</strong> Request transfer of your data
                    to another service
                  </li>
                  <li>
                    <strong>Objection:</strong> Object to processing of your
                    personal data
                  </li>
                </ul>
              </section>

              {/* Cookies */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
                  Cookies and Tracking
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar technologies to enhance your
                  experience, maintain your session, and analyze platform usage.
                  You can control cookie settings through your browser
                  preferences.
                </p>
              </section>

              {/* Third-Party Services */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
                  Third-Party Services
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our platform integrates with third-party OAuth providers
                  (GitHub, Google, GitLab, Bitbucket) for authentication. These
                  services have their own privacy policies, and we encourage you
                  to review them.
                </p>
              </section>

              {/* Data Retention */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
                  Data Retention
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information only as long as necessary
                  to provide our services and comply with legal obligations.
                  When you delete your account, we will remove your personal
                  data within 30 days, except where retention is required by
                  law.
                </p>
              </section>

              {/* Children's Privacy */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
                  Children's Privacy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our platform is not intended for children under 13 years of
                  age. We do not knowingly collect personal information from
                  children under 13. If you believe we have collected such
                  information, please contact us immediately.
                </p>
              </section>

              {/* Changes to Privacy Policy */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
                  Changes to This Privacy Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this privacy policy from time to time. We will
                  notify you of any material changes by posting the new privacy
                  policy on this page and updating the "Last updated" date.
                </p>
              </section>

              {/* Contact Information */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
                  Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this privacy policy or our
                  data practices, please contact us:
                </p>
                <div className="bg-muted/50 rounded-lg p-4 mt-4">
                  <p className="text-muted-foreground">
                    <strong>Email:</strong> privacy@coldran.com
                    <br />
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://coldran.com"
                      className="text-primary hover:underline"
                    >
                      https://coldran.com
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
