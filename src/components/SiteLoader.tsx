import { useEffect, useState } from "react";
import logo from "@/assets/logo-logicai.png";

const SiteLoader = () => {
  const [phase, setPhase] = useState<"loading" | "welcome" | "leaving" | "done">("loading");

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => setPhase("welcome"), 650);
    const welcomeTimer = window.setTimeout(() => setPhase("leaving"), 1450);
    const doneTimer = window.setTimeout(() => setPhase("done"), 2100);

    return () => {
      window.clearTimeout(loadingTimer);
      window.clearTimeout(welcomeTimer);
      window.clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") {
    return null;
  }

  return (
    <div className={`site-loader ${phase === "leaving" ? "site-loader--leaving" : ""}`}>
      <div className="site-loader__content">
        <img src={logo} alt="LogicAI Logo" className="site-loader__logo" />

        <div className="site-loader__text-wrap">
          {phase === "loading" ? (
            <>
              <p className="site-loader__eyebrow">LogicAI Solutions</p>
              <div className="site-loader__bar" aria-label="Carregando">
                <span />
              </div>
            </>
          ) : (
            <p className="site-loader__welcome">Bem-vindo</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SiteLoader;
