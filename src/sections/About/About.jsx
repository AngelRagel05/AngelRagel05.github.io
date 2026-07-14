import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle.jsx';
import styles from './About.module.css';

function About() {
  const { t } = useTranslation();

  return (
    <section className={styles.section} id="about">
      <SectionTitle
        eyebrow={t('navigation.about')}
        title={t('sections.about.title')}
      />
      <p className={styles.text}>{t('sections.about.subtitle')}</p>
    </section>
  );
}

export default About;
