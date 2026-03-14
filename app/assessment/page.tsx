'use client';

import { useState, useEffect, SetStateAction } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DOMAINS, Lead, Profile, TaskResponse } from '@/db/assessments';
import Navbar from '@/components/landing/navbar';
import RenderProfileStep from '@/components/assessment/profileStep';
import RenderAssessmentStep from '@/components/assessment/renderAssessment';
import RenderLeadCapture from '@/components/assessment/leadCapture';
import RenderResults from '@/components/assessment/results';

export default function AIAgentAssessment() {
  const [currentStep, setCurrentStep] = useState<'profile' | 'assessment' | 'lead' | 'results'>('profile');
  const [profile, setProfile] = useState<Partial<Profile>>({});
  const [taskResponses, setTaskResponses] = useState<Record<string, TaskResponse>>({});
  const [currentDomain, setCurrentDomain] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [leadInfo, setLeadInfo] = useState<Partial<Lead>>({});

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.3;
      setIsScrolled(window.scrollY > triggerPoint);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Initialize from localStorage if available
  useEffect(() => {
    const savedProfile = localStorage.getItem('aiAssessment_profile');
    const savedResponses = localStorage.getItem('aiAssessment_responses');

    if (savedProfile) setProfile(JSON.parse(savedProfile));
    if (savedResponses) setTaskResponses(JSON.parse(savedResponses));
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem('aiAssessment_profile', JSON.stringify(profile));
    localStorage.setItem('aiAssessment_responses', JSON.stringify(taskResponses));
  }, [profile, taskResponses]);


  const handleResponseSelect = (taskId: string, responseValue: 'not_doing' | 'manual' | 'loose_ai' | 'structured') => {
    setTaskResponses(prev => ({
      ...prev,
      [taskId]: { response: responseValue }
    }));
  };

  const handleGovernanceToggle = (taskId: string, flag: 'system_governed' | 'person_dependent') => {
    setTaskResponses(prev => ({
      ...prev,
      [taskId]: {
        ...prev[taskId],
        governance_flag: flag
      }
    }));
  };

  // Get the visible domains based on industry and company size
  const getVisibleDomains = () => {
    const isMicro = profile.company_size === 'micro';
    const isVisible = (domainKey: string) => {
      if (isMicro && domainKey === 'people_team') return false;

      const domainVisibility: any = {
        marketing_content: true,
        sales: true,
        customer_experience: true,
        operations: true,
        inventory_supply: true,
        finance: true
      };

      // Apply conditional visibility rules based on industry vertical and company size
      if (profile.industry_vertical === 'professional_services') domainVisibility.marketing_content = true;
      if (profile.industry_vertical === 'automotive' && !isMicro) domainVisibility.inventory_supply = true;
      if (profile.industry_vertical === 'retail' && !isMicro) domainVisibility.inventory_supply = true;
      if (profile.industry_vertical === 'financial_services') domainVisibility.marketing_content = true;
      if (profile.industry_vertical === 'healthcare') domainVisibility.marketing_content = true;
      if (profile.industry_vertical === 'beauty_aesthetics' && !isMicro) {
        domainVisibility.inventory_supply = false; // Reduced task set
      }
      if (profile.industry_vertical === 'home_services') domainVisibility.marketing_content = true;
      if (profile.industry_vertical === 'saas') domainVisibility.marketing_content = true;

      return domainVisibility[domainKey] !== undefined ? domainVisibility[domainKey] : false;
    };

    return Object.keys(DOMAINS).filter((domain) => isVisible(domain));
  };

  // Get tasks for current domain
  const getCurrentDomainTasks = () => {
    const visibleDomains = getVisibleDomains();
    if (currentDomain >= visibleDomains.length) return [];

    const selectedDomainKey = visibleDomains[currentDomain];
    switch (selectedDomainKey) {
      case 'marketing_content':
        return ['1.1', '1.2', '1.3', '1.4', '1.5'];
      case 'sales':
        return ['2.1', '2.2', '2.3', '2.4', '2.5'];
      case 'customer_experience':
        return ['3.1', '3.2', '3.3', '3.4', '3.5', '3.6'];
      case 'people_team': {
        const isSmall = profile.company_size === 'small';
        if (isSmall) return ['4.1', '4.2', '4.5'];
        else return ['4.1', '4.2', '4.3', '4.4', '4.5'];
      }
      case 'operations':
        const isMediumOrLarge = profile.company_size === 'medium' || profile.company_size === 'large';
        if (isMediumOrLarge) {
          return ['5.1', '5.2', '5.3', '5.4', '5.5', '5.6', '5.7'];
        } else {
          return ['5.1', '5.2', '5.3', '5.4', '5.5'];
        }
      case 'delivery_projects':
        if (profile.industry_vertical === 'professional_services' || profile.industry_vertical === 'home_services' || profile.industry_vertical === 'saas') {
          return ['6.1', '6.2', '6.3'];
        } else {
          return [];
        }
      case 'inventory_supply':
        if (profile.industry_vertical === 'healthcare' || profile.industry_vertical === 'beauty_aesthetics') {
          return ['7.1', '7.2'];
        } else {
          return ['7.1', '7.2', '7.3', '7.4'];
        }
      case 'finance':
        return ['8.1', '8.2', '8.3', '8.4', '8.5'];
      default:
        return [];
    }
  };

  const handleNextPage = () => {
    setCurrentPage(prev => prev + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(0, prev - 1));
  };

  // Get current tasks for display
  const displayedTasks = getCurrentDomainTasks().slice(currentPage * 1, (currentPage + 1) * 1);
  const visibleDomains = getVisibleDomains();
  const allTasks = getCurrentDomainTasks();
  // Handle form submission
  const handleSubmit = () => {

    if (!profile.industry_vertical || !profile.company_size || !profile.revenue_range || !profile.ai_usage_level || !profile.primary_pain_point) return;

    setCurrentStep('assessment');
    setCurrentDomain(0);
    setCurrentPage(0);
  };

  console.log(profile)
  console.log(taskResponses)
  console.log(leadInfo)
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentStep}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen bg-linear-to-b from-slate-100 to-slate-400 relative flex items-center justify-center"
      >
        <Navbar isScrolled={isScrolled} />
        {currentStep === 'profile' && <RenderProfileStep setProfile={setProfile} profile={profile} handleSubmit={handleSubmit} />}
        {currentStep === 'assessment' && <RenderAssessmentStep
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          handleResponseSelect={handleResponseSelect}
          handleGovernanceToggle={handleGovernanceToggle}
          visibleDomains={visibleDomains}
          allTasks={allTasks}
          displayedTasks={displayedTasks}
          currentDomain={currentDomain}
          currentPage={currentPage}
          setCurrentDomain={setCurrentDomain}
          setCurrentPage={setCurrentPage}
          setCurrentStep={setCurrentStep}
          taskResponses={taskResponses}
        />}
        {currentStep === 'lead' && <RenderLeadCapture setCurrentStep={setCurrentStep} leadInfo={leadInfo} setLeadInfo={setLeadInfo} />}
        {currentStep === 'results' && <RenderResults taskResponses={taskResponses} profile={profile} leadInfo={leadInfo}/>}
      </motion.div>
    </AnimatePresence>
  );
}
