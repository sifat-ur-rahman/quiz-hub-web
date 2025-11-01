'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  // ensure document is available for portals (client-only)
  useEffect(() => {
    setMounted(true);
  }, []);

  // lock scroll when open
  useEffect(() => {
    if (isOpen) {
      // add to both html and body for maximum compatibility
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // portal content (overlay + side menu)
  const portal = mounted
    ? createPortal(
        <>
          {/* Full-screen overlay */}
          <div
            onClick={() => setIsOpen(false)}
            className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-1000 transition-opacity duration-300 ${
              isOpen ? 'opacity-100' : 'opacity-0 pointer-events-auto'
            }`}
            aria-hidden="true"
            style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
          />

          {/* Side nav */}
          <aside
            className={`fixed top-0 right-0 h-screen w-[60%] max-w-xs bg-white border-l border-border shadow-xl transform transition-transform duration-300 ease-in-out z-1001 ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            aria-hidden={!isOpen}
          >
            <div className="flex items-center justify-between px-4 py-4 border-b border-border">
              <Link
                href="/"
                className="flex items-center w-[140px] gap-2 animate-fade-in-up"
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
                className="p-2 text-foreground hover:text-primary"
                aria-label="Close menu"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col px-6 py-6 space-y-4">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="block py-2 text-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>

              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-border my-4" />
              <button className="w-full px-4 py-2 border border-primary/50 hover:bg-primary/5 rounded-sm text-foreground hover:text-primary transition-colors">
                Sign In
              </button>
              <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-all duration-300 font-semibold">
                Get Started
              </button>
            </div>
          </aside>
        </>,
        document.body
      )
    : null;

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
              className="w-full"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
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
            onClick={() => setIsOpen(v => !v)}
            className="md:hidden p-2 text-foreground hover:text-primary rounded-lg transition-colors"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* render portal (overlay + menu) */}
      {portal}
    </header>
  );
}
