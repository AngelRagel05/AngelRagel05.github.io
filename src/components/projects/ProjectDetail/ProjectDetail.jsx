import { useTranslation } from 'react-i18next';
import styles from './ProjectDetail.module.css';

function TextDetailSection({ section }) {
  const { t } = useTranslation();

  if (!section?.contentKey) {
    return null;
  }

  return (
    <section className={styles.detailSection}>
      <h2 className={styles.detailTitle}>{t(section.titleKey)}</h2>
      <p className={styles.detailText}>{t(section.contentKey)}</p>
    </section>
  );
}

function TechnicalDecisionsSection({ section }) {
  const { t } = useTranslation();

  if (!section?.itemsKey) {
    return null;
  }

  const decisions = t(section.itemsKey, { returnObjects: true });

  if (!Array.isArray(decisions) || decisions.length === 0) {
    return null;
  }

  return (
    <section className={styles.detailSection}>
      <h2 className={styles.detailTitle}>{t(section.titleKey)}</h2>
      <ul className={styles.decisionList}>
        {decisions.map((decision) => (
          <li key={decision}>{decision}</li>
        ))}
      </ul>
    </section>
  );
}

function ProjectDetail({ project }) {
  const { t } = useTranslation();
  const title = t(project.titleKey);
  const hasImage = Boolean(project.image);
  const hasRepository = Boolean(project.repositoryUrl);
  const hasDemo = Boolean(project.demoUrl);
  const detailSections = project.detailSections ?? {};

  return (
    <article
      className={styles.detail}
      aria-labelledby={`${project.id}-detail-title`}
    >
      <div className={styles.hero}>
        <div className={styles.summary}>
          <p className={styles.category}>{t(project.categoryKey)}</p>
          <h1 className={styles.title} id={`${project.id}-detail-title`}>
            {title}
          </h1>
          <p className={styles.description}>{t(project.descriptionKey)}</p>
        </div>

        {hasImage && (
          <img
            className={styles.image}
            src={project.image}
            alt={project.imageAltKey ? t(project.imageAltKey) : title}
            loading="lazy"
            decoding="async"
          />
        )}
      </div>

      <section className={styles.technologiesSection}>
        <h2 className={styles.detailTitle}>
          {t('pages.projectDetail.sections.technologies')}
        </h2>
        <ul className={styles.technologies}>
          {project.technologies.map((technology) => (
            <li className={styles.technology} key={technology}>
              {technology}
            </li>
          ))}
        </ul>
      </section>

      <div className={styles.sections}>
        <TextDetailSection section={detailSections.challenge} />
        <TextDetailSection section={detailSections.solution} />
        <TechnicalDecisionsSection section={detailSections.technicalDecisions} />
        <TextDetailSection section={detailSections.learning} />
      </div>

      {(hasRepository || hasDemo) && (
        <div className={styles.actions}>
          {hasRepository && (
            <a
              className={`${styles.action} ${styles.primaryAction}`}
              href={project.repositoryUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t('pages.projectDetail.links.repository')}
            </a>
          )}
          {hasDemo && (
            <a
              className={`${styles.action} ${styles.secondaryAction}`}
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t('pages.projectDetail.links.demo')}
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default ProjectDetail;
