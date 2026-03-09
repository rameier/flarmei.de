export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <p>&copy; {year} Ralf Meier</p>
    </footer>
  )
}
