import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | FluxUI",
  description: "Terms of Service for FluxUI - Premium UI components and developer resources platform.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </div>

          <div className="prose prose-invert mx-auto max-w-none">
            <div className="rounded-2xl border border-border bg-card/50 p-8">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using FluxUI, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, 
                  you may not access our website or use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Intellectual Property Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All resources, components, and content available on FluxUI are owned by us or our licensors and are protected by copyright, 
                  trademark, and other intellectual property laws. Subject to your compliance with these Terms, we grant you a limited, 
                  non-exclusive, non-transferable license to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Download and use our resources for personal and commercial projects</li>
                  <li>Modify components to suit your project needs</li>
                  <li>Use components in unlimited projects</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  You may not:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Resell, redistribute, or share our resources as-is</li>
                  <li>Create competing products using our resources</li>
                  <li>Remove copyright notices or watermarks</li>
                  <li>Use our resources in ways that could damage our reputation</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Accounts</h2>
                <p className="text-muted-foreground leading-relaxed">
                  When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining 
                  the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Prohibited Activities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Use our services for any illegal purpose</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt our services</li>
                  <li>Upload or transmit viruses or malicious code</li>
                  <li>Scrape or harvest data from our website</li>
                  <li>Impersonate others or provide false information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Disclaimer of Warranties</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our resources and services are provided &quot;as is&quot; without any warranties of any kind, either express or implied. 
                  We do not warrant that our resources will meet your requirements or that the service will be uninterrupted, timely, 
                  secure, or error-free. You use our resources at your own risk.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall FluxUI, its directors, employees, partners, agents, suppliers, or affiliates be liable for any 
                  indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, 
                  use, goodwill, or other intangible losses, resulting from your use of our services or resources.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to defend, indemnify, and hold harmless FluxUI and its affiliates from and against any claims, liabilities, 
                  damages, losses, and expenses, including reasonable attorneys&apos; fees, arising out of or in any way connected with your 
                  access to or use of our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, 
                  including without limitation if you breach these Terms. Upon termination, your right to use our services will immediately cease.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed and construed in accordance with the laws of your jurisdiction, without regard to its 
                  conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <p className="text-foreground mt-4">
                  Email: <a href="mailto:legal@fluxui.dev" className="text-primary hover:underline">legal@fluxui.dev</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
