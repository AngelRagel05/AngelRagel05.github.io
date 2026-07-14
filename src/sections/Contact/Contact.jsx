import Button from '../../components/ui/Button/Button.jsx';
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle.jsx';
import styles from './Contact.module.css';

function Contact() {
  return (
    <section className={styles.section} id="contact">
      <SectionTitle eyebrow="Contacto" title="Hablemos" />
      <p className={styles.text}>
        Espacio reservado para incluir los canales de contacto reales.
      </p>
      <Button href="mailto:contacto@example.com">Enviar email</Button>
    </section>
  );
}

export default Contact;
