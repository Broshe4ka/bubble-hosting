'use client';

import React, { useState, useEffect } from 'react';
import Tarif from '@/components/ui/Tarif/Tarif';
import Select from '@/components/ui/Select/Select';
import { selectData } from '@/data/selectData';
import { tarifsData } from '@/data/tarifsData';
import styles from './Tarifs.module.scss';

export default function Tarifs() {
  const [filters, setFilters] = useState({
    cpu:
      selectData.find((data) => data.id === 'cpu')?.range.min ||
      0,
    ram:
      selectData.find((data) => data.id === 'ram')?.range.min ||
      0,
    storage:
      selectData.find((data) => data.id === 'storage')?.range
        .min || 0,
  });

  const handleFilterChange = (id: string, value: number) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [id]: value,
    }));
  };

  const filteredTarifs = tarifsData.filter(
    (tarif) =>
      tarif.cpu >= filters.cpu &&
      tarif.ram >= filters.ram &&
      tarif.storage >= filters.storage,
  );

  return (
    <section
      id="tarifs"
      className={`${styles.tarifses} container`}
    >
      <div className={styles.left}>
        <div className={styles.inputs}>
          {selectData.map((select) => (
            <Select
              key={select.id}
              {...select}
              onChange={handleFilterChange}
            />
          ))}
        </div>
        <span className={styles.description}>
          Если вы не смогли определиться с выбором тарифа
          самостоятельно, или у вас остались вопросы на которые
          не даны ответы на нашем сайте, то мы с удовольствием
          вам поможем на нашем{' '}
          <a className="link" href="#">
            discord
          </a>{' '}
          сервере!
        </span>
      </div>
      <div className={`${styles.right} bubble`}>
        <div className={styles.tarifs__title}>
          Подходящие тарифы:
        </div>
        <div className={`${styles.tarifs}`}>
          {filteredTarifs.map((tarif) => (
            <Tarif key={tarif.id} {...tarif} />
          ))}
        </div>
      </div>
    </section>
  );
}
