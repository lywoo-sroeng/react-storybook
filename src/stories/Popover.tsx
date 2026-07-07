import type React from 'react'
import { useRef } from 'react'
import './popover.css'

export default function Popover({ children }: React.PropsWithChildren) {
  const popoverRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative">
      <button
        className="rounded-md border p-2 text-black"
        onClick={() => popoverRef.current?.showPopover()}
      >
        Open
      </button>

      <div
        ref={popoverRef}
        popover="manual"
        className="h-dvh w-dvw bg-black/10 p-4 text-black backdrop-blur-sm"
      >
        <div className="flex h-full w-full items-center justify-center gap-4">
          <div aria-label="content">{children}</div>

          <button
            className="rounded-md bg-red-600 p-2 text-white"
            onClick={() => popoverRef.current?.hidePopover()}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
