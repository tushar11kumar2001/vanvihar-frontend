
"use client";

import { useEffect, useState } from "react";

const heroImages = [
    "/assets/images/hero-elephant.jpeg",
    "/assets/images/tiger.jpeg",
    "/assets/images/rihno.jpeg",
    "/assets/images/jeep.webp",
    "/assets/images/jeep2.jpeg",
];

const animatedTexts = [
    " your stay",
    " your journey",
    " your rest house",
];

export default function HeroSection() {
    const [currentImage, setCurrentImage] = useState(0);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [visibleLetters, setVisibleLetters] = useState(0);

    // Background image slider
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // Letter-by-letter typing animation
    useEffect(() => {
        const currentText = animatedTexts[currentTextIndex];

        if (visibleLetters < currentText.length) {
            const timeout = setTimeout(() => {
                setVisibleLetters((prev) => prev + 1);
            }, 150);

            return () => clearTimeout(timeout);
        }

        const pause = setTimeout(() => {
            setVisibleLetters(0);
            setCurrentTextIndex(
                (prev) => (prev + 1) % animatedTexts.length
            );
        }, 1800);

        return () => clearTimeout(pause);
    }, [visibleLetters, currentTextIndex]);

    return (
        <main className="absolute inset-0 h-screen w-full">
            {/* Hero Section */}
            <section className="relative flex h-full min-h-[70vh] overflow-hidden bg-[#19382B] px-10 items-center" >

                {/* Background Image Slider */}
                {heroImages.map((image, index) => (
                    <div
                        key={image}
                        className={`absolute inset-0 h-full bg-cover bg-center bg-no-repeat transition-opacity duration-[1500ms] ease-in-out ${
                            currentImage === index
                                ? "opacity-100"
                                : "opacity-0"
                        }`}
                        style={{ backgroundImage: `url('${image}')` }}
                        aria-hidden="true"
                    />
                ))}

                {/* Light Black Gradient Overlay */}
                <div
                    className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/45"
                    aria-hidden="true"
                />

                {/* Hero Content */}
                <div className="relative top-10 z-10 max-w-5xl">
                    <div className="mb-4 flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#D9B477]">
                        <div className="w-10 border border-[#D9B477]" />

                        <p>INDIA'S WILDLIFE. NEXT JOURNEY</p>
                    </div>

                        <h1 className=" w-[100%] font-serif text-3xl leading-tight text-white md:text-5xl">Explore National parks</h1>
                        <h1 className="w-[70%] font-serif text-3xl leading-tight   md:text-4    xl text-[#D9B477]">
                           <span className="text-white">& book</span> {animatedTexts[currentTextIndex].slice(
                                0,
                                visibleLetters
                            )}
                            <span
                                className="ml-1 inline-block h-[0.8em] w-[2px] animate-pulse bg-[#D9B477] align-middle"
                                aria-hidden="true"
                            />
                        </h1>

                    <p className="mt-6 max-w-xl text-base leading-7 text-white/90 md:text-lg">
                        Explore breathtaking national parks, unforgettable
                        safaris, and extraordinary stays in the heart of nature.
                    </p>

                    <a
                        href="#national-parks"
                        className="mt-8 inline-block rounded-full bg-[#D9B477] px-4 py-3 font-semibold text-[#26352B] transition-colors hover:bg-[#F5EDE1]"
                    >
                        Explore National Parks ↗
                    </a>
                </div>

                {/* Slider Indicators */}
                <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                    {heroImages.map((image, index) => (
                        <button
                            key={image}
                            type="button"
                            aria-label={`Show background image ${index + 1}`}
                            aria-pressed={currentImage === index}
                            onClick={() => setCurrentImage(index)}
                            className={`h-2 rounded-full transition-all duration-500 ${
                                currentImage === index
                                    ? "w-8 bg-[#D9B477]"
                                    : "w-2 bg-white/70 hover:bg-white"
                            }`}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
