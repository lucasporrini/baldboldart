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
    <div className="flex flex-col items-center justify-center mt-20 px-4">
      <h2 className="text-3xl font-bold mb-12">MES SERVICES</h2>
      <div className="w-full max-w-md">
        {services.map((service, index) => (
          <div key={index} className="group">
            <div className="flex items-start gap-4 px-4">
              <div
                className={`w-2 h-2 mt-[0.875rem] rounded-full bg-${mainColor}`}
              />
              <div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <div className="space-y-2">
                  {service.description.map((line, i) => (
                    <p key={i} className="text-sm text-gray-600">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            {index < services.length - 1 && (
              <div className={`w-full h-[1px] bg-${mainColor} my-8`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
