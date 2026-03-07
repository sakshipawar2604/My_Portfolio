import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  accenture,
  systools,
  ieee,
  uta,
  pccoe,
  carrent,
  toll,
  insightgen,
  threejs,
  banking,
  sentimentAnalyzer,
} from '../assets';

export const navLinks = [
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Full-Stack Engineer',
    icon: web,
  },
  {
    title: 'Cloud-Native & DevOps Engineer',
    icon: backend,
  },
  {
    title: 'Applied ML & Agentic AI',
    icon: creator,
  },
  {
    title: 'Product-Led Problem Solver',
    icon: mobile,
  },
];

const activities = [
  {
    title: 'La Trobe Innovation Challenge (2022)',
    desc: 'Secured 3rd place for designing a blockchain + IoT sustainability platform.',
  },
  {
    title: 'IEEE Coordinator',
    desc: 'Coordinated 15+ tech events and designed 10+ newsletters, boosting engagement among 300+ members.',
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React.js',
    icon: reactjs,
  },
  {
    name: 'Redux',
    icon: redux,
  },
  {
    name: 'Node.js',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
];

const experiences = [
  {
    title: 'Software Engineer',
    company_name: 'Accenture',
    icon: accenture,
    iconBg: '#E6DEDD',
    date: 'Aug 2023 - Jul 2024',
    points: [
      'Developed and owned a React-based approval workflow module within Siemens Teamcenter, replacing email-based coordination with an in-tool approval system for engineering change requests.',
      'Built a debounced global search using React and REST APIs, reducing redundant API calls and lowering search traffic by ~40%.',
      'Optimized backend query paths by eliminating redundant SQL calls and adding targeted indexes, improving API response times by ~30% in production.',
      'Deployed production builds to AWS EC2 via S3 and used CloudWatch logs to diagnose and resolve post-release workflow failures.',
      'Implemented config-driven backend validations for multi-region approval flows, eliminating code forks and improving maintainability.',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'SysTools',
    icon: systools,
    iconBg: '#E6DEDD',
    date: 'Jul 2022 - Jun 2023',
    points: [
      'Built an enterprise-grade email migration tool using React and Spring Boot to automate PST-to-MBOX conversions, reliably processing 10k+ emails per migration job for large customer accounts.',
      'Improved email search performance by ~40% on 100k+ records using Elasticsearch indexing and distributed sharding.',
      'Designed React-based UI workflows to configure and monitor long-running migration jobs, providing real-time status visibility and reducing support escalations.',
      'Integrated AWS S3 with IAM-based access into the migration pipeline, reducing storage footprint by ~50% and improving scalability.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Savitribai Phule Pune University',
    icon: pccoe,
    iconBg: '#E6DEDD',
    date: 'Jun 2021 - May 2022',
    points: [
      'Developed a full-stack membership dashboard for a cultural event using Node.js, Express.js, and MongoDB with RESTful APIs for admin and user sign-up, login, and data retrieval, reducing manual registration processing time by ~40%.',
      'Designed a React-based renewal dashboard with improved UX and reminders, increasing renewal completion rate by ~35%.',
      'Automated Python scripts to generate charts and reports for admins, helping drive increased museum engagement through timely insights.',
    ],
  },
];

const publications = [
  {
    title: 'Object Detection and Recognition System Using Deep Learning Method',
    desc: 'Object detection and recognition approach using deep learning techniques for accurate classification and localization.',
    name: 'IEEE Xplore',
    date: '2023',
    link: 'https://ieeexplore.ieee.org/document/10126316',
  },
  {
    title: 'Criminal Recognition System',
    desc: 'Recognition system focused on identifying individuals for security and surveillance use cases.',
    name: 'IEEE Xplore',
    date: '2024',
    link: 'https://ieeexplore.ieee.org/abstract/document/10497321',
  },
  {
    title: 'Face Mask Detection Using Viola-Jones and SSD MobileNet V2',
    desc: 'Copyright no. L – 105116/2021 | Govt. of India.',
    name: 'Copyright Registration',
    date: '2021',
    link: '',
  },
];

const projects = [
  {
    name: 'Learning Management System',
    description:
      'Implemented a role-based LMS (Admin/Teacher/Student) with React + Spring Boot for courses, assignments, grading, and analytics, including an AI pipeline that flags scores below 60% to recommend targeted study material and reduce manual monitoring for instructors.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'spring-boot',
        color: 'green-text-gradient',
      },
      {
        name: 'aws',
        color: 'pink-text-gradient',
      },
    ],
    image: toll,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Emotion-Based Sentiment Analyzer',
    description:
      'Full-stack React + Node.js web app for analyzing customer reviews, integrating ML models to reach 84% sentiment accuracy and 66% emotion classification accuracy with cached, asynchronous inference under 200ms.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'ml',
        color: 'pink-text-gradient',
      },
    ],
    image: sentimentAnalyzer,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Pharmacy Management System',
    description:
      'Developed an Angular + Spring Boot app for clinics with JWT auth, MySQL, and modular billing/inventory services, reducing data entry by 60%.',
    tags: [
      {
        name: 'angular',
        color: 'blue-text-gradient',
      },
      {
        name: 'spring-boot',
        color: 'green-text-gradient',
      },
      {
        name: 'mysql',
        color: 'pink-text-gradient',
      },
    ],
    image: banking,
    source_code_link: 'https://github.com/',
  },
];

export {
  services,
  activities,
  technologies,
  experiences,
  publications,
  projects,
};
