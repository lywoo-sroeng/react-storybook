import type React from 'react'

export default function Card({ children }: React.PropsWithChildren) {
  return (
    <>
      <button popoverTarget="popover" className="rounded-md border p-2 text-black">
        open
      </button>

      <div
        id="popover"
        popover={'auto'}
        className="fixed top-1/2 border bg-white p-4 text-black"
      >
        {children}

        <button
          popoverTarget="popover"
          className="border p-2 text-black"
          onClick={() => {
            console.log('🪲🪲🪲🪲🪲')
            console.log('close')
            console.log('🪲🪲🪲🪲🪲')
          }}
        >
          close
        </button>
      </div>
    </>
  )
}
