import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUpRight, AtSign, Compass, PhoneCall } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useMagnetic } from "@/hooks/use-magnetic";

const contactInfo = [
  {
    icon: PhoneCall,
    label: "WhatsApp",
    value: "(21) 97454-6156",
  },
  {
    icon: AtSign,
    label: "E-mail",
    value: "logicaisolutions.suporte@gmail.com",
  },
  {
    icon: Compass,
    label: "Atendimento",
    value: "Projetos remotos em todo o Brasil",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const submitRef = useMagnetic<HTMLButtonElement>({ strength: 0.2, radius: 90 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast({
        title: "Configuração ausente",
        description:
          "Defina VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID e VITE_EMAILJS_PUBLIC_KEY no .env.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      const fullMessage = `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`;

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          message: fullMessage,
        },
        {
          publicKey,
        },
      );

      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Falha ao enviar",
        description: "Não foi possível enviar sua mensagem. Tente novamente.",
        variant: "destructive",
      });
      console.error("Erro ao enviar mensagem:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className={`section-reveal minimal-section ${isVisible ? "is-visible" : ""}`}
    >
      <span className="edge-number" aria-hidden="true">05</span>
      <span className="edge-section-label" aria-hidden="true">Vamos conversar</span>
      <div className="minimal-section__inner">
        <div className="section-reveal-item minimal-section__header">
          <span className="minimal-kicker">Contato / 05</span>
          <div>
            <h2 className="minimal-title">Vamos desenhar o próximo passo.</h2>
            <p className="minimal-copy">
              Conte o que sua empresa precisa automatizar, integrar ou construir.
              A partir disso, indicamos um caminho objetivo.
            </p>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <form
            onSubmit={handleSubmit}
            className="section-reveal-item minimal-form"
          >
            <label className="minimal-field">
              <span>Nome</span>
              <Input
                type="text"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="minimal-input"
                required
              />
            </label>

            <label className="minimal-field">
              <span>Email</span>
              <Input
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="minimal-input"
                required
              />
            </label>

            <label className="minimal-field">
              <span>Mensagem</span>
              <Textarea
                placeholder="Descreva seu projeto ou necessidade..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="minimal-input min-h-[150px]"
                required
              />
            </label>

            <button
              ref={submitRef}
              type="submit"
              className="cta-primary w-full sm:w-fit"
              disabled={isSubmitting}
            >
              <span>{isSubmitting ? "Enviando" : "Enviar mensagem"}</span>
              <ArrowUpRight className="cta-arrow h-4 w-4" strokeWidth={1.8} />
            </button>
          </form>

          <div
            className="section-reveal-item minimal-contact-list"
            style={{ transitionDelay: "120ms" }}
          >
            {contactInfo.map((info, index) => (
              <a
                key={info.label}
                href={
                  info.label === "WhatsApp"
                    ? "https://wa.me/5521974546156"
                    : info.label === "E-mail"
                      ? "mailto:logicaisolutions.suporte@gmail.com"
                      : undefined
                }
                target={info.label === "WhatsApp" ? "_blank" : undefined}
                rel={info.label === "WhatsApp" ? "noreferrer" : undefined}
                className="section-reveal-item minimal-contact-list__item"
                style={{ transitionDelay: `${180 + index * 60}ms` }}
              >
                <info.icon className="h-4 w-4 shrink-0" strokeWidth={1.7} />
                <span>
                  <small>{info.label}</small>
                  {info.value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
