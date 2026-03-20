import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { FiBook } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="mb-12 grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex w-[210px] items-center gap-2">
              <Image
                src="/logo-white.png"
                alt="Logo"
                width={40}
                height={40}
                className="w-full"
              />
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Empowering educators and students with innovative assessment
              solutions.
            </p>
          </div>
          <div></div>
          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <FiMail className="h-4 w-4" />
                <Link
                  href="mailto:info@quizhub.com"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  info@quizhub.com
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone className="h-4 w-4" />
                <Link
                  href="tel:+1234567890"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  +1 (234) 567-890
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <FiMapPin className="mt-0.5 h-4 w-4" />
                <span className="text-primary-foreground/70">
                  123 Education St, Learning City, LC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-primary-foreground/20 my-8 border-t"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-primary-foreground/70 text-sm">
            © {currentYear} QuizHub. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="bg-primary-foreground/10 hover:bg-primary-foreground/20 flex h-10 w-10 items-center justify-center rounded-lg transition-colors"
            >
              <FaTwitter className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="bg-primary-foreground/10 hover:bg-primary-foreground/20 flex h-10 w-10 items-center justify-center rounded-lg transition-colors"
            >
              <FaLinkedin className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="bg-primary-foreground/10 hover:bg-primary-foreground/20 flex h-10 w-10 items-center justify-center rounded-lg transition-colors"
            >
              <FaGithub className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="bg-primary-foreground/10 hover:bg-primary-foreground/20 flex h-10 w-10 items-center justify-center rounded-lg transition-colors"
            >
              <FaFacebook className="h-5 w-5" />
            </Link>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-sm">
            <Link
              href="#"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
