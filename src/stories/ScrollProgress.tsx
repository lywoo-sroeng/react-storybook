import './scroll-progress.css'

export default function ScrollProgress() {
  return (
    <div className="relative">
      <div className="scroll-progress" />

      <div className="fixed top-0 flex w-full justify-center">not supported on Firefox</div>

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
