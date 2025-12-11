import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-muted-foreground">
      <Navbar />
      <main className="container mx-auto px-4 py-28 max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Política de Privacidade
          </h1>
          <p className="text-base md:text-lg">
            A sua privacidade é importante para nós. Esta Política de Privacidade descreve como a LogicAI Solutions coleta, usa, armazena e protege as informações pessoais que você nos fornece ao usar nosso site e nossos serviços.
          </p>
        </div>

        <div className="glass-card p-8 md:p-10 space-y-8">
          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-foreground">1. Coleta de Informações</h2>
            <p>Coletamos as seguintes informações quando você interage com nosso site:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <span className="text-foreground font-semibold">Informações de Contato:</span> Quando você preenche o nosso formulário de contato, coletamos seu nome, endereço de e-mail e a mensagem que você nos envia.
              </li>
              <li>
                <span className="text-foreground font-semibold">Dados de Navegação:</span> Usamos ferramentas como o Google Analytics para coletar dados anônimos sobre como os usuários interagem com o nosso site, incluindo páginas visitadas. Isso nos ajuda a melhorar a experiência do usuário.
              </li>
              <li>
                <span className="text-foreground font-semibold">Cookies:</span> O nosso site utiliza cookies para melhorar a sua experiência de navegação, entender o seu comportamento no site e personalizar o conteúdo.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-foreground">2. Uso das Informações</h2>
            <p>As informações coletadas são usadas para os seguintes propósitos:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Para responder às suas solicitações de contato e fornecer informações sobre nossos serviços.</li>
              <li>Para entender as necessidades dos nossos clientes e personalizar nossas ofertas.</li>
              <li>Para analisar o tráfego do site e melhorar a sua usabilidade e desempenho.</li>
              <li>Para fins de marketing, como enviar e-mails sobre nossos serviços (apenas com o seu consentimento).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-foreground">3. Proteção e Armazenamento</h2>
            <p>
              Implementamos medidas de segurança técnicas e administrativas para proteger suas informações pessoais contra acesso não autorizado, uso indevido ou divulgação. As informações são armazenadas em servidores seguros e apenas funcionários autorizados têm acesso a elas.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-foreground">4. Compartilhamento de Informações</h2>
            <p>
              A LogicAI Solutions não vende, aluga ou compartilha suas informações pessoais com terceiros, exceto quando exigido por lei ou para fornecer os serviços solicitados por você (por exemplo, usando ferramentas de terceiros para enviar e-mails).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-foreground">5. Seus Direitos</h2>
            <p>Você tem o direito de:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Acessar as suas informações pessoais que temos em nosso poder.</li>
              <li>Corrigir informações incorretas ou desatualizadas.</li>
              <li>Solicitar a exclusão dos seus dados (sujeito a certas obrigações legais).</li>
              <li>Revogar o seu consentimento para o uso dos seus dados, a qualquer momento.</li>
            </ul>
            <p>Para exercer qualquer um desses direitos, entre em contato conosco através do nosso formulário ou pelo WhatsApp.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-foreground">6. Contato</h2>
            <p>
              Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos seus dados pessoais, entre em contato conosco:
            </p>
            <address className="not-italic space-y-1">
              <p className="text-foreground font-semibold">LogicAI Solutions</p>
              <p>
                WhatsApp: <a className="text-primary hover:text-primary/80" href="https://wa.me/5521974546156" target="_blank" rel="noreferrer">(21) 97454-6156</a>
              </p>
            </address>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-foreground">7. Alterações nesta Política de Privacidade</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. A data da última atualização será sempre indicada no topo da página. Recomendamos que você revise esta política regularmente.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
