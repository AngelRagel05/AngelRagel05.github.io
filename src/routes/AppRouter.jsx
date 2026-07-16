import { useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Header from '../components/layout/Header/Header.jsx';
import Footer from '../components/layout/Footer/Footer.jsx';
import HomePage from '../pages/HomePage/HomePage.jsx';
import ProjectsPage from '../pages/ProjectsPage/ProjectsPage.jsx';
import ProjectDetailPage from '../pages/ProjectDetailPage/ProjectDetailPage.jsx';

function ScrollToTop() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView();
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
}

function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
