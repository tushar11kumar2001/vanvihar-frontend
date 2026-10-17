
"use client";

import { useState } from "react";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "National Parks", href: "#national-parks" },
  { label: "Packages", href: "#packages" },
  { label: "Resorts", href: "#resorts" },
  { label: "Safari Booking", href: "#safari-booking" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    <header className="sticky top-0 z-50 w-full border-b border-[#e5e1d5] backdrop-blur-md">
      <nav className="flex w-full items-center justify-between gap-4 px-3 py-2 lg:px-10">
        {/* Logos */}
        <Link
          href="/"
          className="flex shrink-0 items-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <img
            src="/assets/images/web-logo.png"
            alt="Wildterra"
            className="hidden h-20 w-auto object-contain md:block"
          />

          <img
            src="/assets/images/mobile-logo.jpeg"
            alt="Wildterra"
            className="block h-14 w-auto object-contain md:hidden"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-semibold text-charcoal-green transition-colors hover:text-olive-green"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop contact buttons */}
        <div className="hidden items-center md:flex">
          <a
            href="tel:+919711024980"
            className="rounded-l-full bg-charcoal-green px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-olive-green"
          >
            9711024980
          </a>

          <a
            href="#contact"
            className="w-[130px] rounded-r-full bg-deep-forest-green px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-sunset-gold hover:text-charcoal-green"
          >
            Enquire Now ↗
          </a>
        </div>

        {/* Mobile menu toggle */}
{/* Mobile menu toggle */}
<button
  type="button"
  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
  aria-expanded={isMenuOpen}
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  className="flex items-center justify-center rounded-lg p-2 text-deep-forest-green transition-colors hover:bg-[#e8e2d5] md:hidden"
>
  <span
    className={`inline-flex transition-transform duration-300 ease-in-out ${
      isMenuOpen ? "rotate-180" : "rotate-0"
    }`}
  >
    {isMenuOpen ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
      </svg>
    )}
  </span>
</button>
      </nav>

    
    </header>
      {/* Mobile dropdown menu */}
   
{/* Mobile dropdown menu */}
<AnimatePresence>
  {isMenuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -12, scale: 0.98 }}
      transition={{ duration: 0.22, ease: "easeInOut" }}
      className="absolute top-20 right-0 z-50 w-[50%] rounded-lg bg-white px-2 py-2 shadow-lg md:hidden"
    >
      <div className="flex flex-col gap-1">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className="flex justify-between rounded-md border-b border-gray-400 px-1 py-2 text-sm font-medium text-charcoal-green transition-colors hover:bg-[#e8e2d5]"
          >
            <span>{link.label}</span>
            <ChevronDown size={20} />
          </Link>
        ))}
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <a
          href="tel:+919711024980"
          className="rounded-sm bg-charcoal-green px-1 py-1 text-center text-sm font-medium text-white transition-colors hover:bg-olive-green"
        >
          9711024980
        </a>

        <a
          href="#contact"
          onClick={() => setIsMenuOpen(false)}
          className="rounded-sm bg-sunset-gold px-2 py-1 text-center text-sm font-medium text-charcoal-green transition-colors hover:bg-[#c9a15e]"
        >
          Enquire Now ↗
        </a>
      </div>
    </motion.div>
  )}
</AnimatePresence>

      </>
  );
}
