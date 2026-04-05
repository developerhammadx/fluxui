"use client";

import Link from "next/link";
import { FluxUILogo3D } from "@/components/fluxui-logo-3d";
import { ArrowUp, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const footerLinks = {
  platform: [
    { label: "Components", href: "/components" },
    { label: "Templates", href: "/templates" },
    { label: "Gradients", href: "#", badge: "Coming Soon" },
    { label: "Wallpapers", href: "/wallpapers" },
  ],
  resources: [
    { label: "Learn", href: "/#master-code" },
    { label: "Icons", href: "/icons" },
    { label: "Documentation", href: "/docs", badge: "v2.0" },
    { label: "FAQ", href: "/faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms-of-service" },
    { label: "License", href: "/license" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  {
    href: "https://github.com/developerhammadx/fluxui",
    label: "GitHub",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
      </svg>
    ),
  },
  {
    href: "https://twitter.com/fluxui",
    label: "Twitter",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    href: "https://discord.gg/fluxui",
    label: "Discord",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
      </svg>
    ),
  },
  {
    href: "mailto:hello@fluxui.dev",
    label: "Email",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute -bottom-1/2 -right-1/2 w-full h-full"
        animate={{
          background: [
            "radial-gradient(circle at 70% 70%, rgba(0, 217, 163, 0.03) 0%, transparent 50%)",
            "radial-gradient(circle at 60% 80%, rgba(0, 217, 163, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 70% 70%, rgba(0, 217, 163, 0.03) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -top-1/2 -left-1/2 w-full h-full"
        animate={{
          background: [
            "radial-gradient(circle at 30% 30%, rgba(30, 58, 138, 0.03) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 20%, rgba(30, 58, 138, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 30% 30%, rgba(30, 58, 138, 0.03) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function CTASection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#1a1a1a] bg-gradient-to-br from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a] p-8 md:p-12">
      <div className="absolute inset-0 bg-gradient-to-r from-[#00D9A3]/5 via-transparent to-[#1E3A8A]/5 opacity-50" />
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
            <Sparkles className="h-5 w-5 text-[#00D9A3]" />
            <span className="text-sm font-medium text-[#00D9A3]">Join the Waitlist</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to Build Your Next SaaS?</h2>
          <p className="text-gray-400 max-w-md">Get early access to premium templates and exclusive developer resources.</p>
        </div>
        <form onSubmit={handleSubmit} className="w-full md:w-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full sm:w-72 px-4 py-3 rounded-xl bg-[#111] border border-[#1a1a1a] text-white placeholder-gray-500 focus:outline-none focus:border-[#00D9A3]/50 focus:ring-1 focus:ring-[#00D9A3]/20 transition-all"
              required
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-6 py-3 rounded-xl border border-[#00D9A3] bg-transparent text-[#00D9A3] font-semibold overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                {isSubmitted ? "Joined!" : "Join Waitlist"}
                {!isSubmitted && <ArrowRight className="h-4 w-4" />}
              </span>
              <div className="absolute inset-0 bg-[#00D9A3]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
}

function FooterLink({ href, label, badge }: { href: string; label: string; badge?: string }) {
  return (
    <motion.li whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
      <Link href={href} className="group flex items-center gap-2 text-sm text-gray-400 hover:text-[#00D9A3] transition-colors duration-200">
        <span className="relative">
          {label}
          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#00D9A3] group-hover:w-full transition-all duration-300" />
        </span>
        {badge && (
          <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-[#00D9A3]/10 text-[#00D9A3] border border-[#00D9A3]/20">{badge}</span>
        )}
      </Link>
    </motion.li>
  );
}

function SocialIcon({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#111] border border-[#1a1a1a] text-gray-400 transition-all duration-300 hover:border-[#00D9A3]/50 hover:text-[#00D9A3] hover:shadow-[0_0_20px_rgba(0,217,163,0.15)]"
    >
      {icon}
    </motion.a>
  );
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#000000] border-t border-[#1a1a1a]">
      <AnimatedBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="pt-16 pb-12">
          <CTASection />
        </div>

        {/* Main Footer Content */}
        <div className="py-12 border-t border-[#1a1a1a]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Section - Takes 4 columns */}
            <div className="lg:col-span-4">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative">
                  {/* Glow effect behind logo */}
                  <div className="absolute inset-0 bg-[#00D9A3]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <FluxUILogo3D className="w-12 h-12" />
                  </div>
                </div>
                <div>
                  <span className="text-2xl font-bold tracking-tight text-white">
                    Flux<span className="text-[#00D9A3]">UI</span>
                  </span>
                  <p className="text-xs text-gray-500 -mt-0.5 tracking-wide">
                    The Open-Source Component Library
                  </p>
                </div>
              </Link>
              <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-xs">
                Premium UI components and developer resources for Next.js developers. Build stunning applications faster.
              </p>

              {/* Social Links */}
              <div className="mt-6 flex gap-3">
                {socialLinks.map((social) => (
                  <SocialIcon
                    key={social.label}
                    href={social.href}
                    label={social.label}
                    icon={social.icon}
                  />
                ))}
              </div>
            </div>

            {/* Links Columns - Takes 8 columns */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                {/* Platform */}
                <div>
                  <h3 className="text-sm font-semibold text-white mb-4">Platform</h3>
                  <ul className="space-y-3">
                    {footerLinks.platform.map((link) => (
                      <FooterLink key={link.label} {...link} />
                    ))}
                  </ul>
                </div>

                {/* Resources */}
                <div>
                  <h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
                  <ul className="space-y-3">
                    {footerLinks.resources.map((link) => (
                      <FooterLink key={link.label} {...link} />
                    ))}
                  </ul>
                </div>

                {/* Legal */}
                <div>
                  <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
                  <ul className="space-y-3">
                    {footerLinks.legal.map((link) => (
                      <FooterLink key={link.label} {...link} />
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link) => (
                      <FooterLink key={link.label} {...link} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[#1a1a1a]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © 2026 FluxUI. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <p className="text-sm text-gray-500">
                Built with Next.js, Tailwind CSS & Framer Motion
              </p>
              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#111] border border-[#1a1a1a] text-gray-400 transition-all duration-300 hover:border-[#00D9A3]/50 hover:text-[#00D9A3]"
                aria-label="Back to top"
              >
                <ArrowUp className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
