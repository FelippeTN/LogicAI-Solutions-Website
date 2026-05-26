import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const stack = [
  { name: "TypeScript", group: "Linguagem" },
  { name: "Python", group: "Linguagem" },
  { name: "Go", group: "Linguagem" },
  { name: "React", group: "Frontend" },
  { name: "Next.js", group: "Frontend" },
  { name: "Node.js", group: "Backend" },
  { name: "FastAPI", group: "Backend" },
  { name: "PostgreSQL", group: "Dados" },
  { name: "Redis", group: "Dados" },
  { name: "BigQuery", group: "Dados" },
  { name: "OpenAI", group: "IA" },
  { name: "LangChain", group: "IA" },
  { name: "Pinecone", group: "IA" },
  { name: "AWS", group: "Infra" },
  { name: "GCP", group: "Infra" },
  { name: "Docker", group: "Infra" },
  { name: "Kubernetes", group: "Infra" },
  { name: "Terraform", group: "Infra" },
];

const Stack = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="stack"
      className={`section-reveal stack-section ${isVisible ? "is-visible" : ""}`}
    >
      <div className="minimal-section__inner stack-section__inner">
        <div className="section-reveal-item stack-section__header">
          <span className="minimal-kicker">Stack</span>
          <h2 className="stack-title">
            Ferramentas modernas. Decisões pragmáticas.
          </h2>
        </div>

        <div className="stack-chips">
          {stack.map((tech, index) => (
            <span
              key={tech.name}
              className="section-reveal-item stack-chip"
              style={{ transitionDelay: `${index * 30}ms` }}
            >
              <span className="stack-chip__group">{tech.group}</span>
              <span className="stack-chip__name">{tech.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
