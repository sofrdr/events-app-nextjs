import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo_black.png";

const Header = () => {
  return (
    <header>
      <div className="top-nav">
        <Image src={logo} width={50} height={50} />
        <nav>
          <ul>
            <li>
              <Link href="/" passHref>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" passHref>
                About us
              </Link>
            </li>
            <li>
              <Link href="/events" passHref>
                Events
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <h1>Ut enim ad minim veniam</h1>
    </header>
  );
};

export default Header;
