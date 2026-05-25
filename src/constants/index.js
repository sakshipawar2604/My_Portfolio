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
    title: "AI Software Developer (Volunteering)",
    company_name: "University of Texas at Arlington",
    icon: uta,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Apr 2026",
    points: [
      "Built a GenAI assistant with LangChain and AWS Lambda, automating queries and signups while reducing manual effort by 60%.",
      "Designed LangGraph-based agent workflows for intent routing, FAQ retrieval, event lookup, and contextual response generation.",
      "Implemented CrewAI-based multi-agent orchestration for classification, retrieval, and response validation across member services.",
      "Developed async inference APIs with Node.js microservices, improving AI response throughput by 30% for 500+ member users.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Jul 2024",
    points: [
      "Developed and owned a React-based approval workflow module within Siemens Teamcenter, replacing email-based coordination with an in-tool approval system for engineering change requests.",
      "Built a debounced global search using React and REST APIs, reducing redundant API calls and lowering search traffic by ~40%.",
      "Optimized backend query paths by eliminating redundant SQL calls and adding targeted indexes, improving API response times by ~30% in production.",
      "Deployed production builds to AWS EC2 via S3 and used CloudWatch logs to diagnose and resolve post-release workflow failures.",
      "Implemented config-driven backend validations for multi-region approval flows, eliminating code forks and improving maintainability.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "SysTools",
    icon: systools,
    iconBg: "#E6DEDD",
    date: "Jul 2022 - Jun 2023",
    points: [
      "Built an enterprise-grade email migration tool using React and Spring Boot to automate PST-to-MBOX conversions, reliably processing 10k+ emails per migration job for large customer accounts.",
      "Improved email search performance by ~40% on 100k+ records using Elasticsearch indexing and distributed sharding.",
      "Designed React-based UI workflows to configure and monitor long-running migration jobs, providing real-time status visibility and reducing support escalations.",
      "Integrated AWS S3 with IAM-based access into the migration pipeline, reducing storage footprint by ~50% and improving scalability.",
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
