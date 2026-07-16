import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { projects } from '../../data/projects.js';
import ProjectListCard from '../../components/projects/ProjectListCard/ProjectListCard.jsx';
import styles from './ProjectsPage.module.css';

function ProjectsPage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('pages.projects.documentTitle');
  }, [t]);

  return (
    <main className={styles.page}>
      <section
        className={styles.content}
        aria-labelledby="all-projects-title"
      >
        <div className={styles.header}>
          <h1 className={styles.title} id="all-projects-title">
            {t('pages.projects.title')}
          </h1>
          <p className={styles.introduction}>{t('pages.projects.introduction')}</p>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectListCard project={project} key={project.id} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;
