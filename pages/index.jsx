import Head from "next/head";
import Image from "next/image";
import Chart from "../components/Chart";
import Featured from "../components/Featured";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Table from "../components/Table";
import Widget from "../components/Widget";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lama Dev - Admin System</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.home}>
        <SideBar />
        <div className={styles.homeContainer}>
          <NavBar />
          <div className={styles.widgets}>
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earnings" />
            <Widget type="balance" />
          </div>
          <div className={styles.charts}>
            <Featured />
            <Chart />
          </div>
          <div className={styles.listContainer}>
            <div className={styles.listTitle}>Latest Transactions</div>
            <Table />
          </div>
        </div>
      </main>
    </div>
  );
}
