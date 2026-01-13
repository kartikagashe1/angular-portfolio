export interface Project {
  title: string;
  description: string;
  tech: string[];
  date: string;
  images: string[]; // multiple image filenames
  github?: string;
  liveDemo?: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'Portfolio Angular Website',
    description: 'A personal portfolio built with Angular,  Typescript, and Bootstrap. Features dark mode, responsive layout, and animations.',
    tech: ['Angular', 'TypeScript', 'Bootstrap'],
    date: 'Jan 2026',
    images: ['portfolio1.png', 'portfolio2.png', 'portfolio3.png','portfolio4.png','portfolio5.png'],
    github: 'https://github.com/kartikagashe1/angular-portfolio.git',
    liveDemo: 'https://kartik-web-portfolio.netlify.app/'
  },
   {
    title: 'Current Weather Explorer App',
    description: 'A simple weather application that shows real-time weather information for any city using a public Weather API.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
    date: 'Dec 2026',
    images: ['weather1.png', 'weather2.png'],
    github: 'https://github.com/kartikagashe1/weather-app-js.git'
  },
  {
    title: 'Insurance Application Form',
    description: 'A responsive insurance application form UI designed using HTML and CSS, featuring structured sections for general and personal details.',
    tech: ['HTML', 'CSS'],
    date: 'Oct 2025',
    images: ['form1.png', 'form2.png'],
    github: 'https://github.com/kartikagashe1/application-form-ui.git'
  },
];
