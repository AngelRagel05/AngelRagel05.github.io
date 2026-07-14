import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle.jsx';
import { experience } from '../../data/experience.js';
import styles from './Experience.module.css';

function Experience() {
  const { t } = useTranslation();

  return (
    <section className={styles.section} id="experience">
      <SectionTitle
        eyebrow={t('navigation.experience')}
        title={t('sections.experience.title')}
      />
      <p className={styles.subtitle}>{t('sections.experience.subtitle')}</p>
      <div className={styles.list}>
        {experience.map((item) => (
          <article className={styles.item} key={item.id}>
            <p className={styles.period}>{t(item.periodKey)}</p>
            <h3 className={styles.role}>{t(item.roleKey)}</h3>
            <p className={styles.company}>{t(item.companyKey)}</p>
            <p className={styles.description}>{t(item.descriptionKey)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
