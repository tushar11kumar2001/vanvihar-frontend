
import Image from "next/image";
import Link from "next/link";

type NationalParkCardProps = {
    name: string;
    location: string;
    image: string;
    description: string;
    highlights: string[];
    href: string;
    reverse?: boolean;
};

export default function NationalParkCard({
    name,
    location,
    image,
    description,
    highlights,
    href,
    reverse = false,
}: NationalParkCardProps) {
    return (
        <article className="group w-full max-w-2xl overflow-hidden rounded-2xl border border-[#D9B477]/40 bg-[#F5EDE1] shadow-lg shadow-[#19382B]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div
                className={`grid grid-cols-1 sm:grid-cols-[42%_58%] ${
                    reverse ? "sm:[&>*:first-child]:order-2 sm:[&>*:last-child]:order-1" : ""
                }`}
            >
                {/* Park Image */}
                <div className="relative h-full overflow-hidden">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        // sizes="(max-width: 640px) 100vw, 300px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent sm:bg-gradient-to-r" />

                    <span className="absolute bottom-4 left-4 rounded-full border border-white/40 bg-black/30 px-3 py-1.5 text-xs text-white backdrop-blur-sm">
                        Wildlife Destination
                    </span>
                </div>

                {/* Short Details */}
                <div className="flex flex-col justify-center p-5 sm:p-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#758267]">
                        National Park
                    </p>

                    <h3 className="mt-2 font-serif text-2xl text-[#19382B]">
                        {name}
                    </h3>

                    <p className="mt-2 flex items-center gap-1.5 text-sm text-[#626B5D]">
                        <span>⌖</span>
                        {location}
                    </p>

                    <p className="mt-4 text-sm leading-6 text-[#626B5D]">
                        {description}
                    </p>

                    <div className="mt-4">
                        <p className="text-xs font-semibold text-[#19382B]">
                            Known for
                        </p>

                        <div className="mt-2 flex flex-wrap gap-2">
                            {highlights.map((highlight) => (
                                <span
                                    key={highlight}
                                    className="rounded-full border border-[#D9B477]/60 px-2.5 py-1 text-xs text-[#586B4D]"
                                >
                                    {highlight}
                                </span>
                            ))}
                        </div>
                    </div>

                    <Link
                        href={href}
                        className="mt-5 inline-flex w-fit items-center gap-3 rounded-full bg-[#19382B] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#586B4D]"
                    >
                        Explore Park
                        <span>↗</span>
                    </Link>
                </div>
            </div>
        </article>
    );
}
