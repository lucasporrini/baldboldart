import { cn } from "@/lib/utils";
import Image from "next/image";

interface ImageSource {
  src: string;
  alt: string;
}

interface ShowImageListItemProps {
  text: string;
  images: [ImageSource, ImageSource];
}

function RevealImageListItem({ text, images }: ShowImageListItemProps) {
  const container = "absolute right-8 -top-1 z-40 h-20 w-16";
  const effect =
    "relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-16 h-16 overflow-hidden transition-all rounded-md";

  return (
    <div className="group relative h-fit w-fit overflow-visible py-8">
      <h1 className="text-7xl font-black text-foreground transition-all duration-500 group-hover:opacity-100 opacity-40">
        {text.toUpperCase()}
      </h1>
      <div className={container}>
        <div className={effect}>
          <Image
            alt={images[1].alt}
            src={images[1].src}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
      <div
        className={cn(
          container,
          "translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:rotate-12"
        )}
      >
        <div className={cn(effect, "duration-200")}>
          <Image
            alt={images[0].alt}
            src={images[0].src}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
}

function RevealImageList() {
  const items: ShowImageListItemProps[] = [
    {
      text: "Napoli caffe",
      images: [
        {
          src: "/napoli/bag.jpg",
          alt: "Image 1",
        },
        {
          src: "/napoli/vitre.jpg",
          alt: "Image 2",
        },
      ],
    },
    {
      text: "Crossift insigna",
      images: [
        {
          src: "/insigna/banniere.jpg",
          alt: "Image 1",
        },
        {
          src: "/insigna/card.jpg",
          alt: "Image 2",
        },
      ],
    },
    {
      text: "Noesis",
      images: [
        {
          src: "/noesis/carte_info.jpg",
          alt: "Image 1",
        },
        {
          src: "/noesis/mockup_logo.jpg",
          alt: "Image 2",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col gap-1 rounded-sm bg-background px-8 py-4">
      <h3 className="text-sm font-black uppercase text-muted-foreground">
        Our services
      </h3>
      {items.map((item, index) => (
        <RevealImageListItem
          key={index}
          text={item.text}
          images={item.images}
        />
      ))}
    </div>
  );
}

export { RevealImageList };
