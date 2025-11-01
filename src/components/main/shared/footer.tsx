import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import { FiBook } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center w-[210px] gap-2">
              <Image
                src="/logo-white.png"
                alt="Logo"
                width={40}
                height={40}
                className="w-full "
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
            <h4 className="font-semibold text-lg">Company</h4>
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
            <h4 className="font-semibold text-lg">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <FiMail className="w-4 h-4" />
                <Link
                  href="mailto:info@quizhub.com"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  info@quizhub.com
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone className="w-4 h-4" />
                <Link
                  href="tel:+1234567890"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  +1 (234) 567-890
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <FiMapPin className="w-4 h-4 mt-0.5" />
                <span className="text-primary-foreground/70">
                  123 Education St, Learning City, LC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/70">
            © {currentYear} QuizHub. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            >
              <FaTwitter className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            >
              <FaGithub className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            >
              <FaFacebook className="w-5 h-5" />
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
