import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'David Hevesi', // e.g: 'Name | Developer'
  lang: 'Ro, En', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.notion.so/davidhevesi/David-Hevesi-Resume-65986ff3590849beb60a581ebf7fd637', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Noahs Arc Project',
    info: 'Noahs arc is community based organization in Mid-Wester Uganda, that focuses on fighting & eradicating poverty.Worked on this app with one of my frieds Eugene. This app basically allows for children to be sponsored by donating monthly or sponsor one of the projects that they are working on in their community. This application has a single repository (mono-repo). Technologies we used on the backend are Nest.js, Postgresql, Typeorm, and Typescript also for payment method we use stripe. Front-End we used Nuxt.js, Tailwind.css & Veautify for the dashboard.',
    info2: '',
    url: 'https://noahsarc.org/',
    repo: 'https://github.com/genu/sponsorship', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/DavidHevesi',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/dhevesi/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Davidhevesi',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
