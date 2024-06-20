// 'use client';

import { useState } from 'react';
import styles from './Accordion.module.scss';

interface AccordionProps {
  id: number;
  title: string;
  description: string;
}

export default function Accordion({
  id,
  title,
  description,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div key={id} className={styles.accordion}>
      <div
        className={styles.accordion__header}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src="/icons/plus.svg"
          alt=""
          className={`${styles.accordion__img} ${
            isOpen ? styles.open : ''
          }`}
        />
        <h3 className={styles.accordion__title}>{title}</h3>
      </div>
      <div
        className={`${styles.accordion__body} ${
          isOpen ? styles.open__body : ''
        }`}
      >
        <p className={styles.accordion__text}>{description}</p>
      </div>
    </div>
  );
}
