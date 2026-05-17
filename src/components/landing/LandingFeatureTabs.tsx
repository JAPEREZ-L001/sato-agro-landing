import { useState } from "react"
import { cn } from "@/lib/utils"
import { BellRing, CheckSquare, Map, ListChecks } from "lucide-react"
import { LandingReveal } from "@/components/landing/LandingReveal"

interface TabData {
  id: string
  title: string
  subtitle: string
  description: string
  icon: React.ElementType
}

interface LandingFeatureTabsProps {
  isProductor?: boolean
}

export function LandingFeatureTabs({ isProductor = true }: LandingFeatureTabsProps) {
  const tabsProductor: TabData[] = [
    {
      id: "alertas",
      title: "Alertas",
      subtitle: "Le avisamos a tiempo",
      description: "Cuando su cultivo entra en atención por calor, poca lluvia o viento, recibe una alerta clara con el motivo principal.",
      icon: BellRing
    },
    {
      id: "que-hacer",
      title: "Qué hacer",
      subtitle: "Le decimos qué hacer",
      description: "No solo el pronóstico: qué revisar o evitar esta semana, en palabras de campo.",
      icon: CheckSquare
    }
  ]

  const tabsInstitucional: TabData[] = [
    {
      id: "territoriales",
      title: "Alertas territoriales",
      subtitle: "Riesgo por productor y municipio",
      description: "Vista consolidada de cultivos en atención, con factor principal y horizonte de acción.",
      icon: Map
    },
    {
      id: "prescripcion",
      title: "Prescripción",
      subtitle: "Recomendaciones listas para el campo",
      description: "Mensajes en lenguaje simple que el técnico puede validar y transmitir.",
      icon: CheckSquare
    },
    {
      id: "priorizacion",
      title: "Priorización",
      subtitle: "Visite primero lo urgente",
      description: "Lista de parcelas priorizadas por riesgo agroclimático para optimizar rutas de extensión.",
      icon: ListChecks
    }
  ]

  const tabs = isProductor ? tabsProductor : tabsInstitucional
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <section className="landing-section bg-white" id="como-funciona" aria-labelledby="features-title">
      <div className="landing-container">
        <LandingReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 id="features-title" className="text-[var(--sato-text-h1)] font-bold tracking-tight mb-4">
            {isProductor ? "Proteja su cultivo antes de la ventana crítica" : "Los datos existen. Las decisiones no llegan al campo."}
          </h2>
          {!isProductor && (
            <p className="text-[var(--sato-text-body-lg)] text-[var(--sato-color-text-muted)]">
              Boletines genéricos que no priorizan visitas. Extensionismo reactivo, no preventivo.
            </p>
          )}
        </LandingReveal>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Tabs Menu */}
          <div className="w-full lg:w-1/3 flex flex-col gap-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "text-left p-6 rounded-[var(--sato-radius-card)] transition-all duration-200 border-2",
                    isActive 
                      ? "bg-[var(--sato-color-bg-warm)] border-[var(--sato-color-primary)] shadow-md" 
                      : "bg-white border-transparent hover:bg-slate-50"
                  )}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={cn(
                      "p-2 rounded-lg",
                      isActive ? "bg-[var(--sato-color-primary)] text-white" : "bg-slate-100 text-slate-500"
                    )}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className={cn(
                      "font-bold text-lg",
                      isActive ? "text-[var(--sato-color-primary)]" : "text-[var(--sato-color-text)]"
                    )}>
                      {tab.title}
                    </h3>
                  </div>
                  <h4 className="font-semibold text-[var(--sato-color-text)] mb-2">{tab.subtitle}</h4>
                  <p className="text-[var(--sato-color-text-muted)] text-sm leading-relaxed">
                    {tab.description}
                  </p>
                </button>
              )
            })}
          </div>

          {/* Tab Content (Mock UI) */}
          <div className="w-full lg:w-2/3">
            <div className="bg-[var(--sato-color-bg-warm)] rounded-2xl p-8 lg:p-12 border border-[var(--sato-color-border)] min-h-[400px] flex items-center justify-center relative overflow-hidden">
              {/* Abstract representation of the UI based on active tab */}
              <div className="w-full max-w-md bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden z-10 transition-all duration-500 transform">
                {/* Header */}
                <div className="bg-slate-50 border-b border-slate-100 p-4 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  {activeTab === "alertas" && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                          <BellRing className="w-6 h-6 text-amber-600" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-amber-600 uppercase tracking-wider">Atención</div>
                          <div className="text-xl font-bold text-slate-800">Calor extremo</div>
                        </div>
                      </div>
                      <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                      <div className="h-4 bg-slate-100 rounded w-full"></div>
                      <div className="h-4 bg-slate-100 rounded w-5/6"></div>
                    </div>
                  )}
                  
                  {activeTab === "que-hacer" && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-[var(--sato-color-primary)]/10 flex items-center justify-center">
                          <CheckSquare className="w-6 h-6 text-[var(--sato-color-primary)]" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-[var(--sato-color-primary)] uppercase tracking-wider">Recomendación</div>
                          <div className="text-xl font-bold text-slate-800">Acción en campo</div>
                        </div>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded bg-green-100 flex items-center justify-center shrink-0">
                            <div className="w-2 h-2 rounded-full bg-green-600"></div>
                          </div>
                          <div className="h-4 bg-slate-200 rounded w-full"></div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded bg-red-100 flex items-center justify-center shrink-0">
                            <div className="w-2 h-2 rounded-full bg-red-600"></div>
                          </div>
                          <div className="h-4 bg-slate-200 rounded w-5/6"></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "territoriales" && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="h-8 bg-slate-100 rounded w-1/2 mb-4"></div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-24 bg-amber-50 rounded-lg border border-amber-100"></div>
                        <div className="h-24 bg-green-50 rounded-lg border border-green-100"></div>
                        <div className="h-24 bg-slate-50 rounded-lg border border-slate-100"></div>
                        <div className="h-24 bg-red-50 rounded-lg border border-red-100"></div>
                      </div>
                    </div>
                  )}

                  {activeTab === "prescripcion" && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="h-10 bg-slate-100 rounded w-full mb-4"></div>
                      <div className="space-y-2">
                        <div className="h-16 bg-slate-50 rounded-lg border border-slate-100"></div>
                        <div className="h-16 bg-slate-50 rounded-lg border border-slate-100"></div>
                        <div className="h-16 bg-slate-50 rounded-lg border border-slate-100"></div>
                      </div>
                    </div>
                  )}

                  {activeTab === "priorizacion" && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="flex justify-between items-center mb-4">
                        <div className="h-6 bg-slate-100 rounded w-1/3"></div>
                        <div className="h-6 bg-amber-100 rounded w-1/4"></div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <div className="h-4 bg-slate-200 rounded w-24"></div>
                          </div>
                          <div className="h-6 bg-slate-100 rounded w-16"></div>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                            <div className="h-4 bg-slate-200 rounded w-32"></div>
                          </div>
                          <div className="h-6 bg-slate-100 rounded w-16"></div>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                            <div className="h-4 bg-slate-200 rounded w-20"></div>
                          </div>
                          <div className="h-6 bg-slate-100 rounded w-16"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Decorative background blobs based on active tab */}
              <div className={cn(
                "absolute w-64 h-64 rounded-full blur-3xl opacity-20 transition-all duration-700",
                activeTab === "alertas" || activeTab === "territoriales" ? "bg-amber-500 top-10 right-10" :
                activeTab === "que-hacer" || activeTab === "prescripcion" ? "bg-[var(--sato-color-primary)] bottom-10 left-10" :
                "bg-red-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              )}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
