import { useTranslation } from 'react-i18next';
import styles from './TechStack.module.css';

function TechStack() {
  const { t } = useTranslation();
  const categories = t('sections.techStack.categories', {
    returnObjects: true,
  });

  return (
    <section
      className={styles.section}
      id="skills"
      aria-labelledby="skills-title"
    >
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title} id="skills-title">
            {t('sections.techStack.title')}
          </h2>
          <p className={styles.subtitle}>{t('sections.techStack.subtitle')}</p>
        </div>

        <div className={styles.categories}>
          {categories.map((category, categoryIndex) => {
            const categoryClassName = [
              styles.category,
              categoryIndex === 0 ? styles.coreCategory : '',
              categoryIndex === categories.length - 1
                ? styles.additionalCategory
                : '',
            ]
              .filter(Boolean)
              .join(' ');

            return (
              <section className={categoryClassName} key={category.title}>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
                <ul className={styles.badges}>
                  {category.items.map((item) => (
                    <li className={styles.badge} key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
