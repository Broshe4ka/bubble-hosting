import React from 'react';
import styles from './Select.module.scss';

interface selectProps {
  id: string;
  title: string;
  range: {
    min: number;
    max: number;
    step: number;
  };
  onChange: (id: string, value: number) => void;
}

export default function Select({
  id,
  title,
  range: { min, max, step },
  onChange,
}: selectProps) {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    onChange(id, Number(event.target.value));
  };

  return (
    <div className={styles.inputs__group}>
      <span className={styles.input__title}>{title}</span>
      <input
        type="range"
        id={id}
        min={min}
        max={max}
        step={step}
        className={styles.input}
        onChange={handleChange}
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
