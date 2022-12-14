import Image from "next/image";
import styles from "./page.module.css";

// Pages
import Homepage from "../components/Home/Homepage";

export default function Home() {
  return (
    <div className={styles.container}>
      <Homepage />
    </div>
  );
}
