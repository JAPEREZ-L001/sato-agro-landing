import { LandingNav } from "@/components/landing/LandingNav"
import { LandingFooter } from "@/components/landing/LandingFooter"
import { LandingReveal } from "@/components/landing/LandingReveal"

export function TerminosPage() {
  return (
    <div className="min-h-screen bg-[var(--sato-color-bg)] flex flex-col">
      <LandingNav />
      
      <main className="flex-1 pt-32 pb-20">
        <div className="landing-container">
          <LandingReveal className="max-w-3xl mx-auto">
            <h1 className="text-[var(--sato-text-h1)] font-black tracking-[-0.04em] mb-6 text-[var(--sato-color-text)]">
              Terminos y Condiciones de Uso
            </h1>
            <p className="text-[var(--sato-color-text-muted)] mb-8">
              Ultima actualizacion: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-slate max-w-none space-y-8">
              <section>
                <h2 className="text-xl font-black text-[var(--sato-color-text)] mb-4">1. Aceptacion de Terminos</h2>
                <p className="text-[var(--sato-color-text-muted)] leading-relaxed">
                  Al utilizar SATO-Agro, usted acepta estos terminos y condiciones. Si no esta de acuerdo con alguna parte de estos terminos, le pedimos que no utilice nuestro servicio.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-black text-[var(--sato-color-text)] mb-4">2. Descripcion del Servicio</h2>
                <p className="text-[var(--sato-color-text-muted)] leading-relaxed mb-4">
                  SATO-Agro es una plataforma de alerta temprana y prescripcion agricola que proporciona:
                </p>
                <ul className="list-disc pl-6 text-[var(--sato-color-text-muted)] space-y-2">
                  <li>Alertas de riesgo climatico basadas en datos meteorologicos oficiales</li>
                  <li>Recomendaciones de manejo agricola personalizadas</li>
                  <li>Informacion sobre condiciones de sequia, exceso de lluvia o temperaturas extremas</li>
                  <li>Orientacion general para cultivos de maiz y frijol</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-black text-[var(--sato-color-text)] mb-4">3. Limitacion de Responsabilidad</h2>
                <p className="text-[var(--sato-color-text-muted)] leading-relaxed mb-4">
                  <strong className="text-[var(--sato-color-text)]">Importante:</strong> SATO-Agro proporciona informacion orientativa basada en modelos climaticos y datos historicos. Las alertas y recomendaciones:
                </p>
                <ul className="list-disc pl-6 text-[var(--sato-color-text-muted)] space-y-2">
                  <li>Son estimaciones y no garantias de condiciones reales</li>
                  <li>No reemplazan el juicio del agricultor ni la observacion directa en campo</li>
                  <li>No sustituyen la asesoria de un agronomo profesional</li>
                  <li>Pueden variar respecto a las condiciones reales de su parcela especifica</li>
                </ul>
                <p className="text-[var(--sato-color-text-muted)] leading-relaxed mt-4">
                  SATO-Agro no se hace responsable por perdidas economicas, danos a cultivos o cualquier otro perjuicio derivado de decisiones tomadas basandose unicamente en nuestras alertas.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-black text-[var(--sato-color-text)] mb-4">4. Uso Aceptable</h2>
                <p className="text-[var(--sato-color-text-muted)] leading-relaxed mb-4">
                  Al usar SATO-Agro, usted se compromete a:
                </p>
                <ul className="list-disc pl-6 text-[var(--sato-color-text-muted)] space-y-2">
                  <li>Proporcionar informacion veraz sobre su parcela y cultivos</li>
                  <li>No usar el servicio para fines ilegales o fraudulentos</li>
                  <li>No intentar acceder a datos de otros usuarios</li>
                  <li>No redistribuir comercialmente la informacion de SATO-Agro sin autorizacion</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-black text-[var(--sato-color-text)] mb-4">5. Propiedad Intelectual</h2>
                <p className="text-[var(--sato-color-text-muted)] leading-relaxed">
                  Todo el contenido de SATO-Agro, incluyendo logos, textos, graficos, modelos y algoritmos, es propiedad de SATO-Agro o sus licenciantes. Los datos meteorologicos provienen de fuentes oficiales publicas y se procesan con metodologia propia.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-black text-[var(--sato-color-text)] mb-4">6. Disponibilidad del Servicio</h2>
                <p className="text-[var(--sato-color-text-muted)] leading-relaxed">
                  Nos esforzamos por mantener SATO-Agro disponible las 24 horas, pero no garantizamos disponibilidad ininterrumpida. El servicio puede suspenderse temporalmente por mantenimiento, actualizaciones o causas de fuerza mayor.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-black text-[var(--sato-color-text)] mb-4">7. Modificaciones</h2>
                <p className="text-[var(--sato-color-text-muted)] leading-relaxed">
                  Nos reservamos el derecho de modificar estos terminos en cualquier momento. Los cambios significativos se comunicaran a traves de la aplicacion o por correo electronico. El uso continuado del servicio despues de cambios constituye aceptacion de los nuevos terminos.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-black text-[var(--sato-color-text)] mb-4">8. Jurisdiccion</h2>
                <p className="text-[var(--sato-color-text-muted)] leading-relaxed">
                  Estos terminos se rigen por las leyes de la Republica de El Salvador. Cualquier disputa se resolvera en los tribunales competentes de San Salvador.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-black text-[var(--sato-color-text)] mb-4">9. Contacto</h2>
                <p className="text-[var(--sato-color-text-muted)] leading-relaxed">
                  Para consultas sobre estos terminos, contactenos a:{" "}
                  <a href="mailto:legal@sato-agro.com" className="text-[var(--sato-color-primary)] font-bold hover:underline">
                    legal@sato-agro.com
                  </a>
                </p>
              </section>
            </div>
          </LandingReveal>
        </div>
      </main>

      <LandingFooter />
    </div>
  )
}
