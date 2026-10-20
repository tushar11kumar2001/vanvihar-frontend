import Image from "next/image";
import Link from "next/link";
import type { Package } from "@/sections/PopularPackages";
export default function PackageCard({ item }: { item: Package }) {
    return (
        <Link
            href={item.href}
            className="group/card relative block h-full overflow-hidden rounded-2xl border border-white/70 bg-[#19382B] shadow-[0_8px_24px_rgba(25,56,43,0.12)] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(25,56,43,0.25)]"
        >
            {/* Image */}
            <div className="relative h-[280px] overflow-hidden sm:h-[320px] lg:h-[340px]">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 78vw, (max-width: 1024px) 45vw, 320px"
                    className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-110"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#10251C] via-[#10251C]/15 to-black/10 transition-opacity duration-500 group-hover/card:from-[#10251C]/95" />

                {/* Top badge */}
                <div className="absolute left-4 top-4">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-[#19382B]/65 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md sm:text-xs">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#D9B477]" />
                        Wildlife Escape
                    </span>
                </div>

                {/* Arrow */}
                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white backdrop-blur-md transition-all duration-500 group-hover/card:rotate-45 group-hover/card:bg-[#D9B477] group-hover/card:text-[#19382B]">
                    <span className="text-xl" aria-hidden="true">↗</span>
                </div>

                {/* Bottom content */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <div className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[#E7C98E]">
                        <span className="h-px w-7 bg-[#D9B477]" />
                        Explore India
                    </div>

                    <h3 className="max-w-[95%] font-serif text-2xl font-medium leading-tight text-white sm:text-3xl">
                        {item.title}
                    </h3>

              
                </div>
            </div>
        </Link>
    );
}