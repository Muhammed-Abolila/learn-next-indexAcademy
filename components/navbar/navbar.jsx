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
      <Link href="/routeWithId/1">
        <li className="navbar-item">Route with id 1</li>
      </Link>
      <Link href="/routeWithId/2">
        <li className="navbar-item">Route with id 2</li>
      </Link>
      <Link href="/routesWithSlug/helloSlug">
        <li className="navbar-item">Route with slug </li>
      </Link>
    </ul>
  )
}

export default Navbar