import type React from "react";

export default function Card({children}: React.PropsWithChildren) {
  return (
    <div className="">
      {children}
    </div>
  );
}