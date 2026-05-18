import { Link } from "react-router-dom"
import { MapPin } from "lucide-react"

export function LandingFooter() {
  return (
    <footer className="border-t border-[color-mix(in_oklch,var(--sato-color-border)_72%,transparent)] bg-[var(--sato-color-bg)] py-16">
      <div className="landing-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand column */}
        <div className="flex flex-col gap-5 lg:col-span-1">
          <div className="flex items-center gap-2">
            <img 
              src="https://res.cloudinary.com/dywctapuj/image/upload/e_make_transparent:30/f_png/q_auto/d4ace0ca-4a1b-463c-ad47-b2b69f05b9f0_znkdwz.png" 
              alt="" 
              className="h-12 w-auto" 
              aria-hidden="true"
            />
            <img 
              src="https://res.cloudinary.com/dywctapuj/image/upload/e_make_transparent:30/f_png/q_auto/a3355191-33c8-49dd-9540-9f3378391842_xfdbaw.png" 
              alt="SATO" 
              className="h-7 w-auto"
            />
          </div>
          <p className="text-[0.84rem] text-[var(--sato-color-text-muted)] max-w-xs leading-relaxed">
            Alerta temprana y prescripcion agricola para productores de maiz y frijol en El Salvador.
          </p>
        </div>

        {/* Producto column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-black text-[var(--sato-color-text)]">Producto</h4>
          <a href="#como-funciona" className="text-[0.84rem] font-extrabold text-[var(--sato-color-text-muted)] hover:text-[var(--sato-color-primary)] transition-all duration-300 hover:translate-x-1">Como funciona</a>
          <a href="#ejemplo" className="text-[0.84rem] font-extrabold text-[var(--sato-color-text-muted)] hover:text-[var(--sato-color-primary)] transition-all duration-300 hover:translate-x-1">Ejemplo de alerta</a>
          <a href="#faq" className="text-[0.84rem] font-extrabold text-[var(--sato-color-text-muted)] hover:text-[var(--sato-color-primary)] transition-all duration-300 hover:translate-x-1">Preguntas frecuentes</a>
        </div>

        {/* Legal column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-black text-[var(--sato-color-text)]">Legal</h4>
          <Link to="/privacidad" className="text-[0.84rem] font-extrabold text-[var(--sato-color-text-muted)] hover:text-[var(--sato-color-primary)] transition-all duration-300 hover:translate-x-1">Privacidad</Link>
          <Link to="/terminos" className="text-[0.84rem] font-extrabold text-[var(--sato-color-text-muted)] hover:text-[var(--sato-color-primary)] transition-all duration-300 hover:translate-x-1">Terminos</Link>
        </div>

        {/* Contacto column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-black text-[var(--sato-color-text)]">Contacto</h4>
          <div className="text-[0.84rem] font-extrabold text-[var(--sato-color-text-muted)] flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            El Salvador
          </div>
        </div>
      </div>
      <div className="landing-container mt-14 pt-8 border-t border-[color-mix(in_oklch,var(--sato-color-border)_72%,transparent)] flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[0.78rem] text-[var(--sato-color-text-muted)] font-bold">
          {new Date().getFullYear()} SATO-Agro. Todos los derechos reservados.
        </p>
        <p className="text-[0.78rem] text-[var(--sato-color-text-muted)] font-bold">
          Hecho para el campo en El Salvador.
        </p>
      </div>
    </footer>
  )
}
