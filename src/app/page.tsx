'use client';

import { Navigation } from '@/components/Navigation';
import Hero from '@/components/hero/Hero';
import TechStack from '@/components/tech/TechStack';
import Projects from '@/components/projects/Projects';
import { Contact } from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col items-center ">
      <Navigation />
      <Hero />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

