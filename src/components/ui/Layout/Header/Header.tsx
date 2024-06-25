import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  return (
    // #TODO: Сделать мобильную версию
    <header className={`${styles.header} container`}>
      <Link href="/" className={styles.header__logo}>
        <img
          src="/icons/bubblehost-logo.svg"
          alt="Website logo"
          className={styles.header__img}
        />
        <h1 className={styles.header__title}>Bubble Hosting</h1>
      </Link>

      <div className={styles.header__nav}>
        <a href="#" className={styles.header__link}>
          Почему мы?
        </a>
        <a href="#" className={styles.header__link}>
          Выбрать тариф
        </a>
        <a href="#" className={styles.header__link}>
          Поддержка
        </a>
        <a href="#" className={styles.header__link}>
          F.A.Q.
        </a>
      </div>
    </header>
  );
}
