import SectionTitle from '../../components/ui/SectionTitle/SectionTitle.jsx';
import { experience } from '../../data/experience.js';
import styles from './Experience.module.css';

function Experience() {
  return (
    <section className={styles.section} id="experience">
      <SectionTitle eyebrow="Experiencia" title="Trayectoria profesional" />
      <div className={styles.list}>
        {experience.map((item) => (
          <article className={styles.item} key={item.id}>
            <p className={styles.period}>{item.period}</p>
            <h3 className={styles.role}>{item.role}</h3>
            <p className={styles.company}>{item.company}</p>
            <p className={styles.description}>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
