import styles from './Tarif.module.scss';

interface tarifProps {
  id: number;
  title: string;
  icon: string;
  icon_bg: string;
  cpu: number;
  ram: number;
  storage: number;
  backups: number;
  ports: number;
}

export default function Tarif({
  title,
  icon,
  icon_bg,
  cpu,
  ram,
  storage,
  backups,
  ports,
}: tarifProps) {
  return (
    <div className={styles.tarif}>
      <div
        style={{ background: icon_bg }}
        className={styles.tarif__img}
      >
        <img
          src={icon}
          alt="Tarif img"
          className={styles.tarif__picture}
        />
      </div>
      <div className={styles.tarif__info}>
        <span className={styles.tarif__title}>{title}</span>
        <div className={styles.tarif__chars}>
          <div className={styles.chars__group}>
            <div className={styles.tarif__char}>
              <img
                src="/icons/cpu_mini.svg"
                alt="Chars icon"
                className={styles.char__img}
              />
              <span className={styles.char__text}>
                {cpu} vCPU Cores
              </span>
            </div>
            <div className={styles.tarif__char}>
              <img
                src="/icons/monitoring_mini.svg"
                alt="Chars icon"
                className={styles.char__img}
              />
              <span className={styles.char__text}>
                {ram}Gb RAM DDR5{' '}
              </span>
            </div>
            <div className={styles.tarif__char}>
              <img
                src="/icons/storage_mini.svg"
                alt="Chars icon"
                className={styles.char__img}
              />
              <span className={styles.char__text}>
                {storage}Gb NVMe
              </span>
            </div>
          </div>
          <div className={styles.chars__group}>
            <div className={styles.tarif__char}>
              <img
                src="/icons/db_mini.svg"
                alt="Chars icon"
                className={styles.char__img}
              />
              <span className={styles.char__text}>
                Базы данных & Бекапы - {backups}шт
              </span>
            </div>
            <div className={styles.tarif__char}>
              <img
                src="/icons/bash_mini.svg"
                alt="Chars icon"
                className={styles.char__img}
              />
              <span className={styles.char__text}>
                Порты: {ports}шт
              </span>
            </div>
          </div>
        </div>
        <a
          href="#"
          className={`${styles.tarif__button} button`}
        >
          К оформлению
        </a>
      </div>
    </div>
  );
}
