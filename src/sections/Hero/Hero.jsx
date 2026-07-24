import { useTranslation } from 'react-i18next';
import { socialLinks } from '../../data/socialLinks.js';
import Reveal from '../../components/ui/Reveal/Reveal.jsx';
import styles from './Hero.module.css';

function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.section} id="home">
      <Reveal className={styles.content} direction="up">
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
      </Reveal>
    </section>
  );
}

export default Hero;
