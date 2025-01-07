'use client'

import { Main } from "@/components/Main/Main";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Main />
    </div>
  );
}
