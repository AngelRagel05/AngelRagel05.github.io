import { useTranslation } from 'react-i18next';
import styles from './ProjectDetail.module.css';

function DetailSection({ section, t }) {
  const hasList = Boolean(section.itemsKey);
  const items = hasList ? t(section.itemsKey, { returnObjects: true }) : [];

  if (!section.contentKey && (!Array.isArray(items) || items.length === 0)) {
    return null;
  }

  return (
    <section className={styles.detailSection}>
      <h2 className={styles.detailTitle}>{t(section.titleKey)}</h2>
      {section.contentKey && (
        <p className={styles.detailText}>{t(section.contentKey)}</p>
      )}
      {Array.isArray(items) && items.length > 0 && (
        <ul className={styles.decisionList}>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

function getActionClassName(link) {
  const variantClassName =
    link.variant === 'primary' ? styles.primaryAction : styles.secondaryAction;

  return `${styles.action} ${variantClassName}`;
}

function ProjectDetail({ project }) {
  const { t } = useTranslation();
  const title = t(project.i18n.titleKey);
  const image = project.media.mainImage;
  const links = project.links.filter((link) => link.url);

  return (
    <article
      className={styles.detail}
      aria-labelledby={`${project.id}-detail-title`}
    >
      <div className={`${styles.hero} ${image ? styles.withMedia : ''}`}>
        <div className={styles.summary}>
          <p className={styles.category}>{t(project.category.labelKey)}</p>
          <h1 className={styles.title} id={`${project.id}-detail-title`}>
            {title}
          </h1>
          <p className={styles.description}>{t(project.i18n.overviewKey)}</p>
        </div>

        {image && (
          <img
            className={styles.image}
            src={image.src}
            alt={image.altKey ? t(image.altKey) : ''}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
          />
        )}
      </div>

      {project.technologies.length > 0 && (
        <section className={styles.technologiesSection}>
          <h2 className={styles.detailTitle}>
            {t('pages.projectDetail.sections.technologies')}
          </h2>
          <ul className={styles.technologies}>
            {project.technologies.map((technology) => (
              <li className={styles.technology} key={technology.id}>
                {technology.name}
              </li>
            ))}
          </ul>
        </section>
      )}

      {project.detailSections.length > 0 && (
        <div className={styles.sections}>
          {project.detailSections.map((section) => (
            <DetailSection section={section} key={section.id} t={t} />
          ))}
        </div>
      )}

      {links.length > 0 && (
        <div className={styles.actions}>
          {links.map((link) => (
            <a
              className={getActionClassName(link)}
              href={link.url}
              key={link.id}
              rel={link.external ? 'noreferrer' : undefined}
              target={link.external ? '_blank' : undefined}
            >
              {t(link.labelKey)}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

export default ProjectDetail;
