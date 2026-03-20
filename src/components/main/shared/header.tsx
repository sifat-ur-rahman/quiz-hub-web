"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  // ensure document is available for portals (client-only)
  useEffect(() => {
    setMounted(true);
  }, []);

  // lock scroll when open
  useEffect(() => {
    if (isOpen) {
      // add to both html and body for maximum compatibility
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // portal content (overlay + side menu)
  const portal = mounted
    ? createPortal(
        <>
          {/* Full-screen overlay */}
          <div
            onClick={() => setIsOpen(false)}
            className={`fixed inset-0 z-1000 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "pointer-events-auto opacity-0"
            }`}
            aria-hidden="true"
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
          />

          {/* Side nav */}
          <aside
            className={`border-border fixed top-0 right-0 z-1001 h-screen w-[60%] max-w-xs transform border-l bg-white shadow-xl transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            aria-hidden={!isOpen}
          >
            <div className="border-border flex items-center justify-between border-b px-4 py-4">
              <Link
                href="/"
                className="animate-fade-in-up flex w-[140px] items-center gap-2"
              >
                <Image
                  src="/logo-black.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="w-full"
                />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary p-2"
                aria-label="Close menu"
              >
                <FiX className="h-6 w-6" />
              </button>
            </div>

            <div className="flex flex-col space-y-4 px-6 py-6">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary block py-2 transition-colors"
              >
                Home
              </Link>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground hover:text-primary block py-2 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-border my-4" />
              <Link
                href="/login"
                className="border-primary/50 hover:bg-primary/5 text-foreground hover:text-primary w-full rounded-sm border px-4 py-2 transition-colors"
              >
                Sign In
              </Link>
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-sm px-4 py-2 font-semibold transition-all duration-300">
                Get Started
              </button>
            </div>
          </aside>
        </>,
        document.body,
      )
    : null;

  return (
    <header className="bg-background/95 border-border sticky top-0 z-50 border-b backdrop-blur-sm">
      <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="animate-fade-in-up flex w-[190px] items-center gap-2"
          >
            <Image
              src="/logo-black.png"
              alt="Logo"
              width={40}
              height={40}
              className="w-full"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons (Desktop) */}
          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="/login"
              className="text-foreground hover:text-primary px-6 py-2 transition-colors duration-300"
            >
              Sign In
            </Link>
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-2 font-semibold shadow-lg transition-all duration-300 hover:shadow-xl">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="text-foreground hover:text-primary rounded-lg p-2 transition-colors md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* render portal (overlay + menu) */}
      {portal}
    </header>
  );
}
