import { Link } from "react-router-dom"
import { ArrowRight, AlertTriangle } from "lucide-react"
import { LandingReveal } from "@/components/landing/LandingReveal"

export function LandingTrust() {
  return (
    <section className="landing-section bg-[var(--sato-color-bg-warm)] border-y border-[var(--sato-color-border)] relative overflow-hidden" id="confianza" aria-labelledby="trust-title">
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
            <h2 id="trust-title" className="text-[var(--sato-text-h1)] font-bold tracking-tight mb-6">
              Claro de donde viene. Honesto sobre los limites.
            </h2>
            <p className="text-[var(--sato-text-body-lg)] text-[var(--sato-color-text-muted)]">
              SATO-Agro no adivina el clima de su parcela al detalle. El backend integra{" "}
              <strong className="font-semibold text-[var(--sato-color-text)]">pronósticos de Open-Meteo</strong>, y cuando
              el sistema los obtiene, <strong className="font-semibold text-[var(--sato-color-text)]">observación local</strong>{" "}
              a través de canales oficiales (<strong className="font-semibold text-[var(--sato-color-text)]">SNET / MARN</strong>).
              Las recomendaciones se interpretan para agricultura en El Salvador y el contexto del{" "}
              <strong className="font-semibold text-[var(--sato-color-text)]">
                Ministerio de Agricultura y Ganadería (MAG)
              </strong>
              .
            </p>
          </div>

          <div className="bg-white rounded-[var(--sato-radius-card)] p-8 border border-slate-200 shadow-sm mb-8">
            <h3 className="font-bold text-lg mb-4 text-[var(--sato-color-text)]">Cada alerta le muestra:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Nivel de riesgo (bajo, atención, alto)",
                "Factor principal (calor, lluvia, viento)",
                "Qué hacer ahora",
                "Última actualización",
                "De dónde vienen los datos"
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 transition-transform duration-200 hover:translate-x-1"
                >
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[var(--sato-color-primary)] shrink-0"></div>
                  <span className="text-[var(--sato-color-text-muted)]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg border border-amber-100 mb-8">
            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800 italic">
              Cada parcela es distinta. Use SATO-Agro junto con lo que ve en su campo. No reemplaza al agrónomo ni a su experiencia local.
            </p>
          </div>

          <div className="text-center">
            <Link to="#" className="inline-flex items-center justify-center gap-2 text-[var(--sato-color-primary)] font-semibold hover:text-[var(--sato-color-primary-active)] transition-colors">
              Cómo calculamos el riesgo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </LandingReveal>
      </div>
    </section>
  )
}
