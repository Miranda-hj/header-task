import React from "react";
import { Header } from "./components/header/header";
import styles from "./App.module.scss";

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
    </div>
  );
}
