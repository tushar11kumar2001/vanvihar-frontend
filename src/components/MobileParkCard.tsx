import Image from "next/image";
import Link from "next/link";
import { NationalPark } from "../sections/NationalParkSection";


interface MobileParkCardProps {
    park: NationalPark
}

export default function MobileParkCard({
    park,
}: MobileParkCardProps) {
    return (
        <article className="overflow-hidden rounded-xl border border-[#D9B477]/30 bg-[#263F31] shadow-lg">
            {/* Park Image */}
            <div className="relative aspect-[4/3] w-full">
                <Image
                    src={park.image}
                    alt={park.name}
                    fill
                    sizes="(max-width: 767px) 50vw, 240px"
                    className="object-cover"
                />
            </div>

            {/* Park Name and Button */}
            <div className="flex flex-col gap-3 p-3">
                <h3 className="min-h-10 text-sm font-semibold leading-5 text-white">
                    {park.name}
                </h3>

                <Link
                    href={park.href}
                    className="flex min-h-9 items-center justify-center rounded-full bg-[#D9B477] px-3 py-2 text-xs font-semibold text-[#19382B] transition-colors duration-300 hover:bg-[#F5EDE1]"
                >
                    Explore Park →
                </Link>
            </div>
        </article>
    );
}