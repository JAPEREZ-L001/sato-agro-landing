import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface LandingRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: "div" | "section" | "article" | "header"
}

export function LandingReveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: LandingRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => setIsVisible(true), delay)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [delay])

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn("landing-reveal", isVisible && "is-visible", className)}
    >
      {children}
    </Tag>
  )
}
