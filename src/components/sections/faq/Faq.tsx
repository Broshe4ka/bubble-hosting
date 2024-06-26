'use client';

import styles from './Faq.module.scss';
import Accordion from '@/components/ui/Accordion/Accordion';
import { faqData } from '@/data/faqData';

export default function Faq() {
  return (
    <section id="faq" className={`${styles.faq} container`}>
      <h2 className={`${styles.faq__title} title`}>F.A.Q</h2>
      <div className={`${styles.faq__setcions} bubble`}>
        <div className={styles.accordions}>
          {faqData.map(({ id, title, descripton }) => (
            <Accordion
              key={id}
              id={id}
              title={title}
              description={descripton}
            />
          ))}
        </div>
        <div className={styles.discord}>
          <iframe
            className={styles.discord__widget}
            src="https://discord.com/widget?id=1061730448830632110&theme=dark"
            // sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          />
        </div>
      </div>
    </section>
  );
}
