import Link from "next/link";
import "@/style/navbar/navbar.css"
const Navbar = () => {
  return (
    <ul className="navbar">
      <Link href="/">
        <li className="navbar-item">CSR</li>
      </Link>
      <Link href="/ssr">
        <li className="navbar-item">SSR</li>
      </Link>
      <Link href="/ssg">
        <li className="navbar-item">SSG</li>
      </Link>
      <Link href="/isr">
        <li className="navbar-item">ISR</li>
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