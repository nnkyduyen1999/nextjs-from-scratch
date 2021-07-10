import Head from "next/head";
import styles from "../../styles/Girls.module.css";

export const getStaticProps = async () => {
  const listCats = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const catsAsJson = await listCats.json();
  return {
    props: {
      cats: catsAsJson,
    },
  };
};

const Girls = ({ cats }) => {
  const renderCats = (list) => {
    return list.map((cat) => (
      <div key={cat.id}>
        <a className={styles.single}>
          <h5>{cat.name}</h5>
        </a>
      </div>
    ));
  };

  return (
    <>
      <Head>
        <title>Cats</title>
      </Head>
      <div>
        <h1>All Cats</h1>
        {renderCats(cats)}
      </div>
    </>
  );
};

export default Girls;
