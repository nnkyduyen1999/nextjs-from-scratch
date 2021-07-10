import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";

const NotFoundPage = () => {
  const router = useRouter();
  const [countdowntime, setCountdowntime] = useState(5);

  useEffect(() => {
    const id = setInterval(() => {
      setCountdowntime((time) => time - 1);
    }, 1000);
    if (countdowntime <= 0) {
      router.push("/");
    }
    return () => clearInterval(id);
  }, [countdowntime]);

  return (
    <div className="notFound">
      <h1>Opppppps...</h1>
      <h2>That page cannot be found.</h2>
      <h3>Return to Home in {countdowntime}s.</h3>
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
