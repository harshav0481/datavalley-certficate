export default function Header() {
  return (
    <header className="flex items-start justify-between px-4 pt-4 sm:px-[38px] sm:pt-[28px]">
      <img
        src="/logo.svg"
        alt="NovaSkill"
        className="h-auto w-[200px] sm:w-[372px]"
        draggable="false"
      />
      <button
        type="button"
        className="mt-1 flex h-10 shrink-0 items-center gap-2 rounded-md bg-[#facc15] px-3 text-base text-black sm:mt-[15px] sm:mr-[-4px] sm:h-[48px] sm:px-[20px] sm:text-[19px]"
      >
        <span aria-hidden="true">⬅️</span>
        Go Back
      </button>
    </header>
  )
}
