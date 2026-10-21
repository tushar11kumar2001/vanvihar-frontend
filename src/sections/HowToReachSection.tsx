"use client";

import { useState } from "react";
import {
    ArrowRight,
    CarFront,
    MapPin,
    Plane,
    TrainFront,
    X,
} from "lucide-react";

type TravelMode = "road" | "railway" | "air";

const travelOptions = [
    {
        id: "road" as const,
        number: "01",
        title: "By Road",
        subtitle: "A scenic drive into the wild",
        image: "/assets/images/road.jpeg",
        Icon: CarFront,
        details:
            "The major cities of Madhya Pradesh, Maharashtra, and Chhattisgarh are all easily accessible from Kanha National Park. The distance and expected driving time to Kanha National Park vary depending on the location.",
    },
    {
        id: "railway" as const,
        number: "02",
        title: "By Railway",
        subtitle: "A comfortable journey by train",
        image: "/assets/images/train.jpeg",
        Icon: TrainFront,
        details:
            "Gondia and Jabalpur are the closest railway stations for entering Kanha National Park. Kanha is about 145 kilometres (approximately 3 hours by road) from Gondia railway station via Khatia Entrance Gate. Kanha is approximately 160 kilometres from Jabalpur, with a drive of around 5 hours via Mukki Entrance Gate.",
    },
    {
        id: "air" as const,
        number: "03",
        title: "By Air",
        subtitle: "Connect from nearby airports",
        image: "/assets/images/plane.jpeg",
        Icon: Plane,
        details:
            "Jabalpur (approximately 160 km), Raipur (approximately 250 km), and Nagpur (approximately 300 km) are the closest airports to Kanha National Park. From the airport, you can arrange a taxi or private road transfer to your destination.",
    },
];

export default function HowToReachSection() {
    const [selectedMode, setSelectedMode] = useState<TravelMode | null>(null);

    const selectedOption = travelOptions.find(
        (option) => option.id === selectedMode
    );

    return (
        <section
            id="how-to-reach"
            className="overflow-hidden bg-warm-ivory px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
        >
            <div className="mx-auto max-w-7xl">
                {/* Section heading */}
                <div className="mb-8 sm:mb-10">
                    <div className="mb-3 flex items-center gap-3">
                        <span className="h-px w-8 bg-[#D9B477]" />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#586B4D] sm:text-xs">
                            Plan Your Journey
                        </span>
                    </div>

                    <h2 className="font-serif text-4xl font-medium leading-tight text-[#19382B] sm:text-5xl lg:text-6xl">
                        How to Reach
                        <span className="mt-1 block italic text-[#586B4D]">
                            Kanha National Park
                        </span>
                    </h2>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-[#26352B]/75 sm:text-base">
                        Discover the best way to reach the wilderness. Choose
                        your preferred travel option to explore the details.
                    </p>
                </div>

                {/* Travel option cards */}
                {!selectedOption && (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                        {travelOptions.map((option) => {
                            const Icon = option.Icon;

                            return (
                                <button
                                    key={option.id}
                                    type="button"
                                    onClick={() => setSelectedMode(option.id)}
                                    aria-label={`View details for ${option.title}`}
                                    className="group overflow-hidden rounded-2xl border border-[#19382B]/10 bg-white/80 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D9B477]/80 hover:shadow-[0_18px_40px_rgba(25,56,43,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#586B4D]"
                                >
                                    <div className="relative h-48 overflow-hidden sm:h-52">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                            style={{
                                                backgroundImage: `url("${option.image}")`,
                                            }}
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#10251C]/90 via-[#10251C]/15 to-[#10251C]/10" />

                                        <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-[#F5EDE1]/95 text-[#19382B]">
                                            <Icon className="h-5 w-5" />
                                        </span>

                                        <span className="absolute right-4 top-4 font-serif text-3xl text-white/80">
                                            {option.number}
                                        </span>

                                        <div className="absolute inset-x-0 bottom-0 p-5">
                                            <h3 className="font-serif text-3xl text-white">
                                                {option.title}
                                            </h3>
                                            <p className="mt-1 text-sm text-white/80">
                                                {option.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="p-5">
                                        <p className="line-clamp-3 text-sm leading-6 text-[#26352B]/75">
                                            {option.details}
                                        </p>

                                        <div className="mt-5 flex items-center justify-between border-t border-[#19382B]/10 pt-4">
                                            <span className="text-sm font-semibold text-[#19382B]">
                                                View Travel Details
                                            </span>

                                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#19382B] text-[#D9B477] transition-transform duration-300 group-hover:translate-x-1">
                                                <ArrowRight className="h-4 w-4" />
                                            </span>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                )}

                {/* Expanded travel details */}
                {selectedOption && (
                    <div
                        key={selectedOption.id}
                        className="how-reach-expanded grid min-w-0 grid-cols-1 overflow-hidden rounded-2xl border border-[#D9B477]/50 bg-white/80 shadow-[0_20px_50px_rgba(25,56,43,0.12)] lg:grid-cols-[0.8fr_1.2fr]"
                    >
                        {/* Image panel */}
                        <div className="relative min-h-[280px] overflow-hidden sm:min-h-[350px] lg:min-h-[440px]">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage: `url("${selectedOption.image}")`,
                                }}
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#10251C]/90 via-[#10251C]/25 to-[#10251C]/15" />

                            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                                <selectedOption.Icon className="h-4 w-4 text-[#E7C98E]" />
                                Travel Guide
                            </div>

                            <button
                                type="button"
                                onClick={() => setSelectedMode(null)}
                                aria-label="Close travel details"
                                className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-[#19382B]/80 text-white backdrop-blur-md transition-all duration-300 hover:rotate-90 hover:bg-[#D9B477] hover:text-[#19382B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E7C98E]">
                                    {selectedOption.number} / 03
                                </span>

                                <h3 className="mt-3 font-serif text-4xl text-white sm:text-5xl">
                                    {selectedOption.title}
                                </h3>

                                <p className="mt-2 text-sm text-white/85 sm:text-base">
                                    {selectedOption.subtitle}
                                </p>

                                <div className="mt-5 h-px w-full bg-white/25" />

                                <p className="mt-4 text-sm leading-6 text-white/80">
                                    Your journey to the heart of nature begins
                                    with choosing the right route.
                                </p>
                            </div>
                        </div>

                        {/* Details panel */}
                        <div className="flex min-w-0 flex-col p-5 sm:p-7 lg:p-10">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A9B7A] sm:text-xs">
                                Everything You Need to Know
                            </span>

                            <h4 className="mt-3 font-serif text-3xl leading-tight text-[#19382B] sm:text-4xl">
                                {selectedOption.title}
                            </h4>

                            <p className="mt-2 text-sm font-medium text-[#586B4D]">
                                Kanha National Park, India
                            </p>

                            <div className="mt-6 h-px bg-[#D9B477]/60" />

                            <div className="mt-6 flex items-start gap-4">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D9B477]/20 text-[#586B4D]">
                                    <selectedOption.Icon className="h-5 w-5" />
                                </span>

                                <div className="min-w-0">
                                    <h5 className="font-serif text-xl text-[#19382B] sm:text-2xl">
                                        Travelling {selectedOption.title.toLowerCase().replace("by ", "by ")}
                                    </h5>

                                    <p className="mt-4 whitespace-normal text-sm leading-7 text-[#26352B]/80 sm:text-base">
                                        {selectedOption.details}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-7 flex items-start gap-3 rounded-xl border border-[#D9B477]/40 bg-[#D9B477]/10 p-4 sm:p-5">
                                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#586B4D]" />

                                <div>
                                    <p className="text-sm font-semibold text-[#19382B]">
                                        Wildterra Travel Tip
                                    </p>
                                    <p className="mt-1 text-sm leading-6 text-[#26352B]/75">
                                        Confirm your travel arrangements,
                                        destination gate, and current journey
                                        times before departure.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-[#19382B]/10 pt-6 mt-7">
                                <p className="max-w-xs text-xs leading-5 text-[#586B4D]">
                                    Plan ahead for a smooth journey into the wild.
                                </p>

                                <button
                                    type="button"
                                    onClick={() => setSelectedMode(null)}
                                    className="inline-flex items-center gap-2 rounded-full bg-[#19382B] px-5 py-3 text-sm font-semibold text-[#F5EDE1] transition-colors duration-300 hover:bg-[#26352B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#586B4D] focus-visible:ring-offset-2"
                                >
                                    <X className="h-4 w-4" />
                                    All Travel Options
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <style jsx>{`
                .how-reach-expanded {
                    animation: revealFromLeft 500ms ease both;
                    transform-origin: left center;
                }

                @keyframes revealFromLeft {
                    from {
                        opacity: 0;
                        clip-path: inset(0 100% 0 0);
                        transform: translateX(-12px);
                    }

                    to {
                        opacity: 1;
                        clip-path: inset(0 0 0 0);
                        transform: translateX(0);
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .how-reach-expanded {
                        animation: none;
                    }
                }
            `}</style>
        </section>
    );
}