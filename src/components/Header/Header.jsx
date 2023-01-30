import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/" passHref>
          Home
        </Link>
        <Link href="/about-us" passHref>
          About us
        </Link>
        <Link href="/events" passHref>
          Events
        </Link>
      </nav>
    </header>
  );
};

export default Header;
