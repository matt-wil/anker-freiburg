import { type IconType } from "react-icons";

export type Service = {
  icon: IconType;
  title: string;
  description: string;
  features: string[];
  price: string;
  gradient: string;
};

export function Card({
  service,
  className,
}: {
  service: Service;
  className: string;
}) {
  const IconComponent = service.icon;

  return (
    <div className={`border-2 border-white/60 rounded-2xl ${className}`}>
      <div className={`p-6 rounded-lg shadow-lg`}>
        {IconComponent && (
          <IconComponent
            className={`w-16 h-16 mb-4 bg-gradient-to-r ${service.gradient} p-4 rounded-xl text-white`}
          />
        )}

        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-300 mb-4">{service.description}</p>
        <ul className="list-disc pl-5 mb-4">
          {service.features.map((feature, idx) => (
            <li key={idx} className="text-gray-400">
              {feature}
            </li>
          ))}
        </ul>
        <p className="font-bold text-lg">{service.price}</p>
      </div>
    </div>
  );
}
