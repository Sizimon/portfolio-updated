'use client';

import {Button} from '@/components/ui/button';
import DarkModeToggle from 'themes/DarkModeToggle';
import { Navigation } from '@/components/Navigation';
import Hero from '@/components/hero/Hero';
import TechStack from '@/components/tech/TechStack';
import Projects from '@/components/projects/Projects';

export default function Home() {
  return (
    <div className="flex flex-col items-center ">
      <Navigation />
      <Hero />
      <TechStack />
      <Projects />
      <DarkModeToggle />
    </div>
  );
}

