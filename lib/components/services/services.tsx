import { useColor } from "@/lib/context/color-context";

export const Services = () => {
  const { mainColor } = useColor();

  const services = [
    {
      title: "BRAND DESIGN",
      description: [
        "Conception de logo - identité visuelle",
        "Stratégie de communication visuelle",
      ],
    },
    {
      title: "ILLUSTRATION",
      description: ["Illustration - Icons - Affichage - Packaging"],
    },
    {
      title: "MOTION DESIGN",
      description: ["Animation logo - Vidéo illustrative"],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h2 className="text-3xl font-bold">MES SERVICES</h2>
      <div className="flex flex-col w-full mt-8">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="flex items-start gap-2">
              <div className={`w-2 h-2 mt-3 rounded-full bg-${mainColor}`} />
              <div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
                {service.description.map((line, i) => (
                  <p key={i} className="text-sm text-gray-600">
                    {line}
                  </p>
                ))}
              </div>
            </div>
            {index < services.length - 1 && (
              <div className={`w-full h-[1px] bg-${mainColor} my-4`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
