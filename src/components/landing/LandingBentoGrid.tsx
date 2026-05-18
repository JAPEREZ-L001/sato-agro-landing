import { Link } from "react-router-dom"
import { ArrowRight, AlertTriangle, CheckSquare, MapPin, Users, Download, LayoutDashboard } from "lucide-react"
import { LandingReveal } from "@/components/landing/LandingReveal"

interface LandingBentoGridProps {
  isProductor?: boolean
}

export function LandingBentoGrid({ isProductor = true }: LandingBentoGridProps) {
  return (
    <section className="landing-section bg-[var(--sato-color-bg-warm)]" aria-label="Capacidades clave">
      <LandingReveal className="landing-container">
        {isProductor ? (
          /* Bento Grid Productor (3 cards) */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="landing-bento-card group">
              <div className="h-48 bg-amber-50 rounded-xl mb-6 flex items-center justify-center border border-amber-100 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-transparent"></div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-amber-200 z-10 flex items-center gap-3 transform group-hover:scale-105 group-hover:-rotate-1 transition-transform duration-300">
                  <div className="bg-amber-100 p-2 rounded-full landing-pulse-ring text-amber-500">
                    <AlertTriangle className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-amber-600 uppercase">Atención</div>
                    <div className="font-semibold text-slate-800">Calor extremo</div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[var(--sato-color-text)] mb-2">Su cultivo en riesgo — le avisamos</h3>
              <p className="text-[var(--sato-color-text-muted)] mb-6 flex-1">Vea el nivel de riesgo y cuándo actuar.</p>
            </div>

            {/* Card 2 */}
            <div className="landing-bento-card group">
              <div className="h-48 bg-[var(--sato-color-primary)]/5 rounded-xl mb-6 flex items-center justify-center border border-[var(--sato-color-primary)]/10 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--sato-color-primary)]/10 to-transparent"></div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 z-10 max-w-[80%] transform group-hover:scale-105 group-hover:rotate-1 transition-transform duration-300">
                  <div className="flex items-start gap-3">
                    <CheckSquare className="w-5 h-5 text-[var(--sato-color-primary)] shrink-0 mt-0.5 landing-hover-wiggle" />
                    <div className="text-sm font-medium text-slate-700">Evite aplicar fertilizante si el suelo está seco.</div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[var(--sato-color-text)] mb-2">Qué hacer esta semana</h3>
              <p className="text-[var(--sato-color-text-muted)] mb-6 flex-1">Acciones concretas para las próximas 24–48 horas.</p>
            </div>

            {/* Card 3 */}
            <div className="landing-bento-card group">
              <div className="h-48 bg-slate-100 rounded-xl mb-6 flex items-center justify-center border border-slate-200 overflow-hidden relative">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                <div className="bg-white px-4 py-3 rounded-full shadow-sm border border-slate-200 z-10 flex items-center gap-2 transform group-hover:scale-105 transition-transform duration-300">
                  <MapPin className="w-4 h-4 text-slate-500 landing-hover-wiggle" />
                  <span className="font-medium text-slate-700">San Miguel, El Salvador</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[var(--sato-color-text)] mb-2">Clima en su municipio</h3>
              <p className="text-[var(--sato-color-text-muted)] mb-6 flex-1">Contexto local sin mapas difíciles de leer.</p>
            </div>
          </div>
        ) : (
          /* Bento Grid Institucional (4 cards) */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="landing-bento-card group md:col-span-2 md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[var(--sato-color-text)] mb-3">Dashboard de cartera</h3>
                <p className="text-[var(--sato-color-text-muted)] mb-6 text-lg">Riesgo por productor, cultivo y fase.</p>
                <Link to="#contacto" className="flex items-center gap-2 text-[var(--sato-color-primary)] font-semibold group-hover:text-[var(--sato-color-primary-active)] transition-colors">
                  Solicitar acceso <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="flex-1 h-64 bg-slate-50 rounded-xl border border-slate-200 w-full flex items-center justify-center overflow-hidden relative">
                <LayoutDashboard className="w-16 h-16 text-slate-300 absolute" />
                {/* Abstract dashboard UI */}
                <div className="w-[120%] h-[120%] bg-white rounded-lg shadow-xl border border-slate-200 p-4 transform rotate-[-5deg] translate-x-8 translate-y-8 group-hover:rotate-[-2deg] transition-transform duration-500">
                  <div className="flex gap-4 mb-4">
                    <div className="w-1/3 h-20 bg-amber-50 rounded-md border border-amber-100"></div>
                    <div className="w-1/3 h-20 bg-green-50 rounded-md border border-green-100"></div>
                    <div className="w-1/3 h-20 bg-slate-50 rounded-md border border-slate-100"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-8 bg-slate-100 rounded"></div>
                    <div className="h-8 bg-slate-100 rounded"></div>
                    <div className="h-8 bg-slate-100 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="landing-bento-card group">
              <div className="h-48 bg-slate-50 rounded-xl mb-6 flex items-center justify-center border border-slate-200 overflow-hidden relative">
                <Download className="w-12 h-12 text-slate-300 absolute" />
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 z-10 flex flex-col gap-2 transform group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="h-2 w-24 bg-slate-200 rounded"></div>
                  <div className="h-2 w-32 bg-slate-200 rounded"></div>
                  <div className="h-2 w-16 bg-slate-200 rounded"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[var(--sato-color-text)] mb-2">Recomendaciones exportables</h3>
              <p className="text-[var(--sato-color-text-muted)] mb-6 flex-1">Para visitas y boletines internos.</p>
            </div>

            {/* Card 3 */}
            <div className="landing-bento-card group">
              <div className="h-48 bg-slate-50 rounded-xl mb-6 flex items-center justify-center border border-slate-200 overflow-hidden relative">
                <MapPin className="w-12 h-12 text-slate-300 absolute" />
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#cbd5e1 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
                <div className="w-24 h-24 rounded-full bg-amber-400/20 blur-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="w-16 h-16 rounded-full bg-red-400/20 blur-xl absolute top-1/4 left-1/4"></div>
              </div>
              <h3 className="text-xl font-bold text-[var(--sato-color-text)] mb-2">Mapa territorial</h3>
              <p className="text-[var(--sato-color-text-muted)] mb-6 flex-1">Heatmap por municipio (audiencia técnica).</p>
            </div>

            {/* Card 4 (Full width) */}
            <div className="landing-bento-card group md:col-span-2 bg-[var(--sato-color-primary)] text-white border-none relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 landing-anim-gradient bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.18),transparent_50%)] pointer-events-none" aria-hidden="true"></div>
              <div className="flex flex-col md:flex-row items-center gap-8 relative">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-white">Piloto con productores</h3>
                  <p className="text-white/80 mb-6 text-lg">Implementación acompañada y reportes semanales.</p>
                  <Link to="#contacto" className="landing-cta-shine inline-flex items-center justify-center gap-2 bg-white text-[var(--sato-color-primary)] px-6 py-3 rounded-[var(--sato-radius-button)] font-semibold hover:bg-slate-50 transition-all hover:-translate-y-0.5 hover:shadow-md">
                    Solicitar información
                  </Link>
                </div>
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center landing-anim-float">
                    <Users className="w-12 h-12 text-white/80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </LandingReveal>
    </section>
  )
}
