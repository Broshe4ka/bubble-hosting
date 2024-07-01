import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={`${styles.footer} container`}>
      <Link
        className={styles.footer__link}
        href="/user-agreement"
      >
        Пользовательское соглашение
      </Link>
      <Link className={styles.footer__link} href="/ofert">
        Договор оферты
      </Link>
      <Link className={styles.footer__link} href="/confid">
        Политика конфиденциальности
      </Link>
    </footer>
  );
}
