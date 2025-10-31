"use client"

import { useState } from "react"
import { FiMenu, FiX, FiBook } from "react-icons/fi"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 animate-fade-in-up">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <FiBook className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">QuizHub</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors duration-300">
              Features
            </a>
            <a href="#roles" className="text-foreground hover:text-primary transition-colors duration-300">
              Roles
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors duration-300">
              About
            </a>
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
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in-up">
            <a
              href="#features"
              className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              Features
            </a>
            <a
              href="#roles"
              className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              Roles
            </a>
            <a
              href="#about"
              className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              About
            </a>
            <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
