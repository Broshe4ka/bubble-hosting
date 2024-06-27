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
        <a
          href="#promotion"
          className={styles.link}
          onClick={() => setIsOpen(!isOpen)}
        >
          Почему мы?
        </a>
        <a
          href="#tarifs"
          className={styles.link}
          onClick={() => setIsOpen(!isOpen)}
        >
          Выбрать тариф
        </a>
        <a
          href="Тут ссылку на дсикорд"
          className={styles.link}
          onClick={() => setIsOpen(!isOpen)}
        >
          Поддержка
        </a>
        <a
          href="#faq"
          className={styles.link}
          onClick={() => setIsOpen(!isOpen)}
        >
          F.A.Q.
        </a>
      </div>

      <div
        className={`${styles.burger} ${
          isOpen ? styles.opened : ''
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.burger__row}></span>
        <span className={styles.burger__row}></span>
        <span className={styles.burger__row}></span>
      </div>
    </>
  );
}
