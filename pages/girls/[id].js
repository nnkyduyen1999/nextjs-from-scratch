import Link from "next/link";
import homeStyles from "../../styles/Home.module.css";

export const getStaticPaths = async () => {
  const listCats = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const catsAsJson = await listCats.json();

  // this return the param each item need to receive
  // in this case param for each cat is the id, this may have more inside the params props
  const pathListByItem = catsAsJson.map((cat) => ({
    params: {
      id: cat.id.toString(),
    },
  }));

  return {
    paths: pathListByItem, //this is the list of params obj that contain the param, each item in this arr will be save in the context to use in getStaticProps func
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const idCat = context.params.id;
  console.log(context);
  const catDetail = await fetch(
    `https://jsonplaceholder.typicode.com/users/` + idCat
  );
  const catAsJson = await catDetail.json();
  return {
    props: {
      cat: catAsJson,
      id: idCat,
    },
  };
};

const CatDetail = ({cat}) => {
  return (
    <div>
      <h1>Cat {cat.name}</h1>
      <p>Email: {cat.email}</p>
      <p>City: {cat.address.city}</p>
      <p>Website: {cat.website}</p>
      <Link href="/girls">
        <a className={homeStyles.btn}>To Girls</a>
      </Link>
    </div>
  );
};

export default CatDetail;
