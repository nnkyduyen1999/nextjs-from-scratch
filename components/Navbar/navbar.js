import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">Duyen</div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/girls">
        <a>Girls</a>
      </Link>
    </nav>
  );
};

export default Navbar;
