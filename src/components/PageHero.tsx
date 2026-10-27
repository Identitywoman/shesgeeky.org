// The opening band at the top of every inner page.
export default function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string
  title: string
  children?: React.ReactNode
}) {
  return (
    <section className="page-hero">
      <div className="wrap">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {children && <div className="lede">{children}</div>}
      </div>
    </section>
  )
}
