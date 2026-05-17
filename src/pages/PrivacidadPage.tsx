import { LandingNav } from "@/components/landing/LandingNav"
import { LandingFooter } from "@/components/landing/LandingFooter"
import { LandingReveal } from "@/components/landing/LandingReveal"

export function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-[var(--sato-color-bg)] flex flex-col">
      <LandingNav />
      
      <main className="flex-1 pt-32 pb-20">
        <div className="landing-container">
          <LandingReveal className="max-w-3xl mx-auto">
            <h1 className="text-[var(--sato-text-h1)] font-black tracking-[-0.04em] mb-6 text-[var(--sato-color-text)]">
              Politica de Privacidad
            </h1>
            <p className="text-[var(--sato-color-text-muted)] mb-8">
              Ultima actualizacion: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-slate max-w-none space-y-8">
              <section>
                <h2 className="text-xl font-black text-[var(--sato-color-text)] mb-4">1. Informacion que Recopilamos</h2>
                <p className="text-[var(--sato-color-text-muted)] leading-relaxed mb-4">
                  En SATO-Agro recopilamos la informacion minima necesaria para brindarle el servicio de alertas agricolas:
                </p>
                <ul className="list-disc pl-6 text-[var(--sato-color-text-muted)] space-y-2">
                  <li>Ubicacion de su parcela (coordenadas o municipio)</li>
                  <li>Tipo de cultivo (maiz, frijol u otro)</li>
                  <li>Etapa fenologica del cultivo</li>
                  <li>Numero de telefono (opcional, para alertas por WhatsApp)</li>
                  <li>Correo electronico (opcional, para notificaciones)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-black text-[var(--sato-color-text)] mb-4">2. Como Usamos su Informacion</h2>
                <p className="text-[var(--sato-color-text-muted)] leading-relaxed mb-4">
                  Utilizamos su informacion exclusivamente para:
                </p>
                <ul className="list-disc pl-6 text-[var(--sato-color-text-muted)] space-y-2">
                  <li>Calcular el riesgo climatico para su parcela especifica</li>
                  <li>Enviarle alertas y recomendaciones personalizadas</li>
                  <li>Mejorar la precision de nuestros modelos de prediccion</li>
                  <li>Generar estadisticas anonimas sobre condiciones agricolas regionales</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-black text-[var(--sato-color-text)] mb-4">3. Compartir Informacion</h2>
                <p className="text-[var(--sato-color-text-muted)] leading-relaxed">
                  No vendemos ni compartimos su informacion personal con terceros para fines comerciales. Podemos compartir datos anonimos y agregados con organizaciones agricolas, cooperativas o entidades gubernamentales para mejorar las politicas agricolas en El Salvador.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-black text-[var(--sato-color-text)] mb-4">4. Seguridad de Datos</h2>
                <p className="text-[var(--sato-color-text-muted)] leading-relaxed">
                  Implementamos medidas de seguridad tecnicas y organizativas para proteger su informacion contra acceso no autorizado, perdida o alteracion. Sus datos se almacenan en servidores seguros con cifrado en transito y en reposo.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-black text-[var(--sato-color-text)] mb-4">5. Sus Derechos</h2>
                <p className="text-[var(--sato-color-text-muted)] leading-relaxed mb-4">
                  Usted tiene derecho a:
                </p>
                <ul className="list-disc pl-6 text-[var(--sato-color-text-muted)] space-y-2">
                  <li>Acceder a la informacion que tenemos sobre usted</li>
                  <li>Corregir datos inexactos</li>
                  <li>Solicitar la eliminacion de su cuenta y datos</li>
                  <li>Exportar sus datos en formato legible</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-black text-[var(--sato-color-text)] mb-4">6. Cookies y Tecnologias Similares</h2>
                <p className="text-[var(--sato-color-text-muted)] leading-relaxed">
                  Utilizamos cookies esenciales para el funcionamiento de la aplicacion. No utilizamos cookies de seguimiento publicitario ni compartimos datos de navegacion con redes publicitarias.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-black text-[var(--sato-color-text)] mb-4">7. Contacto</h2>
                <p className="text-[var(--sato-color-text-muted)] leading-relaxed">
                  Si tiene preguntas sobre esta politica de privacidad o desea ejercer sus derechos, contactenos a:{" "}
                  <a href="mailto:privacidad@sato-agro.com" className="text-[var(--sato-color-primary)] font-bold hover:underline">
                    privacidad@sato-agro.com
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
