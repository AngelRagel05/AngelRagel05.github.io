import Header from './components/layout/Header/Header.jsx';
import Footer from './components/layout/Footer/Footer.jsx';
import Hero from './sections/Hero/Hero.jsx';
import Projects from './sections/Projects/Projects.jsx';
import About from './sections/About/About.jsx';
import Experience from './sections/Experience/Experience.jsx';
import TechStack from './sections/TechStack/TechStack.jsx';
import Contact from './sections/Contact/Contact.jsx';

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <TechStack />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
