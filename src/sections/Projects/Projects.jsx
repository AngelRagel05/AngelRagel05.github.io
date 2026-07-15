import { useTranslation } from 'react-i18next';
import styles from './Projects.module.css';

function Projects() {
  const { t } = useTranslation();

  return (
    <section
      className={styles.section}
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className={styles.content}>
        <h2 className={styles.heading} id="projects-title">
          {t('sections.projects.title')}
        </h2>

        <div className={styles.featuredProjectContainer}>
          <p>{t('sections.projects.featuredPlaceholder')}</p>
        </div>

        <div className={styles.secondaryProjectsGrid}>
          <div className={styles.secondaryProjectContainer}>
            <p>{t('sections.projects.secondaryPlaceholder')}</p>
          </div>
          <div className={styles.secondaryProjectContainer}>
            <p>{t('sections.projects.secondaryPlaceholder')}</p>
          </div>
          <div className={styles.secondaryProjectContainer}>
            <p>{t('sections.projects.secondaryPlaceholder')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
