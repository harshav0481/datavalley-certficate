import { Navigate, useParams } from 'react-router-dom'
import Header from '../components/Header.jsx'
import CertificateDetails from '../components/CertificateDetails.jsx'
import { commonDetails, getMember } from '../data/members.js'

export default function CertificatePage() {
  const { memberId } = useParams()
  const member = getMember(memberId)

  if (!member) return <Navigate to="/certificate-details/member-1" replace />

  return (
    <div className="page-bg min-h-screen w-full overflow-x-hidden pb-10 font-sans">
      <Header />
      <main className="px-4 pt-6 sm:pt-[29px]">
        <CertificateDetails member={member} details={commonDetails} />
      </main>
    </div>
  )
}
