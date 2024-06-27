'use client';
import Navbar from '../../Navbar/Navbar';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      const scrollValue = document.documentElement.scrollTop;
      setIsScrolled(scrollValue > 0);
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <header
      className={`${styles.header} container ${
        isScrolled ? styles.scrolled : ''
      }`}
    >
      <Link href="/" className={styles.header__logo}>
        <img
          src="/icons/bubblehost-logo.svg"
          alt="Website logo"
          className={styles.header__img}
        />
        <h1 className={styles.header__title}>Bubble Hosting</h1>
      </Link>
      <Navbar />
    </header>
  );
}
