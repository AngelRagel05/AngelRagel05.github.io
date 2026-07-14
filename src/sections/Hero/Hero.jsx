import { useTranslation } from 'react-i18next';
import { socialLinks } from '../../data/socialLinks.js';
import styles from './Hero.module.css';

function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.section} id="hero">
      <div className={styles.content}>
        <p className={styles.eyebrow}>{t('hero.eyebrow')}</p>
        <h1 className={styles.title}>{t('hero.title')}</h1>
        <p className={styles.description}>{t('hero.description')}</p>
        <div className={styles.actions}>
          <a className={styles.primaryAction} href="#projects">
            {t('hero.viewProjects')}
          </a>
          <a className={styles.secondaryAction} href={socialLinks.cv} download>
            {t('hero.downloadCv')}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
