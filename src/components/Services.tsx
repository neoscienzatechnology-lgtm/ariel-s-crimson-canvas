import { Palette, Share2, FileText, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Palette,
    title: "Identidade Visual",
    description:
      "Criação de marcas memoráveis que refletem a essência do seu negócio e conectam com seu público.",
    color: "wine-intense",
  },
  {
    icon: Share2,
    title: "Social Media",
    description:
      "Estratégias visuais para redes sociais que engajam, convertem e fortalecem sua presença digital.",
    color: "orange-burnt",
  },
  {
    icon: FileText,
    title: "Design de Materiais",
    description:
      "Desenvolvimento de materiais gráficos impressos e digitais com design profissional e impactante.",
    color: "cream",
  },
  {
    icon: TrendingUp,
    title: "Consultoria de Branding",
    description:
      "Orientação estratégica para posicionar sua marca no mercado e alcançar seus objetivos.",
    color: "wine-dark",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Serviços
          </h2>
          <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
            Soluções completas de design para elevar sua marca
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`border-2 transition-all duration-300 hover:shadow-elegant hover:-translate-y-2 fade-in ${
                service.color === "wine-intense"
                  ? "border-[hsl(var(--wine-intense))] bg-background"
                  : service.color === "wine-dark"
                  ? "border-[hsl(var(--wine-dark))] bg-background"
                  : service.color === "orange-burnt"
                  ? "border-[hsl(var(--orange-burnt))] bg-background"
                  : "border-[hsl(var(--cream))] bg-white"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div
                  className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 ${
                    service.color === "wine-intense"
                      ? "bg-[hsl(var(--wine-intense))]"
                      : service.color === "wine-dark"
                      ? "bg-[hsl(var(--wine-dark))]"
                      : service.color === "orange-burnt"
                      ? "bg-[hsl(var(--orange-burnt))]"
                      : "bg-[hsl(var(--cream))]"
                  }`}
                >
                  <service.icon
                    className={`w-7 h-7 ${
                      service.color === "cream"
                        ? "text-wine-dark"
                        : "text-white"
                    }`}
                  />
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
