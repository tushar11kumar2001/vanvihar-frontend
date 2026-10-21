"use client";

import { useState } from "react";
import Image from "next/image";
import {
    ArrowUpRight,
    Clock3,
    Compass,
    Leaf,
    MapPin,
    X,
} from "lucide-react";

const safariTypes = [
    {
        id: "jeep",
        number: "01",
        title: "Jeep Safari",
        subtitle: "Into the heart of the jungle",
        image: "/assets/images/jeep.webp",
        tag: "Popular Experience",
        status: "Check Availability",
        available: true,
        description:
            "Explore the beautiful forests of Kanha National Park in an authorised safari jeep accompanied by a permitted guide. Discover diverse landscapes, wildlife, and the natural beauty of the jungle.",
        features: [
            "Authorised safari vehicle",
            "Permitted nature guide",
            "Morning and afternoon shifts, subject to schedule",
        ],
        note:
            "Safari permits are limited. Check the applicable zone, date, shift, and booking requirements before planning your visit.",
    },
    {
        id: "elephant",
        number: "02",
        title: "Elephant Safari",
        subtitle: "A different way to experience the wild",
        image: "/assets/images/elephant.jpeg",
        tag: "Wildlife Experience",
        status: "Not Available",
        available: false,
        description:
            "Elephant rides should not be assumed to be a visitor safari option at Kanha National Park.",
        features: [
            "Not a standard visitor safari option",
            "Availability depends on official forest regulations",
            "Check current rules with park authorities",
        ],
        note:
            "Elephant safari is not presented as a bookable experience here. Confirm current rules directly with the park authorities.",
    },
      {
        id: "elephant",
        number: "02",
        title: "Elephant Safari",
        subtitle: "A different way to experience the wild",
        image: "/assets/images/elephant.jpeg",
        tag: "Wildlife Experience",
        status: "Not Available",
        available: false,
        description:
            "Elephant rides should not be assumed to be a visitor safari option at Kanha National Park.",
        features: [
            "Not a standard visitor safari option",
            "Availability depends on official forest regulations",
            "Check current rules with park authorities",
        ],
        note:
            "Elephant safari is not presented as a bookable experience here. Confirm current rules directly with the park authorities.",
    },

];

type Safari = (typeof safariTypes)[number];

export default function SafariOptionSection() {
    const [activeSafari, setActiveSafari] = useState<Safari | null>(null);

    const count = safariTypes.length;

    const gridColumns =
        count === 1
            ? "grid-cols-1"
            : count === 2
              ? "grid-cols-1 sm:grid-cols-2"
              : count === 3
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";

    return (
        <section
            id="types-of-safari"
            className="overflow-hidden bg-[#F5EDE1] px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">
                {/* Section heading */}
                <div className="mb-8 flex flex-col justify-between gap-4 md:mb-10 md:flex-row md:items-end">
                    <div className="max-w-2xl">
                        <div className="mb-3 flex items-center gap-3">
                            <span className="h-px w-8 bg-[#D9B477]" />
                            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#586B4D] sm:text-xs">
                                Discover the Wilderness
                            </span>
                        </div>

                        <h2 className="font-serif text-3xl font-medium leading-tight text-[#19382B] sm:text-4xl lg:text-5xl">
                            Types of{" "}
                            <span className="italic text-[#586B4D]">
                                Safari
                            </span>
                        </h2>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-[#26352B]/75 sm:text-base">
                            Choose your wildlife experience and discover the
                            wilderness of Kanha National Park.
                        </p>
                    </div>

                    <div className="flex w-fit items-center gap-2 rounded-full border border-[#19382B]/10 bg-white/60 px-3 py-2">
                        <Compass className="h-4 w-4 text-[#586B4D]" />
                        <span className="text-xs font-medium text-[#19382B]">
                            Your Wild Journey Begins Here
                        </span>
                    </div>
                </div>

                {/* Dynamic safari cards grid */}
                <div className={`grid ${gridColumns} gap-5 sm:gap-6`}>
                    {safariTypes.map((safari) => (
                        <article
                            key={safari.id}
                            className="group min-w-0 overflow-hidden rounded-xl border border-[#19382B]/10 bg-white/80 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="relative h-40 overflow-hidden sm:h-44">
                                <Image
                                    src={safari.image}
                                    alt={safari.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#10251C]/70 via-transparent to-transparent" />

                                <span className="absolute left-3 top-3 rounded-full border border-white/30 bg-[#19382B]/75 px-3 py-1 text-[10px] font-medium tracking-wide text-white backdrop-blur-sm">
                                    {safari.tag}
                                </span>

                                <span className="absolute bottom-3 right-3 font-serif text-2xl text-white/80">
                                    {safari.number}
                                </span>
                            </div>

                            <div className="p-4 sm:p-5">
                                <h3 className="font-serif text-xl text-[#19382B] sm:text-2xl">
                                    {safari.title}
                                </h3>

                                <p className="mt-1 text-xs italic text-[#586B4D] sm:text-sm">
                                    {safari.subtitle}
                                </p>

                                <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#26352B]/75">
                                    {safari.description}
                                </p>

                                <div className="mt-4 flex items-center justify-between gap-3 border-t border-[#19382B]/10 pt-3">
                                    <span
                                        className={`text-xs font-medium ${
                                            safari.available
                                                ? "text-[#586B4D]"
                                                : "text-[#8A6D52]"
                                        }`}
                                    >
                                        {safari.status}
                                    </span>

                                    <button
                                        type="button"
                                        onClick={() => setActiveSafari(safari)}
                                        className="inline-flex items-center gap-1.5 rounded-full bg-[#19382B] px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-[#586B4D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B477] focus-visible:ring-offset-2"
                                    >
                                        Explore
                                        <ArrowUpRight className="h-3.5 w-3.5" />
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* Safari details modal */}
            {activeSafari && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-[#10251C]/70 p-4 backdrop-blur-sm"
                    onClick={() => setActiveSafari(null)}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="safari-dialog-title"
                        className="safari-modal relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-[#D9B477]/40 bg-[#F5EDE1] shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="relative h-44 overflow-hidden sm:h-56">
                            <Image
                                src={activeSafari.image}
                                alt={activeSafari.title}
                                fill
                                sizes="(max-width: 640px) 100vw, 576px"
                                className="object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#10251C]/85 to-transparent" />

                            <button
                                type="button"
                                onClick={() => setActiveSafari(null)}
                                aria-label="Close safari details"
                                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-[#19382B]/70 text-white transition hover:bg-[#D9B477] hover:text-[#19382B]"
                            >
                                <X className="h-4 w-4" />
                            </button>

                            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E7C98E]">
                                    Kanha National Park
                                </span>

                                <h3
                                    id="safari-dialog-title"
                                    className="mt-1 font-serif text-2xl text-white sm:text-3xl"
                                >
                                    {activeSafari.title}
                                </h3>
                            </div>
                        </div>

                        <div className="p-4 sm:p-6">
                            <h4 className="font-serif text-xl text-[#19382B]">
                                Your Safari Experience
                            </h4>

                            <p className="mt-3 text-sm leading-6 text-[#26352B]/80">
                                {activeSafari.description}
                            </p>

                            <ul className="mt-4 space-y-2.5">
                                {activeSafari.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-start gap-2.5 text-sm leading-5 text-[#26352B]/80"
                                    >
                                        <Leaf className="mt-0.5 h-4 w-4 shrink-0 text-[#586B4D]" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-5 rounded-lg border border-[#D9B477]/40 bg-[#D9B477]/10 p-3.5">
                                <div className="flex items-start gap-2.5">
                                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#586B4D]" />
                                    <div>
                                        <p className="text-sm font-semibold text-[#19382B]">
                                            Important Information
                                        </p>
                                        <p className="mt-1 text-sm leading-6 text-[#26352B]/75">
                                            {activeSafari.note}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={() => setActiveSafari(null)}
                                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#19382B] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#586B4D]"
                            >
                                <X className="h-4 w-4" />
                                Close Details
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                .safari-modal {
                    animation: safariReveal 250ms ease-out both;
                }

                @keyframes safariReveal {
                    from {
                        opacity: 0;
                        transform: translateY(12px) scale(0.98);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .safari-modal {
                        animation: none;
                    }
                }
            `}</style>
        </section>
    );
}
