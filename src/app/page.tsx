import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import TrustedSection from '../components/TrustedSection';
import WhyChooseSection from '../components/WhyChooseSection';
import About from '../components/About';
import Achivement from '../components/Achivement';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Experience from '../components/Experience';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrustedSection />
      <WhyChooseSection />
      <About />
      <Achivement />
      <Projects />
      <Testimonials />
      <Blog />
      <Experience />
      <CallToAction />
      <Footer />
      
    </div>
  );
}