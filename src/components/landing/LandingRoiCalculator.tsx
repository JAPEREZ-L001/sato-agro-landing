import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Users, Clock, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function LandingRoiCalculator() {
  const [productores, setProductores] = useState([500])
  const [tecnicos, setTecnicos] = useState([5])

  // Lógica simplificada para la demo
  // Asumimos que un técnico puede hacer 10 visitas a la semana
  // Con SATO-Agro, el 30% de las visitas se reorientan a parcelas en riesgo real
  const visitasTotalesSemana = tecnicos[0] * 10
  const visitasReorientadas = Math.round(visitasTotalesSemana * 0.3)
  const horasAhorradas = visitasReorientadas * 2 // Asumiendo 2 horas por visita (viaje + campo)

  return (
    <section className="landing-section bg-white border-y border-[var(--sato-color-border)]">
      <div className="landing-container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-[var(--sato-text-h1)] font-bold tracking-tight mb-4">
            Menos boletines. Más acción en campo.
          </h2>
          <p className="text-[var(--sato-text-body-lg)] text-[var(--sato-color-text-muted)]">
            Estime cuántas visitas u horas de extensión puede orientar mejor con alertas priorizadas.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-[var(--sato-color-bg-warm)] rounded-2xl p-6 md:p-10 border border-[var(--sato-color-border)] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Inputs */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="font-semibold text-[var(--sato-color-text)] flex items-center gap-2">
                    <Users className="w-5 h-5 text-[var(--sato-color-primary)]" />
                    Productores en cartera
                  </label>
                  <span className="text-xl font-bold text-[var(--sato-color-primary)]">{productores[0]}</span>
                </div>
                <Slider 
                  defaultValue={[500]} 
                  max={5000} 
                  min={50} 
                  step={50}
                  value={productores}
                  onValueChange={setProductores}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-[var(--sato-color-text-muted)] font-medium">
                  <span>50</span>
                  <span>5,000+</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="font-semibold text-[var(--sato-color-text)] flex items-center gap-2">
                    <Users className="w-5 h-5 text-[var(--sato-color-secondary)]" />
                    Técnicos / Extensionistas
                  </label>
                  <span className="text-xl font-bold text-[var(--sato-color-secondary)]">{tecnicos[0]}</span>
                </div>
                <Slider 
                  defaultValue={[5]} 
                  max={50} 
                  min={1} 
                  step={1}
                  value={tecnicos}
                  onValueChange={setTecnicos}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-[var(--sato-color-text-muted)] font-medium">
                  <span>1</span>
                  <span>50+</span>
                </div>
              </div>
            </div>

            {/* Outputs */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[var(--sato-color-primary)]"></div>
              
              <h3 className="text-lg font-bold text-[var(--sato-color-text)] mb-6">Impacto estimado por semana</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-end gap-3 mb-1">
                    <span className="text-4xl font-bold text-[var(--sato-color-primary)] tracking-tight">{visitasReorientadas}</span>
                    <span className="text-lg font-medium text-[var(--sato-color-text)] mb-1">visitas</span>
                  </div>
                  <p className="text-sm text-[var(--sato-color-text-muted)]">
                    potencialmente reorientadas a parcelas en riesgo real.
                  </p>
                </div>
                
                <div className="h-px w-full bg-slate-100"></div>
                
                <div>
                  <div className="flex items-end gap-3 mb-1">
                    <span className="text-4xl font-bold text-[var(--sato-color-secondary)] tracking-tight">{horasAhorradas}</span>
                    <span className="text-lg font-medium text-[var(--sato-color-text)] mb-1">horas</span>
                  </div>
                  <p className="text-sm text-[var(--sato-color-text-muted)] flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    de extensión optimizadas.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link to="#contacto">
                  <Button className="w-full bg-[var(--sato-color-primary)] hover:bg-[var(--sato-color-primary-active)] text-white group">
                    Solicitar piloto
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <p className="text-center text-[10px] text-[var(--sato-color-text-subtle)] mt-3 leading-tight">
                  * Estimación ilustrativa para conversación de piloto. Resultados reales dependen del contexto territorial.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
