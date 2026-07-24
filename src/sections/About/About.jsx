import { Trans, useTranslation } from 'react-i18next';
import Reveal from '../../components/ui/Reveal/Reveal.jsx';
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
      <Reveal className={styles.content} direction="up">
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
      </Reveal>
    </section>
  );
}

export default About;
