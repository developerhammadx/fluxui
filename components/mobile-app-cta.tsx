"use client";

import { motion } from "framer-motion";
import { Download, Smartphone, Star, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function MobileAppCTA() {
  return (
    <section id="mobile-app" className="relative overflow-hidden py-20 lg:py-32">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
              <Smartphone className="mr-2 h-4 w-4" />
              Mobile App Available
            </Badge>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Download Our
              <br />
              <span className="text-gradient">Android App</span>
            </h2>

            <p className="mt-6 text-lg text-muted-foreground">
              Access all our components and projects on the go. Download resources
              directly to your device, get notified about new releases, and manage
              your collection anywhere.
            </p>

            {/* Features */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: Download, text: "Offline Access" },
                { icon: Star, text: "4.9 Rating" },
                { icon: Shield, text: "Secure Downloads" },
                { icon: Smartphone, text: "Native Experience" },
              ].map((feature) => (
                <div key={feature.text} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Button
                size="lg"
                className="rounded-full bg-primary px-8 py-6 text-base font-semibold text-primary-foreground hover:bg-primary/90 glow-sm"
              >
                <Download className="mr-2 h-5 w-5" />
                Download APK
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-border px-8 py-6 text-base font-semibold"
              >
                Learn More
              </Button>
            </motion.div>

            <p className="mt-4 text-sm text-muted-foreground">
              Version 2.1.0 • 15MB • Android 6.0+
            </p>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative h-[500px] w-[260px] rounded-[3rem] border-8 border-card bg-card p-3 shadow-2xl">
                {/* Screen */}
                <div className="h-full w-full overflow-hidden rounded-[2.5rem] bg-background">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between px-6 py-3">
                    <span className="text-xs font-medium text-foreground">9:41</span>
                    <div className="flex gap-1">
                      <div className="h-3 w-3 rounded-full bg-foreground/20" />
                      <div className="h-3 w-3 rounded-full bg-foreground/20" />
                      <div className="h-3 w-3 rounded-full bg-foreground" />
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="px-4">
                    {/* App Header */}
                    <div className="flex items-center gap-2 pb-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                        <span className="text-xs font-bold text-primary-foreground">F</span>
                      </div>
                      <span className="font-semibold text-foreground">FluxUI</span>
                    </div>

                    {/* Mock Cards */}
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="rounded-xl border border-border bg-secondary/50 p-3"
                        >
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-primary/20" />
                            <div className="flex-1">
                              <div className="h-3 w-20 rounded bg-foreground/20" />
                              <div className="mt-1 h-2 w-16 rounded bg-foreground/10" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Nav */}
                    <div className="mt-6 flex justify-around border-t border-border pt-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className={`h-6 w-6 rounded-full ${
                            i === 1 ? "bg-primary" : "bg-foreground/20"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Notch */}
                <div className="absolute left-1/2 top-0 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-card" />
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-10 -z-10 rounded-full bg-primary/30 blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
