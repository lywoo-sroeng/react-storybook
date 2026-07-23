export default function Container({
  title,
  children,
}: {
  title: string
  children?: React.ReactNode
}) {
  return (
    <div>
      <h2 className="text-2xl">{title}</h2>
      {children}
    </div>
  )
}
