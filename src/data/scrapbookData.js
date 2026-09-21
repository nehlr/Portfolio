export const scrapbookData = {
  profile: {
    name: "Nehir Karameşe",
    title: "AI Master's Student @ La Salle BCN",
    university: "La Salle Campus Barcelona — Universitat Ramon Llull",
    previousUniversity: "Işık University",
    location: "Barcelona, Spain / Istanbul, Turkey",
    tagline: "Exploring Artificial Intelligence, Retrieval-Augmented Generation, Computer Vision, and Software Engineering.",
    bio: "AI Master's Student at La Salle BCN with a strong background in Computer Engineering. Passionate about AI, Data Analytics, and Full-stack software development.",
    email: "nehirkaramese@gmail.com",
    github: "https://github.com/nehlr",
    linkedin: "https://linkedin.com/in/nehir-karamese",
    journalQuote: "“Bridging intelligent AI models and human-centered user experiences.”"
  },

  // 1. WORK EXPERIENCE (INTERNSHIPS) - TEXT ONLY (NO PHOTOS)
  workExperience: [
    {
      company: "Microsoft",
      role: "AI Innovators Internship Program",
      period: "June 2026 – September 2026",
      bullets: [
        "Architecting and developing a Retrieval-Augmented Generation (RAG) application leveraging Microsoft Foundry Local to enable secure, high-performance communication with local AI models."
      ],
      tags: ["RAG", "Microsoft Foundry Local", "Local LLMs", "AI Architecture"]
    },
    {
      company: "ADALab (Academic Data Analytics Lab)",
      role: "Student Assistant",
      period: "September 2025 – June 2026",
      bullets: [
        "Co-authored 1 research paper presented at SIU 2026 (Signal Processing and Communications Applications Congress), focusing on data visualization."
      ],
      tags: ["Data Visualization", "SIU 2026 Research", "Signal Processing", "Data Analytics"]
    },
    {
      company: "Eryaz Software",
      role: "Full-Stack Intern & UI/UX Designer",
      period: "August 2025 – September 2025",
      bullets: [
        "Developed backend services using MVC architecture and built dynamic frontend interfaces with React. Designed and wireframed 10+ interactive user interface screens and workflows using Figma."
      ],
      tags: ["React", "MVC Architecture", "Figma", "UI/UX Design", "Full-Stack"]
    },
    {
      company: "BeeVision",
      role: "Computer Vision & Software Intern",
      period: "August 2024 - September 2024",
      bullets: [
        "Built OpenCV-based vision algorithms for real-time conveyor inspection to enhance industrial sorting accuracy.",
        "Collaborated in a cross-disciplinary engineering environment, integrating software solutions with mechanical and electrical systems."
      ],
      tags: ["OpenCV", "Computer Vision", "Industrial Automation", "Python"]
    }
  ],

  // 2. EVENTS & PROJECTS - SCRAPBOOK STYLE (PHOTO + TEXT)
  eventsAndProjects: [
    {
      id: "cybersec-ai-camp-2024",
      title: "Cybersecurity and AI Camp 2024",
      year: "2024",
      location: "Istanbul, Turkey",
      image: "/assets/events/cybersecurity_camp.jpg",
      polaroidCaption: "CyberSec & AI Camp '24",
      rotationClass: "-rotate-1",
      description: "Participated in an intensive hands-on training camp focused on AI-driven threat intelligence, deep neural network intrusion detection models, and ethical cyber defense simulations.",
      highlights: [
        "Engaged in 4 days continuous security coding sprint and built network."
      ],
      tags: ["Artificial Intelligence", "Cybersecurity", "Deep Learning"]
    },
    {
      id: "nasa-space-apps-2024",
      title: "Nasa Space Apps Challenge 2024",
      year: "2024",
      location: "Global Hackathon",
      image: "/assets/events/nasa_space_apps.jpg",
      polaroidCaption: "NASA Space Apps '24",
      rotationClass: "rotate-2",
      description: "Engineered an interactive satellite data visualization and orbital mechanics prediction system using NASA open telemetry datasets and Keplerian orbital trajectory models.",
      highlights: [
        "Built PyTorch trajectory prediction pipelines"
      ],
      tags: ["NASA Open API", "Orbital Mechanics", "Python"]
    },
    {
      id: "isik-tech-summit-2025",
      title: "Işık University Technology Summit 2025",
      year: "2025",
      location: "Istanbul, Turkey",
      image: "/assets/events/isik_tech_summit.jpg",
      polaroidCaption: "Işık Tech Summit '25",
      rotationClass: "-rotate-2",
      description: "I served on the organizing committee and acted as the Master of Ceremonies (MC) for the Işık University Technology Summit. The conference brought together approximately 500 attendees and featured keynote addresses from six prominent business leaders.",
      highlights: [
        "Managed conference logistics for 500+ attendees"
      ],
      tags: ["Generative AI", "Tech Conference", "Leadership"]
    },
    {
      id: "ieee-siu-congress-2025",
      title: "33rd IEEE Signal Processing and Communication Applications Congress (SIU) 2025",
      year: "2025",
      location: "Turkey",
      image: "/assets/events/ieee_siu_congress.jpg",
      polaroidCaption: "33rd IEEE SIU Congress '25",
      rotationClass: "rotate-1",
      description: "Coordinated logistics and technical support for one of Turkey’s most prestigious engineering congresses.",
      highlights: [
        "Presented peer-reviewed poster session to IEEE researchers",
        "Demonstrated real-time neural spectral analysis software prototype"
      ],
      tags: ["IEEE SIU 2025", "Signal Processing", "Research Paper"]
    },
    {
      id: "isik-winter-app-2025",
      title: "\"Işık Winter\" New Year Gift-Giving App (2025)",
      year: "2025",
      location: "Işık University",
      image: "/assets/events/isikwinter.JPG",
      polaroidCaption: "Işık Winter App '25",
      rotationClass: "-rotate-1",
      description: "Designed and built a web-based festive Secret Santa gift exchange application serving 1,200+ university students with automated matching algorithms and wishlist features with my team.",
      highlights: [
        "Implemented zero-collision Secret Santa assignment algorithm",
        "Created cozy winter holiday-themed React interface"
      ],
      tags: ["React", "Full-Stack", "Matching Algorithm"]
    },
    {
      id: "ieee-siu-congress-2026",
      title: "34th IEEE Signal Processing and Communication Applications Congress (SIU) 2026",
      year: "2026",
      location: "Turkey",
      image: "/assets/events/siu2.jpg",
      polaroidCaption: "34th IEEE SIU Congress '26",
      rotationClass: "rotate-1",
      description: "Presented a co-authored scientific research paper with my team at the 34th IEEE SIU 2026 Congress, demonstrating advanced data visualization methodologies and signal processing analytics.",
      paperUrl: "https://ieeexplore.ieee.org/document/11636655",
      highlights: [
        "Co-authored peer-reviewed research paper presented with engineering team at 34th IEEE SIU 2026",
        "Engineered innovative data visualization techniques for complex signal processing datasets"
      ],
      tags: ["IEEE SIU 2026", "Signal Processing", "Data Visualization", "IEEE Xplore"]
    },
    {
      id: "isik-corporate-communications",
      title: "Corporate Communications Intern",
      year: "2024 – 2026",
      location: "Işık University",
      image: "/assets/events/isik_communications.jpg",
      polaroidCaption: "Corporate Communications '24–'26",
      rotationClass: "-rotate-1",
      description: "Served as a Student Ambassador for Işık University across both academic semesters and summer promotional periods from 2024 to 2026.",
      highlights: [
        "Delivered university presentations and guidance to prospective engineering students and families"
      ],
      tags: ["Student Ambassador", "Communications", "Public Relations"]
    },
    {
      id: "isik-run-club-leader",
      title: "Işık Run Club Leader",
      year: "2026",
      location: "Istanbul, Turkey",
      image: "/assets/events/runclub.jpg",
      polaroidCaption: "Işık Run Club Leader '26",
      rotationClass: "rotate-2",
      description: "As the Founder and President of the Işık Run Club, I established a dynamic athletic community from the ground up, directing weekly training sessions and promoting active lifestyle habits among university students from January 2026 to September 2026.",
      highlights: [
        "Organized weekly training runs to foster community engagement among students and alumni",
        "Fostered an active campus athletic culture and cross-departmental alumni networking"
      ],
      tags: ["Leadership", "Community Engagement", "Athletics"]
    }
  ],

  // 3. ACADEMIC HIGHLIGHTS
  academicHighlights: [
    {
      degree: "M.S. in Artificial Intelligence",
      institution: "La Salle Campus Barcelona — Universitat Ramon Llull",
      period: "2026 — 2027",
      location: "Barcelona, Spain",
      note: "Specializing in Machine Learning, Big Data Management, Computer Vision, Natural Language Processing, Deep Learning, and Autonomous Systems."
    },
    {
      degree: "B.S. in Computer Engineering",
      institution: "Işık University",
      period: "2022 — 2026",
      location: "Istanbul, Turkey",
      note: "Focus on Software Engineering, Data Structures, Agentic AI Development, AWS Cloud Solutions, and Digital Transformation."
    }
  ]
};
