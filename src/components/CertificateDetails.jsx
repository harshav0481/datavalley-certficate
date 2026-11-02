const GRID = 29

// Deterministic pseudo-random generator so each member gets a stable, unique pattern.
function seededRandom(seedText) {
  let h = 2166136261
  for (const ch of seedText) h = Math.imul(h ^ ch.charCodeAt(0), 16777619)
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507)
    h = Math.imul(h ^ (h >>> 13), 3266489909)
    h ^= h >>> 16
    return (h >>> 0) / 4294967296
  }
}

function inFinder(x, y) {
  const corners = [[0, 0], [GRID - 7, 0], [0, GRID - 7]]
  return corners.some(([cx, cy]) => x >= cx - 1 && x <= cx + 7 && y >= cy - 1 && y <= cy + 7)
}

// Decorative QR-style graphic only; it does not encode any data.
function QrVisual({ seed }) {
  const rand = seededRandom(seed)
  const cells = []
  for (let y = 0; y < GRID; y++) {
    for (let x = 0; x < GRID; x++) {
      if (!inFinder(x, y) && rand() > 0.5) cells.push(<rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" />)
    }
  }
  const finder = (cx, cy) => (
    <g key={`f-${cx}-${cy}`}>
      <rect x={cx} y={cy} width="7" height="7" />
      <rect x={cx + 1} y={cy + 1} width="5" height="5" fill="#fff" />
      <rect x={cx + 2} y={cy + 2} width="3" height="3" />
    </g>
  )
  return (
    <div className="bg-white p-[12px]">
      <svg
        viewBox={`0 0 ${GRID} ${GRID}`}
        className="block h-[131px] w-[131px]"
        shapeRendering="crispEdges"
        aria-hidden="true"
      >
        {cells}
        {finder(0, 0)}
        {finder(GRID - 7, 0)}
        {finder(0, GRID - 7)}
      </svg>
    </div>
  )
}

function Field({ label, children, bold = false }) {
  return (
    <p className="leading-snug">
      <span className="font-bold text-[#facc15]">{label}:</span>{' '}
      <span className={bold ? 'font-bold text-white' : 'text-white'}>{children}</span>
    </p>
  )
}

export default function CertificateDetails({ member, details }) {
  return (
    <section className="mx-auto w-full max-w-[934px] rounded-lg border border-gray-300/80 px-4 pt-[30px] pb-[28px] text-center sm:px-8">
      <h1 className="text-[32px] font-bold leading-tight text-[#b91c1c] sm:text-[45px]">
        Certificate Details
      </h1>

      <p className="mt-[14px] text-[20px] font-bold text-[#facc15] sm:text-[24px]">Awarded to:</p>
      <p className="text-[26px] font-bold leading-tight text-white sm:text-[36px]">{member.name}</p>

      <div className="mt-[22px] flex flex-col gap-[14px] text-[17px] sm:gap-[16px] sm:text-[22px]">
        <Field label="Course">{details.course}</Field>
        <Field label="Branch">{details.branch}</Field>
        <Field label="College">{details.college}</Field>
        <Field label="University">{details.university}</Field>
        <Field label="Duration">{details.duration}</Field>
        <Field label="Issued Date">{details.issuedDate}</Field>
        <Field label="Certificate ID" bold>{member.certificateId}</Field>
      </div>

      <div className="mt-[36px] flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-[30px]">
        <div className="flex flex-col items-center">
          <p className="mb-[4px] text-[19px] font-bold text-[#facc15] sm:text-[22px]">Scan QR Code:</p>
          <QrVisual seed={member.certificateId} />
        </div>
        <div className="flex flex-col gap-4 sm:mt-[30px] sm:flex-row sm:gap-[19px]">
          <button
            type="button"
            className="flex h-[54px] items-center justify-center gap-2 rounded-lg bg-[#22c55e] px-[20px] text-[19px] text-white sm:h-[58px]"
          >
            <span aria-hidden="true">📄</span>
            View Certificate
          </button>
          <button
            type="button"
            className="flex h-[54px] items-center justify-center gap-2 rounded-lg bg-[#3b82f6] px-[20px] text-[19px] text-white sm:h-[58px]"
          >
            <span aria-hidden="true">⬇️</span>
            Download PDF
          </button>
        </div>
      </div>
    </section>
  )
}
