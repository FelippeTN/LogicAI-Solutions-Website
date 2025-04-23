const services = [
    {
      key: "automacao",
      title: "Automação de Processos",
      short: "Implementação de soluções automatizadas para eliminar tarefas repetitivas e aumentar a produtividade.",
      description: "Automatizamos tarefas repetitivas do dia a dia da sua empresa, como envio de e-mails, geração de relatórios ou cadastros. Isso economiza tempo da equipe e evita erros. Ideal para empresas que querem ganhar produtividade sem aumentar a equipe."
    },
    {
      key: "dados",
      title: "Análise e Extração de Dados",
      short: "Coleta, limpeza e interpretação de dados para gerar insights estratégicos e decisões baseadas em dados.",
      description: "Coletamos e organizamos informações do seu negócio (como vendas, clientes ou estoque) e transformamos isso em relatórios fáceis de entender. Assim, você toma decisões com base em dados reais e não em achismos."
    },
    {
      key: "bots",
      title: "Criação de Bots Inteligentes",
      short: "Desenvolvimento de bots para atendimento automatizado, integrações com sistemas e assistentes virtuais.",
      description: "Desenvolvemos assistentes virtuais (bots) que atendem clientes automaticamente no WhatsApp, site ou redes sociais. Eles respondem perguntas, agendam serviços e ajudam no atendimento, mesmo fora do horário comercial."
    },
    {
      key: "ia",
      title: "Machine Learning e IA",
      short: "Modelos preditivos, classificação de dados e soluções inteligentes com aprendizado de máquina.",
      description: "Criamos sistemas que aprendem com seus dados e ajudam a prever resultados — como quais clientes vão comprar mais, ou quando seu estoque vai acabar. É como dar 'inteligência' à sua operação."
    },
    {
      key: "web",
      title: "Desenvolvimento Web e APIs",
      short: "Criação de sites, landing pages, sistemas personalizados, painéis de controle e integrações entre plataformas.",
      description: "Construímos sites profissionais, sistemas internos personalizados e integrações entre plataformas (como loja virtual com sistema de entrega). Tudo sob medida para seu negócio."
    },
    {
      key: "consultoria",
      title: "Consultoria em IA",
      short: "Planejamento, arquitetura e implementação de soluções baseadas em inteligência artificial e transformação digital.",
      description: "Analisamos seu negócio e identificamos oportunidades onde a inteligência artificial pode ser aplicada. Ajudamos no planejamento e implementação, mesmo se você estiver começando do zero com tecnologia."
    }
  ];
  
  export function renderServiceCards() {
    const container = document.getElementById("serviceCards");
    services.forEach((service, i) => {
      const card = document.createElement("div");
      card.className =
        "cursor-pointer border-2 border-cyan-500 p-6 rounded-xl hover:shadow-xl hover:shadow-cyan-500/40 " +
        "transition-all duration-300 bg-gray-900 transform hover:-translate-y-2 z-10";
      card.setAttribute("data-aos", "zoom-in");
      if (i > 0) card.setAttribute("data-aos-delay", 100);
      card.innerHTML = `
        <h4 class=\"text-lg font-medium mb-2 text-cyan-400\">${service.title}</h4>
        <p class=\"text-sm text-gray-300\">${service.short}</p>
      `;
      card.addEventListener("click", () => openModal(service.key));
      container.appendChild(card);
    });
  }

  function openModal(key) {
    const svc = services.find(s => s.key === key);
    if (!svc) return;
  
    // Remove modal anterior
    const prev = document.querySelector(".custom-modal");
    if (prev) prev.remove();
  
    // Cria overlay com estilo inline (evita purging Tailwind)
    const overlay = document.createElement("div");
    overlay.className = "custom-modal";
    Object.assign(overlay.style, {
      position: 'fixed', top: '0', left: '0', width: '100%', height: '100%',
      backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: '10000'
    });
  
    // Conteúdo do modal
    const modalContent = document.createElement("div");
    Object.assign(modalContent.style, {
      backgroundColor: '#1f2937', padding: '1.5rem', borderRadius: '0.75rem', maxWidth: '32rem', width: '100%', position: 'relative'
    });
    modalContent.innerHTML = `
      <button style="position:absolute; top:0.5rem; right:0.75rem; font-size:1.5rem; color:#9ca3af; background:none; border:none; cursor:pointer;" onclick="this.closest('.custom-modal').remove()">&times;</button>
      <h3 style="color:#06b6d4; font-size:1.25rem; font-weight:600; margin-bottom:1rem;">${svc.title}</h3>
      <p style="color:#d1d5db; font-size:0.875rem;">${svc.description}</p>
    `;
  
    // Evita fechamento ao clicar no conteúdo
    modalContent.addEventListener('click', e => e.stopPropagation());
  
    overlay.appendChild(modalContent);
  
    // Fecha ao clicar no overlay
    overlay.addEventListener('click', () => overlay.remove());
  
    document.body.appendChild(overlay);
  }
  
  // Chamada inicial após o DOM carregar
  document.addEventListener("DOMContentLoaded", renderServiceCards);
  