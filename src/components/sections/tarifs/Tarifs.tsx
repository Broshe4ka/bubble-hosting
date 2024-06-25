import Tarif from '@/components/ui/Tarif/Tarif';
import Select from '@/components/ui/Select/Select';
import { selectData } from '@/data/selectData';
import { tarifsData } from '@/data/tarifsData';
import styles from './Tarifs.module.scss';

export default function Tarifs() {
  return (
    <section className={`${styles.tarifses} container`}>
      <div className={styles.left}>
        <div className={styles.inputs}>
          {/* #TODO: Сделать фильтрацию по этим лесектам (чекнуть диаграмку) */}
          {selectData.map((selectData) => (
            <Select key={selectData.id} {...selectData} />
          ))}
        </div>
        <span className={styles.description}>
          Если вы не смогли определиться с выбором тарифа
          самостоятельно, или у вас остальись вопросы на которые
          на даны ответы на нашем сайте, то мы с удовольствием
          вам поможем на нашем{' '}
          <a className="link" href="#">
            discord
          </a>{' '}
          сервере!
        </span>
      </div>
      <div className={`${styles.right} bubble `}>
        <div className={styles.tarifs__title}>
          Подходящие тарифы:
        </div>
        <div className={`${styles.tarifs} `}>
          {tarifsData.map((tarifData) => (
            <Tarif key={tarifData.id} {...tarifData} />
          ))}
        </div>
      </div>
    </section>
  );
}
