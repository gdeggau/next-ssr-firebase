import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

function Home(props) {
  return <div className={styles.container}>Hello, {props.name}</div>;
}

Home.getInitialProps = async () => {
  const { URL } = process.env;
  const response = await fetch(`${URL}/api/hello`).then((res) => res.json());
  return {
    name: response.name,
  };
};

export default Home;
