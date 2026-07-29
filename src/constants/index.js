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
  bny,
  iws,
  ieee,
  lincesCkf,
  toll,
  insightgen,
  threejs,
  sentimentAnalyzer,
  lms,
} from "../assets";

export const navLinks = [
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Engineer",
    icon: web,
  },
  {
    title: "Cloud-Native & DevOps Engineer",
    icon: backend,
  },
  {
    title: "Applied ML & Agentic AI",
    icon: creator,
  },
  {
    title: "Product-Led Problem Solver",
    icon: mobile,
  },
];

const activities = [
  {
    title: "La Trobe Innovation Challenge (2022)",
    desc: "Secured 3rd place for designing a blockchain + IoT sustainability platform.",
  },
  {
    title: "IEEE Coordinator",
    desc: "Coordinated 15+ tech events and designed 10+ newsletters, boosting engagement among 300+ members.",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React.js",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "BNY, Texas",
    icon: bny,
    iconBg: "#E6DEDD",
    date: "Sep 2025 - Present",
    points: [
      "Developed responsive frontend features using React, JavaScript, and Redux, translating UI/UX wireframes into reusable components that reduced manual workflow monitoring effort by 35%, enabling operations teams to review high-volume daily banking transactions.",
      "Implemented and extended Java Spring Boot REST APIs, writing optimized SQL queries to retrieve and transform transactional data, enabling secure integration between backend microservices and frontend applications while reducing query latency by 40%.",
      "Reviewed code using Git and deployed application updates through Jenkins CI/CD pipelines across development and production environments.",
      "Integrated Retrieval-Augmented Generation (RAG) workflows using LangChain and pgvector, enabling semantic search across 500K+ compliance documents to support internal AI tools used by risk and compliance teams.",
      "Resolved frontend and backend defects using Postman and Java stack traces, improving system stability and reducing production incidents.",
    ],
  },
  {
    title: "Packaged App Development Associate (Software Engineer)",
    company_name: "Accenture, India",
    icon: accenture,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Jul 2024",
    points: [
      "Developed e-commerce features including product search, shopping cart, and account management using React, TypeScript, Redux, and Spring Boot.",
      "Built inventory management system using Java JPA/Hibernate with MySQL, writing and optimizing SQL queries and implementing Redis caching that reduced overselling by 85% across a 500+ product catalog with automated alerts.",
      "Created frontend test suite using Jest and React Testing Library, deployed updates through Jenkins CI/CD pipeline, monitored production applications on AWS EC2, and resolved production issues achieving 90% code coverage.",
      "Migrated legacy jQuery components to React with TypeScript, implementing JavaScript ES6+ features and Webpack for module bundling, improving mobile performance and increasing user engagement by 25% on product pages.",
      "Engineered Java REST APIs for payment integration, webhook verification, OAuth 2.0, and MySQL optimization while resolving QA defects.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Informative Web Solutions, India",
    icon: iws,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Jul 2023",
    points: [
      "Developed and shipped 7 enterprise application features using Java, Spring Boot, and SQL across 12 Agile sprints, resolving assigned software defects to deliver stable, deployment-ready functionality supporting core product workflows.",
      "Built responsive UI components using React, JavaScript, HTML, and CSS, performing unit testing that identified and resolved 10 bugs, improving component reliability and overall usability ahead of final production release.",
      "Diagnosed API and database defects using Postman, logs, and SQL queries, resolving 25+ issues and supporting QA validation across 12 sprints.",
    ],
  },
];

const publications = [
  {
    title: "Object Detection and Recognition System Using Deep Learning Method",
    desc: "Developed a research-based object detection system using the YOLO (You Only Look Once) algorithm for real-time object detection and classification. The paper explores applications in autonomous driving, surveillance, medical imaging, and security systems. It highlights YOLO's speed and accuracy in detecting multiple objects from images or video streams.",
    name: "IEEE Xplore",
    date: "2023",
    link: "https://ieeexplore.ieee.org/document/10126316",
  },
  {
    title: "Criminal Recognition System",
    desc: "Developed a web-based face recognition system using Deep Learning and CNN to support criminal identification and security screening. The paper explores applications in surveillance, airports, banks, and law enforcement investigations. It highlights how automated facial recognition can help identify offenders more efficiently and reliably.",
    name: "IEEE Xplore",
    date: "2024",
    link: "https://ieeexplore.ieee.org/abstract/document/10497321",
  },
  {
    title: "Face Mask Detection Using Viola-Jones and SSD MobileNet V2",
    desc: "Developed a real-time Face Mask Detection system using a two-stage approach: Viola-Jones for face detection and MobileNetV2/SSD for mask classification. The project used OpenCV and TensorFlow to identify masked and unmasked faces from images/video frames, supporting safety monitoring in offices, hospitals, airports, and public areas. Its strength is combining fast Haar-based face detection with a lightweight deep learning classifier suitable for real-time use.",
    name: "Copyright Registration",
    date: "2021",
    link: "",
  },
];

const projects = [
  {
    name: "Learning Management System",
    points: [
      "Designed a relational LMS database and Java (Spring Boot) services that aggregate enrollments, submissions, and grades into dashboard KPIs: system totals, class averages, and at-risk student counts.",
      "Built React dashboards with KPI cards, progress bars, and data tables for admin, teacher, and student roles with live metrics for users, courses, performance, and assignments.",
      "Delivered an end-to-end pipeline from database schema and REST APIs through metric computation to an interactive UI for operational monitoring and decision-making.",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "spring-boot",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
    ],
    image: lms,
    source_code_link: "https://github.com/sakshipawar2604/CS-6324-LMS",
  },
  {
    name: "Emotion-Based Sentiment Analyzer",
    points: [
      "Built a React analysis dashboard that classifies customer reviews into predicted emotion and sentiment with KPI result cards and Top 3 emotion probability progress bars.",
      "Integrated ML models via Node.js/Express with cached async inference, achieving 84% sentiment accuracy and 66% emotion accuracy in under 200ms.",
      "Delivered an end-to-end pipeline from review input and model serving through live result visualization for real-time feedback and product insight monitoring.",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "ml",
        color: "pink-text-gradient",
      },
    ],
    image: sentimentAnalyzer,
    source_code_link:
      "https://github.com/sakshipawar2604/bert-sentiment-classifier",
  },
  {
    name: "Linces'CKF — Premium Silk Fashion E-Commerce",
    points: [
      "Designed a normalized MySQL database with foreign keys, constraints, and seed data for users, products, orders, reviews, custom orders, support tickets, and chat.",
      "Built admin and user dashboards with live business metrics (revenue, orders, products, users) via Express APIs and React modules for orders, inventory, users, and support.",
      "Deployed a bilingual React e-commerce app with catalog filtering, cart/checkout, custom quotes, JWT auth, and Azure-hosted frontend/backend integration.",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "azure",
        color: "blue-text-gradient",
      },
    ],
    image: lincesCkf,
    source_code_link: "https://github.com/sakshipawar2604/LincesCkf",
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
