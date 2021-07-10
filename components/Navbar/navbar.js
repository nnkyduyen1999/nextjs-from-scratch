import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <h1 className="logo">Sam0614</h1>
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
