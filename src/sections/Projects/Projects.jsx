import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle.jsx';
import TechnologyBadge from '../../components/ui/TechnologyBadge/TechnologyBadge.jsx';
import { projects } from '../../data/projects.js';
import styles from './Projects.module.css';

function Projects() {
  const { t } = useTranslation();

  return (
    <section className={styles.section} id="projects">
      <SectionTitle
        eyebrow={t('navigation.projects')}
        title={t('sections.projects.title')}
      />
      <p className={styles.subtitle}>{t('sections.projects.subtitle')}</p>
      <div className={styles.grid}>
        {projects.map((project) => (
          <article className={styles.project} key={project.id}>
            <h3 className={styles.title}>{t(project.titleKey)}</h3>
            <p className={styles.description}>{t(project.descriptionKey)}</p>
            <div className={styles.badges}>
              {project.technologies.map((technology) => (
                <TechnologyBadge key={technology} name={technology} />
              ))}
            </div>
            <a className={styles.link} href={project.url}>
              {t('projectItems.example.viewDetails')}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
