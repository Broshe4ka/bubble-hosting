'use client';

import { useState } from 'react';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <>
      <div
        className={`${styles.nav} ${
          isOpen ? styles.nav__openned : ''
        }`}
      >
        <a href="#" className={styles.link}>
          Почему мы?
        </a>
        <a href="#" className={styles.link}>
          Выбрать тариф
        </a>
        <a href="#" className={styles.link}>
          Поддержка
        </a>
        <a href="#" className={styles.link}>
          F.A.Q.
        </a>
      </div>

      <div
        className={styles.burger}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.burger__row}></span>
        <span className={styles.burger__row}></span>
        <span className={styles.burger__row}></span>
      </div>
    </>
  );
}
