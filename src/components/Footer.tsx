import { ArrowUp, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo-logicai.png";

const footerLinks = [
  { label: "Serviços", href: "#services" },
  { label: "Processo", href: "#process" },
  { label: "Sobre", href: "#about" },
  { label: "Contato", href: "#contact" },
  { label: "Privacidade", href: "/politica-privacidade" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="edge-footer">
      <div className="edge-footer__inner">
        <div className="edge-footer__top">
          <div className="edge-footer__brand">
            <a href="#home" className="inline-flex items-center gap-3 no-underline">
              <img src={logo} alt="LogicAI Logo" className="h-9 w-9 object-contain" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground/70">
                LogicAI Solutions
              </span>
            </a>
            <p className="edge-footer__tagline">
              Sistemas, automações e IA construídos com clareza, propósito e
              consistência.
            </p>
          </div>

          <div className="edge-footer__cols">
            <div className="edge-footer__col">
              <span className="edge-footer__col-title">Navegar</span>
              <nav className="flex flex-col gap-2">
                {footerLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="edge-footer__link"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="edge-footer__link-arrow" strokeWidth={1.5} />
                  </a>
                ))}
              </nav>
            </div>

            <div className="edge-footer__col">
              <span className="edge-footer__col-title">Contato</span>
              <a
                href="mailto:logicaisolutions.suporte@gmail.com"
                className="edge-footer__contact"
              >
                logicaisolutions.suporte@gmail.com
              </a>
              <a
                href="https://wa.me/5521974546156"
                target="_blank"
                rel="noreferrer"
                className="edge-footer__contact"
              >
                (21) 97454-6156
              </a>
              <span className="edge-footer__contact edge-footer__contact--muted">
                Rio de Janeiro · Brasil
              </span>
            </div>
          </div>
        </div>

        <div className="edge-footer__wordmark" aria-hidden="true">
          <span>LOGIC</span>
          <span className="edge-footer__wordmark-dot" />
          <span>AI</span>
        </div>

        <div className="edge-footer__bottom">
          <span>© {new Date().getFullYear()} LogicAI Solutions · Todos os direitos reservados</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="edge-footer__top-btn"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="h-3.5 w-3.5" strokeWidth={1.7} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
