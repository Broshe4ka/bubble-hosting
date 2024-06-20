import styles from './Promotion.module.scss';

export default function Promotion() {
  return (
    <section className={`${styles.promotion} container`}>
      <div className={styles.promotion__block}>
        <img
          src="/icons/clocks.svg"
          alt="zxc"
          className={styles.promotion__img}
        />
        <span className={styles.promotion__text}>
          <span>955</span> дней успешной работы хостинга
        </span>
      </div>
      <div className={styles.promotion__block}>
        <img
          src="/icons/users.svg"
          alt="zxc"
          className={styles.promotion__img}
        />
        <span className={styles.promotion__text}>
          <span>64</span> серверов создано
        </span>
      </div>
      <div className={styles.promotion__block}>
        <img
          src="/icons/servers.svg"
          alt="zxc"
          className={styles.promotion__img}
        />
        <span className={styles.promotion__text}>
          <span>129</span> пользователей зарегистрировано
        </span>
      </div>
    </section>
  );
}
