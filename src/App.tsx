import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LandingProductorPage } from "./pages/LandingProductorPage"
import { LandingInstitucionalPage } from "./pages/LandingInstitucionalPage"
import { PrivacidadPage } from "./pages/PrivacidadPage"
import { TerminosPage } from "./pages/TerminosPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingProductorPage />} />
        <Route path="/instituciones" element={<LandingInstitucionalPage />} />
        <Route path="/privacidad" element={<PrivacidadPage />} />
        <Route path="/terminos" element={<TerminosPage />} />
      </Routes>
    </BrowserRouter>
  )
}
