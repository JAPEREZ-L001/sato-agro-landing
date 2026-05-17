import { Link } from "react-router-dom"
import { ArrowRight, AlertTriangle } from "lucide-react"
import { LandingReveal } from "@/components/landing/LandingReveal"

export function LandingTrust() {
  return (
    <section className="landing-section bg-[var(--sato-color-bg)] border-y border-[color-mix(in_oklch,var(--sato-color-border)_72%,transparent)] relative overflow-hidden" id="confianza" aria-labelledby="trust-title">
      {/* Decorative background symbol */}
      <div className="absolute -top-12 -right-12 opacity-5 pointer-events-none landing-anim-float hidden lg:block" aria-hidden="true">
        <img src="https://res.cloudinary.com/dywctapuj/image/upload/f_auto/q_auto/d4ace0ca-4a1b-463c-ad47-b2b69f05b9f0_znkdwz.png" alt="" className="w-48 h-auto" />
      </div>
      
      <div className="landing-container relative">
        <LandingReveal className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 landing-anim-float-sm">
              <img src="https://res.cloudinary.com/dywctapuj/image/upload/f_auto/q_auto/d4ace0ca-4a1b-463c-ad47-b2b69f05b9f0_znkdwz.png" alt="" className="w-full h-full object-contain" aria-hidden="true" />
            </div>
            <h2 id="trust-title" className="text-[var(--sato-text-h1)] font-black tracking-[-0.04em] mb-6">
              Claro de donde viene. Honesto sobre los limites.
            </h2>
            <p className="text-[var(--sato-text-body-lg)] text-[color-mix(in_oklch,var(--sato-color-text)_72%,var(--sato-color-text-muted))]">
              SATO-Agro no adivina el clima de su parcela al detalle. El backend integra{" "}
              <strong className="font-black text-[var(--sato-color-text)]">pronosticos de Open-Meteo</strong>, y cuando
              el sistema los obtiene, <strong className="font-black text-[var(--sato-color-text)]">observacion local</strong>{" "}
              a traves de canales oficiales (<strong className="font-black text-[var(--sato-color-text)]">SNET / MARN</strong>).
              Las recomendaciones se interpretan para agricultura en El Salvador y el contexto del{" "}
              <strong className="font-black text-[var(--sato-color-text)]">
                Ministerio de Agricultura y Ganaderia (MAG)
              </strong>
              .
            </p>
          </div>

          {/* Alert list card — design system style */}
          <div className="bg-[color-mix(in_oklch,var(--sato-color-bg-card)_82%,transparent)] rounded-[var(--sato-radius-card)] p-8 border border-[color-mix(in_oklch,var(--sato-color-border)_70%,transparent)] shadow-[var(--sato-shadow-elevated)] backdrop-filter backdrop-blur-[20px] mb-8">
            <h3 className="font-black text-lg mb-4 text-[var(--sato-color-text)]">Cada alerta le muestra:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Nivel de riesgo (bajo, atencion, alto)",
                "Factor principal (calor, lluvia, viento)",
                "Que hacer ahora",
                "Ultima actualizacion",
                "De donde vienen los datos"
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 transition-transform duration-200 hover:translate-x-1"
                >
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[var(--sato-color-primary)] shrink-0"></div>
                  <span className="text-[0.86rem] text-[color-mix(in_oklch,var(--sato-color-text)_86%,transparent)] font-bold">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Warning alert — design system warning style */}
          <div className="flex items-start gap-4 p-4 bg-[#fffbeb] rounded-[var(--sato-radius-button)] border border-[#fde68a] mb-8">
            <AlertTriangle className="w-6 h-6 text-[#78350f] shrink-0 mt-0.5" />
            <p className="text-[0.83rem] text-[#78350f] font-extrabold">
              Cada parcela es distinta. Use SATO-Agro junto con lo que ve en su campo. No reemplaza al agronomo ni a su experiencia local.
            </p>
          </div>

          <div className="text-center">
            <Link to="#" className="inline-flex items-center justify-center gap-2 text-[var(--sato-color-primary)] font-extrabold hover:bg-[color-mix(in_oklch,var(--sato-color-accent)_18%,var(--sato-color-bg))] rounded-[0.85rem] px-4 py-2 transition-all duration-300">
              Como calculamos el riesgo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </LandingReveal>
      </div>
    </section>
  )
}
