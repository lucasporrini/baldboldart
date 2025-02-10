import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const Slider = () => {
  const plugin = React.useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: true,
    })
  );

  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full max-w-full overflow-hidden">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold">DESIGN EN VEDETTES</h2>
        <p className="text-sm text-orange font-semibold">
          derniers projets ou les plus notables
        </p>
      </div>
      <div className="relative w-full">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            loop: true,
            align: "center",
            skipSnaps: false,
            containScroll: "trimSnaps",
          }}
        >
          <CarouselContent className="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="pl-1 basis-[65%]">
                <div className="p-2 flex flex-col items-center gap-2">
                  <Card className="w-full">
                    <CardContent className="flex aspect-square items-center justify-center p-4">
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                  <button className="text-sm rounded-full bg-orange text-white font-semibold px-4 py-2 mt-2">
                    Voir le projet
                  </button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};
