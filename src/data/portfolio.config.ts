import { PortfolioConfig } from "../types/portfolio.types";

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Kartik Mishra",
    role: "Full-Stack Developer",
    summary:
      "Full-stack developer with strong fundamentals and a bias for action. Experienced in Core Java, Spring Boot, and Angular. Fueled by curiosity and coffee.",
    email: "kartikm2219@gmail.com", // Update with your actual email
    phone: "+91-9643834016", // Update with your actual phone
    location: "Hyderabad, India",
    photo: "/images/profile.jpg", // Add your photo to public/images/profile.jpg
    resume: "/resume.pdf", // Add your resume to public/resume.pdf
    social: {
      github: "https://github.com/kartikmishraa", // Update with your GitHub
      linkedin: "https://www.linkedin.com/in/kartikmishra17/", // Update with your LinkedIn
      twitter: "", // Optional: Add your Twitter
      website: "", // Optional: Add your personal website
    },
  },

  education: [
    {
      degree: "B.Tech. in Computer Science Engineering",
      institution: "Kalinga Institute of Industrial Technology, Bhubaneswar",
      duration: "2020 - May 2024",
      grade: "8.51 CGPA",
      description: "Graduated with distinction in Computer Science Engineering",
    },
  ],

  skills: {
    languages: ["Java", "C/C++", "JavaScript/TypeScript", "HTML/CSS"],
    backend: ["Spring Boot", "Core Java", "Node.js", "MongoDB"],
    frontend: ["Angular"],
    tools: [
      "Claude",
      "Gen AI",
      "Git",
      "Linux",
      "JIRA",
      "Jenkins",
      "Kubernetes",
    ],
  },

  experience: [
    {
      company: "Chubb",
      role: "Software Engineer",
      location: "Hyderabad",
      duration: "June 2024 - Present",
      type: "Full-time",
      description: [
        "Developing and maintaining enterprise-level applications using Java Spring Boot and Angular",
        "Collaborating with cross-functional teams to deliver high-quality software solutions",
        "Implementing best practices for code quality, testing, and deployment",
        "Working with microservices architecture and cloud technologies",
      ],
      technologies: ["Java", "Spring Boot", "Angular", "Microservices"],
    },
    {
      company: "Chubb",
      role: "Technology Intern",
      location: "Hyderabad",
      duration: "Sept 2023 - May 2024",
      type: "Internship",
      description: [
        "Contributed to the development of internal tools and applications",
        "Learned enterprise software development practices and methodologies",
        "Worked with senior developers on critical features and bug fixes",
        "Participated in code reviews and agile development processes",
      ],
      technologies: ["Java", "Spring Boot", "Angular"],
    },
  ],

  projects: [
    {
      title: "Ping",
      description: "A real-time communication application with modern features",
      fullDescription:
        "Full-featured communication application built with Java Spring Boot backend, Angular frontend, and MongoDB database. Includes real-time messaging, user authentication, and responsive design.",
      technologies: ["Java Spring Boot", "Angular", "MongoDB", "WebSocket"],
      github: "https://github.com/kartikmishra/ping", // Update with your actual GitHub link
      demo: "", // Optional: Add demo link if available
      date: "December 2023",
    },
    {
      title: "NFT-Warranty DApp",
      description:
        "Blockchain-based decentralized application for tokenized warranties",
      fullDescription:
        "Decentralized application leveraging blockchain technology to create, manage, and verify product warranties as NFTs. Built with smart contracts to ensure transparency and immutability of warranty records.",
      technologies: [
        "Blockchain",
        "Smart Contracts",
        "Solidity",
        "Web3.js",
        "Ethereum",
      ],
      github: "https://github.com/kartikmishra/nft-warranty", // Update with your actual GitHub link
      demo: "", // Optional: Add demo link if available
      date: "December 2022",
    },
  ],

  certificates: [
    {
      name: "Microsoft Azure AZ-900",
      issuer: "Microsoft",
      description:
        "Azure Cloud Fundamentals - Comprehensive understanding of cloud concepts and Azure services",
      date: "2023",
      credentialId: "XXXX-XXXX-XXXX", // Update with your actual credential ID
      link: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/", // Update with your credential link
    },
    {
      name: "AWS Introduction to Cloud",
      issuer: "Amazon Web Services",
      description:
        "Introduction to Cloud Computing - Understanding of AWS cloud infrastructure and core services",
      date: "2023",
      credentialId: "XXXX-XXXX-XXXX", // Update with your actual credential ID
      link: "", // Update with your credential link
    },
    {
      name: "Blockchain Basics",
      issuer: "Coursera/edX", // Update with actual issuer
      description:
        "Fundamentals of Blockchain Technology - Understanding of distributed ledger technology and cryptocurrency",
      date: "2022",
      credentialId: "XXXX-XXXX-XXXX", // Update with your actual credential ID
      link: "", // Update with your credential link
    },
  ],
};
