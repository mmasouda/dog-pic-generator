import Link from "next/link";

function MainBanner() {
  return (
    <header className="banner">
      <div className="logo">
        <h2 href="/">
          <span>Dog</span>Pic<span>Generator</span>
        </h2>
      </div>
      <nav className="navBar">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/favorite">My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainBanner;
