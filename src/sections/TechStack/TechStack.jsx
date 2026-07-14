import { useTranslation } from 'react-i18next';
import styles from './TechStack.module.css';

function TechStack() {
  const { t } = useTranslation();

  return (
    <section className={styles.section} id="tech-stack">
      <h2 className={styles.title}>{t('sections.techStack.title')}</h2>
    </section>
  );
}

export default TechStack;
