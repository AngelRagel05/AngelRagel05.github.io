import { useTranslation } from 'react-i18next';
import Button from '../../components/ui/Button/Button.jsx';
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle.jsx';
import styles from './Contact.module.css';

function Contact() {
  const { t } = useTranslation();

  return (
    <section className={styles.section} id="contact">
      <SectionTitle
        eyebrow={t('navigation.contact')}
        title={t('sections.contact.title')}
      />
      <p className={styles.text}>{t('sections.contact.subtitle')}</p>
      <Button href="mailto:contacto@example.com">{t('contact.emailCta')}</Button>
    </section>
  );
}

export default Contact;
