import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="notFound">
      <h1>Opppppps...</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to
        <Link href="/">
          <a> Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
