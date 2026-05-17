import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { LandingReveal } from "@/components/landing/LandingReveal"
import { ShieldCheck, MapPin, MessageCircle, Wifi, Coins, HelpCircle } from "lucide-react"

export function LandingFaq() {
  const faqs = [
    {
      question: "Puedo confiar en una app?",
      answer: "Usamos datos oficiales y reglas claras. Cada alerta muestra la fuente, la fecha y el factor principal. Si algo no cuadra con su parcela, combine la alerta con lo que ve en el campo.",
      icon: ShieldCheck
    },
    {
      question: "Y si mi parcela es diferente?",
      answer: "El riesgo es una estimacion para su zona y cultivo. Su ojo en la parcela sigue siendo importante. SATO-Agro le orienta; usted decide.",
      icon: MapPin
    },
    {
      question: "Entendere lo que dice?",
      answer: "Si. Evitamos palabras tecnicas. Le decimos que revisar o que evitar, en espanol sencillo.",
      icon: MessageCircle
    },
    {
      question: "Y si no tengo buena senal?",
      answer: "Puede revisar alertas cuando tenga conexion. Pronto: avisos por WhatsApp para zonas con poca senal.",
      icon: Wifi
    },
    {
      question: "Cuanto cuesta?",
      answer: "Gratis para empezar como productor. Su cooperativa u organizacion tambien puede apoyar el servicio.",
      icon: Coins
    }
  ]

  return (
    <section className="landing-section bg-[var(--sato-color-bg)] relative overflow-hidden" id="faq" aria-labelledby="faq-title">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--sato-color-primary)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--sato-color-accent)]/8 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>
      
      {/* Floating SATO symbol */}
      <div className="absolute top-12 left-[8%] opacity-8 pointer-events-none landing-anim-float hidden lg:block" aria-hidden="true">
        <img src="https://res.cloudinary.com/dywctapuj/image/upload/f_png/q_auto/d4ace0ca-4a1b-463c-ad47-b2b69f05b9f0_znkdwz.png" alt="" className="w-20 h-auto" />
      </div>
      
      <div className="landing-container relative">
        <LandingReveal className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[color-mix(in_oklch,var(--sato-color-primary)_12%,transparent)] mb-5">
              <HelpCircle className="w-7 h-7 text-[var(--sato-color-primary)]" />
            </div>
            <h2 id="faq-title" className="text-[var(--sato-text-h1)] font-black tracking-[-0.04em] mb-4 text-[var(--sato-color-text)]">
              Preguntas que nos hacen en el campo
            </h2>
            <p className="text-[var(--sato-text-body-lg)] text-[var(--sato-color-text-muted)] max-w-2xl mx-auto">
              Respuestas claras para productores reales
            </p>
          </div>

          <div className="bg-[color-mix(in_oklch,var(--sato-color-bg-card)_88%,transparent)] rounded-[var(--sato-radius-card-lg)] border border-[color-mix(in_oklch,var(--sato-color-border)_70%,transparent)] shadow-[var(--sato-shadow-elevated)] backdrop-blur-[20px] p-2 sm:p-4">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => {
                const Icon = faq.icon
                return (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-[color-mix(in_oklch,var(--sato-color-border)_50%,transparent)] last:border-b-0 py-1 transition-all duration-300 data-[state=open]:bg-[color-mix(in_oklch,var(--sato-color-primary)_6%,transparent)] rounded-[var(--sato-radius-button)] px-3 sm:px-5 my-1"
                  >
                    <AccordionTrigger className="text-left text-base sm:text-lg font-black text-[var(--sato-color-text)] hover:text-[var(--sato-color-primary)] hover:no-underline py-5 gap-4 [&[data-state=open]>svg]:text-[var(--sato-color-primary)]">
                      <span className="flex items-center gap-4">
                        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[color-mix(in_oklch,var(--sato-color-primary)_10%,transparent)] flex items-center justify-center transition-all duration-300 group-hover:bg-[color-mix(in_oklch,var(--sato-color-primary)_18%,transparent)]">
                          <Icon className="w-5 h-5 text-[var(--sato-color-primary)]" />
                        </span>
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-[var(--sato-color-text-muted)] text-[0.95rem] leading-relaxed pt-0 pb-6 pl-14 pr-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </div>
          
          {/* Bottom CTA hint */}
          <div className="text-center mt-10">
            <p className="text-[0.86rem] text-[var(--sato-color-text-muted)] font-bold">
              Tiene otra pregunta?{" "}
              <a href="mailto:contacto@sato-agro.com" className="text-[var(--sato-color-primary)] font-extrabold hover:underline transition-all">
                Escribanos
              </a>
            </p>
          </div>
        </LandingReveal>
      </div>
    </section>
  )
}
