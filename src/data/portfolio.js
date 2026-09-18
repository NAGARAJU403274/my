export const profile = {
  name: 'PULIGADDA NAGARAJU',
  title: 'Full Stack Developer',
  tagline: 'Java | Spring Boot | MERN Stack | React.js | Node.js',
  email: 'puligaddaraju12@gmail.com',
  phone: '+91 9346330070',
  location: 'Pedanandipadu, Andhra Pradesh',
  summary:
    'Full Stack Developer with 2+ years of experience designing, developing, and deploying scalable web applications using Java, Spring Boot, and the MERN Stack. Skilled in RESTful API development, microservices architecture, SQL and NoSQL database design, and JWT authentication. Delivered end-to-end software solutions across healthcare, EdTech, real estate, and cybersecurity domains. Experienced in Agile/Scrum methodologies, Git version control, CI/CD pipelines, and cloud deployment on Vercel, Render, and Supabase.',
  photo: `${import.meta.env.BASE_URL}profile/nagaraju.png`,
resume: `${import.meta.env.BASE_URL}resume/Puligadda_Nagaraju_Resume.docx`,
}

export const skillGroups = [
  { title: 'Programming', items: ['Java', 'JavaScript (ES6+)', 'Python', 'TypeScript (basics)'] },
  { title: 'Frontend', items: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Responsive Web Design', 'Redux (basics)'] },
  { title: 'Backend', items: ['Spring Boot', 'Spring Framework', 'Spring MVC', 'Spring Security', 'Hibernate', 'JPA', 'JDBC', 'Servlets', 'Node.js', 'Express.js'] },
  { title: 'Databases', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Oracle', 'Supabase'] },
  { title: 'DevOps & Tools', items: ['Git', 'GitHub', 'Postman', 'Maven', 'CI/CD Pipelines', 'Vercel', 'Render', 'Jenkins (basics)'] },
  { title: 'Architecture & Practices', items: ['RESTful API Development', 'Microservices Architecture', 'OOP', 'MVC Architecture', 'JWT Authentication', 'Agile/Scrum', 'SDLC', 'Unit Testing'] },
]

export const experiences = [
  {
    role: 'Technical Full Stack Trainer & Developer',
    company: 'ByteXL',
    date: 'June 2026 – Present',
    bullets: [
      'Deliver hands-on training in Java Full Stack and MERN Stack, enabling learners to build frontend, backend, database, and REST API components.',
      'Train and mentor learners in Java, Spring Boot, Hibernate, SQL, React.js, Node.js, Express.js, MongoDB, Git, and Postman.',
      'Guide students through real-world full-stack projects covering authentication, API integration, database connectivity, testing, and deployment.',
      'Conduct coding assessments, code reviews, debugging sessions, and technical interview preparation.',
    ],
  },
  {
    role: 'Full Stack Developer & FullStack Trainer',
    company: 'Datavalley Inc., Vijayawada',
    date: 'May 2024 – May 2026',
    bullets: [
      'Designed and developed RESTful APIs using Java, Spring Boot, Spring MVC, and Hibernate for production web applications.',
      'Engineered full-stack features using the MERN Stack and integrated React.js frontends with Spring Boot microservices.',
      'Implemented MySQL and MongoDB database schemas with structured, normalized data models.',
      'Participated in Agile/Scrum sprints, code reviews, and CI/CD pipeline improvements.',
      'Led development of an LMS module using Next.js and MongoDB for real-time coding progress tracking.',
      'Optimized performance through query tuning, API caching strategies, and code refactoring.',
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Keerthi IT Solutions, Hyderabad',
    date: '2023 – 2024',
    bullets: [
      'Developed and maintained full-stack web applications using Spring Boot, React.js, and MySQL on Zoho-integrated projects.',
      'Enhanced backend payroll and HR management modules using Spring Framework and Hibernate.',
      'Collaborated with QA teams to debug, test, and resolve production issues.',
      'Authored and maintained RESTful API endpoints and performed API testing using Postman.',
    ],
  },
  {
    role: 'Associate L1 Engineer Intern',
    company: 'Infofact Solutions, Hyderabad',
    date: '2022 – 2023',
    bullets: [
      'Built Java-based backend services using Spring Boot and Spring MVC with JDBC and Hibernate.',
      'Developed responsive UI components using HTML5, CSS3, and JavaScript integrated with RESTful APIs.',
      'Managed GitHub repositories and contributed to CI/CD deployment pipelines.',
      'Executed unit testing and defect resolution workflows.',
    ],
  },
]

export const projects = [
  {
    name: 'Learning Management System (LMS)',
    stack: ['Next.js', 'MongoDB', 'React.js'],
    url: 'https://learning.datavalley.ai',
    description: 'Full-stack LMS for student coding progress tracking with daily challenge submissions, SSR, MongoDB schemas, and admin monitoring dashboards.',
  },
  {
    name: 'Dheergayush – Healthcare Management System',
    stack: ['Node.js', 'Express.js', 'MongoDB'],
    url: 'https://dheergayush.net',
    description: 'Healthcare management platform covering patient registration, appointment scheduling, medical records, and RESTful APIs.',
  },
  {
    name: 'CyberSquad Technologies – Cybersecurity Platform',
    stack: ['React.js', 'Node.js', 'Express.js', 'Supabase'],
    url: 'https://cybersecquad.com',
    description: 'Full-stack cybersecurity service platform for security services, client requests, incident reports, JWT authentication, and structured data management.',
  },
  {
    name: 'Proplore.in – Hardware Components Platform',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Supabase'],
    url: 'https://proplore.in',
    description: 'Platform with RESTful APIs for listings, user profiles, contact forms, and booking workflows, with optimized MongoDB schemas and queries.',
  },
  {
    name: 'Azayatek – Business Platform',
    stack: ['React.js', 'Node.js', 'Express.js', 'Supabase'],
    url: 'https://azayatek.com',
    description: 'Production business platform with responsive UI, dynamic content management, and domain integration.',
  },
]

export const education = [
  { degree: 'Master of Computer Applications (MCA)', institution: 'Guntur Engineering College', year: '2024', score: 'CGPA: 8.4' },
  { degree: 'B.Sc (Statistics)', institution: 'Pedanandipadu College', year: '2022', score: 'CGPA: 9.23' },
]

export const certifications = [
  'Java Full Stack Development — JSpiders, Hyderabad',
  'MERN Stack Development — Self-directed, project-based learning and industry experience',
]
