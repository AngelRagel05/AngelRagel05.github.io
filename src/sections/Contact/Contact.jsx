import { useTranslation } from 'react-i18next';
import styles from './Contact.module.css';

function Contact() {
  const { t } = useTranslation();

  return (
    <section className={styles.section} id="contact">
      <h2 className={styles.title}>{t('sections.contact.title')}</h2>
    </section>
  );
}

export default Contact;
