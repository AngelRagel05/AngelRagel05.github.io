import Button from '../../components/ui/Button/Button.jsx';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.content}>
        <p className={styles.kicker}>Portfolio profesional</p>
        <h1 className={styles.title}>Nombre y posicion profesional</h1>
        <p className={styles.description}>
          Breve presentacion pendiente de completar con contenido real.
        </p>
        <Button href="#projects">Ver proyectos</Button>
      </div>
    </section>
  );
}

export default Hero;
