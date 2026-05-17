import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { APP_URL } from "@/lib/app-url"

export function LandingNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--sato-color-border)] bg-white/85 backdrop-blur-md" role="banner">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-[var(--sato-color-primary)] focus:text-white focus:px-3 focus:py-2 focus:rounded-md focus:z-[60]"
      >
        Saltar al contenido
      </a>
      <div className="landing-container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 group" aria-label="Ir al inicio de SATO-Agro">
            <div className="h-8 w-8 rounded-md bg-[var(--sato-color-primary)] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" aria-hidden="true">
              <span className="text-white font-bold text-lg leading-none">S</span>
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-[var(--sato-color-text)]">
              SATO-Agro
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--sato-color-text-muted)]" aria-label="Navegación principal">
            <a href="#como-funciona" className="landing-nav-link hover:text-[var(--sato-color-text)] transition-colors">
              Cómo funciona
            </a>
            <a href="#ejemplo" className="landing-nav-link hover:text-[var(--sato-color-text)] transition-colors">
              Ejemplo de alerta
            </a>
            <a href="#faq" className="landing-nav-link hover:text-[var(--sato-color-text)] transition-colors">
              Preguntas frecuentes
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <a href={APP_URL} aria-label="Revisar mi cultivo gratis: ir a la aplicación">
            <Button className="landing-cta-shine bg-[var(--sato-color-primary)] hover:bg-[var(--sato-color-primary-active)] text-white border-none shadow-sm hover:shadow-md rounded-[var(--sato-radius-button)] transition-all duration-300 hover:-translate-y-0.5">
              <span className="hidden sm:inline">Revisar mi cultivo gratis</span>
              <span className="sm:hidden">Revisar mi cultivo</span>
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
}
