import { Trans, useTranslation } from 'react-i18next';
import styles from './About.module.css';

function About() {
  const { t } = useTranslation();
  const paragraphs = t('sections.about.paragraphs', { returnObjects: true });

  return (
    <section
      className={styles.section}
      id="about"
      aria-labelledby="about-title"
    >
      <div className={styles.content}>
        <h2 className={styles.title} id="about-title">
          {t('sections.about.title')}
        </h2>

        <div className={styles.body}>
          {paragraphs.map((paragraph, index) => (
            <p className={styles.text} key={paragraph}>
              <Trans
                i18nKey={`sections.about.paragraphs.${index}`}
                components={{ strong: <strong /> }}
              />
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
