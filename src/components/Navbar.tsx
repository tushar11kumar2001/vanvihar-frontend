
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import NavDropdown from "./NavbarDropdown";

const nationalParks = [
  { label: "All National Parks", href: "#national-parks" },
  { label: "Bandhavgarh National Park", href: "#bandhavgarh" },
  { label: "Bandipur National Park", href: "#bandipur" },
  { label: "Dudhwa National Park", href: "#dudhwa" },
  { label: "Gir National Park", href: "#gir" },
  { label: "Jawai Leopard Reserve", href: "#jawai" },
  { label: "Jhalana Leopard Reserve", href: "#jhalana" },
  { label: "Jim Corbett National Park", href: "#jim-corbett" },
  { label: "Kanha National Park", href: "#kanha" },
  { label: "Kaziranga National Park", href: "#kaziranga" },
  { label: "Ranthambore National Park", href: "#ranthambore" },
];

const packages = [
  { label: "All Packages", href: "#packages" },
  { label: "Wildlife Safari Packages", href: "#wildlife-packages" },
  { label: "Weekend Getaways", href: "#weekend-getaways" },
  { label: "Family Packages", href: "#family-packages" },
];

const resorts = [
  { label: "All Resorts", href: "#resorts" },
  { label: "Forest Resorts", href: "#forest-resorts" },
  { label: "Luxury Stays", href: "#luxury-stays" },
];

const safariBooking = [
  { label: "Book a Safari", href: "#safari-booking" },
  { label: "Safari Information", href: "#safari-information" },
  { label: "Booking Assistance", href: "#contact" },
];

const navigationLinks = [
  { label: "National Parks", items: nationalParks },
  { label: "Packages", items: packages },
  { label: "Resorts", items: resorts },
  { label: "Safari Booking", items: safariBooking },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e5e1d5]  backdrop-blur-md">
      <nav className="flex w-full items-center justify-between gap-2 px-3 py-2 md:gap-3 md:px-4 lg:gap-4 lg:px-6 xl:gap-6 xl:px-10">
        
        
        
        {/* Responsive logos */}
        <Link
          href="/"
          className="flex shrink-0 items-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <img
            src="/assets/images/web-logo.png"
            alt="Wildterra"
            className="hidden h-12 w-auto object-contain md:block lg:h-14 xl:h-20"
          />

          <img
            src="/assets/images/mobile-logo.jpeg"
            alt="Wildterra"
            className="block h-11 w-auto object-contain md:hidden"
          />
        </Link>
        <div className=" flex flex-1 items-center justify-end   gap-2 md:gap-3 lg:gap-4 xl:gap-6">

        {/* Desktop and tablet navigation */}
        <div className=" hidden min-w-0    items-center    gap-3 md:flex lg:gap-3 xl:gap-6">
          {navigationLinks.map((link) => (
            <NavDropdown
              key={link.label}
              label={link.label}
              items={link.items}
            />
          ))}
        </div>

        {/* Contact buttons */}
        <div className="hidden shrink-0 items-center md:flex">
          <a
            href="tel:+919711024980"
            className="whitespace-nowrap rounded-l-full bg-charcoal-green px-2 py-2 text-xs font-semibold text-white transition-colors hover:bg-olive-green lg:px-3 lg:py-3 lg:text-sm xl:px-4"
          >
            9711024980
          </a>

          <a
            href="#contact"
            className="whitespace-nowrap rounded-r-full bg-deep-forest-green px-2 py-2 text-xs font-semibold text-white transition-colors hover:bg-sunset-gold hover:text-charcoal-green lg:px-3 lg:py-3 lg:text-sm xl:px-4"
          >
            Enquire Now ↗
          </a>
        </div>


        </div>












        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex shrink-0 items-center justify-center rounded-lg p-2 text-deep-forest-green transition-colors hover:bg-[#e8e2d5] md:hidden"
        >
          {isMenuOpen ? (
            <X size={26} className="rotate-180 transition-transform duration-300" />
          ) : (
            <Menu size={26} />
          )}
        </button>
      </nav>






      {/* Mobile navigation with expandable dropdowns */}
      <div
        className={`grid transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-[#e5e1d5] bg-white px-4 py-3">
            {navigationLinks.map((link) => (
              <details
                key={link.label}
                className="group border-b border-[#e5e1d5]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-3 text-sm font-semibold text-charcoal-green transition-colors hover:bg-sunset-gold/30">
                  {link.label}

                  <span className="transition-transform duration-300 group-open:rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </summary>

                <div className="max-h-56 overflow-y-auto pb-2 pl-3 [scrollbar-width:thin] [scrollbar-color:#8A9B7A_#F5EDE1]">
                  {link.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block rounded-md px-3 py-2 text-sm text-olive-green transition-colors hover:bg-sunset-gold hover:text-charcoal-green"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </details>
            ))}

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="tel:+919711024980"
                className="rounded-full bg-charcoal-green px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-olive-green"
              >
                Call Us: 9711024980
              </a>

              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-full bg-sunset-gold px-4 py-3 text-center text-sm font-semibold text-charcoal-green transition-colors hover:bg-[#c9a15e]"
              >
                Enquire Now ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
