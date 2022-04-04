import { useState } from "react";
import { Arrow } from "../arrow";
import { ArrowUp } from "../arrowUp";
import { Icon } from "../icon";
import styles from "./header.module.scss";

export const Header = () => {
  const [active, setActive] = useState(false);
  const [teacher, setTeacher] = useState(false);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.menu}>
          <Icon className={styles.icon} />
          <div className={styles.classes}>Classes</div>
          {!teacher ? (
            <>
              <div className={styles.tab}>Lessons</div>
              <div className={styles.tab}>Libraries</div>
            </>
          ) : (
            <div className={styles.tab}>Assignments</div>
          )}
        </div>
        <div
          className={styles.setting}
          onClick={() => {
            setActive(!active);
          }}>
          <div className={styles.active}>
            {!teacher ? (
              <div className={active ? styles.account : styles.selected}>
                teacher@school.org
              </div>
            ) : (
              <div className={active ? styles.account : styles.selected}>
                student@school.org
              </div>
            )}
            {active ? <Arrow /> : <ArrowUp />}
          </div>
        </div>
        {!active && (
          <div className={styles.dropdown}>
            {!teacher ? (
              <div
                className={styles.email}
                onClick={() => {
                  setTeacher(!teacher);
                  setActive(!active);
                }}>
                student@school.org
              </div>
            ) : (
              <div
                className={styles.email}
                onClick={() => {
                  setTeacher(!teacher);
                  setActive(!active);
                }}>
                teacher@school.org
              </div>
            )}
            <div className={styles.settings}>Settings</div>
            <div className={styles.signOut}>Sign Out</div>
          </div>
        )}
      </div>
    </>
  );
};
