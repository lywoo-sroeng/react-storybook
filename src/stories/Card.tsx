import type React from "react";

export default function Card({children}: React.PropsWithChildren) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white px-6 py-4 text-slate-900 shadow-sm">
      {children}
    </div>
  );
}
