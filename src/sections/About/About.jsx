import { useTranslation } from 'react-i18next';
import styles from './About.module.css';

function About() {
  const { t } = useTranslation();

  return (
    <section className={styles.section} id="about">
      <h2 className={styles.title}>{t('sections.about.title')}</h2>
    </section>
  );
}

export default About;
