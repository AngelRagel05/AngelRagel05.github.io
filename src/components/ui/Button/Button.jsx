import styles from './Button.module.css';

function Button({ children, href, type = 'button' }) {
  if (href) {
    return (
      <a className={styles.button} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={styles.button} type={type}>
      {children}
    </button>
  );
}

export default Button;
