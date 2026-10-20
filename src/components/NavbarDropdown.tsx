
"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

type DropdownItem = {
  label: string;
  href: string;
};

type NavDropdownProps = {
  label: string;
  items: DropdownItem[];
};

export default function NavDropdown({
  label,
  items,
}: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative "
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Dropdown trigger */}
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex items-center gap-1 whitespace-nowrap py-2 text-xs font-medium uppercase transition-colors duration-200 lg:text-sm xl:text-base ${
          isOpen
            ? "text-sunset-gold"
            : "text-white hover:text-olive-green"
        }`}
      >
        {label}

        <ChevronDown
          size={16}
          className={`shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Animated dropdown menu */}
      <div
        className={`absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 origin-top rounded-b-xl border border-[#e5e1d5] bg-white shadow-xl transition-all duration-300 ease-out lg:w-72 ${
          isOpen
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible -translate-y-2 scale-95 opacity-0"
        }`}
      >
        <div className="max-h-[70vh] overflow-y-auto py-2 [scrollbar-width:thin] [scrollbar-color:#8A9B7A_#F5EDE1]">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block border-b border-[#e5e1d5] px-4 py-3 text-center text-sm font-medium text-olive-green transition-colors duration-200 last:border-b-0 hover:bg-olive-green hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
