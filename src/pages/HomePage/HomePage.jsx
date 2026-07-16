import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../../sections/Hero/Hero.jsx';
import Projects from '../../sections/Projects/Projects.jsx';
import About from '../../sections/About/About.jsx';
import Experience from '../../sections/Experience/Experience.jsx';
import TechStack from '../../sections/TechStack/TechStack.jsx';
import Contact from '../../sections/Contact/Contact.jsx';

function HomePage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('pages.home.documentTitle');
  }, [t]);

  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <Experience />
      <TechStack />
      <Contact />
    </main>
  );
}

export default HomePage;
