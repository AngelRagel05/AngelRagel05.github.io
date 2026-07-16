import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './ProjectListCard.module.css';

function ProjectListCard({ project }) {
  const { t } = useTranslation();
  const title = t(project.i18n.titleKey);
  const image = project.media.mainImage;

  return (
    <article
      className={styles.card}
      aria-labelledby={`${project.id}-list-title`}
    >
      {image && (
        <div className={styles.media}>
          <img
            className={styles.image}
            src={image.src}
            alt={image.altKey ? t(image.altKey) : title}
            loading="lazy"
            decoding="async"
          />
        </div>
      )}

      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.category}>{t(project.category.labelKey)}</p>
          <h2 className={styles.title} id={`${project.id}-list-title`}>
            {title}
          </h2>
          <p className={styles.description}>
            {t(project.i18n.shortDescriptionKey)}
          </p>
        </div>

        <ul className={styles.technologies}>
          {project.technologies.map((technology) => (
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

export default ProjectListCard;
