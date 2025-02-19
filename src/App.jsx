import './App.css'
import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Loader from './components/Loader';
import { useEffect } from 'react';

// Lazy load components
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Experience = lazy(() => import('./components/Experience'));
const Hero = lazy(() => import('./components/Hero'));
const Navbar = lazy(() => import('./components/Navbar'));
const Tech = lazy(() => import('./components/Tech'));
const Works = lazy(() => import('./components/Works'));
const StarsCanvas = lazy(() => import('./components/canvas/Stars'));
const Certifications = lazy(() => import('./components/Certifications'));

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        // Wait for components to load
        setTimeout(() => {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
        }, 500); // Increased delay to ensure components are loaded
      }
    };

    // Handle initial load
    handleScroll();

    // Handle hash changes
    window.addEventListener('hashchange', handleScroll);
    return () => window.removeEventListener('hashchange', handleScroll);
  }, []);

  return (
    <ErrorBoundary>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <div className="relative">
          {/* Stars background for entire site */}
          <Suspense fallback={<Loader />}>
            <StarsCanvas />
          </Suspense>

          <div className="relative z-20">
            <Suspense fallback={<Loader />}>
              <Navbar />
            </Suspense>
            <Suspense fallback={<Loader />}>
              <Hero />
            </Suspense>

            <Suspense fallback={<Loader />}>
              <About />
            </Suspense>
            <Suspense fallback={<Loader />}>
              <Experience />
            </Suspense>
            <Suspense fallback={<Loader />}>
              <Tech />
            </Suspense>
            <Suspense fallback={<Loader />}>
              <Works />
            </Suspense>
            <Suspense fallback={<Loader />}>
              <Certifications />
            </Suspense>
            <Suspense fallback={<Loader />}>
              <Contact />
            </Suspense>
          </div>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
