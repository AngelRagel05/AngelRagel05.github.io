import styles from './TechnologyBadge.module.css';

function TechnologyBadge({ name }) {
  return <span className={styles.badge}>{name}</span>;
}

export default TechnologyBadge;
