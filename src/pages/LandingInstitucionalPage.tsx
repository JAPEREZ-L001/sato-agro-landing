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
      <header className="sticky top-0 z-50 w-full border-b border-[var(--sato-color-border)] bg-white/80 backdrop-blur-md">
        <div className="landing-container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-[var(--sato-color-primary)] flex items-center justify-center">
                <span className="text-white font-bold text-lg leading-none">S</span>
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-[var(--sato-color-text)]">
                SATO-Agro
              </span>
            </Link>
            <span className="text-xs font-semibold px-2 py-1 bg-[var(--sato-color-bg-warm)] text-[var(--sato-color-text-muted)] rounded-md hidden sm:inline-block">
              Para Instituciones
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm font-medium text-[var(--sato-color-text-muted)] hover:text-[var(--sato-color-text)] hidden sm:block">
              Soy productor
            </Link>
            <Button className="bg-[var(--sato-color-primary)] hover:bg-[var(--sato-color-primary-active)] text-white border-none shadow-sm rounded-[var(--sato-radius-button)]">
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
        <section className="landing-section bg-[var(--sato-color-primary)] text-white text-center">
          <div className="landing-container max-w-3xl mx-auto">
            <h2 className="text-[var(--sato-text-display)] font-bold tracking-tight mb-6">
              Lleve decisiones agroclimáticas al último kilómetro
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-[var(--sato-color-primary)] hover:bg-slate-50 border-none shadow-md rounded-[var(--sato-radius-button)] text-lg h-14 px-10 w-full sm:w-auto">
                Solicitar piloto con productores
              </Button>
              <Link to="#contacto" className="inline-flex items-center justify-center gap-2 text-white/90 hover:text-white font-medium transition-colors h-14 px-6">
                Hablar con el equipo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
        
      </main>
      <LandingFooter />
    </div>
  )
}
