import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

function Home(props) {
  return <div className={styles.container}>Hello, {props.name}</div>;
}

Home.getInitialProps = async () => {
  // const response = await fetch("http://localhost:3000/api/hello").then((res) =>
  //   res.json()
  // );
  return {
    name: "Name",
  };
};

export default Home;
