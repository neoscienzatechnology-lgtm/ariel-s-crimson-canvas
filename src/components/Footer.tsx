import { Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--wine-dark))] text-[hsl(var(--cream))] py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">
              Ariel Designer
            </h3>
            <p className="text-[hsl(var(--cream))]/80 leading-relaxed">
              Transformando ideias em design que conecta
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4 text-lg">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-[hsl(var(--cream))]/80 hover:text-[hsl(var(--cream))] transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-[hsl(var(--cream))]/80 hover:text-[hsl(var(--cream))] transition-colors"
                >
                  Portfólio
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-[hsl(var(--cream))]/80 hover:text-[hsl(var(--cream))] transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[hsl(var(--cream))]/80 hover:text-[hsl(var(--cream))] transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4 text-lg">Conecte-se</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-[hsl(var(--cream))]/20 rounded-lg flex items-center justify-center hover:bg-[hsl(var(--orange-burnt))] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[hsl(var(--cream))]/20 rounded-lg flex items-center justify-center hover:bg-[hsl(var(--orange-burnt))] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:ariel.silva.serra@gmail.com"
                className="w-10 h-10 bg-[hsl(var(--cream))]/20 rounded-lg flex items-center justify-center hover:bg-[hsl(var(--orange-burnt))] transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[hsl(var(--cream))]/20 pt-8 text-center">
          <p className="text-[hsl(var(--cream))]/60 text-sm">
            © 2025 Ariel Designer. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
