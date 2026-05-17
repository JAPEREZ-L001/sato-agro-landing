import { Sprout, CloudSun, CheckSquare, History } from "lucide-react"
import { LandingReveal } from "@/components/landing/LandingReveal"

export function LandingProductStack() {
  const stackItems = [
    {
      title: "Su cultivo",
      description: "Maíz o frijol, cuándo sembró y dónde está.",
      icon: Sprout,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "El clima",
      description: "Señales oficiales y pronóstico para su zona.",
      icon: CloudSun,
      color: "text-sky-600",
      bgColor: "bg-sky-100"
    },
    {
      title: "La recomendación",
      description: "Qué hacer ahora.",
      icon: CheckSquare,
      color: "text-[var(--sato-color-primary)]",
      bgColor: "bg-[var(--sato-color-primary)]/10"
    },
    {
      title: "El historial",
      description: "Qué pasó y cómo cambió el riesgo.",
      icon: History,
      color: "text-slate-600",
      bgColor: "bg-slate-100"
    }
  ]

  return (
    <section className="landing-section bg-white" aria-labelledby="stack-title">
      <div className="landing-container">
        <LandingReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 id="stack-title" className="text-[var(--sato-text-h1)] font-bold tracking-tight mb-4">
            Todo en un solo lugar
          </h2>
        </LandingReveal>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical connecting line */}
          <div className="absolute left-8 md:left-1/2 top-8 bottom-8 w-0.5 bg-slate-100 -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-6">
            {stackItems.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center gap-6 md:gap-12 group">
                  {/* Left side (empty for odd, content for even on desktop) */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:order-3'}`}>
                    <div className={`bg-white p-6 rounded-[var(--sato-radius-card)] border border-slate-200 shadow-sm hover:shadow-md transition-shadow ${index % 2 === 0 ? 'md:ml-auto' : ''} max-w-sm`}>
                      <h3 className="text-xl font-bold text-[var(--sato-color-text)] mb-2">{item.title}</h3>
                      <p className="text-[var(--sato-color-text-muted)]">{item.description}</p>
                    </div>
                  </div>

                  {/* Center icon */}
                  <div className={`relative z-10 w-16 h-16 rounded-full bg-white border-4 border-white shadow-md flex items-center justify-center shrink-0 ${item.bgColor} ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>

                  {/* Right side (content for odd, empty for even on desktop) */}
                  <div className={`w-full md:w-1/2 hidden md:block ${index % 2 === 0 ? 'md:order-3' : 'md:text-right'}`}>
                    {/* Empty spacer to maintain layout */}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
