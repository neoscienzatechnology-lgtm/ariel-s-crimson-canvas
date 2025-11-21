import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ariel.jpg";
const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center pt-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 fade-in">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-primary leading-tight">
              Transformando ideias em design que conecta
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Identidade visual, social media e design estratégico
            </p>
            <Button onClick={scrollToContact} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
              Vamos conversar
            </Button>
          </div>

          <div className="relative fade-in-delay">
            <div className="aspect-square rounded-lg overflow-hidden shadow-elegant">
              <img alt="Ariel Designer" className="w-full h-full object-cover object-[center_20%]" src="/lovable-uploads/9e414c28-54be-47a9-9bf6-3d0113a39b51.png" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;