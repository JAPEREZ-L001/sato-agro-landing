import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react"
import { LandingReveal } from "@/components/landing/LandingReveal"
import { isExternalUrl } from "@/lib/app-url"

interface LandingHeroProps {
  eyebrow: string
  h1: string
  subheadline: string
  primaryCtaText: string
  primaryCtaLink: string
  secondaryCtaText: string
  secondaryCtaLink: string
  microcopy?: string
  isProductor?: boolean
}

export function LandingHero({
  eyebrow,
  h1,
  subheadline,
  primaryCtaText,
  primaryCtaLink,
  secondaryCtaText,
  secondaryCtaLink,
  microcopy,
  isProductor = true,
}: LandingHeroProps) {
  return (
    <section className="landing-section bg-[var(--sato-color-bg-warm)] overflow-hidden" id="ejemplo" aria-label="Hero principal">
      <div className="landing-container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Text Content */}
          <LandingReveal variant="left" className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start max-w-3xl mx-auto lg:mx-0">
            <p className="text-sm font-bold text-[var(--sato-color-primary)] tracking-wide uppercase mb-4 inline-flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--sato-color-primary)] landing-anim-float-sm" aria-hidden="true"></span>
              {eyebrow}
            </p>
            <h1 className="text-[var(--sato-text-display)] font-bold tracking-tight mb-6 leading-[1.05] text-[var(--sato-color-text)]">
              {h1}
            </h1>
            <p className="text-[var(--sato-text-body-lg)] text-[var(--sato-color-text-muted)] mb-8 max-w-2xl">
              {subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              {isExternalUrl(primaryCtaLink) ? (
                <a href={primaryCtaLink} className="w-full sm:w-auto">
                  <Button size="lg" className="landing-cta-shine w-full sm:w-auto bg-[var(--sato-color-primary)] hover:bg-[var(--sato-color-primary-active)] text-white border-none shadow-sm hover:shadow-lg rounded-[var(--sato-radius-button)] text-base h-12 px-8 transition-all duration-300 hover:-translate-y-0.5">
                    {primaryCtaText}
                  </Button>
                </a>
              ) : (
                <Link to={primaryCtaLink} className="w-full sm:w-auto">
                  <Button size="lg" className="landing-cta-shine w-full sm:w-auto bg-[var(--sato-color-primary)] hover:bg-[var(--sato-color-primary-active)] text-white border-none shadow-sm hover:shadow-lg rounded-[var(--sato-radius-button)] text-base h-12 px-8 transition-all duration-300 hover:-translate-y-0.5">
                    {primaryCtaText}
                  </Button>
                </Link>
              )}
              {secondaryCtaLink.startsWith("#") ? (
                <a
                  href={secondaryCtaLink}
                  className="w-full sm:w-auto group flex items-center justify-center gap-2 text-base font-medium text-[var(--sato-color-text-muted)] hover:text-[var(--sato-color-text)] transition-colors h-12 px-4"
                >
                  {secondaryCtaText}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              ) : (
                <Link
                  to={secondaryCtaLink}
                  className="w-full sm:w-auto group flex items-center justify-center gap-2 text-base font-medium text-[var(--sato-color-text-muted)] hover:text-[var(--sato-color-text)] transition-colors h-12 px-4"
                >
                  {secondaryCtaText}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
            
            {microcopy && (
              <p className="mt-4 text-sm text-[var(--sato-color-text-subtle)] font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--sato-color-primary)]" aria-hidden="true" />
                {microcopy}
              </p>
            )}
          </LandingReveal>

          {/* Media / Mock UI */}
          <LandingReveal variant="right" delay={150} className="flex-1 w-full max-w-md lg:max-w-none relative">
            <div className="relative mx-auto w-full max-w-[340px] aspect-[4/5] bg-white rounded-[24px] shadow-2xl border border-[var(--sato-color-border)] overflow-hidden flex flex-col landing-anim-float">
              {/* Mock App Header */}
              <div className="h-14 bg-[var(--sato-color-primary)] flex items-center px-4">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <div className="ml-3">
                  <div className="text-white text-sm font-semibold">Mi Parcela</div>
                  <div className="text-white/80 text-xs">San Miguel, El Salvador</div>
                </div>
              </div>
              
              {/* Mock App Content */}
              <div className="flex-1 p-4 bg-slate-50 flex flex-col gap-4">
                {isProductor ? (
                  <>
                    <div className="bg-white p-4 rounded-[var(--sato-radius-card)] shadow-sm border border-amber-200/50 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 bg-amber-100 p-1.5 rounded-full landing-pulse-ring text-amber-500">
                          <AlertTriangle className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">Atención por calor</div>
                          <div className="text-[var(--sato-color-text)] font-semibold text-sm mb-1">Maíz en floración</div>
                          <p className="text-xs text-[var(--sato-color-text-muted)]">Temperaturas sobre 35°C esperadas en los próximos 3 días.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[var(--sato-color-primary)]/5 p-4 rounded-[var(--sato-radius-card)] border border-[var(--sato-color-primary)]/20">
                      <div className="text-xs font-bold text-[var(--sato-color-primary)] uppercase tracking-wider mb-2">Qué hacer hoy</div>
                      <p className="text-sm text-[var(--sato-color-text)] font-medium">
                        Evite aplicar fertilizante si el suelo está seco. Revise la humedad en las próximas 24 horas.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between items-end mb-2">
                      <div>
                        <div className="text-xs text-[var(--sato-color-text-muted)] uppercase font-semibold">Riesgo en Cartera</div>
                        <div className="text-2xl font-bold text-[var(--sato-color-text)]">12 <span className="text-sm font-normal text-[var(--sato-color-text-muted)]">parcelas</span></div>
                      </div>
                      <div className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded-md">Atención Alta</div>
                    </div>
                    
                    <div className="space-y-2">
                      {[
                        { name: "Juan Pérez", crop: "Maíz - Floración", risk: "Calor", color: "bg-amber-500" },
                        { name: "María Gómez", crop: "Frijol - Siembra", risk: "Seco", color: "bg-amber-500" },
                        { name: "Carlos Ruiz", crop: "Maíz - Llenado", risk: "Normal", color: "bg-[var(--sato-color-primary)]" }
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="bg-white p-3 rounded-lg border border-[var(--sato-color-border)] shadow-sm flex items-center justify-between landing-anim-fade-up hover:translate-x-1 transition-transform"
                          style={{ animationDelay: `${300 + i * 120}ms` }}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full ${item.color} ${item.color.includes('amber') ? 'landing-anim-pulse-glow' : ''}`}></div>
                            <div>
                              <div className="text-sm font-semibold text-[var(--sato-color-text)]">{item.name}</div>
                              <div className="text-xs text-[var(--sato-color-text-muted)]">{item.crop}</div>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="h-7 text-xs text-[var(--sato-color-primary)]">Ver</Button>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-400/20 rounded-full blur-2xl -z-10 landing-anim-blob" aria-hidden="true"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[var(--sato-color-primary)]/10 rounded-full blur-2xl -z-10 landing-anim-blob" style={{ animationDelay: "2s" }} aria-hidden="true"></div>
          </LandingReveal>
          
        </div>
      </div>
    </section>
  )
}
