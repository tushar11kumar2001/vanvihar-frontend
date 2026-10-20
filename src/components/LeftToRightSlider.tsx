import PackageCard from "./FeaturedCard";
import type { Package } from "../types/types";


type LeftToRightSliderProps = {
    infinitePackages: Package[];
};

export default function LeftToRightSlider({
    infinitePackages,
}: LeftToRightSliderProps) {
    return (
        <>
            <div className="popular-slider relative overflow-hidden">
                <div className="popular-track flex w-max gap-4">
                    {infinitePackages.map((item, index) => (
                        <div
                            key={`${item.id}-${index}`}
                            className="w-[78vw] flex-none px-1 pb-3 sm:w-[45vw] lg:w-[calc((100vw-7rem)/4)] lg:max-w-[320px]"
                        >
                            <PackageCard item={item} />
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
    .popular-track {
        animation: popularResorts 35s linear infinite;
        will-change: transform;
    }

    .popular-slider:hover .popular-track {
        animation-play-state: paused;
    }

    @keyframes popularResorts {
        from {
            transform: translateX(calc(-50% - 8px));
            
        }

        to {
            transform: translateX(0);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .popular-track {
            animation: none;
        }
    }
           `}</style>
        </>
    );

}