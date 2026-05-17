import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LandingProductorPage } from "./pages/LandingProductorPage"
import { LandingInstitucionalPage } from "./pages/LandingInstitucionalPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingProductorPage />} />
        <Route path="/instituciones" element={<LandingInstitucionalPage />} />
      </Routes>
    </BrowserRouter>
  )
}
