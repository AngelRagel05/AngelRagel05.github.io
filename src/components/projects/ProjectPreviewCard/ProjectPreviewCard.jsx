import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './ProjectPreviewCard.module.css';

function ProjectPreviewCard({ project }) {
  const { t } = useTranslation();
  const title = t(project.titleKey);
  const hasImage = Boolean(project.image);

  return (
    <article
      className={styles.card}
      aria-labelledby={`${project.id}-preview-title`}
    >
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
            className={styles.placeholder}
            role="img"
            aria-label={t(project.previewLabelKey, { title })}
          >
            <span aria-hidden="true">{title}</span>
          </div>
        )}
      </div>

      <div className={styles.body}>
        <div className={styles.header}>
          <p className={styles.category}>{t(project.categoryKey)}</p>
          <h3 className={styles.title} id={`${project.id}-preview-title`}>
            {title}
          </h3>
          <p className={styles.description}>{t(project.shortDescriptionKey)}</p>
        </div>

        <ul className={styles.technologies}>
          {project.technologies.map((technology) => (
            <li className={styles.technology} key={technology}>
              {technology}
            </li>
          ))}
        </ul>

        <Link className={styles.link} to={`/projects/${project.slug}`}>
          {t('projects.actions.viewProject')}
        </Link>
      </div>
    </article>
  );
}

export default ProjectPreviewCard;
