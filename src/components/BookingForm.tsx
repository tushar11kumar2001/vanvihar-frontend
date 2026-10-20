
"use client";

import { useState } from "react";

export default function BookingForm() {
    const [formData, setFormData] = useState({
        date: "",
        name: "",
        phone: "",
        email: "",
        visitors: "1",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Safari Booking Details:", formData);

        alert("Your safari booking enquiry has been submitted!");
    };

    return (
        <section
            id="safari-booking"
        >

            <div className="  backdrop-blur-md">
                <form
                    onSubmit={handleSubmit}
                    className="rounded-2xl border border-white/30 bg-white/20 p-5 shadow-xl shadow-[#19382B]/10 backdrop-blur-xl sm:p-5 md:p-5"
                >
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">

                        {/* Visit Date */}
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="date"
                                className="mb-2 block text-sm font-semibold text-white/80"
                            >
                                Safari Date
                            </label>

                            <input
                                id="date"
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                min={new Date().toLocaleDateString("en-CA")}
                                required
                                className="w-full rounded-xl border border-[#D8DCCF] bg-[#FAF9F3] px-4 py-3.5 text-sm text-[#26352B] outline-none transition focus:border-[#586B4D] focus:ring-2 focus:ring-[#586B4D]/20"
                            />
                        </div>

                        {/* Full Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block text-sm font-semibold text-white/80"
                            >
                                Name
                            </label>

                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={handleChange}
                                autoComplete="name"
                                required
                                className="w-full rounded-xl border border-[#D8DCCF] bg-[#FAF9F3] px-4 py-3.5 text-sm text-[#26352B] outline-none transition placeholder:text-[#92988A] focus:border-[#586B4D] focus:ring-2 focus:ring-[#586B4D]/20"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label
                                htmlFor="phone"
                                className="mb-2 block text-sm font-semibold text-white/80"
                            >
                                Phone
                            </label>

                            <input
                                id="phone"
                                type="tel"
                                name="phone"
                                placeholder="Enter phone number"
                                value={formData.phone}
                                onChange={handleChange}
                                autoComplete="tel"
                                pattern="[0-9+\-\s()]{7,20}"
                                title="Enter a valid phone number"
                                required
                                className="w-full rounded-xl border border-[#D8DCCF] bg-[#FAF9F3] px-4 py-3.5 text-sm text-[#26352B] outline-none transition placeholder:text-[#92988A] focus:border-[#586B4D] focus:ring-2 focus:ring-[#586B4D]/20"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-semibold text-white/80"
                            >
                                Email
                            </label>

                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                autoComplete="email"
                                required
                                className="w-full rounded-xl border border-[#D8DCCF] bg-[#FAF9F3] px-4 py-3.5 text-sm text-[#26352B] outline-none transition placeholder:text-[#92988A] focus:border-[#586B4D] focus:ring-2 focus:ring-[#586B4D]/20"
                            />
                        </div>

                        {/* Number of Visitors */}
                        <div>
                            <label
                                htmlFor="visitors"
                                className="mb-2 block text-sm font-semibold text-white/80"
                            >
                                No. of Visitors
                            </label>

                            <input
                                id="visitors"
                                type="number"
                                name="visitors"
                                min="1"
                                max="50"
                                value={formData.visitors}
                                onChange={handleChange}
                                required
                                className="w-full rounded-xl border border-[#D8DCCF] bg-[#FAF9F3] px-4 py-3.5 text-sm text-[#26352B] outline-none transition focus:border-[#586B4D] focus:ring-2 focus:ring-[#586B4D]/20"
                            />
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-[#19382B] px-6 py-4 text-sm font-bold text-white transition duration-300 hover:bg-[#586B4D] focus:outline-none focus:ring-2 focus:ring-[#586B4D] focus:ring-offset-2"
                    >
                        Submit Booking Enquiry
                        <span aria-hidden="true">↗</span>
                    </button>

                    <p className="mt-4 text-center text-xs leading-5 text-white/80">
                        Our team will help you plan your wildlife adventure.
                    </p>
                </form>
            </div>
        </section>
    );
}
