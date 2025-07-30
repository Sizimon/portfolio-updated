'use client';

import {Button} from '@/components/ui/button';
import DarkModeToggle from 'themes/DarkModeToggle';
import Hero from '@/components/ui/hero/Hero';
import TechStack from '@/components/tech/TechStack';

export default function Home() {
  return (
    <div className="flex flex-col items-center ">
      <Hero />
      <TechStack />
      <DarkModeToggle />
    </div>
  );
}

