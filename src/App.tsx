import { SHOW_CONTACT_SECTION } from './content/siteContent';
import { About } from './components/About';
import { AreasOfCare } from './components/AreasOfCare';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { Research } from './components/Research';
import { SiteMeta } from './components/SiteMeta';
import { Training } from './components/Training';

function App() {
  return (
    <>
      <SiteMeta />
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:m-4 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-plum"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <About />
        <AreasOfCare />
        <Experience />
        <Education />
        <Training />
        <Research />
        {SHOW_CONTACT_SECTION ? <Contact /> : null}
      </main>
      <Footer />
      <FloatingWhatsApp />
      {/* Spacer so floating button does not cover footer links on small screens */}
      <div className="md:hidden h-20" aria-hidden />
    </>
  );
}

export default App;
