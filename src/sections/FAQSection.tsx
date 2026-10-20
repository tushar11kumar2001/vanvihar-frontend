"use client";

import { useState } from "react";
import { ChevronDown, Leaf } from "lucide-react";

const faqs = [
    {
        question: "How can I book a jungle safari?",
        answer:
            "Explore our safari packages, select your preferred national park, and contact our team to plan your trip. We can help you with safari bookings, accommodation, and travel arrangements.",
    },
    {
        question: "Which national parks can I visit with Vanvihar?",
        answer:
            "Discover popular wildlife destinations across India, including Jim Corbett, Kanha, Kaziranga, Panna, and Ranthambore National Park. Available packages depend on your destination and travel dates.",
    },
    {
        question: "Are safari permits included in the package?",
        answer:
            "Permit inclusion depends on the package you select. Please check the package details or contact our team to confirm permit availability, safari charges, and booking conditions.",
    },
    {
        question: "What is the best time for a wildlife safari?",
        answer:
            "The ideal time depends on your destination and the wildlife you want to see. Many parks offer excellent viewing during the cooler, drier months. Park opening dates and safari schedules vary by destination.",
    },
    {
        question: "Do you provide accommodation near national parks?",
        answer:
            "You can explore resort and rest-house accommodation options near your preferred destination. Availability, amenities, and pricing depend on your travel dates and selected property.",
    },
    {
        question: "Can I customise my wildlife tour package?",
        answer:
            "Yes! Discuss your preferred destination, travel dates, number of guests, accommodation, and safari experiences with our team to plan a trip that suits your needs.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section
            id="faqs"
            className="relative isolate overflow-hidden bg-[#D0F0C0] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
        >
            {/* Background Decorations */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-[#8A9B7A]/15 blur-3xl sm:h-80 sm:w-80"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -left-20 -z-10 h-64 w-64 rounded-full bg-[#D9B477]/15 blur-3xl sm:h-80 sm:w-80"
            />

            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 xl:gap-20">

                {/* Left Content */}
                <div className="flex min-w-0 flex-col items-start">
                    {/* Section Label */}
                    <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-[#586B4D]/20 bg-white/60 px-3 py-2 sm:px-4">
                        <Leaf className="h-4 w-4 shrink-0 text-[#586B4D]" />

                        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#586B4D] sm:text-xs sm:tracking-[0.18em]">
                            Your Questions, Answered
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="max-w-xl break-words font-serif text-3xl font-medium leading-tight text-[#19382B] sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
                        Everything You Need to Know About Your{" "}
                        <span className="italic text-[#8A9B7A]">
                            Wild Escape
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="mt-4 max-w-lg text-sm leading-6 text-[#26352B]/75 sm:mt-5 sm:text-base sm:leading-7">
                        Planning a wildlife adventure? Find answers to common
                        questions about safaris, national parks, stays, and
                        travel packages.
                    </p>

                    {/* Contact Card */}
                    <div className="mt-6 flex w-full min-w-0 items-start gap-3 rounded-2xl border border-[#19382B]/10 bg-white/65 p-4 sm:mt-8 sm:gap-4 sm:p-5">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#19382B] text-[#D9B477] sm:h-12 sm:w-12">
                            <Leaf className="h-5 w-5" />
                        </div>

                        <div className="min-w-0 flex-1">
                            <h3 className="font-serif text-lg text-[#19382B] sm:text-xl">
                                Still have questions?
                            </h3>

                            <p className="mt-1 text-sm leading-6 text-[#26352B]/70">
                                Our team is happy to help you plan your trip.
                            </p>

                            <a
                                href="#contact"
                                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#586B4D] transition-colors hover:text-[#19382B]"
                            >
                                Talk to our team
                                <span aria-hidden="true">↗</span>
                            </a>
                        </div>
                    </div>

                    {/* Decorative Caption */}
                    <div className="mt-7 hidden items-center gap-3 lg:flex">
                        <div className="h-px w-12 bg-[#D9B477]" />

                        <span className="text-xs uppercase tracking-[0.16em] text-[#586B4D]">
                            Explore. Discover. Connect.
                        </span>
                    </div>
                </div>

                {/* Right FAQ Accordion */}
                <div className="w-full min-w-0 space-y-3 sm:space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={faq.question}
                                className={`min-w-0 overflow-hidden rounded-xl border transition-colors duration-300 sm:rounded-2xl ${
                                    isOpen
                                        ? "border-[#586B4D]/30 bg-white shadow-[0_10px_30px_rgba(25,56,43,0.07)]"
                                        : "border-[#19382B]/10 bg-white/55 hover:border-[#586B4D]/30 hover:bg-white/80"
                                }`}
                            >
                                {/* Question Button */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpenIndex(isOpen ? null : index)
                                    }
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${index}`}
                                    id={`faq-question-${index}`}
                                    className="flex w-full min-w-0 items-center justify-between gap-3 px-4 py-4 text-left sm:gap-4 sm:px-6 sm:py-5"
                                >
                                    <span className="flex min-w-0 flex-1 items-start gap-3 sm:gap-4">
                                        <span
                                            className={`mt-0.5 shrink-0 text-xs font-semibold sm:text-sm ${
                                                isOpen
                                                    ? "text-[#B18A48]"
                                                    : "text-[#8A9B7A]"
                                            }`}
                                        >
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span
                                            className={`min-w-0 break-words text-sm font-semibold leading-6 sm:text-base lg:text-lg ${
                                                isOpen
                                                    ? "text-[#19382B]"
                                                    : "text-[#26352B]"
                                            }`}
                                        >
                                            {faq.question}
                                        </span>
                                    </span>

                                    <span
                                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:h-9 sm:w-9 ${
                                            isOpen
                                                ? "rotate-180 bg-[#19382B] text-[#D9B477]"
                                                : "bg-[#8A9B7A]/15 text-[#19382B]"
                                        }`}
                                    >
                                        <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
                                    </span>
                                </button>

                                {/* Answer with Smooth Animation */}
                                <div
                                    id={`faq-answer-${index}`}
                                    role="region"
                                    aria-labelledby={`faq-question-${index}`}
                                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                                        isOpen
                                            ? "grid-rows-[1fr]"
                                            : "grid-rows-[0fr]"
                                    }`}
                                >
                                    <div className="min-h-0 overflow-hidden">
                                        <p className="break-words px-4 pb-5 text-sm leading-6 text-[#26352B]/75 sm:px-6 sm:pb-6 sm:pl-[4.5rem] sm:leading-7">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}