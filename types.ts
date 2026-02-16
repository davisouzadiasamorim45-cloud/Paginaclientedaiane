import React from 'react';

export interface ModuleItem {
  title: string;
  description: string;
  benefits: string[];
  icon: React.ReactNode;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  text: string;
  avatar: string;
}