// Mock data for Pradhuman's portfolio
export const portfolioData = {
  personal: {
    name: "Pradhuman Sharma",
    title: "Data Analyst & AI Engineer",
    tagline: "Bridging Technology and Business Operations Through Data-Driven Solutions",
    email: "pradhuman.sharma@gmail.com", 
    phone: "7987096387",
    github: "https://github.com/pradhuman-sharma",
    location: "Indore, India",
    profileImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzdHxlbnwwfHx8fDE3NTkyNDYxODV8MA&ixlib=rb-4.1.0&q=85"
  },
  
  about: {
    summary: "B.Tech graduate with hands-on experience in operations, technical support, and data analysis. I specialize in transforming complex data into actionable insights and building AI-powered solutions. My unique background combines technical expertise with real-world business operations, making me an ideal bridge between data science teams and business stakeholders.",
    highlights: [
      "4+ years of event management and operations experience",
      "Automated Excel reports saving 3+ hours weekly",
      "Built multiple fullstack applications with AI integration",
      "Strong problem-solving skills in high-pressure environments"
    ]
  },

  skills: [
    { category: "Data Analysis", skills: [
      { name: "Python", level: 85 },
      { name: "SQL", level: 80 },
      { name: "Excel/Analytics", level: 90 },
      { name: "Data Visualization", level: 75 }
    ]},
    { category: "AI/ML", skills: [
      { name: "Machine Learning", level: 70 },
      { name: "LLM Integration", level: 80 },
      { name: "Statistical Analysis", level: 75 },
      { name: "A/B Testing", level: 85 }
    ]},
    { category: "Development", skills: [
      { name: "JavaScript/Node.js", level: 80 },
      { name: "React", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "API Development", level: 80 }
    ]},
    { category: "Business Operations", skills: [
      { name: "Process Automation", level: 90 },
      { name: "Team Coordination", level: 95 },
      { name: "Customer Relations", level: 90 },
      { name: "Problem Solving", level: 95 }
    ]}
  ],

  experience: [
    {
      id: 1,
      title: "Mall Operations Intern",
      company: "Phoenix Citadel, Indore",
      period: "Dec 2024 – June 2025",
      type: "Internship",
      achievements: [
        "Coordinated daily operations and workload distribution across teams",
        "Automated Excel-based reports for footfall analysis, saving 3+ hours weekly",
        "Handled customer escalations and issue resolution efficiently",
        "Implemented data tracking systems for operational insights"
      ]
    },
    {
      id: 2, 
      title: "Technical Intern - Production & Web",
      company: "Milind Inc & Milind Production, Indore",
      period: "Jan 2021 – Dec 2023",
      type: "Internship",
      achievements: [
        "Implemented real-time troubleshooting solutions for live production",
        "Enhanced team collaboration and communication workflows",
        "Solved technical issues under pressure maintaining smooth operations",
        "Supported cinematography and audio production teams"
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "A/B Test Analyzer",
      description: "Statistical analysis tool for product teams to analyze A/B test results with automated insights and visualizations.",
      technologies: ["Python", "Streamlit", "Pandas", "Statsmodels"],
      features: [
        "Statistical significance testing (z-test, p-value)",
        "Automated conversion analysis and reporting", 
        "Interactive data visualization dashboards",
        "CSV upload and real-time processing"
      ],
      image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxkYXRhJTIwYW5hbHlzdHxlbnwwfHx8fDE3NTkyNDYxODV8MA&ixlib=rb-4.1.0&q=85",
      status: "Deployed",
      category: "Data Analysis"
    },
    {
      id: 2,
      title: "AI Learning Assistant", 
      description: "Intelligent educational platform that summarizes documents, supports voice interactions, and generates personalized quizzes.",
      technologies: ["Python", "OpenAI API", "Streamlit", "PyPDF2"],
      features: [
        "PDF document summarization using LLMs",
        "Voice and text input support",
        "Automated quiz generation",
        "Progress tracking and learning analytics"
      ],
      image: "https://images.unsplash.com/photo-1677691820099-a6e8040aa077?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw0fHxBSSUyMHdvcmtzcGFjZXxlbnwwfHx8fDE3NTkyNDYxOTB8MA&ixlib=rb-4.1.0&q=85",
      status: "In Development",
      category: "AI/ML"
    },
    {
      id: 3,
      title: "Flipr Fullstack Task",
      description: "End-to-end MERN stack application with secure authentication and responsive design for business operations.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      features: [
        "Complete CRUD operations",
        "JWT authentication system",
        "Responsive UI design", 
        "RESTful API architecture"
      ],
      image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHxkYXRhJTIwYW5hbHlzdHxlbnwwfHx8fDE3NTkyNDYxODV8MA&ixlib=rb-4.1.0&q=85",
      status: "Completed",
      category: "Full Stack"
    },
    {
      id: 4,
      title: "CRUD API with Node.js",
      description: "Production-ready RESTful API with comprehensive error handling and middleware for scalable backend operations.",
      technologies: ["Node.js", "Express", "MongoDB"],
      features: [
        "Complete CRUD operations",
        "Advanced routing and middleware",
        "Error handling and validation",
        "Production-level API design"
      ],
      image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxkYXNoYm9hcmR8ZW58MHx8fHwxNzU5MjQ2MTk2fDA&ixlib=rb-4.1.0&q=85",
      status: "Completed", 
      category: "Backend"
    }
  ],

  stats: [
    { label: "Projects Completed", value: "15+" },
    { label: "Years Experience", value: "4+" },
    { label: "Process Improvements", value: "10+" },
    { label: "Team Events Managed", value: "25+" }
  ],

  certifications: [
    "Software Testing Fundamentals - Great Learning",
    "UI/UX Design Course - Great Learning", 
    "Data Engineering on AWS - Foundations",
    "Generative AI Mastermind - Outskill",
    "C/C++ Programming - Programming World"
  ]
};