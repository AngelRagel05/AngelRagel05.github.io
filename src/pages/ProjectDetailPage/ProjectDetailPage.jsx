import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getProjectBySlug } from '../../data/projects.js';
import ProjectDetail from '../../components/projects/ProjectDetail/ProjectDetail.jsx';
import styles from './ProjectDetailPage.module.css';

function ProjectDetailPage() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const project = getProjectBySlug(slug);
  const projectTitle = project ? t(project.i18n.titleKey) : null;

  useEffect(() => {
    document.title = project
      ? t('pages.projectDetail.documentTitle', { project: projectTitle })
      : t('pages.projectDetail.notFoundDocumentTitle');
  }, [project, projectTitle, t]);

  if (!project) {
    return (
      <main className={styles.page}>
        <section
          className={styles.notFound}
          aria-labelledby="project-not-found-title"
        >
          <h1 className={styles.notFoundTitle} id="project-not-found-title">
            {t('pages.projectDetail.notFoundTitle')}
          </h1>
          <p className={styles.notFoundText}>
            {t('pages.projectDetail.notFoundDescription')}
          </p>
          <Link className={styles.backLink} to="/projects">
            {t('pages.projectDetail.backToProjects')}
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <Link className={styles.backLink} to="/projects">
          {t('pages.projectDetail.backToProjects')}
        </Link>

        <ProjectDetail project={project} />
      </div>
    </main>
  );
}

export default ProjectDetailPage;
