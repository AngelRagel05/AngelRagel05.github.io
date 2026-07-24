import { useTranslation } from 'react-i18next';
import { socialLinks } from '../../data/socialLinks.js';
import Reveal from '../../components/ui/Reveal/Reveal.jsx';
import styles from './Contact.module.css';

const contactLinks = [
  {
    id: 'email',
    href: socialLinks.email,
    labelKey: 'sections.contact.links.email',
    variant: 'primary',
  },
  {
    id: 'linkedin',
    href: socialLinks.linkedin,
    labelKey: 'sections.contact.links.linkedin',
    external: true,
  },
  {
    id: 'github',
    href: socialLinks.github,
    labelKey: 'sections.contact.links.github',
    external: true,
  },
  {
    id: 'cv',
    href: socialLinks.cv,
    labelKey: 'sections.contact.links.cv',
    download: true,
  },
];

function getLinkProps(link) {
  if (link.external) {
    return {
      target: '_blank',
      rel: 'noreferrer',
    };
  }

  if (link.download) {
    return { download: true };
  }

  return {};
}

function getActionClassName(link) {
  return link.variant === 'primary'
    ? `${styles.action} ${styles.primaryAction}`
    : `${styles.action} ${styles.secondaryAction}`;
}

function Contact() {
  const { t } = useTranslation();

  return (
    <section
      className={styles.section}
      id="contact"
      aria-labelledby="contact-title"
    >
      <Reveal className={styles.content} direction="up">
        <div className={styles.header}>
          <h2 className={styles.title} id="contact-title">
            {t('sections.contact.title')}
          </h2>
          <p className={styles.subtitle}>{t('sections.contact.subtitle')}</p>
        </div>

        <div className={styles.actions}>
          {contactLinks.map((link) => (
            <a
              className={getActionClassName(link)}
              href={link.href}
              key={link.id}
              {...getLinkProps(link)}
            >
              {t(link.labelKey)}
            </a>
          ))}
        </div>

        <p className={styles.note}>{t('sections.contact.note')}</p>
      </Reveal>
    </section>
  );
}

export default Contact;
