"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX, FiBook } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center w-[190px] gap-2 animate-fade-in-up"
          >
            <Image
              src="/logo-black.png"
              alt="Logo"
              width={40}
              height={40}
              className="w-full "
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
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

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2 text-foreground hover:text-primary transition-colors duration-300">
              Sign In
            </button>
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary rounded-lg transition-colors"
          >
            {isOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 ">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-foreground hover:bg-secondary rounded transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <button className="w-full px-4 py-2 border border-primary/50 hover:bg-primary/5  rounded-sm text-foreground hover:text-primary transition-colors">
              Sign In
            </button>
            <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-all duration-300 font-semibold">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
