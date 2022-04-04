import { useState } from "react";
import { Arrow } from "../arrow";
import { ArrowUp } from "../arrowUp";
import { Icon } from "../icon";
import styles from "./header.module.scss";

export const Header = () => {
  const [active, setActive] = useState(false);
  const [student, setStudent] = useState(false);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.menu}>
          <Icon className={styles.icon} />
          <div className={styles.classes}>Classes</div>
          <div className={styles.tab}>Lessons</div>
          <div className={styles.tab}>Libraries</div>
        </div>
        <div
          className={styles.setting}
          onClick={() => {
            setActive(!active);
          }}>
          <div className={styles.active}>
            <div className={active ? styles.account : styles.selected}>
              teacher@school.org
            </div>
            {active ? <Arrow /> : <ArrowUp />}
          </div>
          {!active && (
            <div className={styles.dropdown}>
              <div
                className={styles.email}
                onClick={() => {
                  setStudent(!active);
                }}>
                student@school.org
              </div>
              <div className={styles.settings}>Settings</div>
              <div className={styles.signOut}>Sign Out</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
