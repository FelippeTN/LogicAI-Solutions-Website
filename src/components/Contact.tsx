import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "(21) 97454-6156",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@logicai.com.br",
  },
  {
    icon: MapPin,
    label: "Atendimento",
    value: "Projetos remotos em todo o Brasil",
  },
];

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
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Contato
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Vamos <span className="gradient-text">Conversar</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Entre em contato diretamente pelo WhatsApp para solicitar um
            orçamento ou tirar dúvidas, ou envie sua mensagem pelo formulário.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nome
                </label>
                <Input
                  type="text"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-secondary/50 border-border focus:border-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-secondary/50 border-border focus:border-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <Textarea
                  placeholder="Descreva seu projeto ou necessidade..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-secondary/50 border-border focus:border-primary min-h-[150px]"
                  required
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Enviar Mensagem
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <Button asChild variant="glow" size="lg">
                <a href="https://wa.me/5521974546156" target="_blank" rel="noreferrer">
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {info.label}
                    </div>
                    <div className="text-foreground font-medium">
                      {info.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Box */}
            <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <h4 className="font-display text-xl font-bold mb-2">
                Precisa de ajuda imediata?
              </h4>
              <p className="text-muted-foreground mb-4">
                Nossa equipe está disponível 24/7 para atender suas demandas
                urgentes.
              </p>
              <Button variant="glow">
                <Phone className="w-4 h-4" />
                Ligar Agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
