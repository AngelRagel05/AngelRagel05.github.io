import styles from './SectionTitle.module.css';

function SectionTitle({ eyebrow, title }) {
  return (
    <div className={styles.wrapper}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}

export default SectionTitle;
