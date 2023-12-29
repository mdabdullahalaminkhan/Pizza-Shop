
import Link from "next/link";

function NavBar() {
  return (
    <>
      <header id="header" className="header">
        <nav className="nav container">
          <Link href="#" className="nav-logo">
            <img src="assets/logo.png" alt="Logo" />
            Pizza Shop
          </Link>
          <div className="nav-menu" id="nav-menu">
            <ul className="nav-list">
              <li className="nav-item">
                <Link href="/" className="nav-link active-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/popular" className="nav-link">
                  Popular
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/recently" className="nav-link">
                  Recently
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/newsletter" className="nav-link active-link">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
