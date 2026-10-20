"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowUpRight,
    Compass,
    Leaf,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

const highlights = [
    {
        number: "01",
        title: "Curated Wildlife Journeys",
        description:
            "Thoughtfully planned safari experiences shaped around your destination and interests.",
        Icon: Compass,
    },
    {
        number: "02",
        title: "Nature-First Experiences",
        description:
            "Discover India's incredible biodiversity with respect for wildlife and its natural habitat.",
        Icon: Leaf,
    },
    {
        number: "03",
        title: "Personalised Trip Planning",
        description:
            "Get help planning your safari, accommodation, and travel details in one place.",
        Icon: ShieldCheck,
    },
];

const destinations = [
    { label: "Jim Corbett", href: "/packages/jim-corbett" },
    { label: "Kanha", href: "/packages/kanha" },
    { label: "Kaziranga", href: "/packages/kaziranga" },
    { label: "Panna", href: "/packages/panna" },
    { label: "Ranthambore", href: "/packages/ranthambore" },
];

export default function AboutSection() {
    return (
        <section
            id="about"
            className="relative isolate overflow-hidden bg-[#F5EDE1] px-4 py-16 sm:px-6 sm:py-10 lg:px-8 lg:py-16"
        >
            {/* Subtle background details */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 top-0 -z-10 h-80 w-80 rounded-full bg-[#8A9B7A]/15 blur-3xl"
            />

            <div className="mx-auto max-w-7xl">
                {/* Main About Layout */}
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-24">
                    {/* Text Content */}
                    <div className="min-w-0">
                        <div className="mb-5 inline-flex items-center gap-3">
                            <span className="h-px w-8 bg-[#D9B477]" />
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#586B4D] sm:text-sm">
                                The Vanvihar Story
                            </span>
                        </div>

                        <h2 className="max-w-2xl font-serif text-4xl font-medium leading-[1.12] tracking-tight text-[#19382B] sm:text-5xl lg:text-6xl xl:text-7xl">
                            Closer to Nature.
                            <br />
                            <span className="italic text-[#8A9B7A]">
                                Deeper into the Wild.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-2xl text-base leading-7 text-[#26352B]/80 sm:text-lg sm:leading-8">
                            At Vanvihar, we believe the most memorable journeys
                            are the ones that bring us closer to the natural
                            world. From the stillness of the forest to the
                            thrill of a wildlife encounter, every adventure is
                            an opportunity to discover something extraordinary.
                        </p>

                        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#26352B]/70 sm:text-base sm:leading-8">
                            We help you explore India's remarkable wildlife
                            destinations through thoughtfully planned safari
                            experiences, nature stays, and personalised travel
                            assistance. Whether you are seeking your first
                            jungle safari or planning your next wilderness
                            escape, we help make the journey simpler to plan
                            and memorable to experience.
                        </p>

                        {/* Destination Links */}
                        <div className="mt-7">
                            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#586B4D]">
                                Explore the wilderness
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {destinations.map((destination) => (
                                    <Link
                                        key={destination.label}
                                        href={destination.href}
                                        className="rounded-full border border-[#19382B]/15 bg-white/50 px-4 py-2 text-sm text-[#19382B] transition-all duration-300 hover:border-[#19382B] hover:bg-[#19382B] hover:text-[#F5EDE1]"
                                    >
                                        {destination.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-8 flex flex-wrap items-center gap-5">
                            <Link
                                href="/about"
                                className="group inline-flex items-center gap-3 rounded-full bg-[#19382B] px-6 py-3.5 text-sm font-semibold text-[#F5EDE1] shadow-lg shadow-[#19382B]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#26352B]"
                            >
                                Discover Our Story
                                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>

                            <span className="text-xs leading-5 text-[#586B4D] sm:text-sm">
                                Every journey begins with a sense of wonder.
                            </span>
                        </div>
                    </div>

                    {/* Wildlife Image Composition */}
                    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                        <div className="relative mx-auto aspect-[4/4.5] w-full max-w-[440px] sm:aspect-[4/4.2] lg:max-w-[500px]">
                            {/* Decorative Circle */}
                            <div className="absolute left-[12%] top-[12%] h-[72%] w-[72%] rounded-full border border-[#D9B477]/60" />

                            <div className="absolute left-[17%] top-[17%] h-[67%] w-[67%] rounded-full bg-[#D9B477]/70" />

                            <div className="absolute right-[7%] top-[8%] h-20 w-20 rounded-full border border-[#586B4D]/20 sm:h-28 sm:w-28" />

                            {/* Main Wildlife Image */}
                            <div className="absolute inset-x-0 bottom-[4%] top-[2%]">
                                <Image
                                    src="/assets/images/tiger.jpeg"
                                    alt="Tiger in its natural habitat"
                                    fill
                                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 55vw, 500px"
                                    className="object-contain drop-shadow-[0_20px_25px_rgba(25,56,43,0.18)]"
                                />
                            </div>

                            {/* Floating Nature Label */}
                            <div className="absolute left-0 top-[22%] flex items-center gap-3 rounded-2xl border border-white/70 bg-[#F5EDE1]/95 p-3 shadow-lg shadow-[#19382B]/10 backdrop-blur-sm sm:p-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#19382B] text-[#D9B477]">
                                    <Leaf className="h-5 w-5" />
                                </div>

                                <div>
                                    <p className="font-serif text-base font-semibold text-[#19382B] sm:text-lg">
                                        Wild by Nature
                                    </p>
                                    <p className="text-xs text-[#586B4D]">
                                        Made for explorers
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Floating Card */}
                            <div className="absolute bottom-[8%] right-0 max-w-[205px] rounded-2xl border border-white/50 bg-[#19382B] p-4 text-[#F5EDE1] shadow-xl shadow-[#19382B]/20 sm:max-w-[230px] sm:p-5">
                                <Sparkles className="mb-3 h-5 w-5 text-[#D9B477]" />

                                <p className="font-serif text-lg leading-snug sm:text-xl">
                                    Find your own kind of wilderness.
                                </p>

                                <div className="mt-3 h-px w-full bg-white/20" />

                                <p className="mt-3 text-xs leading-5 text-[#F5EDE1]/70">
                                    Explore. Experience. Remember.
                                </p>
                            </div>

                            {/* Small decorative marker */}
                            <div
                                aria-hidden="true"
                                className="absolute right-[13%] top-[3%] h-3 w-3 rounded-full bg-[#586B4D] ring-4 ring-[#586B4D]/10"
                            />
                        </div>
                    </div>
                </div>

                {/* Feature Cards */}
                <div className="mt-16 grid grid-cols-1 gap-4 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                    {highlights.map(({ number, title, description, Icon }) => (
                        <div
                            key={number}
                            className="group relative overflow-hidden rounded-2xl border border-[#19382B]/10 bg-white/65 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#586B4D]/35 hover:bg-white hover:shadow-[0_16px_35px_rgba(25,56,43,0.08)] sm:p-6 lg:p-7"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#19382B] text-[#D9B477] transition-transform duration-300 group-hover:scale-105">
                                    <Icon className="h-5 w-5" />
                                </div>

                                <span className="font-serif text-2xl text-[#D9B477]">
                                    {number}
                                </span>
                            </div>

                            <h3 className="mt-5 font-serif text-xl font-semibold text-[#19382B] sm:text-2xl">
                                {title}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-[#26352B]/70 sm:leading-7">
                                {description}
                            </p>

                            <div className="mt-5 h-px w-full origin-left scale-x-0 bg-[#D9B477] transition-transform duration-500 group-hover:scale-x-100" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}