import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Santos",
    role: "CEO, Boutique Elegance",
    content:
      "O trabalho da Ariel transformou completamente nossa identidade visual. A atenção aos detalhes e a criatividade são excepcionais!",
    rating: 5,
  },
  {
    name: "Carlos Oliveira",
    role: "Fundador, Tech Innovation",
    content:
      "Profissionalismo e talento em cada entrega. A Ariel entendeu nossa visão e criou algo além do que imaginávamos.",
    rating: 5,
  },
  {
    name: "Ana Paula Costa",
    role: "Diretora de Marketing, Bem Estar",
    content:
      "Trabalhar com a Ariel foi uma experiência incrível. Ela não só entrega design de qualidade, mas também estratégia.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Depoimentos
          </h2>
          <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
            O que meus clientes dizem sobre o trabalho
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="border-2 border-[hsl(var(--wine-dark))] bg-background hover-lift fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[hsl(var(--orange-burnt))] text-[hsl(var(--orange-burnt))]"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t-2 border-[hsl(var(--cream))] pt-4">
                  <p className="font-display font-bold text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
