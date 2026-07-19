import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './ProjectPreviewCard.module.css';

const MAX_VISIBLE_TECHNOLOGIES = 5;

function ProjectPreviewCard({ project }) {
  const { t } = useTranslation();
  const title = t(project.i18n.titleKey);
  const image = project.media.thumbnail;
  const visibleTechnologies = project.technologies.slice(
    0,
    MAX_VISIBLE_TECHNOLOGIES,
  );

  return (
    <article
      className={styles.card}
      aria-labelledby={`${project.id}-preview-title`}
    >
      {image && (
        <div className={styles.media}>
          <img
            className={styles.image}
            src={image.src}
            alt={image.altKey ? t(image.altKey) : ''}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
          />
        </div>
      )}

      <div className={styles.body}>
        <div className={styles.header}>
          <p className={styles.category}>{t(project.category.labelKey)}</p>
          <h3 className={styles.title} id={`${project.id}-preview-title`}>
            {title}
          </h3>
          <p className={styles.description}>
            {t(project.i18n.shortDescriptionKey)}
          </p>
        </div>

        <ul className={styles.technologies}>
          {visibleTechnologies.map((technology) => (
            <li className={styles.technology} key={technology.id}>
              {technology.name}
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
