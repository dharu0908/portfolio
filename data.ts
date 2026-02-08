
import { Experience, Project, SkillCategory, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Dharmik Patel",
  title: "Data Scientist & System Developer",
  location: "Windsor, Ontario",
  phone: "+1 (437) 451-0983",
  email: "pateldharmik922@gmail.com",
  linkedin: "https://www.linkedin.com/in/dharmik-patel-9a99a1206/",
  github: "https://github.com/dharu0908",
  summary: "Google certified Data Analyst with 1.5+ years of experience in SQL, Python, and PowerBI. Proven track record in building real-time analytics platforms and leveraging cloud technologies to drive data-driven decision making."
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Programming & Scripting",
    items: ["Python", "R", "SQL", "Java", "JavaScript", "Linux/CLI"],
    icon: "code"
  },
  {
    category: "Data Science & ML",
    items: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "OpenAI API", "Knowledge Graphs"],
    icon: "brain"
  },
  {
    category: "Databases & Big Data",
    items: ["Databricks", "SQL Server", "MySQL", "PostgreSQL", "MongoDB", "Snowflake", "Kafka"],
    icon: "database"
  },
  {
    category: "Visualization & BI",
    items: ["Power BI", "Tableau", "Excel", "Matplotlib", "Seaborn"],
    icon: "bar-chart"
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Azure", "Git/GitHub", "Docker", "CI/CD", "Airflow"],
    icon: "cloud"
  },
  {
    category: "Development",
    items: ["MERN Stack", "RESTful APIs", "ETL Pipelines", "Prisma ORM"],
    icon: "terminal"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    title: "System Software Developer COOP",
    company: "Housing and Residence, University of Windsor",
    location: "Windsor, Ontario",
    period: "Jan 2026 - Present",
    tech: ["StarRez Query Language (StarQL)"],
    description: [
      "Gained hands-on experience with the residence software architecture, understanding system modules and workflows.",
      "Utilized reporting and dashboard modules to fetch and analyze data, extracting insights for housing operations."
    ]
  },
  {
    title: "Data Analyst",
    company: "Cerbotech",
    location: "Anand, India",
    period: "May 2025 - April 2026",
    tech: ["Python", "SQL", "MySQL", "PowerBI"],
    description: [
      "Extracted 300,000+ live records from NeuroSky headsets in 10-minute intervals.",
      "Applied statistical approaches on complex datasets, extracting 600+ analytical metrics.",
      "Improved analyst efficiency by 20% through Python automation.",
      "Contributed to 10M INR in revenue through data-driven feature improvements."
    ]
  },
  {
    title: "Research Intern",
    company: "ISRO, Dept. of Space, Govt. of India",
    location: "Ahmedabad, India",
    period: "Dec 2023 - Apr 2024",
    tech: ["Python", "SQL", "Tkinter", "FITS file", "PowerBI"],
    description: [
      "Managed live data from Lakeshore 336 sensors using Python and SQL.",
      "Built a cross-functional Python GUI (Tkinter) for monitoring operations.",
      "Developed a data pipeline to log critical metrics into FITS file headers and SQL databases.",
      "Presented live machine sensor data through interactive Power BI dashboards."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Real-time Retail Event Streaming Platform",
    period: "Dec 2025 – Jan 2026",
    tech: ["Python", "PySpark", "Kafka", "Databricks", "AWS RDS/S3"],
    description: [
      "Built streaming pipeline to process 100K+ user events.",
      "Improved query performance by 60% through optimized ETL workflows.",
      "Implemented collaborative filtering to generate top-5 personalized recommendations."
    ],
    github: "https://github.com/dharu0908"
  },
  {
    title: "Customer Churn Prediction Dashboard",
    period: "Jun 2025 – July 2025",
    tech: ["Python", "Scikit-learn", "Pandas", "Tableau", "Seaborn"],
    description: [
      "Analyzed 7,000+ customer records achieving 85% prediction accuracy.",
      "Reduced analysis time by 40% through interactive visualizations.",
      "Empowered business teams with data-driven retention insights."
    ],
    github: "https://github.com/dharu0908"
  },
  {
    title: "SignBridge – Sign Language Detection",
    period: "May 2025 – Aug 2025",
    tech: ["React", "Flask", "TensorFlow", "OpenCV"],
    description: [
      "Full-stack system for real-time sign language translation.",
      "Integrated TensorFlow-based gesture recognition with accessibility features."
    ],
    github: "https://github.com/dharu0908"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    date: "Jan 2025",
    description: "8-course program covering SQL, Tableau, R, and Data Viz.",
    link: "#"
  },
  {
    name: "HackerRank Intermediate SQL Certificate",
    issuer: "HackerRank",
    date: "Feb 2025",
    description: "Advanced skills in joins, subqueries, and complex logic.",
    link: "#"
  }
];
