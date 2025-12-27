import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import LoadingScreen from './components/ui/LoadingScreen';
import AmbientBackground from './components/ui/AmbientBackground';
import './index.css';

// Component mapping 
const SECTIONS = [
    { id: 'hero', component: Hero },
    { id: 'about', component: About },
    { id: 'projects', component: Projects },
    { id: 'experience', component: Experience },
    { id: 'education', component: Education },
    { id: 'skills', component: Skills },
    { id: 'contact', component: Contact }
];

function App() {
    const [activeSection, setActiveSection] = useState('hero');
    const [isLoading, setIsLoading] = useState(true);

    // Loading Timer
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    // Smooth scrolling for anchor links and Nav Dots
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Track active section on scroll
    useEffect(() => {
        if (isLoading) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 }
        );

        SECTIONS.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [isLoading]);

    return (
        <div className="app-container">
            <AnimatePresence mode="wait">
                {isLoading && <LoadingScreen key="loader" />}
            </AnimatePresence>

            {!isLoading && (
                <>
                    <AmbientBackground />
                    <Navbar />

                    <main className="scroll-flow">
                        <Hero />
                        <About />
                        <Projects />
                        <Experience />
                        <Certifications />
                        <Education />
                        <Skills />
                        <Contact />
                    </main>

                    {/* Navigation Dots */}
                    <div className="nav-dots">
                        {SECTIONS.map((section) => (
                            <div
                                key={section.id}
                                className={`nav-dot ${activeSection === section.id ? 'active' : ''}`}
                                onClick={() => scrollToSection(section.id)}
                                title={section.id.charAt(0).toUpperCase() + section.id.slice(1)}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default App;
