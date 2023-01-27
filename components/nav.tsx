import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <Link href="/">Index</Link>
      <Link href="/ssg">SSG</Link>
      <Link href="/ssr">SSR</Link>
      <style jsx>
        {`
          a {
            margin-right: 25px;
          }
        `}
      </style>
    </nav>
  );
};

export default Nav;
