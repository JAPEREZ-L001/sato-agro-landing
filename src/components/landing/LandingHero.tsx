import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react"
import { LandingReveal } from "@/components/landing/LandingReveal"
import { LandingVideoDemo } from "@/components/landing/LandingVideoDemo"
import { isExternalUrl } from "@/lib/app-url"

const VIDEO_DEMO_URL = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sato-app-demo-vertical-vVNJEpRUxXU2qILLZ7beCb8mIwlmgi.mp4"

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
  showVideoDemo?: boolean
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
  showVideoDemo = false,
}: LandingHeroProps) {
  return (
    <section className="landing-section bg-[var(--sato-color-bg)] overflow-hidden relative" id="ejemplo" aria-label="Hero principal">
      {/* Background decorative gradient — sky + earth tones */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,color-mix(in_oklch,var(--sato-color-primary)_16%,transparent),transparent_34rem)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_oklch,var(--sato-color-sky-light)_24%,var(--sato-color-bg)),var(--sato-color-bg)_24rem)]"></div>
      </div>
      
      <div className="landing-container relative">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          
          {/* Text Content */}
          <LandingReveal variant="left" className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start max-w-3xl mx-auto lg:mx-0">
            <p className="text-[0.72rem] font-black text-[var(--sato-color-primary)] tracking-[0.18em] uppercase mb-5 inline-flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[var(--sato-color-accent)] landing-anim-pulse-glow" aria-hidden="true"></span>
              {eyebrow}
            </p>
            <h1 className="text-[var(--sato-text-display)] font-black tracking-[-0.06em] mb-6 leading-[0.9] text-[var(--sato-color-text)]">
              {h1}
            </h1>
            <p className="text-[var(--sato-text-body-lg)] text-[color-mix(in_oklch,var(--sato-color-text)_72%,var(--sato-color-text-muted))] mb-10 max-w-2xl leading-relaxed">
              {subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
              {isExternalUrl(primaryCtaLink) ? (
                <a href={primaryCtaLink} className="w-full sm:w-auto">
                  <Button size="lg" className="landing-cta-shine w-full sm:w-auto bg-[var(--sato-color-primary)] hover:bg-[var(--sato-color-primary-active)] text-[var(--sato-color-primary-foreground)] border-none shadow-lg hover:shadow-xl rounded-[var(--sato-radius-button)] text-base font-extrabold h-[2.75rem] px-10 transition-all duration-300 active:scale-[0.97]">
                    {primaryCtaText}
                  </Button>
                </a>
              ) : (
                <Link to={primaryCtaLink} className="w-full sm:w-auto">
                  <Button size="lg" className="landing-cta-shine w-full sm:w-auto bg-[var(--sato-color-primary)] hover:bg-[var(--sato-color-primary-active)] text-[var(--sato-color-primary-foreground)] border-none shadow-lg hover:shadow-xl rounded-[var(--sato-radius-button)] text-base font-extrabold h-[2.75rem] px-10 transition-all duration-300 active:scale-[0.97]">
                    {primaryCtaText}
                  </Button>
                </Link>
              )}
              {secondaryCtaLink.startsWith("#") ? (
                <a
                  href={secondaryCtaLink}
                  className="w-full sm:w-auto group flex items-center justify-center gap-2 text-base font-extrabold text-[var(--sato-color-text-muted)] hover:text-[var(--sato-color-primary)] transition-all duration-300 h-[2.75rem] px-4"
                >
                  {secondaryCtaText}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </a>
              ) : (
                <Link
                  to={secondaryCtaLink}
                  className="w-full sm:w-auto group flex items-center justify-center gap-2 text-base font-extrabold text-[var(--sato-color-text-muted)] hover:text-[var(--sato-color-primary)] transition-all duration-300 h-[2.75rem] px-4"
                >
                  {secondaryCtaText}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              )}
            </div>
            
            {microcopy && (
              <p className="mt-6 text-[0.78rem] text-[var(--sato-color-text-muted)] font-extrabold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[var(--sato-color-success)]" aria-hidden="true" />
                {microcopy}
              </p>
            )}
          </LandingReveal>

          {/* Media section — Video demo or Mock UI */}
          <LandingReveal variant="right" delay={150} className="flex-1 w-full max-w-md lg:max-w-none relative">
            {showVideoDemo ? (
              <LandingVideoDemo 
                videoSrc={VIDEO_DEMO_URL}
                className="w-full"
              />
            ) : (
              <>
                <div className="relative mx-auto w-full max-w-[min(100%,28rem)] aspect-[4/5] bg-[var(--sato-color-bg)] rounded-[2rem] shadow-[0_26px_80px_rgba(27,62,39,0.18)] border border-[color-mix(in_oklch,var(--sato-color-border)_75%,transparent)] overflow-hidden flex flex-col landing-anim-float landing-hover-lift">
                  {/* Mock App Header */}
                  <div className="h-16 bg-[var(--sato-color-primary)] flex items-center px-5">
                    <img 
                      src="https://res.cloudinary.com/dywctapuj/image/upload/f_auto/q_auto/d4ace0ca-4a1b-463c-ad47-b2b69f05b9f0_znkdwz.png" 
                      alt="" 
                      className="h-10 w-auto rounded-xl" 
                      aria-hidden="true"
                    />
                    <div className="ml-4">
                      <div className="text-[var(--sato-color-primary-foreground)] text-sm font-black">Mi Parcela</div>
                      <div className="text-[var(--sato-color-primary-foreground)]/80 text-xs font-bold">San Miguel, El Salvador</div>
                    </div>
                  </div>
                  
                  {/* Mock App Content */}
                  <div className="flex-1 p-4 bg-[var(--sato-color-bg)] flex flex-col gap-4">
                    {isProductor ? (
                      <>
                        {/* Alert card — warning style from design system */}
                        <div className="bg-[#fffbeb] p-4 rounded-[var(--sato-radius-button)] border border-[#fde68a] relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-1 h-full bg-[var(--sato-color-warning)]"></div>
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5 bg-[color-mix(in_oklch,var(--sato-color-warning)_18%,white)] p-1.5 rounded-full landing-pulse-ring text-[var(--sato-color-warning)]">
                              <AlertTriangle className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="text-[0.65rem] font-black text-[#78350f] uppercase tracking-[0.14em] mb-1">Atencion por calor</div>
                              <div className="text-[var(--sato-color-text)] font-black text-[0.95rem] mb-1">Maiz en floracion</div>
                              <p className="text-[0.78rem] text-[var(--sato-color-text-muted)]">Temperaturas sobre 35C esperadas en los proximos 3 dias.</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Recommendation card */}
                        <div className="bg-[color-mix(in_oklch,var(--sato-color-primary)_10%,transparent)] p-4 rounded-[var(--sato-radius-button)] border border-[color-mix(in_oklch,var(--sato-color-primary)_20%,transparent)]">
                          <div className="text-[0.65rem] font-black text-[var(--sato-color-primary)] uppercase tracking-[0.14em] mb-2">Que hacer hoy</div>
                          <p className="text-[0.88rem] text-[color-mix(in_oklch,var(--sato-color-text)_82%,transparent)] leading-[1.25]">
                            Evite aplicar fertilizante si el suelo esta seco. Revise la humedad en las proximas 24 horas.
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex justify-between items-end mb-2">
                          <div>
                            <div className="text-[0.65rem] text-[var(--sato-color-text-muted)] uppercase font-black tracking-[0.14em]">Riesgo en Cartera</div>
                            <div className="text-2xl font-black text-[var(--sato-color-text)]">12 <span className="text-sm font-bold text-[var(--sato-color-text-muted)]">parcelas</span></div>
                          </div>
                          <div className="bg-[#fffbeb] border border-[#fde68a] text-[#78350f] text-[0.72rem] font-black px-2 py-1 rounded-[0.55rem]">Atencion Alta</div>
                        </div>
                        
                        <div className="space-y-2">
                          {[
                            { name: "Juan Perez", crop: "Maiz - Floracion", risk: "Calor", color: "bg-[var(--sato-color-warning)]" },
                            { name: "Maria Gomez", crop: "Frijol - Siembra", risk: "Seco", color: "bg-[var(--sato-color-warning)]" },
                            { name: "Carlos Ruiz", crop: "Maiz - Llenado", risk: "Normal", color: "bg-[var(--sato-color-primary)]" }
                          ].map((item, i) => (
                            <div
                              key={i}
                              className="bg-[var(--sato-color-bg-card)] p-3 rounded-[var(--sato-radius-button)] border border-[var(--sato-color-border)] shadow-sm flex items-center justify-between landing-anim-fade-up hover:translate-x-1 transition-transform"
                              style={{ animationDelay: `${300 + i * 120}ms` }}
                            >
                              <div className="flex items-center gap-3">
                                <div className={`w-2 h-2 rounded-full ${item.color} ${item.color.includes('warning') ? 'landing-anim-pulse-glow' : ''}`}></div>
                                <div>
                                  <div className="text-[0.86rem] font-black text-[var(--sato-color-text)]">{item.name}</div>
                                  <div className="text-[0.72rem] font-bold text-[var(--sato-color-text-muted)]">{item.crop}</div>
                                </div>
                              </div>
                              <Button variant="ghost" size="sm" className="h-7 text-[0.78rem] font-extrabold text-[var(--sato-color-primary)]">Ver</Button>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Decorative elements — earth + sky tones */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-[var(--sato-color-sky-blue)]/20 rounded-full blur-3xl -z-10 landing-anim-blob" aria-hidden="true"></div>
                <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-[var(--sato-color-primary)]/15 rounded-full blur-3xl -z-10 landing-anim-blob" style={{ animationDelay: "2s" }} aria-hidden="true"></div>
                <div className="absolute top-1/2 -right-4 w-20 h-20 bg-[var(--sato-color-accent)]/20 rounded-full blur-2xl -z-10 landing-anim-float-sm" aria-hidden="true"></div>
              </>
            )}
          </LandingReveal>
          
        </div>
      </div>
    </section>
  )
}
