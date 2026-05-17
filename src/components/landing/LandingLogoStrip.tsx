import { CloudSun, Landmark, ThermometerSun, type LucideIcon } from "lucide-react"

export type LandingSourceBadge = {
  name: string
  description: string
  icon: LucideIcon
}

/** Alineado con el backend: `open_meteo_forecast`, observación vía SNET/MARN cuando aplica; MAG como marco agrícola institucional en El Salvador. */
export const LANDING_DEFAULT_DATA_SOURCES: LandingSourceBadge[] = [
  {
    name: "Open-Meteo",
    description: "Pronóstico meteorológico global",
    icon: CloudSun,
  },
  {
    name: "MAG",
    description: "Ministerio de Agricultura y Ganadería",
    icon: Landmark,
  },
  {
    name: "SNET / MARN",
    description: "Observación climática local",
    icon: ThermometerSun,
  },
]

interface LandingLogoStripProps {
  text: string
  /** Línea opcional (no se fuerza a mayúsculas) para contexto extra, p. ej. piloto + fuentes. */
  subtext?: string
  /** Si no se pasan, se usan las fuentes por defecto del repositorio. */
  sources?: LandingSourceBadge[]
}

export function LandingLogoStrip({
  text,
  subtext,
  sources = LANDING_DEFAULT_DATA_SOURCES,
}: LandingLogoStripProps) {
  const loop = [...sources, ...sources]

  return (
    <section
      className="py-12 border-b border-[var(--sato-color-border)] bg-slate-50/50 overflow-hidden"
      aria-labelledby="landing-sources-lead"
    >
      <div className="landing-container">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2
            id="landing-sources-lead"
            className="text-sm font-bold text-[var(--sato-color-text-subtle)] uppercase tracking-widest mb-3"
          >
            {text}
          </h2>
          {subtext ? (
            <p className="text-base text-[var(--sato-color-text-muted)] leading-relaxed">
              {subtext}
            </p>
          ) : null}
        </div>

        <div className="relative flex overflow-x-hidden" aria-label="Fuentes de datos citadas">
          {/* Gradientes laterales para suavizar la entrada/salida del marquee */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-50/50 to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-50/50 to-transparent z-10"></div>

          <div className="animate-marquee whitespace-nowrap flex items-stretch gap-6 md:gap-8 px-4">
            {loop.map((source, i) => (
              <div
                key={`${source.name}-${i}`}
                className="inline-flex items-center gap-4 min-w-[260px] max-w-[320px] py-4 px-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 shrink-0 rounded-full bg-[var(--sato-color-primary)]/10 flex items-center justify-center text-[var(--sato-color-primary)]">
                  <source.icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-bold text-base text-[var(--sato-color-text)] tracking-tight">
                    {source.name}
                  </span>
                  <span className="text-xs text-[var(--sato-color-text-muted)] mt-0.5 leading-snug whitespace-normal">
                    {source.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
