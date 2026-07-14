import { useTranslation } from 'react-i18next';
import styles from './Experience.module.css';

function Experience() {
  const { t } = useTranslation();

  return (
    <section className={styles.section} id="experience">
      <h2 className={styles.title}>{t('sections.experience.title')}</h2>
    </section>
  );
}

export default Experience;
