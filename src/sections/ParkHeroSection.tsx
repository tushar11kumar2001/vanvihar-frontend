"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, TreePine, ArrowRight } from "lucide-react";

export default function ParkHeroSection() {
    return (
        <section className="relative isolate min-h-[560px] overflow-hidden bg-[#19382B] text-[#F5EDE1] sm:min-h-[600px] lg:min-h-[620px]">
            {/* Background Image */}
            <Image
                src="/assets/images/tiger.jpeg"
                alt="Tiger in the forest of Bandhavgarh National Park"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-[#10251C]/95 via-[#10251C]/75 to-[#10251C]/10" />
            <div className="absolute inset-0 -z-0 bg-gradient-to-t from-[#10251C]/60 via-transparent to-[#10251C]/20" />

            {/* Hero Content */}
            <div className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl items-center px-5 pb-12 pt-28 sm:min-h-[600px] sm:px-8 sm:pb-16 lg:min-h-[620px] lg:px-10">
                <div className="max-w-2xl">
                    {/* Breadcrumb */}
                    <nav
                        aria-label="Breadcrumb"
                        className="mb-8 flex flex-wrap items-center gap-2 text-xs text-white/75 sm:text-sm"
                    >
                        <Link href="/" className="transition-colors hover:text-[#D9B477]">
                            Home
                        </Link>
                        <span aria-hidden="true">›</span>
                        <Link
                            href="/national-parks"
                            className="transition-colors hover:text-[#D9B477]"
                        >
                            National Parks
                        </Link>
                        <span aria-hidden="true">›</span>
                        <span className="text-[#F5EDE1]">Bandhavgarh</span>
                    </nav>

                    {/* Eyebrow */}
                    <div className="mb-3 flex items-center gap-3">
                        <span className="h-px w-8 bg-[#D9B477]" />
                        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#E7C98E] sm:text-xs">
                            National Park
                        </p>
                    </div>

                    {/* Title */}
                    <h1 className="max-w-xl font-serif text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                        Bandhavgarh
                        <span className="block">National Park</span>
                    </h1>

                    {/* Location and Year */}
                    <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/90 sm:text-sm">
                        <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 shrink-0 text-[#E7C98E]" />
                            <span>Umaria, Madhya Pradesh</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <TreePine className="h-4 w-4 shrink-0 text-[#E7C98E]" />
                            <span>Established: 1968</span>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="mt-5 max-w-lg text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
                        Famous for its rich tiger density and biodiversity,
                        Bandhavgarh National Park offers an unforgettable
                        wildlife experience in the heart of Madhya Pradesh.
                    </p>

                    {/* CTA */}
                    <div className="mt-7 flex flex-wrap items-center gap-3">
                        <Link
                            href="#safari-options"
                            className="group inline-flex items-center gap-3 rounded-full bg-[#D9B477] px-5 py-3 text-sm font-semibold text-[#19382B] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E7C98E] sm:px-6"
                        >
                            Book Safari
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="#overview"
                            className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:px-6"
                        >
                            Explore the Park
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Image Blend */}
            <div className="absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-[#19382B]/35 to-transparent" />
        </section>
    );
}