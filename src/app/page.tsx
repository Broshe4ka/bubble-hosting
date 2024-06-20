import styles from './page.module.scss';
import About from '@/components/sections/about/About';
import Promotion from '@/components/sections/promotion/Promotion';
import Tarifs from '@/components/sections/tarifs/Tarifs';
import Faq from '@/components/sections/faq/Faq';

export default function Home() {
  return (
    <>
      <About />
      <Promotion />
      <Tarifs />
      <Faq />
    </>
  );
}
