'use client';

import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';
import styles from './About.module.scss';

export default function About() {
  return (
    <section
      id="promotion"
      className={`${styles.about} container`}
    >
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

      <MouseParallaxContainer className={styles.info}>
        <MouseParallaxChild
          factorX={0.01}
          factorY={0.01}
          style={{
            bottom: '-3.2rem',
            left: '-3.2rem',
          }}
          className={styles.paralax_img}
        >
          <img src="/images/big_salmon.png" />
        </MouseParallaxChild>

        <MouseParallaxChild
          factorX={0.02}
          factorY={0.03}
          style={{
            bottom: '-2.4rem',
            left: '6.4rem',
          }}
          className={styles.paralax_img}
        >
          <img src="/images/small_salmon.png" />
        </MouseParallaxChild>

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
      </MouseParallaxContainer>
    </section>
  );
}
