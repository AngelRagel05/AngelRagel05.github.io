import { useTranslation } from 'react-i18next';
import styles from './FeaturedProject.module.css';

function FeaturedProject({ project }) {
  const { t } = useTranslation();
  const technicalDecisions = t(project.decisionsKey, { returnObjects: true });
  const hasImage = Boolean(project.image);
  const hasRepository = Boolean(project.repositoryUrl);
  const hasDemo = Boolean(project.demoUrl);

  return (
    <article
      className={styles.project}
      aria-labelledby={`${project.id}-title`}
    >
      <div className={styles.media}>
        {hasImage ? (
          <img
            className={styles.image}
            src={project.image}
            alt={t(project.imageAltKey)}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div
            className={styles.previewPlaceholder}
            role="img"
            aria-label={t(project.previewLabelKey)}
          >
            <span aria-hidden="true">{t(project.previewLabelKey)}</span>
          </div>
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.category}>{t(project.categoryKey)}</p>
          <h3 className={styles.title} id={`${project.id}-title`}>
            {t(project.titleKey)}
          </h3>
          <p className={styles.description}>{t(project.descriptionKey)}</p>
        </div>

        <ul className={styles.technologies}>
          {project.technologies.map((technology) => (
            <li className={styles.technology} key={technology}>
              {technology}
            </li>
          ))}
        </ul>

        <div className={styles.details}>
          <section className={styles.detailGroup}>
            <h4 className={styles.detailTitle}>
              {t(project.problemTitleKey)}
            </h4>
            <p className={styles.detailText}>{t(project.problemKey)}</p>
          </section>

          <section className={styles.detailGroup}>
            <h4 className={styles.detailTitle}>
              {t(project.solutionTitleKey)}
            </h4>
            <p className={styles.detailText}>{t(project.solutionKey)}</p>
          </section>

          <section className={styles.detailGroup}>
            <h4 className={styles.detailTitle}>
              {t(project.technicalDecisionsTitleKey)}
            </h4>
            {Array.isArray(technicalDecisions) && (
              <ul className={styles.decisionList}>
                {technicalDecisions.map((decision) => (
                  <li key={decision}>{decision}</li>
                ))}
              </ul>
            )}
          </section>

          <section className={styles.detailGroup}>
            <h4 className={styles.detailTitle}>
              {t(project.learningTitleKey)}
            </h4>
            <p className={styles.detailText}>{t(project.learningKey)}</p>
          </section>
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
                {t(project.repositoryLabelKey)}
              </a>
            )}
            {hasDemo && (
              <a
                className={`${styles.action} ${styles.secondaryAction}`}
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
              >
                {t(project.demoLabelKey)}
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default FeaturedProject;
