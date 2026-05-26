import { useEffect, useState } from "react";
import { BriefcaseBusiness, Home, Info, Menu, MessageCircle, X } from "lucide-react";
import logo from "@/assets/logo-logicai.png";
import { useActiveSection } from "@/hooks/use-active-section";

const navLinks = [
  { href: "/#home", section: "home", label: "Início", icon: Home },
  { href: "/#services", section: "services", label: "Serviços", icon: BriefcaseBusiness },
  { href: "/#about", section: "about", label: "Sobre", icon: Info },
  { href: "/#contact", section: "contact", label: "Contato", icon: MessageCircle },
];

const sectionIds = navLinks.map((link) => link.section);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 overflow-visible transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-background/30"
          : "bg-transparent"
      }`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 -z-10 h-36 transition-opacity duration-300 ${
          isScrolled || isMobileMenuOpen ? "opacity-100" : "opacity-70"
        }`}
      >
        <div className="absolute inset-x-0 top-0 h-20 bg-background/40 backdrop-blur-2xl [mask-image:linear-gradient(to_bottom,black_0%,black_58%,transparent_100%)]" />
        <div className="absolute inset-x-0 top-8 h-24 bg-background/22 backdrop-blur-md [mask-image:linear-gradient(to_bottom,transparent_0%,black_28%,transparent_100%)]" />
        <div className="absolute inset-x-0 top-16 h-20 bg-gradient-to-b from-background/14 to-transparent backdrop-blur-sm [mask-image:linear-gradient(to_bottom,transparent_0%,black_18%,transparent_100%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full px-4 md:px-10 lg:px-12 xl:px-16">
        <div className="flex h-16 items-center justify-between md:h-20">
          <a href="#home" className="flex shrink-0 items-center gap-2">
            <img
              src={logo}
              alt="LogicAI Logo"
              className="h-24 w-24 object-contain md:h-32 md:w-32"
            />
          </a>

          <div className="hidden items-center gap-10 md:flex lg:gap-14 xl:gap-16">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link text-sm uppercase tracking-[0.18em] ${
                  activeSection === link.section ? "is-active" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            className="flex h-11 w-11 items-center justify-center border border-foreground/20 bg-background/40 text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background md:hidden"
            onClick={() => setIsMobileMenuOpen((value) => !value)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute left-4 right-4 top-[4.5rem] animate-slide-up md:hidden">
            <div className="overflow-hidden border border-foreground/15 bg-background/95 p-2 shadow-2xl backdrop-blur-xl">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.section;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className={`group flex items-center gap-2.5 border-l-2 px-2.5 py-2 transition-all duration-300 ${
                        isActive
                          ? "border-foreground bg-foreground/5 text-foreground"
                          : "border-transparent text-foreground/60 hover:border-foreground/50 hover:bg-foreground/[0.03] hover:text-foreground"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="flex h-8 w-8 items-center justify-center border border-foreground/15 text-foreground/70 transition-colors group-hover:border-foreground/40 group-hover:text-foreground">
                        <link.icon className="h-4 w-4" />
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
                        {link.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
