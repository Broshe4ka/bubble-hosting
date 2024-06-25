import styles from './About.module.scss';

export default function About() {
  return (
    <section className={`${styles.about} container`}>
      <div className={`${styles.about__nav} bubble`}>
        <h2 className={`${styles.about__title} title`}>
          Быстрый и надежный игровой хостинг Minecraft Java
          Edition с продвинутой защитой от DDoS
        </h2>
        <a
          href="#"
          className={`${styles.about__button} button`}
        >
          Подобрать тариф
        </a>
      </div>

      <div className={styles.info}>
        <h3 className={styles.info__title}>Почему мы?</h3>
        <div className={styles.info__groups}>
          <div className={styles.group}>
            <img
              src="/icons/secure.svg"
              alt="Icon"
              className={styles.group__img}
            />
            <div className={styles.group__text}>
              <h4 className={styles.text__title}>
                Безопасность
              </h4>
              <p className={styles.text__subtitle}>
                наши серверы обеспечивают безопасность вашего
                сервера с помощью автоматического обновления и
                мониторинга.
              </p>
            </div>
          </div>
          <div className={styles.group}>
            <img
              src="/icons/monitoring.svg"
              alt="Icon"
              className={styles.group__img}
            />
            <div className={styles.group__text}>
              <h4 className={styles.text__title}>
                Мониторинг и поддержка
              </h4>
              <p className={styles.text__subtitle}>
                наша команда поддержки будет рада помочь вам в
                любых вопросах, связанных с настройкой и
                запуском вашего сервера.
              </p>
            </div>
          </div>
          <div className={styles.group}>
            <img
              src="/icons/settings.svg"
              alt="Icon"
              className={styles.group__img}
            />
            <div className={styles.group__text}>
              <h4 className={styles.text__title}>
                Качественный функционал
              </h4>
              <p className={styles.text__subtitle}>
                наши серверы поддерживают все Java ядра
                Minecraft, включая Spigot и BungeeCord, что
                позволяет вам настроить сервер по вашим
                потребностям.
              </p>
            </div>
          </div>
          <div className={styles.group}>
            <img
              src="/icons/actions.svg"
              alt="Icon"
              className={styles.group__img}
            />
            <div className={styles.group__text}>
              <h4 className={styles.text__title}>
                Простота использования
              </h4>
              <p className={styles.text__subtitle}>
                наша система позволяет легко настроить и
                запустить сервер, даже если вы не эксперт в
                программировании.
              </p>
            </div>
          </div>
          <div className={styles.group}>
            <img
              src="/icons/cpu.svg"
              alt="Icon"
              className={styles.group__img}
            />
            <div className={styles.group__text}>
              <h4 className={styles.text__title}>
                Высокая производительность
              </h4>
              <p className={styles.text__subtitle}>
                наши серверы оснащены мощными процессорами AMD
                Ryzen 9 7950X3D, что обеспечивает быстрый запуск
                и стабильную работу вашего сервера.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
