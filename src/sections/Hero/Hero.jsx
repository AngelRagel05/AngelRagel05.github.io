import { useTranslation } from 'react-i18next';
import Button from '../../components/ui/Button/Button.jsx';
import styles from './Hero.module.css';

function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero} id="home">
      <div className={styles.content}>
        <p className={styles.kicker}>{t('hero.eyebrow')}</p>
        <h1 className={styles.title}>{t('hero.name')}</h1>
        <p className={styles.description}>{t('hero.description')}</p>
        <Button href="#projects">{t('hero.viewProjects')}</Button>
      </div>
    </section>
  );
}

export default Hero;
