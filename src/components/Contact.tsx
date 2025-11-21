import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entrarei em contato em breve. Obrigada!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Vamos conversar?
          </h2>
          <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
            Entre em contato para discutir seu projeto
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8 fade-in">
            <div>
              <h3 className="text-2xl font-display font-bold text-primary mb-6">
                Informações de contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-primary">Email</p>
                    <p className="text-muted-foreground">
                      contato@arieldesigner.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-primary">Telefone</p>
                    <p className="text-muted-foreground">+55 (11) 98765-4321</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-primary">Localização</p>
                    <p className="text-muted-foreground">
                      São Paulo, SP - Brasil
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 fade-in-delay">
            <div>
              <Input
                name="name"
                placeholder="Seu nome"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-2 border-input focus:border-accent"
              />
            </div>

            <div>
              <Input
                name="email"
                type="email"
                placeholder="Seu email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-2 border-input focus:border-accent"
              />
            </div>

            <div>
              <Textarea
                name="message"
                placeholder="Conte-me sobre seu projeto"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="border-2 border-input focus:border-accent resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6"
            >
              Enviar mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
