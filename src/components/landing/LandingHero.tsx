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
    <section className="landing-section bg-[var(--sato-color-bg-warm)] overflow-hidden relative" id="ejemplo" aria-label="Hero principal">
      {/* Background decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--sato-color-accent-cyan)]/5 via-transparent to-[var(--sato-color-primary)]/5 pointer-events-none" aria-hidden="true"></div>
      
      <div className="landing-container relative">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          
          {/* Text Content */}
          <LandingReveal variant="left" className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start max-w-3xl mx-auto lg:mx-0">
            <p className="text-sm font-extrabold text-[var(--sato-color-primary)] tracking-widest uppercase mb-5 inline-flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[var(--sato-color-accent-cyan)] landing-anim-pulse-glow" aria-hidden="true"></span>
              {eyebrow}
            </p>
            <h1 className="text-[var(--sato-text-display)] font-extrabold tracking-tight mb-6 leading-[1.05] text-[var(--sato-color-text)]">
              {h1}
            </h1>
            <p className="text-[var(--sato-text-body-lg)] text-[var(--sato-color-text-muted)] mb-10 max-w-2xl leading-relaxed">
              {subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
              {isExternalUrl(primaryCtaLink) ? (
                <a href={primaryCtaLink} className="w-full sm:w-auto">
                  <Button size="lg" className="landing-cta-shine landing-cta-pulse w-full sm:w-auto bg-[var(--sato-color-primary)] hover:bg-[var(--sato-color-primary-active)] text-white border-none shadow-lg hover:shadow-xl rounded-[var(--sato-radius-button)] text-base font-bold h-14 px-10 transition-all duration-500">
                    {primaryCtaText}
                  </Button>
                </a>
              ) : (
                <Link to={primaryCtaLink} className="w-full sm:w-auto">
                  <Button size="lg" className="landing-cta-shine landing-cta-pulse w-full sm:w-auto bg-[var(--sato-color-primary)] hover:bg-[var(--sato-color-primary-active)] text-white border-none shadow-lg hover:shadow-xl rounded-[var(--sato-radius-button)] text-base font-bold h-14 px-10 transition-all duration-500">
                    {primaryCtaText}
                  </Button>
                </Link>
              )}
              {secondaryCtaLink.startsWith("#") ? (
                <a
                  href={secondaryCtaLink}
                  className="w-full sm:w-auto group flex items-center justify-center gap-2 text-base font-semibold text-[var(--sato-color-text-muted)] hover:text-[var(--sato-color-primary)] transition-all duration-300 h-14 px-4"
                >
                  {secondaryCtaText}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </a>
              ) : (
                <Link
                  to={secondaryCtaLink}
                  className="w-full sm:w-auto group flex items-center justify-center gap-2 text-base font-semibold text-[var(--sato-color-text-muted)] hover:text-[var(--sato-color-primary)] transition-all duration-300 h-14 px-4"
                >
                  {secondaryCtaText}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              )}
            </div>
            
            {microcopy && (
              <p className="mt-6 text-sm text-[var(--sato-color-text-subtle)] font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[var(--sato-color-accent-cyan)]" aria-hidden="true" />
                {microcopy}
              </p>
            )}
          </LandingReveal>

          {/* Media / Mock UI */}
          <LandingReveal variant="right" delay={150} className="flex-1 w-full max-w-md lg:max-w-none relative">
            <div className="relative mx-auto w-full max-w-[360px] aspect-[4/5] bg-white rounded-[var(--sato-radius-card-lg)] shadow-2xl border border-[var(--sato-color-border)] overflow-hidden flex flex-col landing-anim-float landing-hover-lift">
              {/* Mock App Header */}
              <div className="h-16 bg-gradient-to-r from-[var(--sato-color-primary)] to-[var(--sato-color-primary-light)] flex items-center px-5">
                <img 
                  src="/images/sato-symbol.png" 
                  alt="" 
                  className="h-10 w-auto rounded-lg" 
                  aria-hidden="true"
                />
                <div className="ml-4">
                  <div className="text-white text-sm font-bold">Mi Parcela</div>
                  <div className="text-white/80 text-xs font-medium">San Miguel, El Salvador</div>
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
            
            {/* Decorative elements — más vibrantes */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-[var(--sato-color-accent-cyan)]/20 rounded-full blur-3xl -z-10 landing-anim-blob" aria-hidden="true"></div>
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-[var(--sato-color-primary)]/15 rounded-full blur-3xl -z-10 landing-anim-blob" style={{ animationDelay: "2s" }} aria-hidden="true"></div>
            <div className="absolute top-1/2 -right-4 w-20 h-20 bg-[var(--sato-color-accent-amber)]/20 rounded-full blur-2xl -z-10 landing-anim-float-sm" aria-hidden="true"></div>
          </LandingReveal>
          
        </div>
      </div>
    </section>
  )
}
