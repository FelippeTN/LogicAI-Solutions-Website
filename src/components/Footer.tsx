import { 
  Linkedin, 
  Instagram, 
  Twitter, 
  Github,
  ArrowUp 
} from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    services: [
      { label: "SaaS e Plataformas", href: "#services" },
      { label: "Automação de Processos", href: "#services" },
      { label: "Análise e Dados", href: "#services" },
      { label: "Bots e Assistentes", href: "#services" },
    ],
    company: [
      { label: "Sobre", href: "#about" },
      { label: "Contato", href: "#contact" },
      { label: "Política de Privacidade", href: "/politica-privacidade" },
    ],
    legal: [
      { label: "Política de Privacidade", href: "/politica-privacidade" },
      { label: "Termos de Uso", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="relative pt-10 md:pt-16 pb-6 md:pb-8 border-t border-border">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-3 md:mb-4">

              <a href="#home">
                <img
                  src={logo}
                  alt="LogicAI Logo"
                  className="h-24 w-24 md:h-36 md:w-36"
                />
              </a>
            </div>
            <p className="text-muted-foreground text-sm md:text-base mb-4 md:mb-6 max-w-sm">
              Transformando o futuro através de soluções tecnológicas
              inovadoras. Sua visão, nossa expertise.
            </p>
            <div className="flex gap-3">
              {/* TODO: Adicionar as redes sociais aqui Walaceeee! (No caso, la em cima :)  ) */}
              {/* {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))} */}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground text-sm md:text-base mb-3 md:mb-4">
              Serviços
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-xs md:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-foreground text-sm md:text-base mb-3 md:mb-4">
              Empresa
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-xs md:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-display font-semibold text-foreground text-sm md:text-base mb-3 md:mb-4">
              Legal
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-xs md:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 md:pt-8 border-t border-border gap-3">
          <p className="text-muted-foreground text-xs md:text-sm text-center md:text-left">
            © 2025 LogicAI Solutions - <a className="underline hover:text-primary" href="/politica-privacidade">Política de Privacidade</a>
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <span className="text-xs md:text-sm">Voltar ao topo</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
