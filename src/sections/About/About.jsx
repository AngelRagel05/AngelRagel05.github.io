import SectionTitle from '../../components/ui/SectionTitle/SectionTitle.jsx';
import styles from './About.module.css';

function About() {
  return (
    <section className={styles.section} id="about">
      <SectionTitle eyebrow="Sobre mi" title="Perfil profesional" />
      <p className={styles.text}>
        Texto de ejemplo para validar la estructura de la seccion.
      </p>
    </section>
  );
}

export default About;
