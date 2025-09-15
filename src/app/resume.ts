export interface Resume {
  name: string;
  title: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    github?: string;
  };
  summary: string;
  skills: string[];
  experience: {
    company: string;
    role: string;
    period: string;
    details: string[];
  }[];
  education: {
    institution: string;
    degree: string;
    year: string;
  }[];
  projects: {
    name: string;
    description: string;
    link?: string;
  }[];
}
