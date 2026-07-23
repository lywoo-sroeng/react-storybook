import './scroll-progress.css'

export default function ScrollProgress() {
  return (
    <div className="relative">
      <div className="scroll-progress" />

      <div className="fixed top-0 flex w-full justify-center">
        <p className="gradient-text p-4 leading-snug font-extrabold capitalize">
          not supported on Firefox
        </p>
      </div>

      <section className="flex h-dvh items-center justify-center text-6xl text-black">
        1
      </section>
      <section className="flex h-dvh items-center justify-center text-6xl text-black">
        2
      </section>
      <section className="flex h-dvh items-center justify-center text-6xl text-black">
        3
      </section>
    </div>
  )
}
