import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LayoutPublic from "../modules/shared/components/layouts/LayoutPublic";
import styles from "../styles/Home.module.css";
import Presentation from "../modules/portfolio/components/Presentation";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Will Coder</title>
        <meta name="description" content="Site pessoal do Will" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutPublic>
        <Presentation></Presentation>
      </LayoutPublic>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
