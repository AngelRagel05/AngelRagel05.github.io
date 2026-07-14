import styles from './Navigation.module.css';

const navigationItems = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mi', href: '#about' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Contacto', href: '#contact' },
];

function Navigation() {
  return (
    <nav className={styles.navigation} aria-label="Navegacion principal">
      {navigationItems.map((item) => (
        <a className={styles.link} href={item.href} key={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export default Navigation;
