import { LandingNav } from "@/components/landing/LandingNav"
import { LandingHero } from "@/components/landing/LandingHero"
import { LandingLogoStrip } from "@/components/landing/LandingLogoStrip"
import { LandingBeforeAfter } from "@/components/landing/LandingBeforeAfter"
import { LandingFeatureTabs } from "@/components/landing/LandingFeatureTabs"
import { LandingBentoGrid } from "@/components/landing/LandingBentoGrid"
import { LandingProductStack } from "@/components/landing/LandingProductStack"
import { LandingTrust } from "@/components/landing/LandingTrust"
import { LandingFaq } from "@/components/landing/LandingFaq"
import { LandingGoalGradient } from "@/components/landing/LandingGoalGradient"
import { LandingFooter } from "@/components/landing/LandingFooter"
import { APP_URL } from "@/lib/app-url"

export function LandingProductorPage() {
  return (
    <div className="landing-page min-h-screen flex flex-col">
      <LandingNav />
      <main id="main" className="flex-1">
        <LandingHero 
          eyebrow="Para productores de maiz y frijol en El Salvador"
          h1="Sepa que hacer antes de que la canicula afecte su maiz o frijol."
          subheadline="Le avisamos a tiempo y le decimos que revisar en su parcela. Sin mapas complicados. En espanol claro."
          primaryCtaText="Revisar mi cultivo gratis"
          primaryCtaLink={APP_URL}
          secondaryCtaText="Ver un ejemplo de alerta"
          secondaryCtaLink="#ejemplo"
          microcopy="Gratis para empezar - Sin tarjeta - 2 minutos"
          isProductor={true}
          showVideoDemo={true}
        />
        
        <LandingLogoStrip 
          text="Respaldado por datos climáticos y agrícolas oficiales" 
          subtext="Combinamos pronósticos globales con observación local para darle la mejor recomendación en su parcela."
        />
        
        <LandingBeforeAfter />
        
        <LandingFeatureTabs isProductor={true} />
        
        <LandingBentoGrid isProductor={true} />
        
        <LandingProductStack />
        
        <LandingTrust />
        
        <LandingFaq />
        
        <LandingGoalGradient />
        
      </main>
      <LandingFooter />
    </div>
  )
}
