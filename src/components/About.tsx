import aboutImage from "@/assets/about-workspace.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative fade-in">
            <div className="aspect-square rounded-lg overflow-hidden shadow-elegant">
              <img
                src={aboutImage}
                alt="Ariel Designer workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
          </div>

          <div className="space-y-6 fade-in-delay">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
              Sobre Ariel
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sou designer apaixonada por transformar ideias em experiências
                visuais memoráveis. Com mais de 8 anos de experiência, ajudo
                marcas a se destacarem e conectarem genuinamente com seu
                público.
              </p>
              <p>
                Acredito que design vai além da estética — é sobre comunicação,
                estratégia e propósito. Cada projeto é uma oportunidade de
                contar uma história única e criar valor real para o negócio.
              </p>
              <p>
                Trabalho com dedicação para entender a essência de cada cliente
                e entregar soluções criativas que fazem a diferença. Do conceito
                à execução, meu compromisso é com a excelência em cada detalhe.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t-2 border-accent/20">
              <div>
                <p className="text-3xl font-display font-bold text-accent">
                  8+
                </p>
                <p className="text-sm text-muted-foreground">Anos</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-accent">
                  150+
                </p>
                <p className="text-sm text-muted-foreground">Projetos</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-accent">
                  50+
                </p>
                <p className="text-sm text-muted-foreground">Clientes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
