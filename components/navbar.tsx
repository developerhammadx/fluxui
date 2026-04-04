"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Search, Menu, X, Code2, Layers, Smartphone, Download } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FluxUILogo3D } from "@/components/fluxui-logo-3d";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#categories", label: "Categories", icon: Layers, sectionId: "categories" },
  { href: "/#featured-resources", label: "Components", icon: Code2, sectionId: "featured-resources" },
  { href: "/#mobile-app", label: "Mobile App", icon: Smartphone, sectionId: "mobile-app" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  // Handle smooth scroll for nav links
  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (isHomePage) {
      // If on home page, scroll directly
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on another page, navigate to home with hash
      router.push(`/#${sectionId}`);
    }
  };

  // Handle hash scroll on page load
  useEffect(() => {
    if (isHomePage && window.location.hash) {
      const sectionId = window.location.hash.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [isHomePage]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-[100] backdrop-blur-md bg-black/50 border-b border-white/10"
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <FluxUILogo3D size={48} />
            <span className="text-xl font-bold tracking-tight text-foreground">
              Flux<span className="text-primary">UI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.sectionId)}
                className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
              >
                <link.icon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                {link.label}
              </a>
            ))}
          </div>

          {/* Search & Actions */}
          <div className="hidden items-center gap-4 lg:flex">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search components..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 rounded-full border-border bg-secondary/50 pl-10 text-sm focus-visible:ring-primary"
              />
            </div>
            <Button className="rounded-full bg-primary px-6 font-semibold text-primary-foreground hover:bg-primary/90">
              <Download className="mr-2 h-4 w-4" />
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary lg:hidden"
          >
            {isOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn(
            "overflow-hidden lg:hidden",
            isOpen ? "mt-4 border-t border-border pt-4" : ""
          )}
        >
          <div className="flex flex-col gap-4">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search components..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border-border bg-secondary/50 pl-10 text-sm"
              />
            </div>

            {/* Mobile Nav Links */}
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ x: -20, opacity: 0 }}
                animate={isOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.sectionId)}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground cursor-pointer"
                >
                  <link.icon className="h-5 w-5" />
                  {link.label}
                </a>
              </motion.div>
            ))}

            {/* Mobile CTA */}
            <Button className="mt-2 w-full rounded-xl bg-primary font-semibold text-primary-foreground">
              <Download className="mr-2 h-4 w-4" />
              Get Started
            </Button>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}
