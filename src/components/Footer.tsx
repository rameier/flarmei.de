export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <>
      <style>{`
        .footer { border-top: 1px solid var(--color-border); padding: var(--spacing-lg) var(--spacing-md); text-align: center; color: var(--color-text-muted); font-size: 0.8rem; font-family: var(--font-sans); }
      `}</style>
      <footer className="footer">
        <p>&copy; {year} Ralf Meier</p>
      </footer>
    </>
  )
}
