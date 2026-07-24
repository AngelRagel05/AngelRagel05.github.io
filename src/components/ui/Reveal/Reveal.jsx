import useReveal from './useReveal.js';
import styles from './Reveal.module.css';

const directionClassNames = {
  up: styles.revealUp,
  left: styles.revealLeft,
  right: styles.revealRight,
};

function Reveal({
  as: Element = 'div',
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
  style,
  threshold = 0.25,
  ...elementProps
}) {
  const elementRef = useReveal({
    once,
    revealedClassName: styles.revealed,
    threshold,
  });
  const directionClassName =
    directionClassNames[direction] ?? directionClassNames.up;
  const normalizedDelay = Number.isFinite(delay) ? Math.max(delay, 0) : 0;
  const revealStyle =
    normalizedDelay > 0
      ? { ...style, '--reveal-delay': `${normalizedDelay}ms` }
      : style;
  const revealClassName = [
    styles.reveal,
    directionClassName,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Element
      ref={elementRef}
      className={revealClassName}
      style={revealStyle}
      {...elementProps}
    >
      {children}
    </Element>
  );
}

export default Reveal;
