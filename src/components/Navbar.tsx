import { useEffect, useState } from "react";
import { BriefcaseBusiness, Home, Info, Menu, MessageCircle, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "/#home", label: "Início", icon: Home },
  { href: "/#services", label: "Serviços", icon: BriefcaseBusiness },
  { href: "/#about", label: "Sobre", icon: Info },
  { href: "/#contact", label: "Contato", icon: MessageCircle },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-background/80 backdrop-blur-xl border-b border-primary/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto w-full px-4 md:px-10 lg:px-12 xl:px-16">
        <div className="flex h-16 items-center justify-between md:h-20">
          <a href="#home" className="flex shrink-0 items-center gap-2">
            <img
              src={logo}
              alt="LogicAI Logo"
              className="h-14 w-14 object-contain md:h-24 md:w-24"
            />
          </a>

          <div className="hidden items-center gap-12 md:flex lg:gap-16 xl:gap-20 2xl:gap-24">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-secondary/40 text-foreground transition-colors hover:border-primary/50 hover:text-primary md:hidden"
            onClick={() => setIsMobileMenuOpen((value) => !value)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute left-4 right-4 top-[4.5rem] animate-slide-up md:hidden">
            <div className="glass-card overflow-hidden border-primary/25 bg-background p-3 shadow-2xl shadow-primary/10">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="group flex items-center gap-3 rounded-lg border border-transparent px-3 py-3 text-muted-foreground transition-all duration-300 hover:border-primary/20 hover:bg-primary/10 hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/70 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <link.icon className="h-4 w-4" />
                    </span>
                    <span className="font-medium">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
