import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  featuredProject,
  homePreviewProjects,
} from '../../data/projects.js';
import ProjectPreviewCard from '../../components/projects/ProjectPreviewCard/ProjectPreviewCard.jsx';
import FeaturedProject from './components/FeaturedProject/FeaturedProject.jsx';
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

        {featuredProject && (
          <div className={styles.featuredProjectContainer}>
            <FeaturedProject project={featuredProject} />
          </div>
        )}

        <div className={styles.secondaryProjectsGrid}>
          {homePreviewProjects.map((project) => (
            <ProjectPreviewCard project={project} key={project.id} />
          ))}
        </div>

        <Link className={styles.allProjectsLink} to="/projects">
          {t('projects.actions.viewAll')}
        </Link>
      </div>
    </section>
  );
}

export default Projects;
