"use client";

import PackageCard from "@/components/FeaturedCard";
import RightToLeftSlider from "@/components/RightToLeftSlider";
import Image from "next/image";
import Link from "next/link";
import type { Package } from "../types/types";


const packages: Package[] = [
    {
        id: 1,
        title: "Jim Corbett Packages",
        image: "/assets/images/hero-elephant.jpeg",
        href: "/packages/jim-corbett",
    },
    {
        id: 2,
        title: "Kanha National Park Packages",
        image: "/assets/images/tiger.jpeg",
        href: "/packages/kanha",
    },
    {
        id: 3,
        title: "Kaziranga Packages",
        image: "/assets/images/rihno.jpeg",
        href: "/packages/kaziranga",
    },
    {
        id: 4,
        title: "Panna Packages",
        image: "/assets/images/jeep.webp",
        href: "/packages/panna",
    },
    {
        id: 5,
        title: "Ranthambore Packages",
        image: "/assets/images/jeep2.jpeg",
        href: "/packages/ranthambore",
    },
];



export default function PopularPackages() {
    // Duplicate cards to create a seamless loop
    const infinitePackages = [...packages, ...packages];

    return (
        <section className="w-full overflow-hidden bg-green-50 py-10 sm:py-10">
            {/* Heading */}
            <div className="mb-10 px-4 text-center sm:mb-12">
                <div className="flex items-center justify-center gap-2">
                    <span className="h-[3px] w-5 rounded-full bg-[#F4B400]" />
                    <span className="text-xs font-bold tracking-wide text-[#19382B] sm:text-sm">
                        Packages
                    </span>
                    <span className="h-[3px] w-5 rounded-full bg-[#F4B400]" />
                </div>

                <h2 className="mt-3 flex flex-wrap items-center justify-center gap-2 text-3xl font-extrabold leading-tight sm:text-4xl">
                    <span className="text-[#19382B]">Our</span>
                    <span className="rounded-2xl bg-[#303F3B] px-5 py-1 text-[#FFC400] sm:px-6">
                        Popular Packages
                    </span>
                </h2>

                <p className="mt-2 text-sm text-gray-700 sm:text-base">
                    Premium Safari Lodges &amp; Wildlife Resort Stays in India
                </p>
            </div>

            {/* Infinite Auto Slider */}
           <RightToLeftSlider infinitePackages={infinitePackages} />
    

        </section>
    );
}