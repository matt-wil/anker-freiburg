import { Card } from "@/components/Card";
import { useTranslations } from "next-intl";
import { iconMap } from "@/lib/iconMap";

import { I18nService, I18nFeature, RenderableService } from "@/types";

export default function Services() {
  const tServices = useTranslations("services");
  const tFeatures = useTranslations("features");

  const services = tServices.raw("items") as I18nService[];
  const features = tFeatures.raw("items") as I18nFeature[];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        {/* Services Header */}
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl mb-6">
            <span>{tServices("title")}</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto">{tServices("text")}</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index: number) => {
            const IconComponent = iconMap[service.icon];

            return (
              <Card
                key={index}
                service={
                  {
                    ...service,
                    icon: IconComponent,
                  } as RenderableService
                }
                className="relative overflow-hidden group hover:shadow-elegant transition-smooth border-border/50 bg-card/80 backdrop-blur-sm"
              />
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];

            return (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50"
              >
                {/* Render component */}
                <div
                  className={`p-1 rounded-2xl bg-gradient-to-br ${feature.gradient}`}
                >
                  {IconComponent && <IconComponent className={`w-15 h-15`} />}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
