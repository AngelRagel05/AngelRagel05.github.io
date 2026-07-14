import { useTranslation } from 'react-i18next';
import styles from './Projects.module.css';

function Projects() {
  const { t } = useTranslation();

  return (
    <section className={styles.section} id="projects">
      <h2 className={styles.title}>{t('sections.projects.title')}</h2>
    </section>
  );
}

export default Projects;
