import Link from "next/link";
import style from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <header className={style.header}>
      <nav className={style.navbar}>
        <ul className={style.nav_list}>
          <li className={style.nav_link}>
            <Link href="/" className="link">
              Home
            </Link>
          </li>
          <li className={style.nav_link}>
            <Link href="/about" className="link">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
