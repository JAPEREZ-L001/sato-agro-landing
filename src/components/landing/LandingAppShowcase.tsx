import { useRef, useState, useEffect } from "react"
import { Play, Pause } from "lucide-react"
import { LandingReveal } from "@/components/landing/LandingReveal"

interface LandingAppShowcaseProps {
  videoSrc?: string
  title?: string
  subtitle?: string
}

const DEFAULT_VIDEO = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sato-app-demo-NQN9rVt6uZpbZUbNaoAZQURoW2aoxh.mp4"

export function LandingAppShowcase({ 
  videoSrc = DEFAULT_VIDEO,
  title = "Vea la app en accion",
  subtitle = "Asi de simple es revisar el estado de su cultivo y recibir recomendaciones."
}: LandingAppShowcaseProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  // Auto-play when in view
  useEffect(() => {
    const video = videoRef.current
    const container = containerRef.current
    if (!video || !container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasInteracted) {
            video.play().catch(() => {})
            setIsPlaying(true)
          } else if (!entry.isIntersecting) {
            video.pause()
            setIsPlaying(false)
          }
        })
      },
      { threshold: 0.4 }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [hasInteracted])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    setHasInteracted(true)
    
    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  return (
    <section className="landing-section bg-[var(--sato-color-bg)] overflow-hidden relative" aria-label="Demo de la aplicacion">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--sato-color-primary)]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[var(--sato-color-sky-blue)]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="landing-container relative">
        <LandingReveal className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-[var(--sato-text-h1)] font-black tracking-[-0.04em] mb-4 text-[var(--sato-color-text)]">
            {title}
          </h2>
          <p className="text-[var(--sato-text-body-lg)] text-[color-mix(in_oklch,var(--sato-color-text)_72%,var(--sato-color-text-muted))]">
            {subtitle}
          </p>
        </LandingReveal>

        <LandingReveal delay={150}>
          <div 
            ref={containerRef}
            className="relative max-w-4xl mx-auto"
          >
            {/* Browser/Laptop frame */}
            <div className="relative bg-[var(--sato-color-bg-card)] rounded-[1.5rem] shadow-[0_32px_80px_rgba(27,62,39,0.12)] border border-[color-mix(in_oklch,var(--sato-color-border)_60%,transparent)] overflow-hidden landing-hover-lift">
              {/* Browser top bar */}
              <div className="h-10 bg-[color-mix(in_oklch,var(--sato-color-bg-muted)_80%,var(--sato-color-border))] border-b border-[var(--sato-color-border)] flex items-center px-4 gap-2">
                {/* Traffic lights */}
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                </div>
                {/* URL bar */}
                <div className="flex-1 flex justify-center">
                  <div className="bg-[var(--sato-color-bg-card)] rounded-md px-4 py-1 text-[0.72rem] font-bold text-[var(--sato-color-text-muted)] flex items-center gap-2 max-w-xs w-full justify-center border border-[var(--sato-color-border)]">
                    <div className="w-3 h-3 rounded-full bg-[var(--sato-color-primary)] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--sato-color-primary-foreground)]"></div>
                    </div>
                    app.sato-agro.com
                  </div>
                </div>
                {/* Spacer for symmetry */}
                <div className="w-14"></div>
              </div>

              {/* Video content */}
              <div className="relative aspect-video bg-[var(--sato-color-bg)]">
                <video
                  ref={videoRef}
                  src={videoSrc}
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  aria-label="Demo de SATO-Agro mostrando alertas y recomendaciones"
                />

                {/* Play/Pause overlay - shows on hover */}
                <div 
                  className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100 cursor-pointer group"
                  onClick={togglePlay}
                >
                  <button
                    className="w-16 h-16 rounded-full bg-[var(--sato-color-bg-card)]/90 backdrop-blur-sm flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300"
                    aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 text-[var(--sato-color-text)]" />
                    ) : (
                      <Play className="w-6 h-6 text-[var(--sato-color-text)] ml-1" />
                    )}
                  </button>
                </div>

                {/* Control bar */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-center">
                    <button
                      onClick={togglePlay}
                      className="w-9 h-9 rounded-full bg-[var(--sato-color-bg-card)]/80 backdrop-blur-sm flex items-center justify-center hover:bg-[var(--sato-color-bg-card)] transition-colors"
                      aria-label={isPlaying ? "Pausar" : "Reproducir"}
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4 text-[var(--sato-color-text)]" />
                      ) : (
                        <Play className="w-4 h-4 text-[var(--sato-color-text)] ml-0.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[var(--sato-color-accent)]/15 rounded-full blur-2xl -z-10 landing-anim-float" aria-hidden="true"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[var(--sato-color-primary)]/10 rounded-full blur-2xl -z-10 landing-anim-float-sm" style={{ animationDelay: "1.5s" }} aria-hidden="true"></div>
          </div>
        </LandingReveal>

        {/* Optional caption */}
        <p className="text-center mt-8 text-[0.78rem] font-bold text-[var(--sato-color-text-muted)]">
          Sin instalacion - Funciona en cualquier dispositivo con internet
        </p>
      </div>
    </section>
  )
}
