import { useTranslation } from 'react-i18next';
import { socialLinks } from '../../../data/socialLinks.js';
import styles from './Footer.module.css';

const footerLinks = [
  {
    id: 'github',
    label: 'GitHub',
    href: socialLinks.github,
    isExternal: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: socialLinks.linkedin,
    isExternal: true,
  },
  {
    id: 'email',
    labelKey: 'footer.email',
    href: socialLinks.email,
    isExternal: false,
  },
  {
    id: 'cv',
    labelKey: 'footer.downloadCv',
    href: socialLinks.cv,
    isExternal: false,
    download: true,
  },
];

function getLinkProps(link) {
  const downloadProps = link.download ? { download: true } : {};

  if (!link.isExternal) {
    return downloadProps;
  }

  return {
    ...downloadProps,
    target: '_blank',
    rel: 'noreferrer',
  };
}

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.identity}>
          <p className={styles.name}>Ángel Jiménez Ragel</p>
          <p className={styles.role}>{t('footer.role')}</p>
        </div>

        <nav
          className={styles.links}
          aria-label={t('accessibility.footerNavigation')}
        >
          {footerLinks.map((link) => (
            <a
              className={styles.link}
              href={link.href}
              key={link.id}
              {...getLinkProps(link)}
            >
              {link.labelKey ? t(link.labelKey) : link.label}
            </a>
          ))}
        </nav>

        <div className={styles.meta}>
          <p>{t('footer.builtWith', { react: 'React', vite: 'Vite' })}</p>
          <p>
            {t('footer.copyright', {
              name: 'Ángel Jiménez Ragel',
            })}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
