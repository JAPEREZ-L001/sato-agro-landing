import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sprout, Calendar, BellRing } from "lucide-react"
import { LandingReveal } from "@/components/landing/LandingReveal"
import { APP_URL } from "@/lib/app-url"

export function LandingGoalGradient() {
  const steps = [
    {
      number: 1,
      title: "Elija su cultivo",
      description: "Maíz o frijol",
      icon: Sprout
    },
    {
      number: 2,
      title: "Indique cuándo sembró",
      description: "Para saber la fase",
      icon: Calendar
    },
    {
      number: 3,
      title: "Reciba su primera alerta",
      description: "Orientación inmediata",
      icon: BellRing
    }
  ]

  return (
    <section className="landing-section bg-[var(--sato-color-bg-warm)] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--sato-color-primary)]/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="landing-container relative z-10">
        <LandingReveal className="max-w-4xl mx-auto text-center">
          <h2 className="text-[var(--sato-text-display)] font-bold tracking-tight mb-4 text-[var(--sato-color-text)]">
            Empiece antes de la próxima canícula
          </h2>
          <p className="text-[var(--sato-text-body-lg)] text-[var(--sato-color-text-muted)] mb-12">
            En pocos minutos puede recibir su primera orientación.
          </p>

          {/* 3 Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-8 left-[16.66%] right-[16.66%] h-0.5 bg-[var(--sato-color-border)] -z-10"></div>
            
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-[var(--sato-color-primary)] flex items-center justify-center mb-4 shadow-sm relative">
                    <Icon className="w-6 h-6 text-[var(--sato-color-primary)]" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[var(--sato-color-primary)] text-white text-xs font-bold flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-[var(--sato-color-text)] mb-1">{step.title}</h3>
                  <p className="text-sm text-[var(--sato-color-text-muted)]">{step.description}</p>
                </div>
              )
            })}
          </div>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4">
            <a href={APP_URL}>
              <Button size="lg" className="bg-[var(--sato-color-primary)] hover:bg-[var(--sato-color-primary-active)] text-white border-none shadow-md rounded-[var(--sato-radius-button)] text-lg h-14 px-10 w-full sm:w-auto transform hover:scale-105 transition-all">
                Revisar mi cultivo gratis
              </Button>
            </a>
            
            <p className="text-sm font-medium text-[var(--sato-color-text-subtle)]">
              Gratis · 2 minutos · Sin tarjeta
            </p>
            
            <Link to="#" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--sato-color-text-muted)] hover:text-[var(--sato-color-primary)] transition-colors">
              Cómo calculamos el riesgo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </LandingReveal>
      </div>
    </section>
  )
}
