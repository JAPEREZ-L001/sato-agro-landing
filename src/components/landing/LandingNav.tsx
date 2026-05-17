import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { APP_URL } from "@/lib/app-url"

export function LandingNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[color-mix(in_oklch,var(--sato-color-border)_72%,transparent)] bg-[color-mix(in_oklch,var(--sato-color-bg-card)_90%,transparent)] backdrop-blur-xl shadow-sm" role="banner">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-[var(--sato-color-primary)] focus:text-[var(--sato-color-primary-foreground)] focus:px-3 focus:py-2 focus:rounded-xl focus:z-[60] focus:ring-2 focus:ring-[var(--sato-color-ring)]/30"
      >
        Saltar al contenido
      </a>
      <div className="landing-container flex h-18 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 group" aria-label="Ir al inicio de SATO-Agro">
            <img 
              src="https://res.cloudinary.com/dywctapuj/image/upload/e_make_transparent:30/f_png/q_auto/d4ace0ca-4a1b-463c-ad47-b2b69f05b9f0_znkdwz.png" 
              alt="" 
              className="h-10 w-auto transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" 
              aria-hidden="true"
            />
            <img 
              src="https://res.cloudinary.com/dywctapuj/image/upload/e_make_transparent:30/f_png/q_auto/a3355191-33c8-49dd-9540-9f3378391842_xfdbaw.png" 
              alt="SATO" 
              className="h-6 w-auto hidden sm:block"
            />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-extrabold text-[var(--sato-color-text-muted)]" aria-label="Navegacion principal">
            <a href="#como-funciona" className="landing-nav-link hover:text-[var(--sato-color-primary)] transition-all duration-300">
              Como funciona
            </a>
            <a href="#ejemplo" className="landing-nav-link hover:text-[var(--sato-color-primary)] transition-all duration-300">
              Ejemplo de alerta
            </a>
            <a href="#faq" className="landing-nav-link hover:text-[var(--sato-color-primary)] transition-all duration-300">
              Preguntas frecuentes
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <a href={APP_URL} aria-label="Revisar mi cultivo gratis: ir a la aplicacion">
            <Button className="landing-cta-shine bg-[var(--sato-color-primary)] hover:bg-[var(--sato-color-primary-active)] text-[var(--sato-color-primary-foreground)] border-none shadow-md hover:shadow-lg rounded-[var(--sato-radius-button)] font-extrabold transition-all duration-300 active:scale-[0.97]">
              <span className="hidden sm:inline">Revisar mi cultivo gratis</span>
              <span className="sm:hidden">Revisar cultivo</span>
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
}
