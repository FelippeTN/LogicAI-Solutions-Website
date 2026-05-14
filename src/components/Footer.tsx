import { ArrowUp } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = [
  { label: "Serviços", href: "#services" },
  { label: "Sobre", href: "#about" },
  { label: "Contato", href: "#contact" },
  { label: "Privacidade", href: "/politica-privacidade" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="minimal-footer">
      <div className="minimal-footer__inner">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <a
            href="#home"
            className="inline-flex w-fit items-center gap-3 no-underline"
            aria-label="LogicAI Solutions"
          >
            <img
              src={logo}
              alt="LogicAI Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/70">
              LogicAI
            </span>
          </a>

          <nav className="flex flex-wrap gap-x-5 gap-y-3 md:justify-end">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="minimal-footer__link">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="minimal-footer__bottom">
          <p>© 2025 LogicAI Solutions</p>
          <button type="button" onClick={scrollToTop} className="minimal-footer__top">
            <span>Topo</span>
            <ArrowUp className="h-3.5 w-3.5" strokeWidth={1.7} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
