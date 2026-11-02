import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import CertificatePage from './pages/CertificatePage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/certificate-details/:memberId" element={<CertificatePage />} />
        <Route path="*" element={<Navigate to="/certificate-details/member-1" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
