"use client";

import { useState } from "react";
import Image from "next/image";

import NationalParkCard from "./ParkShortDescCard";
import MobileParkCard from "./MobileParkCard";

export interface NationalPark {
    id: number;
    name: string;
    location: string;
    image: string;
    description: string;
    highlights: string[];
    href: string;
}

export const nationalParks: NationalPark[] = [
    {
        id: 1,
        name: "Jim Corbett National Park",
        location: "Uttarakhand, India",
        image: "/assets/images/n1.jpeg",
        description:
            "Explore lush forests, Bengal tigers and unforgettable wildlife safari experiences.",
        highlights: ["Bengal Tigers", "Forests", "Jeep Safari"],
        href: "/national-parks/jim-corbett",
    },
    {
        id: 2,
        name: "Ranthambore National Park",
        location: "Rajasthan, India",
        image: "/assets/images/n2.jpeg",
        description:
            "Discover majestic tigers, ancient ruins and scenic lakes in the heart",
        highlights: ["Tigers", "Ancient Fort", "Lakes"],
        href: "/national-parks/ranthambore",
    },
    {
        id: 3,
        name: "Kanha National Park",
        location: "Madhya Pradesh, India",
        image: "/assets/images/n3.webp",
        description:
            "Experience vast sal forests, open meadows and diverse wildlife in a beautiful natural setting.",
        highlights: ["Barasingha", "Sal Forests", "Meadows"],
        href: "/national-parks/kanha",
    },
    {
        id: 4,
        name: "Kaziranga National Park",
        location: "Assam, India",
        image: "/assets/images/n4.jpeg",
        description:
            "Explore grasslands and wetlands famous for their remarkable one-horned rhinoceros population.",
        highlights: ["One-horned Rhino", "Grasslands", "Wetlands"],
        href: "/national-parks/kaziranga",
    },
    {
        id: 5,
        name: "Gir National Park",
        location: "Gujarat, India",
        image: "/assets/images/n5.avif",
        description:
            "Discover the natural habitat of Asiatic lions and the diverse wildlife of Gujarat.",
        highlights: ["Asiatic Lions", "Dry Forests", "Wildlife"],
        href: "/national-parks/gir",
    },
    {
        id: 6,
        name: "Bandhavgarh National Park",
        location: "Madhya Pradesh, India",
        image: "/assets/images/n6.jpeg",
        description:
            "Venture into dense forests and rolling hills known for exciting tiger safari experiences.",
        highlights: ["Tigers", "Hills", "Jeep Safari"],
        href: "/national-parks/bandhavgarh",
    },
];

const visibleInitially = 4;

export default function NationalParks() {
    const [showAll, setShowAll] = useState(false);

    const visibleParks = showAll
        ? nationalParks
        : nationalParks.slice(0, visibleInitially);

    return (
        <section
            id="national-parks"
            className="relative overflow-hidden bg-[#19382B] px-4 pb-16 text-white sm:px-6 md:pb-20"
        >
            {/* Heading */}
            <div className="relative z-10 mx-auto mb-10 mt-10 max-w-3xl text-center md:mb-16">
                <div className="flex items-center justify-center gap-2">
                    <div className="w-10 border border-[#D9B477]" />

                    <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#D9B477]">
                        Explore
                    </p>

                    <div className="w-10 border border-[#D9B477]" />
                </div>

                <h2 className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl">
                    Top National Parks
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">
                    From dense forests to majestic wildlife, explore India's
                    most iconic national parks. Choose a destination to
                    discover stays, safari options and more.
                </p>
            </div>

            {/* Mobile Park Cards */}
            <div className="mx-auto grid max-w-lg grid-cols-2 items-stretch gap-4 md:hidden">
                {visibleParks.map((park) => (
                    <MobileParkCard
                        key={park.id}
                        park={park}
                    />
                ))}
            </div>

            {/* Desktop Zigzag Park Cards */}
            <div className="relative mx-auto hidden max-w-7xl md:block">
                <div className="relative z-10 mx-auto flex max-w-5xl flex-col gap-8 md:gap-12">
                    {visibleParks.map((park, index) => (
                        <div
                            key={park.id}
                            className={`flex w-full ${
                                index % 2 === 0
                                    ? "justify-start"
                                    : "justify-end"
                            }`}
                        >
                            {/* Left Side Images for Odd Cards */}
                            {index % 2 !== 0 && (
                                <div className="flex flex-col justify-center gap-2 p-2">
                                    <Image
                                        src={park.image}
                                        alt={park.name}
                                        width={240}
                                        height={160}
                                        className="h-40 w-48 rounded-xl object-cover lg:w-60"
                                    />

                                    <Image
                                        src={park.image}
                                        alt={park.name}
                                        width={240}
                                        height={160}
                                        className="h-40 w-48 rounded-xl object-cover lg:w-60"
                                    />
                                </div>
                            )}

                            {/* Main Park Card */}
                            <div className="w-full md:w-[75%] lg:w-[65%]">
                                <NationalParkCard
                                    {...park}
                                    reverse={index % 2 !== 0}
                                />
                            </div>

                            {/* Right Side Images for Even Cards */}
                            {index % 2 === 0 && (
                                <div className="flex flex-col justify-center gap-2 px-2">
                                    <Image
                                        src={park.image}
                                        alt={park.name}
                                        width={240}
                                        height={160}
                                        className="h-40 w-48 rounded-xl object-cover lg:w-60"
                                    />

                                    <Image
                                        src={park.image}
                                        alt={park.name}
                                        width={240}
                                        height={160}
                                        className="h-40 w-48 rounded-xl object-cover lg:w-60"
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* View More / Show Less */}
            {nationalParks.length > visibleInitially && (
                <div className="relative z-10 mt-8 text-center md:mt-16">
                    <button
                        type="button"
                        onClick={() => setShowAll((prev) => !prev)}
                        aria-expanded={showAll}
                        className="rounded-full border border-[#D9B477]/70 bg-transparent px-7 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#D9B477] hover:text-[#19382B]"
                    >
                        {showAll
                            ? "Show Less ↑"
                            : "View More Parks →"}
                    </button>
                </div>
            )}
        </section>
    );
}