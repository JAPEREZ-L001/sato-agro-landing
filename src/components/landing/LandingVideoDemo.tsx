import { useRef, useState, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

interface LandingVideoDemoProps {
  videoSrc: string
  posterSrc?: string
  className?: string
}

export function LandingVideoDemo({ videoSrc, posterSrc, className = "" }: LandingVideoDemoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [showControls, setShowControls] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleEnded = () => {
      setIsPlaying(false)
      setShowControls(true)
    }

    video.addEventListener("play", handlePlay)
    video.addEventListener("pause", handlePause)
    video.addEventListener("ended", handleEnded)

    return () => {
      video.removeEventListener("play", handlePlay)
      video.removeEventListener("pause", handlePause)
      video.removeEventListener("ended", handleEnded)
    }
  }, [])

  // Auto-play when in view with IntersectionObserver
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            video.play().catch(() => {
              // Autoplay blocked, show play button
              setShowControls(true)
            })
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  return (
    <div className={`relative ${className}`}>
      {/* Mobile device frame */}
      <div 
        className="relative mx-auto w-full max-w-[min(100%,20rem)] bg-[var(--sato-color-text)] rounded-[2.5rem] p-2 shadow-[0_26px_80px_rgba(27,62,39,0.22)] landing-anim-float"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => isPlaying && setShowControls(false)}
      >
        {/* Device notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[var(--sato-color-text)] rounded-b-2xl z-20 flex items-center justify-center">
          <div className="w-16 h-1 bg-[var(--sato-color-text-muted)]/30 rounded-full"></div>
        </div>

        {/* Screen container */}
        <div className="relative rounded-[2rem] overflow-hidden bg-[var(--sato-color-bg)] aspect-[9/19.5]">
          {/* Video */}
          <video
            ref={videoRef}
            src={videoSrc}
            poster={posterSrc}
            muted={isMuted}
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Gradient overlay for controls visibility */}
          <div 
            className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}
          />

          {/* Play/Pause overlay button */}
          <button
            onClick={togglePlay}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${showControls && !isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
          >
            <div className="w-16 h-16 rounded-full bg-[var(--sato-color-primary)] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 active:scale-95">
              <Play className="w-7 h-7 text-[var(--sato-color-primary-foreground)] ml-1" />
            </div>
          </button>

          {/* Bottom controls */}
          <div 
            className={`absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* Play/Pause small button */}
            <button
              onClick={togglePlay}
              className="w-10 h-10 rounded-full bg-[var(--sato-color-bg-card)]/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-[var(--sato-color-bg-card)] transition-all duration-200"
              aria-label={isPlaying ? "Pausar" : "Reproducir"}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 text-[var(--sato-color-text)]" />
              ) : (
                <Play className="w-4 h-4 text-[var(--sato-color-text)] ml-0.5" />
              )}
            </button>

            {/* Mute button */}
            <button
              onClick={toggleMute}
              className="w-10 h-10 rounded-full bg-[var(--sato-color-bg-card)]/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-[var(--sato-color-bg-card)] transition-all duration-200"
              aria-label={isMuted ? "Activar sonido" : "Silenciar"}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-[var(--sato-color-text)]" />
              ) : (
                <Volume2 className="w-4 h-4 text-[var(--sato-color-text)]" />
              )}
            </button>
          </div>
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-[var(--sato-color-text-muted)]/40 rounded-full"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-[var(--sato-color-sky-blue)]/20 rounded-full blur-3xl -z-10 landing-anim-blob" aria-hidden="true"></div>
      <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-[var(--sato-color-primary)]/15 rounded-full blur-3xl -z-10 landing-anim-blob" style={{ animationDelay: "2s" }} aria-hidden="true"></div>
      <div className="absolute top-1/2 -right-4 w-20 h-20 bg-[var(--sato-color-accent)]/20 rounded-full blur-2xl -z-10 landing-anim-float-sm" aria-hidden="true"></div>
    </div>
  )
}
