import React from 'react';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import EducationSection from '../sections/EducationSection';
import SkillsSection from '../sections/SkillsSection';
import ToolsSection from '../sections/ToolsSection';
import ExperienceSection from '../sections/ExperienceSection';
import ServicesSection from '../sections/ServicesSection';
import DeliverablesSection from '../sections/DeliverablesSection';
import CertificationsSection from '../sections/CertificationsSection';
import ProjectsSection from '../sections/ProjectsSection';
import ContactSection from '../sections/ContactSection';

export default function HomePage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ToolsSection />
      <ExperienceSection />
      <ServicesSection />
      <DeliverablesSection />
      <CertificationsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
