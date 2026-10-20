"use client";

import { useEffect, useState } from "react";
import BookingForm from "../components/BookingForm";

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
    const [isFormVisible, setIsFormVisible] = useState(false);

    // Background slider and form entrance animation
    useEffect(() => {
        const formTimeout = setTimeout(() => {
            setIsFormVisible(true);
        }, 1200);

        const imageInterval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 5000);

        return () => {
            clearTimeout(formTimeout);
            clearInterval(imageInterval);
        };
    }, []);

    // Typing animation
    useEffect(() => {
        const currentText = animatedTexts[currentTextIndex];

        if (visibleLetters < currentText.length) {
            const timeout = setTimeout(() => {
                setVisibleLetters((prev) => prev + 1);
            }, 120);

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
        <main className="relative w-full">
            <section
                className="
                    relative flex min-h-[calc(100svh-112px)] w-full
                    flex-col justify-center overflow-hidden
                    bg-[#19382B] px-4 py-14
                    sm:px-6
                    md:min-h-[calc(100svh-76px)] md:flex-row
                    md:items-center md:px-10 md:py-12
                    lg:px-14 xl:px-16
                "
            >
                {/* Background image slider */}
                {heroImages.map((image, index) => (
                    <div
                        key={image}
                        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[1500ms] ease-in-out ${
                            currentImage === index
                                ? "opacity-100"
                                : "opacity-0"
                        }`}
                        style={{ backgroundImage: `url('${image}')` }}
                        aria-hidden="true"
                    />
                ))}

                {/* Image overlay */}
                <div
                    className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-black/25"
                    aria-hidden="true"
                />

                {/* Hero content - 60% on desktop */}
                <div className="relative z-10 flex w-full min-w-0 flex-col justify-center md:w-[60%] md:flex-none md:pr-12 lg:pr-16">
                    <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#D9B477] sm:text-sm sm:tracking-[0.25em]">
                        <span className="w-10 shrink-0 border-t-2 border-[#D9B477]" />
                        <span>Discover the wild</span>
                    </div>

                    <h1 className="max-w-3xl font-serif text-[clamp(2.5rem,4vw,4.5rem)] font-medium leading-[1.1] text-white">
                        Explore National Parks
                    </h1>

                    <h2 className="mt-4 min-h-[1.4em] font-serif text-[clamp(2rem,3.2vw,3.5rem)] leading-tight text-[#D9B477]">
                        <span className="text-white">&amp; book</span>
                        {animatedTexts[currentTextIndex].slice(
                            0,
                            visibleLetters
                        )}
                        <span
                            className="ml-1 inline-block h-[0.8em] w-[2px] animate-pulse bg-[#D9B477] align-middle"
                            aria-hidden="true"
                        />
                    </h2>

                    <p className="mt-6 max-w-2xl text-base leading-7 text-white/95 sm:text-lg sm:leading-8 lg:text-xl">
                        Discover breathtaking national parks, unforgettable
                        wildlife safaris, and peaceful stays surrounded by
                        the beauty of nature.
                    </p>

                    <div className="mt-8">
                        <a
                            href="#national-parks"
                            className="inline-flex items-center gap-2 rounded-full bg-[#D9B477] px-7 py-4 text-base font-semibold text-[#26352B] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#F5EDE1] sm:text-lg"
                        >
                            Explore National Parks
                            <span aria-hidden="true">↗</span>
                        </a>
                    </div>
                </div>

                {/* Booking form - 40% on desktop */}
                <div
                    className={`relative z-10 mt-10 hidden w-full min-w-0 transition-all duration-700 ease-out md:mt-0 md:block md:w-[40%] md:flex-none ${
                        isFormVisible
                            ? "translate-y-0 opacity-100"
                            : "pointer-events-none translate-y-6 opacity-0"
                    }`}
                >
                    {isFormVisible && <BookingForm />}
                </div>

                {/* Slider indicators */}
                <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 sm:bottom-6">
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