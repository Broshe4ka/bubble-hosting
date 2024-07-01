import styles from './not-found.module.scss';
export default function NotFound() {
  return (
    <div className={styles.body}>
      <img
        className={styles.img}
        src="/gifs/bee_minecraft.gif"
        alt="bee gif"
      />
      <span className={styles.title}>
        Упс.. <span className={styles.bold}>404</span> - Не
        найдено
      </span>
    </div>
  );
}
