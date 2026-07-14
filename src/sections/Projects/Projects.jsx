import SectionTitle from '../../components/ui/SectionTitle/SectionTitle.jsx';
import TechnologyBadge from '../../components/ui/TechnologyBadge/TechnologyBadge.jsx';
import { projects } from '../../data/projects.js';
import styles from './Projects.module.css';

function Projects() {
  return (
    <section className={styles.section} id="projects">
      <SectionTitle eyebrow="Proyectos" title="Trabajo destacado" />
      <div className={styles.grid}>
        {projects.map((project) => (
          <article className={styles.project} key={project.id}>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.badges}>
              {project.technologies.map((technology) => (
                <TechnologyBadge key={technology} name={technology} />
              ))}
            </div>
            <a className={styles.link} href={project.url}>
              Ver detalle
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
