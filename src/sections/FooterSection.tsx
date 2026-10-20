"use client";

import Image from "next/image";
import Link from "next/link";
import {
    MapPin,
    Mail,
    Phone,
    ArrowUp,
    Leaf,
} from "lucide-react";

import {
    FaInstagram,
    FaYoutube,
    FaFacebookF,
} from "react-icons/fa";

const footerLinks = [
    {
        title: "Explore",
        links: [
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about" },
            { label: "National Parks", href: "/#national-parks" },
            { label: "Packages", href: "/#packages" },
            { label: "Resorts", href: "/#resorts" },
            { label: "Safari Zones", href: "/safari-zones" },
            { label: "Safari Booking", href: "/#safari-booking" },
            { label: "Forest Rest Houses", href: "/rest-houses" },
        ],
    },
    {
        title: "Support",
        links: [
            { label: "Contact Us", href: "/contact" },
            { label: "Plan Your Trip", href: "/#safari-booking" },
            { label: "FAQs", href: "/#faqs" },
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms & Conditions", href: "/terms-and-conditions" },
        ],
    },
    {
        title: "National Parks",
        links: [
            { label: "Jim Corbett National Park", href: "/packages/jim-corbett" },
            { label: "Kanha National Park", href: "/packages/kanha" },
            { label: "Kaziranga National Park", href: "/packages/kaziranga" },
            { label: "Panna National Park", href: "/packages/panna" },
            { label: "Ranthambore National Park", href: "/packages/ranthambore" },
            { label: "Bandhavgarh National Park", href: "/packages/bandhavgarh" },
        ],
    },
];

const socialLinks = [
    {
        label: "Instagram",
        href: "https://www.instagram.com/",
        Icon: FaInstagram,
    },
    {
        label: "YouTube",
        href: "https://www.youtube.com/",
        Icon: FaYoutube,
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com/",
        Icon: FaFacebookF,
    },
];

const safariZones = [
    { label: "Dhikala Zone", href: "/safari-zones/dhikala" },
    { label: "Bijrani Zone", href: "/safari-zones/bijrani" },
    { label: "Jhirna Zone", href: "/safari-zones/jhirna" },
    { label: "Dhela Zone", href: "/safari-zones/dhela" },
    { label: "Garjiya Zone", href: "/safari-zones/garjiya" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative overflow-hidden bg-[#26352B] text-[#F5EDE1]">
            {/* Main Footer */}
            <div className="grid lg:grid-cols-[320px_minmax(0,1fr)]">
                {/* Brand Panel */}
                <div className="relative overflow-hidden bg-[#19382B] px-6 py-10 sm:px-10 lg:px-8 xl:px-12">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -left-20 top-10 h-52 w-52 rounded-full bg-[#586B4D]/30 blur-3xl"
                    />

                    <div className="relative">
                        {/* Replace with your actual logo path */}
                        <Link href="/" className="inline-flex items-center gap-3">
                            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#D9B477]/40 bg-[#D9B477]/10">
                                {/* <Leaf className="h-7 w-7 text-[#D9B477]" />
                                 */}
                                    <Image
                                        src="/assets/images/mobile-logo.jpeg"
                                        alt="Vanvihar Logo"
                                        width={160}
                                        height={60}
                                        priority
                                        className="h-14 w-auto max-w-[160px] object-contain"
                                    />
                                
                            </span>
                            <span className="font-serif text-3xl font-semibold tracking-wide text-[#F5EDE1]">
                                Vanvihar
                            </span>
                        </Link>

                        <p className="mt-6 max-w-sm text-sm leading-6 text-[#F5EDE1]/75">
                            Discover the wild side of India. Explore breathtaking
                            national parks, unforgettable jungle safaris, and
                            peaceful nature stays with Vanvihar.
                        </p>

                        <div className="mt-7 space-y-4 text-sm text-[#F5EDE1]/85">
                            <div className="flex items-start gap-3">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#D9B477]" />
                                <p>
                                    Explore India's wilderness
                                    <br />
                                    Your next adventure starts here
                                </p>
                            </div>

                            <a
                                href="mailto:hello@Vanvihar.in"
                                className="flex items-center gap-3 transition-colors hover:text-[#D9B477]"
                            >
                                <Mail className="h-4 w-4 shrink-0 text-[#D9B477]" />
                                hello@Vanvihar.in
                            </a>

                            <a
                                href="tel:+910000000000"
                                className="flex items-center gap-3 transition-colors hover:text-[#D9B477]"
                            >
                                <Phone className="h-4 w-4 shrink-0 text-[#D9B477]" />
                                Contact our team
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="mt-7 flex items-center gap-3">
                            {socialLinks.map(({ label, href, Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={label}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9B477]/25 bg-[#F5EDE1]/5 text-[#F5EDE1] transition-all duration-300 hover:-translate-y-1 hover:border-[#D9B477] hover:bg-[#D9B477] hover:text-[#19382B]"
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Navigation Panel */}
                <div className="relative overflow-hidden px-6 py-10 sm:px-10 lg:px-8 xl:px-12">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(138,155,122,0.13),transparent_55%)]"
                    />

                    <div className="relative grid gap-9 sm:grid-cols-2 lg:grid-cols-[0.8fr_1fr_1.25fr_0.9fr] lg:gap-6 xl:gap-9">
                        {footerLinks.map((column) => (
                            <div key={column.title}>
                                <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.13em] text-[#F5EDE1]">
                                    {column.title}
                                </h3>

                                <div className="mb-5 h-0.5 w-9 bg-[#D9B477]" />

                                <ul className="space-y-3">
                                    {column.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-sm leading-5 text-[#F5EDE1]/70 transition-colors duration-200 hover:text-[#D9B477]"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* Safari Zones */}
                        <div>
                            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.13em] text-[#F5EDE1]">
                                Safari Zones
                            </h3>

                            <div className="mb-5 h-0.5 w-9 bg-[#D9B477]" />

                            <ul className="space-y-3">
                                {safariZones.map((zone) => (
                                    <li key={zone.label}>
                                        <Link
                                            href={zone.href}
                                            className="text-sm leading-5 text-[#F5EDE1]/70 transition-colors duration-200 hover:text-[#D9B477]"
                                        >
                                            {zone.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            {/* Decorative Wildlife Artwork */}
                            <div className="mt-7 hidden lg:block">
                                <Image
                                    src="/assets/images/tiger.png"
                                    alt="Tiger in the wild"
                                    width={190}
                                    height={190}
                                    className="h-auto w-full max-w-[180px] object-contain object-left-bottom"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="relative mt-10 border-t border-[#F5EDE1]/15 pt-5">
                        <div className="flex flex-col gap-3 text-xs text-[#F5EDE1]/65 sm:flex-row sm:items-center sm:justify-between">
                            <p>
                                Copyright © {currentYear} Vanvihar. All Rights Reserved.
                            </p>
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 transition-colors hover:text-[#D9B477]"
                            >
                                Made for the love of wilderness
                                <Leaf className="h-3.5 w-3.5 text-[#D9B477]" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Disclaimer */}
            <div className="border-t border-[#F5EDE1]/15 bg-[#1B2921] px-6 py-5 sm:px-10 lg:px-8 xl:px-12">
                <h3 className="mb-2 text-sm font-bold text-[#D9B477]">
                    Disclaimer
                </h3>

                <p className="max-w-7xl text-xs leading-5 text-[#F5EDE1]/60">
                    Vanvihar provides information and assistance for wildlife
                    tourism, safari planning, national park visits, and nature
                    stays. Safari permits, park entry, accommodation, and
                    wildlife sightings are subject to availability and the
                    rules of the respective authorities. Wild animals live in
                    their natural habitat, and sightings cannot be guaranteed.
                    Park access, operating schedules, and booking conditions may
                    change without prior notice. Please verify the latest
                    details with our team before confirming your trip.
                </p>

                <p className="mt-3 text-xs leading-5 text-[#F5EDE1]/60">
                    All trademarks, logos, images, and third-party names belong
                    to their respective owners. Information on this website is
                    provided for general guidance and may be updated from time
                    to time.
                </p>
            </div>

            {/* Back to Top */}
            <a
                href="#top"
                aria-label="Back to top"
                className="fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-[#D9B477]/50 bg-[#19382B] text-[#D9B477] shadow-lg transition-all hover:-translate-y-1 hover:bg-[#D9B477] hover:text-[#19382B]"
            >
                <ArrowUp className="h-5 w-5" />
            </a>
        </footer>
    );
}