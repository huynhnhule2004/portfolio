'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomeSection from '@/components/HomeSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificatesSection from '@/components/CertificatesSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [typedText, setTypedText] = useState<string>('');
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const fullText = "Passionate Full Stack Developer";

  useEffect(() => {
    if (currentPage === 'home') {
      let i = 0;
      const timer = setInterval(() => {
        if (i < fullText.length) {
          setTypedText(fullText.slice(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
        }
      }, 100);
      return () => clearInterval(timer);
    }
  }, [currentPage]);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomeSection typedText={typedText} setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutSection />;
      case 'skills':
        return <SkillsSection />;
      case 'projects':
        return <ProjectsSection expandedProject={expandedProject} setExpandedProject={setExpandedProject} />;
      case 'certificates':
        return <CertificatesSection />;
      case 'activities':
        return <ActivitiesSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection typedText={typedText} setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
      />
      <main className="pt-16">{renderCurrentPage()}</main>
      <Footer />
    </div>
  );
};

export default Portfolio;