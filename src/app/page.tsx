'use client';
import React, { useState } from 'react';

import Hero from '@/components/hero/Hero';
import TechStack from '@/components/tech/TechStack';
import Projects from '@/components/projects/Projects';
import { Contact } from '@/components/Contact';
import Footer from '@/components/Footer';
import { ProgressScroll } from '@/shared/ProgressScroll';
import { BackgroundVideo } from '@/components/BackgroundVideo';
import Modal from '@/components/ui/Modal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(0);

  return (
    <div className="flex flex-col items-center">
      <ProgressScroll />
      <BackgroundVideo />
      <Hero />
      <Projects setModal={setIsModalOpen} />
      <TechStack />
      <Contact />
      <Footer />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(0)} />
    </div>
  );
}

