"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
    ArrowRight,
    Check,
    MapPin,
    Play,
    TreePine,
} from "lucide-react";

const overviewImages = [
    {
        src: "/assets/images/hero-elephant.jpeg",
        alt: "Wildlife in the Indian jungle",
    },
    {
        src: "/assets/images/tiger.jpeg",
        alt: "Tiger in its natural habitat",
    },
    {
        src: "/assets/images/jeep.webp",
        alt: "Jungle safari experience",
    },
    {
        src: "/assets/images/jeep2.jpeg",
        alt: "Explore the wilderness on safari",
    },
];

const highlights = [
    "Home to Bengal tigers and diverse wildlife",
    "Discover beautiful forest landscapes",
    "Explore nature and birdwatching opportunities",
    "Memorable guided jungle safari experiences",
];

export default function OverviewSection() {
    const [activeImage, setActiveImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveImage((current) => (current + 1) % overviewImages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="overview"
            className="bg-[#F5EDE1] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
        >
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-9 sm:gap-12 lg:grid-cols-2 lg:gap-16">

                {/* Left: Overview Content */}
                <div className="min-w-0">
                    <div className="mb-4 flex items-center gap-2">
                        <span className="h-px w-7 bg-[#D9B477]" />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#586B4D] sm:text-xs">
                            Discover the Wilderness
                        </span>
                    </div>

                    <h2 className="font-serif text-3xl font-medium text-[#19382B] sm:text-4xl lg:text-5xl">
                        Overview
                    </h2>

                    <p className="mt-5 text-sm leading-7 text-[#26352B]/80 sm:text-base sm:leading-8">
                        Discover the extraordinary beauty of India&apos;s
                        national parks, where lush forests, remarkable
                        landscapes, and incredible wildlife come together.
                        Every journey offers a chance to experience nature
                        beyond the ordinary.
                    </p>

                    <p className="mt-3 text-sm leading-7 text-[#26352B]/75 sm:text-base sm:leading-8">
                        From thrilling jungle safaris to peaceful moments
                        surrounded by nature, plan an escape that brings you
                        closer to the wild. Explore the destination, discover
                        its highlights, and make every moment count.
                    </p>

                    {/* Key Highlights */}
                    <div className="mt-7 sm:mt-8">
                        <h3 className="font-serif text-xl font-semibold text-[#19382B] sm:text-2xl">
                            Key Highlights
                        </h3>

                        <ul className="mt-4 space-y-3">
                            {highlights.map((highlight) => (
                                <li
                                    key={highlight}
                                    className="flex items-start gap-3 text-sm leading-6 text-[#26352B]/85 sm:text-base"
                                >
                                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D9B477]/50 text-[#19382B]">
                                        <Check className="h-3 w-3" />
                                    </span>

                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA */}
                    <Link
                        href="#safari-options"
                        className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#D9B477] px-5 py-3 text-sm font-semibold text-[#19382B] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E7C98E] sm:mt-8 sm:px-6"
                    >
                        Plan Your Safari
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Right: Auto-Changing Image / Video Preview */}
                <div className="min-w-0">
                    <div className="group relative mx-auto aspect-[4/3] w-full max-w-[600px] overflow-hidden rounded-2xl border border-[#D9B477]/35 bg-[#19382B] shadow-[0_18px_45px_rgba(25,56,43,0.15)] sm:rounded-3xl">
                        {overviewImages.map((image, index) => (
                            <div
                                key={image.src}
                                className={`absolute inset-0 transition-opacity duration-1000 ${
                                    activeImage === index
                                        ? "z-10 opacity-100"
                                        : "z-0 opacity-0"
                                }`}
                                aria-hidden={activeImage !== index}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    priority={index === 0}
                                    className={`object-cover transition-transform duration-[5000ms] ease-out ${
                                        activeImage === index
                                            ? "scale-105"
                                            : "scale-100"
                                    }`}
                                />
                            </div>
                        ))}

                        {/* Image Overlay */}
                        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#10251C]/80 via-transparent to-[#10251C]/10" />

                        {/* Location Label */}
                        <div className="absolute left-4 top-4 z-30 inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#19382B]/60 px-3 py-2 text-xs font-medium text-white backdrop-blur-md sm:left-5 sm:top-5 sm:px-4">
                            <MapPin className="h-3.5 w-3.5 text-[#D9B477]" />
                            Into the Wild
                        </div>

                        {/* Video Button */}
                        {/* <button
                            type="button"
                            aria-label="Watch wildlife video"
                            onClick={() => {
                                // Add your video modal or video URL here.
                            }}
                            className="absolute left-1/2 top-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3"
                        >
                            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/70 bg-white/20 text-white shadow-lg backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D9B477] group-hover:text-[#19382B] sm:h-[72px] sm:w-[72px]">
                                <Play className="ml-1 h-6 w-6 fill-current sm:h-7 sm:w-7" />
                            </span>

                            <span className="rounded-full bg-[#19382B]/60 px-4 py-2 text-xs font-semibold tracking-wide text-white backdrop-blur-md sm:text-sm">
                                Watch Video
                            </span>
                        </button> */}

                        {/* Bottom Caption */}
                        <div className="absolute inset-x-0 bottom-0 z-30 p-4 sm:p-6">
                            <div className="flex items-end justify-between gap-3">
                                <div>
                                    <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E7C98E] sm:text-xs">
                                        <TreePine className="h-4 w-4" />
                                        Wildterra Experiences
                                    </div>

                                    <h3 className="font-serif text-xl italic text-white sm:text-2xl lg:text-3xl">
                                        Nature at its best.
                                    </h3>
                                </div>

                                {/* Slide Indicators */}
                                <div className="flex shrink-0 items-center gap-1.5 pb-1">
                                    {overviewImages.map((image, index) => (
                                        <button
                                            key={image.src}
                                            type="button"
                                            aria-label={`Show image ${index + 1}`}
                                            aria-pressed={activeImage === index}
                                            onClick={() => setActiveImage(index)}
                                            className={`h-1.5 rounded-full transition-all duration-300 ${
                                                activeImage === index
                                                    ? "w-6 bg-[#D9B477]"
                                                    : "w-1.5 bg-white/65 hover:bg-white"
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="mt-3 text-xs leading-5 text-[#586B4D] sm:text-sm">
                        Explore the wild, one unforgettable moment at a time.
                    </p>
                </div>
            </div>
        </section>
    );
}