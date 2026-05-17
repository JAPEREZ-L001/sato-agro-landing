import { Link } from "react-router-dom"

export function LandingFooter() {
  return (
    <footer className="border-t border-[var(--sato-color-border)] bg-[var(--sato-color-bg-warm)] py-12">
      <div className="landing-container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-[var(--sato-color-primary)] flex items-center justify-center">
              <span className="text-white font-bold text-lg leading-none">S</span>
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-[var(--sato-color-text)]">
              SATO-Agro
            </span>
          </div>
          <p className="text-sm text-[var(--sato-color-text-muted)] max-w-xs">
            Alerta temprana y prescripción agrícola para productores de maíz y frijol en El Salvador.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-[var(--sato-color-text)]">Producto</h4>
          <a href="#como-funciona" className="text-sm text-[var(--sato-color-text-muted)] hover:text-[var(--sato-color-primary)] transition-colors">Cómo funciona</a>
          <a href="#ejemplo" className="text-sm text-[var(--sato-color-text-muted)] hover:text-[var(--sato-color-primary)] transition-colors">Ejemplo de alerta</a>
          <a href="#faq" className="text-sm text-[var(--sato-color-text-muted)] hover:text-[var(--sato-color-primary)] transition-colors">Preguntas frecuentes</a>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-[var(--sato-color-text)]">Instituciones</h4>
          <Link to="/instituciones" className="text-sm text-[var(--sato-color-text-muted)] hover:text-[var(--sato-color-primary)] transition-colors">Para cooperativas</Link>
          <Link to="/instituciones" className="text-sm text-[var(--sato-color-text-muted)] hover:text-[var(--sato-color-primary)] transition-colors">Solicitar piloto</Link>
          <a href="#" className="text-sm text-[var(--sato-color-text-muted)] hover:text-[var(--sato-color-primary)] transition-colors">Metodología</a>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-[var(--sato-color-text)]">Legal</h4>
          <a href="#" className="text-sm text-[var(--sato-color-text-muted)] hover:text-[var(--sato-color-primary)] transition-colors">Privacidad</a>
          <a href="#" className="text-sm text-[var(--sato-color-text-muted)] hover:text-[var(--sato-color-primary)] transition-colors">Términos</a>
          <a href="#" className="text-sm text-[var(--sato-color-text-muted)] hover:text-[var(--sato-color-primary)] transition-colors">Contacto</a>
        </div>
      </div>
      <div className="landing-container mt-12 pt-8 border-t border-[var(--sato-color-border)] flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--sato-color-text-subtle)]">
          © {new Date().getFullYear()} SATO-Agro. Todos los derechos reservados.
        </p>
        <p className="text-sm text-[var(--sato-color-text-subtle)]">
          Hecho para el campo en El Salvador.
        </p>
      </div>
    </footer>
  )
}
