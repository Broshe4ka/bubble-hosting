import styles from './Select.module.scss';

interface selectProps {
  id: string;
  title: string;
  range: {
    min: number;
    max: number;
    step: number;
  };
}

export default function Select({
  id,
  title,
  range: { min, max, step },
}: selectProps) {
  return (
    <div className={styles.inputs__group}>
      <span className={styles.input__title}>{title}</span>
      <input
        type="range"
        name=""
        id={id}
        min={min}
        max={max}
        step={step}
        className={styles.input}
      />
      <div className={styles.input__range}>
        {Array.from(
          { length: Math.ceil((max - min + 1) / step) },
          (_, i) => min + i * step,
        ).map((num) => (
          <span key={num} className={styles.range}>
            {num}
          </span>
        ))}
      </div>
    </div>
  );
}
