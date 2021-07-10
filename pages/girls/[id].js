import Link from "next/link";
import homeStyles from "../../styles/Home.module.css";

const CatDetail = () => {
  return (
    <div>
      <h1>Cat Detail</h1>
      <Link href="/girls">
          <a className={homeStyles.btn}>To Girls</a>
        </Link>
    </div>
  );
};

export default CatDetail;
