import { useTranslation } from 'react-i18next';
import styles from './Hero.module.css';

function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.section} id="hero">
      <h1 className={styles.title}>{t('hero.name')}</h1>
    </section>
  );
}

export default Hero;
