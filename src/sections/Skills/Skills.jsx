import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle.jsx';
import TechnologyBadge from '../../components/ui/TechnologyBadge/TechnologyBadge.jsx';
import { skills } from '../../data/skills.js';
import styles from './Skills.module.css';

function Skills() {
  const { t } = useTranslation();

  return (
    <section className={styles.section} id="skills">
      <SectionTitle
        eyebrow={t('navigation.skills')}
        title={t('sections.skills.title')}
      />
      <p className={styles.subtitle}>{t('sections.skills.subtitle')}</p>
      <div className={styles.groups}>
        {skills.map((group) => (
          <article className={styles.group} key={group.id}>
            <h3 className={styles.category}>{t(group.categoryKey)}</h3>
            <div className={styles.badges}>
              {group.technologies.map((technology) => (
                <TechnologyBadge key={technology} name={technology} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
