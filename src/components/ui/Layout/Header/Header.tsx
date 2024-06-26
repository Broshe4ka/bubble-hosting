import Navbar from '../../Navbar/Navbar';
import { useEffect } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  const [isScrolled, setIsScrolles] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // window.screenY != 0 ? isScrolled() : isScrolled();
    };
  });
  return (
    <header className={`${styles.header} container`}>
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
