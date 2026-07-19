import { Trans, useTranslation } from 'react-i18next';
import styles from './Experience.module.css';

function Experience() {
  const { t } = useTranslation();
  const experiences = t('sections.experience.items', { returnObjects: true });

  return (
    <section
      className={styles.section}
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className={styles.content}>
        <h2 className={styles.title} id="experience-title">
          {t('sections.experience.title')}
        </h2>

        <div className={styles.list}>
          {experiences.map((experience, experienceIndex) => (
            <article className={styles.item} key={experience.company}>
              <header className={styles.header}>
                <div className={styles.headingGroup}>
                  <h3 className={styles.company}>{experience.company}</h3>
                  <p className={styles.role}>{experience.role}</p>
                </div>

                <div className={styles.meta}>
                  <p className={styles.metaItem}>{experience.date}</p>
                  <p className={styles.metaItem}>{experience.location}</p>
                </div>
              </header>

              <ul className={styles.responsibilities}>
                {experience.responsibilities.map(
                  (responsibility, responsibilityIndex) => (
                    <li key={responsibility}>
                      <Trans
                        i18nKey={
                          `sections.experience.items.${experienceIndex}` +
                          `.responsibilities.${responsibilityIndex}`
                        }
                        components={{ strong: <strong /> }}
                      />
                    </li>
                  ),
                )}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
