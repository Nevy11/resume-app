import { Injectable } from '@angular/core';
import { Resume } from './resume';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  private resume: Resume = {
    name: 'Stephen Mainda',
    title: 'Computer Science Student | Rust & AI Enthusiast',
    contact: {
      email: 'smongare2004@gmail.com',
      phone: '+254 792 700 138',
      location: 'Kenya',
      linkedin: 'linkedin.com/in/stephen-mainda',
      github: 'github.com/stephenmainda',
    },
    summary:
      'Fourth-year computer science student passionate about AI, Rust programming, and cybersecurity...',
    skills: [
      'Rust',
      'Angular',
      'Supabase',
      'Kali Linux',
      'AI/ML (PyTorch)',
      'Cybersecurity',
      'OpenCV',
      'Android Studio',
    ],
    experience: [
      {
        company: 'University Cyber Cafe',
        role: 'Owner & Manager',
        period: '2022 - Present',
        details: [
          'Manage operations, customer experience, and gaming area.',
          'Handle budgeting and expenses including rent, WiFi, and salaries.',
        ],
      },
    ],
    education: [
      {
        institution: 'Laikipia University',
        degree: 'BSc in Computer Science',
        year: 'Expected 2025',
      },
    ],
    projects: [
      {
        name: 'AI E-Learning Platform',
        description:
          'Adaptive AI-driven learning system for personalized education.',
        link: 'https://github.com/stephenmainda/ai-elearning',
      },
    ],
  };

  getResume(): Resume {
    return this.resume;
  }
}
