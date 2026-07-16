import { useTranslation } from 'react-i18next';
import styles from './FeaturedProject.module.css';

function FeaturedProject({ project }) {
  const { t } = useTranslation();
  const title = t(project.titleKey);
  const detailSections = project.detailSections ?? {};
  const technicalDecisionsSection = detailSections.technicalDecisions;
  const technicalDecisions = technicalDecisionsSection?.itemsKey
    ? t(technicalDecisionsSection.itemsKey, { returnObjects: true })
    : [];
  const hasImage = Boolean(project.image);
  const hasRepository = Boolean(project.repositoryUrl);
  const hasDemo = Boolean(project.demoUrl);

  return (
    <article
      className={styles.project}
      aria-labelledby={`${project.id}-title`}
    >
      <div className={styles.intro}>
        <div className={styles.summary}>
          <div className={styles.header}>
            <p className={styles.category}>{t(project.categoryKey)}</p>
            <h3 className={styles.title} id={`${project.id}-title`}>
              {title}
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
        </div>

        <div className={styles.media}>
          {hasImage ? (
            <img
              className={styles.image}
              src={project.image}
              alt={project.imageAltKey ? t(project.imageAltKey) : title}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div
              className={styles.previewPlaceholder}
              role="img"
              aria-label={t(project.previewLabelKey, { title })}
            >
              <span aria-hidden="true">{title}</span>
            </div>
          )}
        </div>
      </div>

      <div className={styles.context}>
        {detailSections.challenge?.contentKey && (
          <section className={styles.contextBlock}>
            <h4 className={styles.detailTitle}>
              {t(detailSections.challenge.titleKey)}
            </h4>
            <p className={styles.detailText}>
              {t(detailSections.challenge.contentKey)}
            </p>
          </section>
        )}

        {detailSections.solution?.contentKey && (
          <section className={styles.contextBlock}>
            <h4 className={styles.detailTitle}>
              {t(detailSections.solution.titleKey)}
            </h4>
            <p className={styles.detailText}>
              {t(detailSections.solution.contentKey)}
            </p>
          </section>
        )}
      </div>

      <div className={styles.details}>
        {Array.isArray(technicalDecisions) && technicalDecisions.length > 0 && (
          <section className={styles.technicalDecisions}>
            <h4 className={styles.detailTitle}>
              {t(technicalDecisionsSection.titleKey)}
            </h4>
            <ul className={styles.decisionList}>
              {technicalDecisions.map((decision) => (
                <li key={decision}>{decision}</li>
              ))}
            </ul>
          </section>
        )}

        <section className={styles.learningColumn}>
          {detailSections.learning?.contentKey && (
            <div className={styles.keyLearning}>
              <h4 className={styles.detailTitle}>
                {t(detailSections.learning.titleKey)}
              </h4>
              <p className={styles.detailText}>
                {t(detailSections.learning.contentKey)}
              </p>
            </div>
          )}

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
        </section>
      </div>
    </article>
  );
}

export default FeaturedProject;
