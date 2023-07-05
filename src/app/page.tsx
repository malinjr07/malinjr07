import Contact from '@/components/Contact';
import Details from '@/components/Details';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Details />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

