'use client';

import Hero from '@/components/hero/Hero';
import TechStack from '@/components/tech/TechStack';
import Projects from '@/components/projects/Projects';
import { Contact } from '@/components/Contact';
import Footer from '@/components/Footer';
import { ProgressScroll } from '@/shared/ProgressScroll';
import { BackgroundVideo } from '@/components/BackgroundVideo';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <ProgressScroll />
      <BackgroundVideo />
      <Hero />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}

