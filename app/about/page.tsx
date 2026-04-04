"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Rocket, 
  Heart, 
  Code2, 
  Zap, 
  Users, 
  Sparkles,
  ArrowRight,
  Mail
} from "lucide-react";

// Metadata must be defined in a separate file or server component

const techStack = [
  {
    name: "Next.js",
    description: "React framework for production",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
      </svg>
    ),
  },
  {
    name: "Framer Motion",
    description: "Production-ready motion library",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                About <span className="text-gradient">FluxUI</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                Founded by a Software Engineering student at IIUI (International Islamic University Islamabad). 
                Our mission is to provide high-quality UI components and AI resources to bridge the gap between design and code.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Vision Section */}
        <section className="relative mt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl"
            >
              <Card className="overflow-hidden border-border bg-card/50">
                <CardContent className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                      <Rocket className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    FluxUI was founded by a Software Engineering student at IIUI (International Islamic University Islamabad). 
                    Our mission is to provide high-quality UI components and AI resources to bridge the gap between design and code.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We believe every developer deserves access to beautiful, professional-grade 
                    components without spending hours building from scratch. Our curated collection 
                    is designed to be fully accessible, responsive, and production-ready.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">Free for everyone</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">Open source</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">Community driven</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">Always evolving</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* The Developer Section */}
        <section className="relative mt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center"
            >
              {/* Profile Card */}
              <div className="relative">
                <Card className="overflow-hidden border-border bg-card/50">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center">
                      {/* Avatar Placeholder */}
                      <div className="relative mb-6">
                        <div className="h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center border-4 border-primary/20">
                          <Code2 className="h-16 w-16 text-primary" />
                        </div>
                        <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-black text-xs font-bold">
                          ✓
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-foreground">IIUI Student Developer</h3>
                      <p className="text-primary font-medium">Software Engineering • IIUI</p>
                      
                      <p className="mt-4 text-muted-foreground leading-relaxed">
                        A passionate Software Engineering student at International Islamic University Islamabad, 
                        building tools for the developer community. Committed to creating accessible, 
                        beautiful UI components that help developers work faster and smarter.
                      </p>

                      {/* Social Links */}
                      <div className="mt-6 flex gap-3">
                        <a
                          href="https://github.com/YOUR_GITHUB_USERNAME"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                          aria-label="GitHub"
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                          </svg>
                        </a>
                        <a
                          href="https://twitter.com/YOUR_TWITTER_HANDLE"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                          aria-label="Twitter"
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </a>
                        <a
                          href="https://linkedin.com/in/YOUR_LINKEDIN_PROFILE"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                          aria-label="LinkedIn"
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                        <a
                          href="mailto:hello@fluxui.dev"
                          className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                          aria-label="Email"
                        >
                          <Mail className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Story Content */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Our <span className="text-gradient">Mission</span>
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    As a student developer, I started FluxUI to solve a common problem: 
                    finding high-quality UI components that work seamlessly together. 
                    What began as a personal project has grown into a resource for the 
                    entire developer community.
                  </p>
                  <p className="leading-relaxed">
                    Every component in our library is crafted with attention to detail, 
                    ensuring they are not only visually appealing but also accessible, 
                    performant, and easy to customize. Great design should be available 
                    to everyone, regardless of budget or experience level.
                  </p>
                  <p className="leading-relaxed">
                    Our commitment to the developer community drives everything we do. 
                    From responsive support to regular updates, we&apos;re here to help you 
                    build better applications faster.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Heart className="h-4 w-4 text-primary" />
                    <span>Made with love</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Community driven</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span>Always improving</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="relative mt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground">
                Powered by <span className="text-gradient">Modern Tech</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                We leverage cutting-edge technologies to deliver the best experience 
                for developers and end users alike.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid gap-6 md:grid-cols-3"
            >
              {techStack.map((tech) => (
                <Card key={tech.name} className="group overflow-hidden border-border bg-card/50 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 text-primary transition-transform duration-300 group-hover:scale-110">
                        {tech.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{tech.name}</h3>
                      <p className="text-sm text-muted-foreground">{tech.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative mt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-border bg-card/50 p-8 lg:p-12 text-center"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to <span className="text-gradient">Get Started</span>?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Join thousands of developers who are already building faster with FluxUI. 
                Browse our collection and start creating today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-full bg-primary px-8 py-6 text-base font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Explore Components
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-border px-8 py-6 text-base font-semibold"
                >
                  View on GitHub
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
