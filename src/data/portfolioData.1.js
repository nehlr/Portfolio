export const portfolioData = {
    personal: {
        name: "Nehir Karameşe",
        role: "Computer Engineer",
        tagline: "Crafting elegant web experiences, robust APIs, and cloud-native solutions with an aesthetic touch.",
        location: "Barcelona,Spain",
        status: "Open for Full-Time & Select Consulting Opportunities",
        email: "nehirkaramese@gmail.com",
        github: "https://github.com",
        linkedin: "https://www.linkedin.com/in/nehir-karamese/",
        twitter: "https://x.com",
        resumeUrl: "#resume",
        yearsOfExperience: 4,
        projectsCompleted: 28,
        codeCommitsThisYear: "1,420+",
        bio: "Passionate Software Engineer dedicated to constructing scalable web applications with intuitive design and clean architecture. Focused on Modern React, Node.js, Cloud Architectures, and Developer Tooling.",
    },

    skillsCategories: [
        { id: "all", label: "All Technologies" },
        { id: "frontend", label: "Frontend Development" },
        { id: "backend", label: "Backend & Cloud" },
        { id: "tools", label: "DevOps & Tools" },
    ],

    skills: [
        // Frontend
        { name: "React.js", category: "frontend", level: 95, icon: "Atom", popular: true },
        { name: "TypeScript", category: "frontend", level: 90, icon: "Code2", popular: true },
        { name: "Next.js", category: "frontend", level: 88, icon: "Zap", popular: true },
        { name: "JavaScript (ES6+)", category: "frontend", level: 98, icon: "FileCode" },
        { name: "HTML5 / CSS3 / SCSS", category: "frontend", level: 95, icon: "Palette" },
        { name: "Tailwind CSS", category: "frontend", level: 92, icon: "Layout" },
        { name: "Redux Toolkit / Zustand", category: "frontend", level: 85, icon: "Database" },

        // Backend
        { name: "Node.js & Express", category: "backend", level: 92, icon: "Server", popular: true },
        { name: "Python / FastApi", category: "backend", level: 85, icon: "Terminal", popular: true },
        { name: "PostgreSQL / Prisma", category: "backend", level: 88, icon: "Database", popular: true },
        { name: "MongoDB", category: "backend", level: 82, icon: "Layers" },
        { name: "RESTful & GraphQL APIs", category: "backend", level: 90, icon: "Network" },

        // Tools & Cloud
        { name: "Docker & Containers", category: "tools", level: 82, icon: "Box", popular: true },
        { name: "Git & GitHub Actions", category: "tools", level: 92, icon: "GitBranch" },
        { name: "AWS (S3, Lambda, CloudFront)", category: "tools", level: 78, icon: "Cloud" },
        { name: "Vercel / Netlify", category: "tools", level: 95, icon: "Globe" },
        { name: "Jest / Vitest", category: "tools", level: 80, icon: "CheckCircle2" },
    ],

    projects: [
        {
            id: "rose-cloud-dashboard",
            title: "BloomCloud - Analytics Dashboard",
            category: "fullstack",
            description: "A high-performance SaaS monitoring dashboard with real-time metrics, interactive charts, customizable widgets, and instant alert routing.",
            longDescription: "BloomCloud provides engineering teams with immediate visual clarity over microservice health, telemetry data, and cost optimization. Built with a responsive glassmorphic pastel UI, real-time WebSocket subscriptions, and ultra-fast data table rendering.",
            tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Recharts", "WebSockets"],
            githubUrl: "https://github.com",
            liveUrl: "https://example.com",
            stars: 142,
            featured: true,
            demoType: "dashboard",
            accentColor: "#FB6F92",
            highlights: [
                "Sub-100ms real-time metric updates via WebSockets",
                "Custom drag-and-drop widget layout manager",
                "Dark & Soft Rose Theme engine with exportable PDF reports"
            ]
        },
        {
            id: "aura-ai-copilot",
            title: "AuraAI - Intelligent Code Assistant",
            category: "ai",
            description: "AI-driven web workspace that generates, refactors, and explains complex codebase architectures in real-time.",
            longDescription: "AuraAI integrates LLM capabilities into a developer-friendly interactive environment featuring instant syntax highlighting, AST parsing, automated test generation, and context-aware coding suggestions.",
            tags: ["React", "Python", "FastAPI", "OpenAI API", "Monaco Editor"],
            githubUrl: "https://github.com",
            liveUrl: "https://example.com",
            stars: 289,
            featured: true,
            demoType: "editor",
            accentColor: "#E8998D",
            highlights: [
                "Streaming response generation with Monaco code editor integration",
                "Semantic vector search over codebase documentation",
                "Export generated modules directly to GitHub repositories"
            ]
        },
        {
            id: "luxe-ecommerce-store",
            title: "Velvet & Rose - E-Commerce Platform",
            category: "frontend",
            description: "Modern, high-conversion headless e-commerce store with smooth micro-interactions, floating cart, and instant search.",
            longDescription: "Designed with luxurious pastel pink aesthetics, liquid-smooth page transitions, micro-animations, fast product filtering, and seamless Stripe checkout integration.",
            tags: ["Next.js", "React", "Stripe", "Framer Motion", "Tailwind CSS"],
            githubUrl: "https://github.com",
            liveUrl: "https://example.com",
            stars: 98,
            featured: true,
            demoType: "store",
            accentColor: "#FFB3C6",
            highlights: [
                "99/100 Lighthouse performance and SEO scores",
                "Instant optimistic shopping bag updates with zero layout shift",
                "Interactive 360-degree product preview viewer"
            ]
        },
        {
            id: "dev-flow-kanban",
            title: "PulseFlow - Agile Project Board",
            category: "fullstack",
            description: "Collaborative developer task board with real-time sync, customizable workflows, automated GitHub PR linkage, and analytics.",
            longDescription: "PulseFlow simplifies sprint tracking for remote teams with drag-and-drop kanban boards, markdown task descriptions, activity audit logs, and automated notifications.",
            tags: ["React", "Node.js", "MongoDB", "Socket.io", "CSS Modules"],
            githubUrl: "https://github.com",
            liveUrl: "https://example.com",
            stars: 76,
            featured: false,
            demoType: "kanban",
            accentColor: "#F72585",
            highlights: [
                "Multi-user real-time cursor & card movement updates",
                "Automated GitHub Webhook integration for PR stage movement",
                "Granular tag filtering and team capacity heatmaps"
            ]
        }
    ],

    experiences: [
        {
            role: "AI Innovators Internship Program",
            company: "Microsoft",
            period: "June 2026 – September 2026",
            location: "Remote / Local",
            description: "Architecting and developing a Retrieval-Augmented Generation (RAG) application leveraging Microsoft Foundry Local to enable secure, high-performance communication with local AI models.",
            technologies: ["RAG", "Microsoft Foundry Local", "Local LLMs", "Python", "AI Architecture"],
            achievements: [
                "Architected secure, high-performance communication protocols with local AI models",
                "Implemented Retrieval-Augmented Generation (RAG) workflows using Microsoft Foundry Local"
            ]
        },
        {
            role: "Student Assistant",
            company: "ADALab (Academic Data Analytics Lab)",
            period: "September 2025 – June 2026",
            location: "Işık University, Istanbul, Turkey",
            description: "Co-authored scientific research presented at IEEE SIU 2026 (Signal Processing and Communications Applications Congress) focusing on data visualization.",
            technologies: ["Data Visualization", "PowerBI", "Signal Processing", "Data Analytics", "Scientific Research"],
            achievements: [
                "Co-authored 1 research paper presented at SIU 2026",
                "Engineered data visualization techniques for academic signal processing research"
            ]
        },
        {
            role: "Full-Stack Intern & UI/UX Designer",
            company: "Eryaz Software",
            period: "August 2025 – September 2025",
            location: "Istanbul / Turkey",
            description: "Developed backend services using MVC architecture and built dynamic frontend interfaces with React while wireframing interactive screens in Figma.",
            technologies: ["React", "MVC Architecture", "Figma", "UI/UX", "Full-Stack"],
            achievements: [
                "Designed and wireframed 10+ interactive user interface screens and workflows using Figma",
                "Developed MVC backend services and dynamic React frontend interfaces"
            ]
        },
        {
            role: "Computer Vision & Software Intern",
            company: "BeeVision",
            period: "August 2024 – September 2024",
            location: "Ankara, Turkey",
            description: "Built OpenCV-based vision algorithms for real-time conveyor inspection and collaborated with multi-disciplinary engineering teams.",
            technologies: ["OpenCV", "Python", "Computer Vision", "Industrial Automation"],
            achievements: [
                "Built OpenCV-based vision algorithms for real-time conveyor inspection to enhance industrial sorting accuracy",
                "Collaborated in a cross-disciplinary engineering environment, integrating software solutions with mechanical and electrical systems"
            ]
        }
    ],

    education: [
        {
            degree: "M.S. in Artificial Intelligence",
            institution: "La Salle Campus Barcelona — Universitat Ramon Llull",
            period: "October 2026 — June 2027",
            details: "Specializing in Machine Learning, Big Data Management Computer Vision, Natural Language Processing,Deep Learning, and Autonomous Systems."
        },
        {
            degree: "B.S. in Computer Engineering",
            institution: "Işık University",
            period: "September 2022 — July 2026",
            details: "Focus on Software Engineering, Data Structures, Agentic AI Development, AWS Cloud Solutions Digital Transformation ."
        }
    ],

    terminalCommands: {
        help: "Available commands: bio, skills, projects, experience, contact, clear, theme, sudo hire",
        bio: "Nehir Karameşe — AI Master's Student @ La Salle BCN & Software Engineer passionate about AI models, CV, and Web UX.",
        skills: "React, Java, Python, OpenCV, RAG, AWS, RestAPI,SQL, Microsoft Foundry Local,, Docker, Figma.",
        projects: "Top Experience: Microsoft RAG App, SIU 2026 Research Paper, Eryaz UI/UX & MVC, BeeVision OpenCV.",
        experience: "Internships & research roles at Microsoft (AI Innovators), ADALab, Eryaz Software, and BeeVision.",
        contact: "Email: nehirkaramese@gmail.com | GitHub: github.com/nehlr | LinkedIn: https://www.linkedin.com/in/nehir-karamese/",
        "sudo hire": "Reach out via LinkedIn or email!"
    }
};
