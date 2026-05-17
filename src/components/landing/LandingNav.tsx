import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { APP_URL } from "@/lib/app-url"

export function LandingNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--sato-color-border)] bg-white/90 backdrop-blur-lg shadow-sm" role="banner">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-[var(--sato-color-primary)] focus:text-white focus:px-3 focus:py-2 focus:rounded-md focus:z-[60]"
      >
        Saltar al contenido
      </a>
      <div className="landing-container flex h-18 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 group" aria-label="Ir al inicio de SATO-Agro">
            <img 
              src="https://res.cloudinary.com/dywctapuj/image/upload/f_auto/q_auto/d4ace0ca-4a1b-463c-ad47-b2b69f05b9f0_znkdwz.png" 
              alt="" 
              className="h-10 w-auto transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" 
              aria-hidden="true"
            />
            <img 
              src="https://res.cloudinary.com/dywctapuj/image/upload/f_auto/q_auto/a3355191-33c8-49dd-9540-9f3378391842_xfdbaw.png" 
              alt="SATO" 
              className="h-6 w-auto hidden sm:block"
            />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[var(--sato-color-text-muted)]" aria-label="Navegación principal">
            <a href="#como-funciona" className="landing-nav-link hover:text-[var(--sato-color-primary)] transition-all duration-300">
              Cómo funciona
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
          <a href={APP_URL} aria-label="Revisar mi cultivo gratis: ir a la aplicación">
            <Button className="landing-cta-shine bg-gradient-to-r from-[var(--sato-color-primary)] to-[var(--sato-color-primary-light)] hover:from-[var(--sato-color-primary-active)] hover:to-[var(--sato-color-primary)] text-white border-none shadow-md hover:shadow-lg rounded-[var(--sato-radius-button)] font-bold transition-all duration-500">
              <span className="hidden sm:inline">Revisar mi cultivo gratis</span>
              <span className="sm:hidden">Revisar mi cultivo</span>
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
}
