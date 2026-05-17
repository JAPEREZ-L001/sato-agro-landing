import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { LandingReveal } from "@/components/landing/LandingReveal"

export function LandingFaq() {
  const faqs = [
    {
      question: "¿Puedo confiar en una app?",
      answer: "Usamos datos oficiales y reglas claras. Cada alerta muestra la fuente, la fecha y el factor principal. Si algo no cuadra con su parcela, combine la alerta con lo que ve en el campo."
    },
    {
      question: "¿Y si mi parcela es diferente?",
      answer: "El riesgo es una estimación para su zona y cultivo. Su ojo en la parcela sigue siendo importante. SATO-Agro le orienta; usted decide."
    },
    {
      question: "¿Entenderé lo que dice?",
      answer: "Sí. Evitamos palabras técnicas. Le decimos qué revisar o qué evitar, en español sencillo."
    },
    {
      question: "¿Y si no tengo buena señal?",
      answer: "Puede revisar alertas cuando tenga conexión. Pronto: avisos por WhatsApp para zonas con poca señal."
    },
    {
      question: "¿Cuánto cuesta?",
      answer: "Gratis para empezar como productor. Su cooperativa u organización también puede apoyar el servicio."
    }
  ]

  return (
    <section className="landing-section bg-white" id="faq" aria-labelledby="faq-title">
      <div className="landing-container">
        <LandingReveal className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="faq-title" className="text-[var(--sato-text-h1)] font-bold tracking-tight mb-4">
              Preguntas que nos hacen en el campo
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200 py-2">
                <AccordionTrigger className="text-left text-lg font-semibold text-[var(--sato-color-text)] hover:text-[var(--sato-color-primary)] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[var(--sato-color-text-muted)] text-base leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </LandingReveal>
      </div>
    </section>
  )
}
