import { useEffect } from "react"
import { LandingFooter } from "@/components/landing/LandingFooter"
import { LandingHero } from "@/components/landing/LandingHero"
import { LandingLogoStrip } from "@/components/landing/LandingLogoStrip"
import { LandingFeatureTabs } from "@/components/landing/LandingFeatureTabs"
import { LandingBentoGrid } from "@/components/landing/LandingBentoGrid"
import { LandingRoiCalculator } from "@/components/landing/LandingRoiCalculator"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function LandingInstitucionalPage() {
  useEffect(() => {
    const prev = document.title
    document.title = "SATO-Agro para Instituciones | Decisión agroclimática para cooperativas y ONGs"
    const meta = document.querySelector('meta[name="description"]')
    const prevDesc = meta?.getAttribute("content") ?? ""
    meta?.setAttribute(
      "content",
      "Priorice asistencia agrícola con riesgo agroclimático accionable. SATO-Agro convierte datos climáticos oficiales en alertas y recomendaciones por productor, cultivo y ubicación."
    )
    return () => {
      document.title = prev
      meta?.setAttribute("content", prevDesc)
    }
  }, [])

  return (
    <div className="landing-page min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-[var(--sato-color-border)] bg-white/90 backdrop-blur-lg shadow-sm">
        <div className="landing-container flex h-18 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2 group">
              <img 
                src="https://res.cloudinary.com/dywctapuj/image/upload/f_auto/q_auto/d4ace0ca-4a1b-463c-ad47-b2b69f05b9f0_znkdwz.png" 
                alt="" 
                className="h-10 w-auto transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" 
                aria-hidden="true"
              />
              <img 
                src="https://res.cloudinary.com/dywctapuj/image/upload/f_auto/q_auto/a3355191-33c8-49dd-9540-9f3378391842_xfdbaw.png" 
                alt="SATO" 
                className="h-6 w-auto hidden sm:block"
              />
            </Link>
            <span className="text-xs font-bold px-3 py-1.5 bg-[var(--sato-color-primary)]/10 text-[var(--sato-color-primary)] rounded-full hidden sm:inline-block">
              Para Instituciones
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="landing-nav-link text-sm font-semibold text-[var(--sato-color-text-muted)] hover:text-[var(--sato-color-primary)] hidden sm:block transition-all duration-300">
              Soy productor
            </Link>
            <Button className="landing-cta-shine bg-gradient-to-r from-[var(--sato-color-primary)] to-[var(--sato-color-primary-light)] hover:from-[var(--sato-color-primary-active)] hover:to-[var(--sato-color-primary)] text-white border-none shadow-md hover:shadow-lg rounded-[var(--sato-radius-button)] font-bold transition-all duration-500">
              Solicitar piloto
            </Button>
          </div>
        </div>
      </header>
      <main id="main" className="flex-1">
        <LandingHero 
          eyebrow="Para cooperativas, ONGs y equipos de extensión en El Salvador"
          h1="Priorice asistencia agrícola con riesgo agroclimático accionable"
          subheadline="SATO-Agro convierte datos climáticos oficiales en alertas y recomendaciones por productor, cultivo y ubicación — para que su equipo visite primero lo urgente."
          primaryCtaText="Solicitar piloto con productores"
          primaryCtaLink="#contacto"
          secondaryCtaText="Ver demo"
          secondaryCtaLink="#demo"
          isProductor={false}
        />
        
        <LandingLogoStrip
          text="En piloto con organizaciones que trabajan granos básicos en El Salvador"
          subtext="Modelo de datos integrado: pronósticos globales de Open-Meteo, observación local oficial (SNET/MARN) y el marco agrícola del MAG."
        />
        
        <LandingFeatureTabs isProductor={false} />
        
        <LandingBentoGrid isProductor={false} />
        
        <LandingRoiCalculator />
        
        {/* CTA Institucional */}
        <section className="landing-section bg-[var(--sato-color-primary)] text-white text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-30 landing-anim-gradient pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.18), transparent 45%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.12), transparent 45%)",
            }}
            aria-hidden="true"
          />
          <div className="landing-container max-w-3xl mx-auto relative">
            <h2 className="text-[var(--sato-text-display)] font-bold tracking-tight mb-6">
              Lleve decisiones agroclimáticas al último kilómetro
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="landing-cta-shine bg-white text-[var(--sato-color-primary)] hover:bg-slate-50 border-none shadow-md hover:shadow-xl rounded-[var(--sato-radius-button)] text-lg h-14 px-10 w-full sm:w-auto transition-all duration-300 hover:-translate-y-0.5">
                Solicitar piloto con productores
              </Button>
              <Link to="#contacto" className="group inline-flex items-center justify-center gap-2 text-white/90 hover:text-white font-medium transition-colors h-14 px-6">
                Hablar con el equipo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
        
      </main>
      <LandingFooter />
    </div>
  )
}
