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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--sato-color-primary)]/5 rounded-full blur-3xl -z-10 landing-anim-blob"></div>
      
      {/* Decorative SATO symbol - floating in background */}
      <div className="absolute top-8 right-[5%] opacity-10 pointer-events-none landing-anim-float hidden lg:block" aria-hidden="true">
        <img src="https://res.cloudinary.com/dywctapuj/image/upload/f_auto/q_auto/d4ace0ca-4a1b-463c-ad47-b2b69f05b9f0_znkdwz.png" alt="" className="w-32 h-auto" />
      </div>
      <div className="absolute bottom-8 left-[5%] opacity-10 pointer-events-none landing-anim-float-sm hidden lg:block" style={{ animationDelay: "2s" }} aria-hidden="true">
        <img src="https://res.cloudinary.com/dywctapuj/image/upload/f_auto/q_auto/d4ace0ca-4a1b-463c-ad47-b2b69f05b9f0_znkdwz.png" alt="" className="w-24 h-auto" />
      </div>
      
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
                <div
                  key={index}
                  className="flex flex-col items-center group"
                  style={{ animation: `landing-fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both`, animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-[var(--sato-color-primary)] flex items-center justify-center mb-4 shadow-sm relative transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:rotate-3">
                    <Icon className="w-6 h-6 text-[var(--sato-color-primary)] landing-hover-wiggle" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[var(--sato-color-primary)] text-white text-xs font-bold flex items-center justify-center landing-anim-pulse-glow">
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
              <Button size="lg" className="landing-cta-shine landing-cta-pulse bg-gradient-to-r from-[var(--sato-color-primary)] to-[var(--sato-color-primary-light)] hover:from-[var(--sato-color-primary-active)] hover:to-[var(--sato-color-primary)] text-white border-none shadow-lg hover:shadow-xl rounded-[var(--sato-radius-button)] text-lg font-bold h-14 px-12 w-full sm:w-auto transform hover:scale-105 transition-all duration-500">
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
