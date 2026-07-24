import { useTranslation } from 'react-i18next';
import Reveal from '../../../../components/ui/Reveal/Reveal.jsx';
import styles from './FeaturedProject.module.css';

function FeaturedDetailSection({
  section,
  t,
  className,
  titleClassName,
  textClassName,
  listClassName,
}) {
  const hasList = Boolean(section.itemsKey);
  const items = hasList ? t(section.itemsKey, { returnObjects: true }) : [];

  if (!section.contentKey && (!Array.isArray(items) || items.length === 0)) {
    return null;
  }

  return (
    <section className={className}>
      <h4 className={titleClassName}>{t(section.titleKey)}</h4>
      {section.contentKey && (
        <p className={textClassName}>{t(section.contentKey)}</p>
      )}
      {Array.isArray(items) && items.length > 0 && (
        <ul className={listClassName}>
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

function FeaturedProject({ project }) {
  const { t } = useTranslation();
  const title = t(project.i18n.titleKey);
  const image = project.media.mainImage;
  const links = project.links.filter((link) => link.url);
  const featuredSections = project.detailSections.filter(
    (section) => section.showOnFeatured,
  );
  const contextSections = featuredSections.slice(0, 2);
  const detailSections = featuredSections.slice(2);
  const [primaryDetailSection, ...secondaryDetailSections] = detailSections;

  return (
    <article
      className={styles.project}
      aria-labelledby={`${project.id}-title`}
    >
      <div className={`${styles.intro} ${image ? styles.withMedia : ''}`}>
        <Reveal className={styles.summary} direction="left">
          <div className={styles.header}>
            <p className={styles.category}>{t(project.category.labelKey)}</p>
            <h3 className={styles.title} id={`${project.id}-title`}>
              {title}
            </h3>
            <p className={styles.description}>{t(project.i18n.overviewKey)}</p>
          </div>

          <ul className={styles.technologies}>
            {project.technologies.map((technology) => (
              <li className={styles.technology} key={technology.id}>
                {technology.name}
              </li>
            ))}
          </ul>
        </Reveal>

        {image && (
          <Reveal className={styles.media} direction="right">
            <img
              className={styles.image}
              src={image.src}
              alt={image.altKey ? t(image.altKey) : ''}
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
            />
          </Reveal>
        )}
      </div>

      <div className={styles.context}>
        {contextSections.map((section) => (
          <FeaturedDetailSection
            className={styles.contextBlock}
            key={section.id}
            listClassName={styles.decisionList}
            section={section}
            t={t}
            textClassName={styles.detailText}
            titleClassName={styles.detailTitle}
          />
        ))}
      </div>

      <div className={styles.details}>
        {primaryDetailSection && (
          <FeaturedDetailSection
            className={styles.technicalDecisions}
            listClassName={styles.decisionList}
            section={primaryDetailSection}
            t={t}
            textClassName={styles.detailText}
            titleClassName={styles.detailTitle}
          />
        )}

        {(secondaryDetailSections.length > 0 || links.length > 0) && (
          <section className={styles.learningColumn}>
            {secondaryDetailSections.map((section) => (
              <FeaturedDetailSection
                className={styles.keyLearning}
                key={section.id}
                listClassName={styles.decisionList}
                section={section}
                t={t}
                textClassName={styles.detailText}
                titleClassName={styles.detailTitle}
              />
            ))}

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
          </section>
        )}
      </div>
    </article>
  );
}

export default FeaturedProject;
