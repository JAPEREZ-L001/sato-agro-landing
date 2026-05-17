import { Link } from "react-router-dom"

export function LandingFooter() {
  return (
    <footer className="border-t border-[var(--sato-color-border)] bg-gradient-to-b from-[var(--sato-color-bg-warm)] to-white py-16">
      <div className="landing-container grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <img 
              src="/images/sato-symbol.png" 
              alt="" 
              className="h-12 w-auto" 
              aria-hidden="true"
            />
            <img 
              src="/images/sato-title.png" 
              alt="SATO" 
              className="h-8 w-auto"
            />
          </div>
          <p className="text-sm text-[var(--sato-color-text-muted)] max-w-xs leading-relaxed">
            Alerta temprana y prescripcion agricola para productores de maiz y frijol en El Salvador.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-[var(--sato-color-text)]">Producto</h4>
          <a href="#como-funciona" className="text-sm text-[var(--sato-color-text-muted)] hover:text-[var(--sato-color-primary)] transition-all duration-300 hover:translate-x-1">Como funciona</a>
          <a href="#ejemplo" className="text-sm text-[var(--sato-color-text-muted)] hover:text-[var(--sato-color-primary)] transition-all duration-300 hover:translate-x-1">Ejemplo de alerta</a>
          <a href="#faq" className="text-sm text-[var(--sato-color-text-muted)] hover:text-[var(--sato-color-primary)] transition-all duration-300 hover:translate-x-1">Preguntas frecuentes</a>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-[var(--sato-color-text)]">Instituciones</h4>
          <Link to="/instituciones" className="text-sm text-[var(--sato-color-text-muted)] hover:text-[var(--sato-color-primary)] transition-all duration-300 hover:translate-x-1">Para cooperativas</Link>
          <Link to="/instituciones" className="text-sm text-[var(--sato-color-text-muted)] hover:text-[var(--sato-color-primary)] transition-all duration-300 hover:translate-x-1">Solicitar piloto</Link>
          <a href="#" className="text-sm text-[var(--sato-color-text-muted)] hover:text-[var(--sato-color-primary)] transition-all duration-300 hover:translate-x-1">Metodologia</a>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-[var(--sato-color-text)]">Legal</h4>
          <a href="#" className="text-sm text-[var(--sato-color-text-muted)] hover:text-[var(--sato-color-primary)] transition-all duration-300 hover:translate-x-1">Privacidad</a>
          <a href="#" className="text-sm text-[var(--sato-color-text-muted)] hover:text-[var(--sato-color-primary)] transition-all duration-300 hover:translate-x-1">Terminos</a>
          <a href="#" className="text-sm text-[var(--sato-color-text-muted)] hover:text-[var(--sato-color-primary)] transition-all duration-300 hover:translate-x-1">Contacto</a>
        </div>
      </div>
      <div className="landing-container mt-14 pt-8 border-t border-[var(--sato-color-border)] flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--sato-color-text-subtle)] font-medium">
          {new Date().getFullYear()} SATO-Agro. Todos los derechos reservados.
        </p>
        <p className="text-sm text-[var(--sato-color-text-subtle)] font-medium">
          Hecho para el campo en El Salvador.
        </p>
      </div>
    </footer>
  )
}
