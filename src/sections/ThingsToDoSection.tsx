import {
    Binoculars,
    TentTree,
    TreePine,
    Footprints,
    Moon,
    Landmark,
    Compass,
    Users,
    ArrowUpRight,
} from "lucide-react";

const activities = [
    { name: "Wildlife Safari", icon: Binoculars },
    { name: "Elephant Safari", icon: Compass },
    { name: "Kanha Museum", icon: Landmark },
    { name: "Night Safari", icon: Moon },
    { name: "Nature Trails", icon: TreePine },
    { name: "Trekking", icon: Footprints },
    { name: "Village Visit", icon: Users },
    { name: "Camping", icon: TentTree },
];

export default function ThingsToDoSection() {
    return (
        <section
            id="things-to-do"
            className="overflow-hidden bg-deep-forest-green px-4 py-14 sm:px-6 sm:py-16 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">
                {/* Section Heading */}
                <div className="mb-8 max-w-2xl sm:mb-10">
                    <div className="mb-3 flex items-center gap-3">
                        <span className="h-px w-9 bg-[#D9B477]" />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D9B477] sm:text-xs">
                            Explore Beyond the Ordinary
                        </span>
                    </div>

                    <h2 className="font-serif text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl">
                        Things to Do{" "}
                        <span className="italic text-warm-ivory">
                            in Kanha
                        </span>
                    </h2>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-white sm:text-base">
                        From thrilling wildlife encounters to peaceful moments
                        in nature, discover experiences that make your Kanha
                        journey memorable.
                    </p>
                </div>

                {/* Activity Toasts */}
                <div className="flex flex-wrap gap-3">
                    {activities.map((activity) => {
                        const Icon = activity.icon;

                        return (
                            <div
                                key={activity.name}
                                className="group inline-flex cursor-default items-center gap-2.5 rounded-full border  px-4 py-3 shadow-sm transition-all duration-300 border-[#586B4D] text-[#F5EDE1] hover:shadow-md sm:px-5"
                            >
                                <Icon className="h-4 w-4 shrink-0 text-[#586B4D] transition-colors group-hover:text-[#D9B477]" />

                                <span className="text-sm font-medium">
                                    {activity.name}
                                </span>

                                <ArrowUpRight className="h-3.5 w-3.5 text-[#8A9B7A] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#D9B477]" />
                            </div>
                        );
                    })}
                </div>

           
            </div>
        </section>
    );
}
