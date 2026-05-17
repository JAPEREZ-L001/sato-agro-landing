import { CheckCircle2, XCircle } from "lucide-react"
import { LandingReveal } from "@/components/landing/LandingReveal"

export function LandingBeforeAfter() {
  return (
    <section className="landing-section bg-white" id="ejemplo" aria-labelledby="before-after-title">
      <div className="landing-container">
        <LandingReveal className="text-center max-w-2xl mx-auto mb-12">
          <h2 id="before-after-title" className="text-[var(--sato-text-h1)] font-bold tracking-tight mb-4">
            Del boletín del clima a la acción en su parcela
          </h2>
          <p className="text-[var(--sato-text-body-lg)] text-[var(--sato-color-text-muted)]">
            Deje de adivinar qué significa el pronóstico para su cultivo.
          </p>
        </LandingReveal>

        <LandingReveal className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto" delay={100}>
          {/* Antes */}
          <div className="bg-[var(--sato-color-bg-warm)] rounded-[var(--sato-radius-card)] p-8 border border-[var(--sato-color-border)] transition-all duration-300 hover:border-red-200 hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-100 p-2 rounded-full">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-[var(--sato-color-text)]">Antes</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1 text-lg leading-none">•</span>
                <span className="text-[var(--sato-color-text-muted)]">Boletín genérico del clima que no le dice qué hacer.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1 text-lg leading-none">•</span>
                <span className="text-[var(--sato-color-text-muted)]">No sabe si es seguro aplicar fertilizante.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1 text-lg leading-none">•</span>
                <span className="text-[var(--sato-color-text-muted)]">Pierde la ventana de acción antes de que llegue el calor.</span>
              </li>
            </ul>
          </div>

          {/* Con SATO-Agro */}
          <div className="bg-white rounded-[var(--sato-radius-card)] p-8 border-2 border-[var(--sato-color-primary)] shadow-lg relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-[var(--sato-color-primary)] origin-left landing-anim-bar-fill"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[var(--sato-color-primary)]/10 p-2 rounded-full landing-pulse-ring text-[var(--sato-color-primary)]">
                <CheckCircle2 className="w-6 h-6 text-[var(--sato-color-primary)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--sato-color-text)]">Con SATO-Agro</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--sato-color-primary)] shrink-0 mt-0.5" />
                <span className="text-[var(--sato-color-text)] font-medium">Alerta específica para su cultivo y su municipio.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--sato-color-primary)] shrink-0 mt-0.5" />
                <span className="text-[var(--sato-color-text)] font-medium">"Evite fertilizar si el suelo está seco."</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--sato-color-primary)] shrink-0 mt-0.5" />
                <span className="text-[var(--sato-color-text)] font-medium">Aviso con 24 a 48 horas de anticipación.</span>
              </li>
            </ul>
          </div>
        </LandingReveal>
      </div>
    </section>
  )
}
