import Link from "next/link";
import "@/style/navbar/navbar.css"
const Navbar = () => {
  return (
    <ul className="navbar">
      <Link href="/">
        <li className="navbar-item">Home</li>
      </Link>
      <Link href="/about">
        <li className="navbar-item">About</li>
      </Link>
      <Link href="/contact">
        <li className="navbar-item">Contact</li>
      </Link>
    </ul>
  )
}

export default Navbar