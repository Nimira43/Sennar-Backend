import { Subject } from "@/types"

export const DEPARTMENTS = [
  'Artificial Intelligence & Machine Learning',
  'Bioinformatics',
  'Cloud & Distributed Systems',
  'Computer Networks',
  'Computer Science',
  'Computational Neuroscience',
  'Cybersecurity',
  'Data Science & AI',
  'Digital Forensics',
  'Digital Media & Interactive Design',
  'Games Technology',
  'Health Informatics',
  'High-Performance Computing',
  'Human-Computer Interaction',
  'Information Systems',
  'Information Technology',
  'Internet of Things Engineering',
  'Machine Learning Systems',
  'Natural Language Processing',
  'Quantum Computing',
  'Robotics & Autonomous Systems',
  'Software Engineering',
  'UX/UI Design',
  'Accounting & Finance',
  'Aerospace Engineering',
  'Biomedical Sciences',
  'Biosciences',
  'Business & Management',
  'Chemical Engineering',
  'Civil Engineering',
  'Dentistry',
  'Drama & Theatre Arts',
  'Economics',
  'Education',
  'Electrical Engineering',
  'English Literature',
  'Environmental Science',
  'History',
  'Human Resources & Organisational Behaviour',
  'Law',
  'Marketing',
  'Materials Science & Engineering',
  'Mathematics',
  'Mechanical Engineering',
  'Medical Sciences',
  'Modern Languages & Linguistics',
  'Neuroscience',
  'Nursing',
  'Operations & Supply Chain',
  'Optometry',
  'Pharmacy',
  'Philosophy',
  'Physics & Astronomy',
  'Politics & International Relations',
  'Psychology',
  'Public Health',
  'Social Policy',
  'Sociology',
  'Sports Science',
  'Theology & Religion',
  'Urban Planning',
] as const

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((dept) => ({
  value: dept,
  label: dept
}))

export const MOCK_SUBJECTS: Subject[] = [
  // ============================
  // IT & TECHNOLOGY DEPARTMENTS
  // ============================

  // Artificial Intelligence & Machine Learning (AIML)
  {
    id: 1,
    code: 'AIML001',
    name: 'Foundations of Artificial Intelligence',
    department: 'Artificial Intelligence & Machine Learning',
    description: 'An introduction to core AI concepts including search, reasoning, and intelligent agents.',
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    code: 'AIML002',
    name: 'Machine Learning Algorithms',
    department: 'Artificial Intelligence & Machine Learning',
    description: 'A study of supervised and unsupervised learning techniques used in modern AI systems.',
    createdAt: new Date().toISOString()
  },
  {
    id: 3,
    code: 'AIML003',
    name: 'Deep Learning & Neural Networks',
    department: 'Artificial Intelligence & Machine Learning',
    description: 'Explores neural architectures, backpropagation, and deep learning applications.',
    createdAt: new Date().toISOString()
  },

  // Bioinformatics (BIOI)
  {
    id: 4,
    code: 'BIOI001',
    name: 'Introduction to Bioinformatics',
    department: 'Bioinformatics',
    description: 'Covers computational methods for analysing biological data and genomic sequences.',
    createdAt: new Date().toISOString()
  },
  {
    id: 5,
    code: 'BIOI002',
    name: 'Computational Genomics',
    department: 'Bioinformatics',
    description: 'Focuses on genome analysis, annotation, and comparative genomics techniques.',
    createdAt: new Date().toISOString()
  },
  {
    id: 6,
    code: 'BIOI003',
    name: 'Biological Data Mining',
    department: 'Bioinformatics',
    description: 'Applies data mining and machine learning to biological datasets.',
    createdAt: new Date().toISOString()
  },

  // Cloud & Distributed Systems (CLDS)
  {
    id: 7,
    code: 'CLDS001',
    name: 'Cloud Computing Fundamentals',
    department: 'Cloud & Distributed Systems',
    description: 'Introduces cloud architectures, virtualisation, and distributed computing models.',
    createdAt: new Date().toISOString()
  },
  {
    id: 8,
    code: 'CLDS002',
    name: 'Distributed Systems Engineering',
    department: 'Cloud & Distributed Systems',
    description: 'Examines distributed algorithms, consensus, and system reliability.',
    createdAt: new Date().toISOString()
  },
  {
    id: 9,
    code: 'CLDS003',
    name: 'Scalable Cloud Applications',
    department: 'Cloud & Distributed Systems',
    description: 'Focuses on designing and deploying scalable cloud-native applications.',
    createdAt: new Date().toISOString()
  },

  // Computer Networks (COMP)
  {
    id: 10,
    code: 'COMP001',
    name: 'Computer Networking Principles',
    department: 'Computer Networks',
    description: 'Covers network models, protocols, and communication fundamentals.',
    createdAt: new Date().toISOString()
  },
  {
    id: 11,
    code: 'COMP002',
    name: 'Network Security & Management',
    department: 'Computer Networks',
    description: 'Explores secure network design, monitoring, and threat mitigation.',
    createdAt: new Date().toISOString()
  },
  {
    id: 12,
    code: 'COMP003',
    name: 'Advanced Network Architectures',
    department: 'Computer Networks',
    description: 'Studies modern network technologies including SDN and high-performance routing.',
    createdAt: new Date().toISOString()
  },

  // Computer Science (COSC)
  {
    id: 13,
    code: 'COSC001',
    name: 'Programming & Software Design',
    department: 'Computer Science',
    description: 'Introduces programming principles, software design patterns, and problem-solving.',
    createdAt: new Date().toISOString()
  },
  {
    id: 14,
    code: 'COSC002',
    name: 'Algorithms & Data Structures',
    department: 'Computer Science',
    description: 'Covers algorithmic thinking, complexity, and core data structures.',
    createdAt: new Date().toISOString()
  },
  {
    id: 15,
    code: 'COSC003',
    name: 'Operating Systems & Architecture',
    department: 'Computer Science',
    description: 'Explores OS design, memory management, and hardware-software interaction.',
    createdAt: new Date().toISOString()
  },

  // Computational Neuroscience (CPNE)
  {
    id: 16,
    code: 'CPNE001',
    name: 'Neural Computation',
    department: 'Computational Neuroscience',
    description: 'Examines computational models of neural systems and information processing.',
    createdAt: new Date().toISOString()
  },
  {
    id: 17,
    code: 'CPNE002',
    name: 'Brain Simulation Techniques',
    department: 'Computational Neuroscience',
    description: 'Covers simulation frameworks for modelling neural circuits.',
    createdAt: new Date().toISOString()
  },
  {
    id: 18,
    code: 'CPNE003',
    name: 'Cognitive Modelling',
    department: 'Computational Neuroscience',
    description: 'Studies computational models of cognition and behaviour.',
    createdAt: new Date().toISOString()
  },

  // Cybersecurity (CYBR)
  {
    id: 19,
    code: 'CYBR001',
    name: 'Cybersecurity Fundamentals',
    department: 'Cybersecurity',
    description: 'Introduces security principles, threat landscapes, and defensive strategies.',
    createdAt: new Date().toISOString()
  },
  {
    id: 20,
    code: 'CYBR002',
    name: 'Ethical Hacking & Penetration Testing',
    department: 'Cybersecurity',
    description: 'Teaches penetration testing methodologies and ethical hacking practices.',
    createdAt: new Date().toISOString()
  },
  {
    id: 21,
    code: 'CYBR003',
    name: 'Digital Threat Intelligence',
    department: 'Cybersecurity',
    description: 'Focuses on threat analysis, incident response, and cyber forensics.',
    createdAt: new Date().toISOString()
  },

  // Data Science & AI (DSAA)
  {
    id: 22,
    code: 'DSAA001',
    name: 'Data Analysis & Visualisation',
    department: 'Data Science & AI',
    description: 'Covers statistical analysis, data cleaning, and visualisation techniques.',
    createdAt: new Date().toISOString()
  },
  {
    id: 23,
    code: 'DSAA002',
    name: 'Applied Machine Learning',
    department: 'Data Science & AI',
    description: 'Applies machine learning techniques to real-world datasets.',
    createdAt: new Date().toISOString()
  },
  {
    id: 24,
    code: 'DSAA003',
    name: 'Big Data Engineering',
    department: 'Data Science & AI',
    description: 'Explores big data platforms, pipelines, and distributed processing.',
    createdAt: new Date().toISOString()
  },

  // Digital Forensics (DIGF)
  {
    id: 25,
    code: 'DIGF001',
    name: 'Introduction to Digital Forensics',
    department: 'Digital Forensics',
    description: 'Covers forensic investigation techniques for digital devices.',
    createdAt: new Date().toISOString()
  },
  {
    id: 26,
    code: 'DIGF002',
    name: 'Forensic Data Recovery',
    department: 'Digital Forensics',
    description: 'Focuses on recovering and analysing digital evidence.',
    createdAt: new Date().toISOString()
  },
  {
    id: 27,
    code: 'DIGF003',
    name: 'Cybercrime Investigation',
    department: 'Digital Forensics',
    description: 'Examines cybercrime patterns and investigative methodologies.',
    createdAt: new Date().toISOString()
  },

  // Digital Media & Interactive Design (DMID)
  {
    id: 28,
    code: 'DMID001',
    name: 'Digital Media Production',
    department: 'Digital Media & Interactive Design',
    description: 'Introduces digital content creation and interactive design principles.',
    createdAt: new Date().toISOString()
  },
  {
    id: 29,
    code: 'DMID002',
    name: 'Interactive Systems Design',
    department: 'Digital Media & Interactive Design',
    description: 'Covers user interaction models and interface design.',
    createdAt: new Date().toISOString()
  },
  {
    id: 30,
    code: 'DMID003',
    name: 'Creative Coding for Media',
    department: 'Digital Media & Interactive Design',
    description: 'Explores programming techniques for interactive digital experiences.',
    createdAt: new Date().toISOString()
  },

  // Games Technology (GAME)
  {
    id: 31,
    code: 'GAME001',
    name: 'Game Development Fundamentals',
    department: 'Games Technology',
    description: 'Covers core game development concepts and engines.',
    createdAt: new Date().toISOString()
  },
  {
    id: 32,
    code: 'GAME002',
    name: '3D Graphics & Simulation',
    department: 'Games Technology',
    description: 'Explores 3D rendering, physics simulation, and animation.',
    createdAt: new Date().toISOString()
  },
  {
    id: 33,
    code: 'GAME003',
    name: 'Game AI & Behaviour',
    department: 'Games Technology',
    description: 'Studies AI techniques used in modern game design.',
    createdAt: new Date().toISOString()
  },

  // Health Informatics (HLTH)
  {
    id: 34,
    code: 'HLTH001',
    name: 'Health Information Systems',
    department: 'Health Informatics',
    description: 'Covers digital systems used in healthcare environments.',
    createdAt: new Date().toISOString()
  },
  {
    id: 35,
    code: 'HLTH002',
    name: 'Clinical Data Management',
    department: 'Health Informatics',
    description: 'Explores the management and analysis of clinical datasets.',
    createdAt: new Date().toISOString()
  },
  {
    id: 36,
    code: 'HLTH003',
    name: 'Digital Health Technologies',
    department: 'Health Informatics',
    description: 'Examines emerging technologies in digital healthcare.',
    createdAt: new Date().toISOString()
  },

  // High-Performance Computing (HPCO)
  {
    id: 37,
    code: 'HPCO001',
    name: 'High-Performance Computing Fundamentals',
    department: 'High-Performance Computing',
    description: 'Introduces HPC architectures and parallel programming.',
    createdAt: new Date().toISOString()
  },
  {
    id: 38,
    code: 'HPCO002',
    name: 'Parallel Algorithms',
    department: 'High-Performance Computing',
    description: 'Covers algorithmic techniques for parallel computation.',
    createdAt: new Date().toISOString()
  },
  {
    id: 39,
    code: 'HPCO003',
    name: 'Scientific Computing',
    department: 'High-Performance Computing',
    description: 'Applies HPC techniques to scientific and engineering problems.',
    createdAt: new Date().toISOString()
  },

  // Human–Computer Interaction (HCI)
  {
    id: 40,
    code: 'HCI001',
    name: 'Human-Computer Interaction Principles',
    department: 'Human–Computer Interaction',
    description: 'Explores user-centred design and interaction models.',
    createdAt: new Date().toISOString()
  },
  {
    id: 41,
    code: 'HCI002',
    name: 'Usability Engineering',
    department: 'Human–Computer Interaction',
    description: 'Covers usability testing, evaluation, and design improvement.',
    createdAt: new Date().toISOString()
  },
  {
    id: 42,
    code: 'HCI003',
    name: 'Designing Interactive Experiences',
    department: 'Human–Computer Interaction',
    description: 'Focuses on designing engaging and accessible digital experiences.',
    createdAt: new Date().toISOString()
  },

  // Information Systems (INFS)
  {
    id: 43,
    code: 'INFS001',
    name: 'Information Systems Foundations',
    department: 'Information Systems',
    description: 'Introduces organisational information systems and digital transformation.',
    createdAt: new Date().toISOString()
  },
  {
    id: 44,
    code: 'INFS002',
    name: 'Enterprise Systems Architecture',
    department: 'Information Systems',
    description: 'Covers enterprise-level system design and integration.',
    createdAt: new Date().toISOString()
  },
  {
    id: 45,
    code: 'INFS003',
    name: 'Business Information Management',
    department: 'Information Systems',
    description: 'Explores information management strategies in organisations.',
    createdAt: new Date().toISOString()
  },

  // Information Technology (ITEC)
  {
    id: 46,
    code: 'ITEC001',
    name: 'IT Infrastructure & Support',
    department: 'Information Technology',
    description: 'Covers IT infrastructure, support systems, and service management.',
    createdAt: new Date().toISOString()
  },
  {
    id: 47,
    code: 'ITEC002',
    name: 'Systems Administration',
    department: 'Information Technology',
    description: 'Explores system configuration, maintenance, and automation.',
    createdAt: new Date().toISOString()
  },
  {
    id: 48,
    code: 'ITEC003',
    name: 'IT Project Management',
    department: 'Information Technology',
    description: 'Covers project planning, execution, and risk management in IT contexts.',
    createdAt: new Date().toISOString()
  },

  // Internet of Things Engineering (IOTE)
  {
    id: 49,
    code: 'IOTE001',
    name: 'IoT Systems & Architecture',
    department: 'Internet of Things Engineering',
    description: 'Introduces IoT devices, communication models, and architectures.',
    createdAt: new Date().toISOString()
  },
  {
    id: 50,
    code: 'IOTE002',
    name: 'Embedded Systems Programming',
    department: 'Internet of Things Engineering',
    description: 'Covers embedded programming for IoT applications.',
    createdAt: new Date().toISOString()
  },
  {
    id: 51,
    code: 'IOTE003',
    name: 'Smart Devices & Sensors',
    department: 'Internet of Things Engineering',
    description: 'Explores sensor networks and smart device integration.',
    createdAt: new Date().toISOString()
  },

  // Machine Learning Systems (MLSY)
  {
    id: 52,
    code: 'MLSY001',
    name: 'Machine Learning System Design',
    department: 'Machine Learning Systems',
    description: 'Covers the design and deployment of ML systems at scale.',
    createdAt: new Date().toISOString()
  },
  {
    id: 53,
    code: 'MLSY002',
    name: 'Model Deployment & MLOps',
    department: 'Machine Learning Systems',
    description: 'Explores MLOps pipelines and production ML workflows.',
    createdAt: new Date().toISOString()
  },
  {
    id: 54,
    code: 'MLSY003',
    name: 'Automated Machine Learning',
    department: 'Machine Learning Systems',
    description: 'Examines AutoML techniques and automated model optimisation.',
    createdAt: new Date().toISOString()
  },

  // Natural Language Processing (NLP)
  {
    id: 55,
    code: 'NLP001',
    name: 'Natural Language Processing Fundamentals',
    department: 'Natural Language Processing',
    description: 'Introduces NLP concepts including tokenisation and language modelling.',
    createdAt: new Date().toISOString()
  },
  {
    id: 56,
    code: 'NLP002',
    name: 'Text Mining & Analysis',
    department: 'Natural Language Processing',
    description: 'Covers text analytics, sentiment analysis, and information extraction.',
    createdAt: new Date().toISOString()
  },
  {
    id: 57,
    code: 'NLP003',
    name: 'Neural NLP Models',
    department: 'Natural Language Processing',
    description: 'Explores transformer models and neural NLP architectures.',
    createdAt: new Date().toISOString()
  },

  // Quantum Computing (QUAN)
  {
    id: 58,
    code: 'QUAN001',
    name: 'Introduction to Quantum Computing',
    department: 'Quantum Computing',
    description: 'Covers quantum bits, gates, and fundamental quantum algorithms.',
    createdAt: new Date().toISOString()
  },
  {
    id: 59,
    code: 'QUAN002',
    name: 'Quantum Algorithms',
    department: 'Quantum Computing',
    description: 'Explores quantum search, optimisation, and simulation algorithms.',
    createdAt: new Date().toISOString()
  },
  {
    id: 60,
    code: 'QUAN003',
    name: 'Quantum Information Theory',
    department: 'Quantum Computing',
    description: 'Examines quantum information, entanglement, and communication.',
    createdAt: new Date().toISOString()
  },

  // Robotics & Autonomous Systems (ROBO)
  {
    id: 61,
    code: 'ROBO001',
    name: 'Robotics Fundamentals',
    department: 'Robotics & Autonomous Systems',
    description: 'Introduces robot kinematics, control, and sensing.',
    createdAt: new Date().toISOString()
  },
  {
    id: 62,
    code: 'ROBO002',
    name: 'Autonomous Navigation',
    department: 'Robotics & Autonomous Systems',
    description: 'Covers localisation, mapping, and autonomous navigation techniques.',
    createdAt: new Date().toISOString()
  },
  {
    id: 63,
    code: 'ROBO003',
    name: 'Intelligent Robotics',
    department: 'Robotics & Autonomous Systems',
    description: 'Explores AI-driven robotics and autonomous decision-making.',
    createdAt: new Date().toISOString()
  },

  // Software Engineering (SOFT)
  {
    id: 64,
    code: 'SOFT001',
    name: 'Software Engineering Principles',
    department: 'Software Engineering',
    description: 'Covers software development methodologies and engineering practices.',
    createdAt: new Date().toISOString()
  },
  {
    id: 65,
    code: 'SOFT002',
    name: 'Software Architecture & Design',
    department: 'Software Engineering',
    description: 'Explores architectural patterns and system design.',
    createdAt: new Date().toISOString()
  },
  {
    id: 66,
    code: 'SOFT003',
    name: 'Quality Assurance & Testing',
    department: 'Software Engineering',
    description: 'Covers testing strategies, automation, and quality assurance.',
    createdAt: new Date().toISOString()
  },

  // UX/UI Design (UXUI)
  {
    id: 67,
    code: 'UXUI001',
    name: 'User Experience Design',
    department: 'UX/UI Design',
    description: 'Introduces UX principles, research methods, and design processes.',
    createdAt: new Date().toISOString()
  },
  {
    id: 68,
    code: 'UXUI002',
    name: 'User Interface Design',
    department: 'UX/UI Design',
    description: 'Covers interface design, layout, and visual communication.',
    createdAt: new Date().toISOString()
  },
  {
    id: 69,
    code: 'UXUI003',
    name: 'Prototyping & Interaction Design',
    department: 'UX/UI Design',
    description: 'Explores prototyping tools and interactive design workflows.',
    createdAt: new Date().toISOString()
  },

  // ============================
  // NON-IT DEPARTMENTS
  // ============================

  // Accounting & Finance (ACFI)
  {
    id: 70,
    code: 'ACFI001',
    name: 'Financial Accounting',
    department: 'Accounting & Finance',
    description: 'Introduces financial reporting and accounting principles.',
    createdAt: new Date().toISOString()
  },
  {
    id: 71,
    code: 'ACFI002',
    name: 'Corporate Finance',
    department: 'Accounting & Finance',
    description: 'Covers financial management, investment, and capital structure.',
    createdAt: new Date().toISOString()
  },
  {
    id: 72,
    code: 'ACFI003',
    name: 'Management Accounting',
    department: 'Accounting & Finance',
    description: 'Explores budgeting, costing, and performance measurement.',
    createdAt: new Date().toISOString()
  },

  // Aerospace Engineering (AERO)
  {
    id: 73,
    code: 'AERO001',
    name: 'Aerospace Engineering Fundamentals',
    department: 'Aerospace Engineering',
    description: 'Introduces aerodynamics, propulsion, and aerospace systems.',
    createdAt: new Date().toISOString()
  },
  {
    id: 74,
    code: 'AERO002',
    name: 'Flight Mechanics',
    department: 'Aerospace Engineering',
    description: 'Covers aircraft stability, control, and flight performance.',
    createdAt: new Date().toISOString()
  },
  {
    id: 75,
    code: 'AERO003',
    name: 'Aerospace Materials',
    department: 'Aerospace Engineering',
    description: 'Examines materials used in aerospace structures and design.',
    createdAt: new Date().toISOString()
  },

  // Biomedical Sciences (BIOM)
  {
    id: 76,
    code: 'BIOM001',
    name: 'Cell Biology & Physiology',
    department: 'Biomedical Sciences',
    description: 'Covers cellular structure, function, and physiological processes.',
    createdAt: new Date().toISOString()
  },
  {
    id: 77,
    code: 'BIOM002',
    name: 'Medical Microbiology',
    department: 'Biomedical Sciences',
    description: 'Explores microorganisms and their role in human disease.',
    createdAt: new Date().toISOString()
  },
  {
    id: 78,
    code: 'BIOM003',
    name: 'Human Anatomy',
    department: 'Biomedical Sciences',
    description: 'Studies the structure and organisation of the human body.',
    createdAt: new Date().toISOString()
  },

  // Biosciences (BIOS)
  {
    id: 79,
    code: 'BIOS001',
    name: 'Introduction to Biosciences',
    department: 'Biosciences',
    description: 'Covers fundamental biological concepts and scientific methods.',
    createdAt: new Date().toISOString()
  },
  {
    id: 80,
    code: 'BIOS002',
    name: 'Ecology & Evolution',
    department: 'Biosciences',
    description: 'Explores ecological systems and evolutionary processes.',
    createdAt: new Date().toISOString()
  },
  {
    id: 81,
    code: 'BIOS003',
    name: 'Molecular Biology',
    department: 'Biosciences',
    description: 'Examines molecular mechanisms underlying biological function.',
    createdAt: new Date().toISOString()
  },

    // Business & Management (BUSM)
  {
    id: 82,
    code: 'BUSM001',
    name: 'Principles of Management',
    department: 'Business & Management',
    description: 'Introduces management theory, organisational structures, and leadership practices.',
    createdAt: new Date().toISOString()
  },
  {
    id: 83,
    code: 'BUSM002',
    name: 'Organisational Behaviour',
    department: 'Business & Management',
    description: 'Explores human behaviour in organisations and its impact on performance.',
    createdAt: new Date().toISOString()
  },
  {
    id: 84,
    code: 'BUSM003',
    name: 'Strategic Management',
    department: 'Business & Management',
    description: 'Covers strategic analysis, competitive advantage, and long-term planning.',
    createdAt: new Date().toISOString()
  },

  // Chemical Engineering (CHEN)
  {
    id: 85,
    code: 'CHEN001',
    name: 'Chemical Engineering Principles',
    department: 'Chemical Engineering',
    description: 'Introduces mass balances, energy balances, and core chemical engineering concepts.',
    createdAt: new Date().toISOString()
  },
  {
    id: 86,
    code: 'CHEN002',
    name: 'Process Engineering & Design',
    department: 'Chemical Engineering',
    description: 'Covers process design, optimisation, and industrial chemical systems.',
    createdAt: new Date().toISOString()
  },
  {
    id: 87,
    code: 'CHEN003',
    name: 'Reaction Engineering',
    department: 'Chemical Engineering',
    description: 'Explores chemical reaction kinetics and reactor design.',
    createdAt: new Date().toISOString()
  },

  // Civil Engineering (CIVL)
  {
    id: 88,
    code: 'CIVL001',
    name: 'Structural Analysis',
    department: 'Civil Engineering',
    description: 'Covers structural behaviour, loading, and analysis techniques.',
    createdAt: new Date().toISOString()
  },
  {
    id: 89,
    code: 'CIVL002',
    name: 'Geotechnical Engineering',
    department: 'Civil Engineering',
    description: 'Explores soil mechanics and foundation engineering.',
    createdAt: new Date().toISOString()
  },
  {
    id: 90,
    code: 'CIVL003',
    name: 'Transportation Engineering',
    department: 'Civil Engineering',
    description: 'Examines transport systems, planning, and infrastructure design.',
    createdAt: new Date().toISOString()
  },

  // Dentistry (DENT)
  {
    id: 91,
    code: 'DENT001',
    name: 'Dental Anatomy & Physiology',
    department: 'Dentistry',
    description: 'Covers oral anatomy, tooth structure, and craniofacial development.',
    createdAt: new Date().toISOString()
  },
  {
    id: 92,
    code: 'DENT002',
    name: 'Clinical Dentistry Techniques',
    department: 'Dentistry',
    description: 'Introduces clinical procedures and patient care in dentistry.',
    createdAt: new Date().toISOString()
  },
  {
    id: 93,
    code: 'DENT003',
    name: 'Oral Pathology',
    department: 'Dentistry',
    description: 'Explores diseases of the oral cavity and diagnostic methods.',
    createdAt: new Date().toISOString()
  },

  // Drama & Theatre Arts (DRAM)
  {
    id: 94,
    code: 'DRAM001',
    name: 'Acting & Performance Techniques',
    department: 'Drama & Theatre Arts',
    description: 'Covers acting methods, performance skills, and stage presence.',
    createdAt: new Date().toISOString()
  },
  {
    id: 95,
    code: 'DRAM002',
    name: 'Theatre Production',
    department: 'Drama & Theatre Arts',
    description: 'Explores directing, stagecraft, and production management.',
    createdAt: new Date().toISOString()
  },
  {
    id: 96,
    code: 'DRAM003',
    name: 'History of Theatre',
    department: 'Drama & Theatre Arts',
    description: 'Examines the evolution of theatre from classical to contemporary forms.',
    createdAt: new Date().toISOString()
  },

  // Economics (ECON)
  {
    id: 97,
    code: 'ECON001',
    name: 'Microeconomics',
    department: 'Economics',
    description: 'Introduces consumer behaviour, market structures, and economic decision-making.',
    createdAt: new Date().toISOString()
  },
  {
    id: 98,
    code: 'ECON002',
    name: 'Macroeconomics',
    department: 'Economics',
    description: 'Covers national income, inflation, unemployment, and fiscal policy.',
    createdAt: new Date().toISOString()
  },
  {
    id: 99,
    code: 'ECON003',
    name: 'Econometrics',
    department: 'Economics',
    description: 'Explores statistical modelling and data analysis in economics.',
    createdAt: new Date().toISOString()
  },

  // Education (EDUC)
  {
    id: 100,
    code: 'EDUC001',
    name: 'Foundations of Education',
    department: 'Education',
    description: 'Covers educational theory, learning models, and teaching principles.',
    createdAt: new Date().toISOString()
  },
  {
    id: 101,
    code: 'EDUC002',
    name: 'Curriculum Design',
    department: 'Education',
    description: 'Explores curriculum planning, assessment, and instructional design.',
    createdAt: new Date().toISOString()    
  },
  {
    id: 102,
    code: 'EDUC003',
    name: 'Inclusive Education',
    department: 'Education',
    description: 'Examines strategies for supporting diverse learners in educational settings.',
    createdAt: new Date().toISOString()
  },

  // Electrical Engineering (ELEC)
  {
    id: 103,
    code: 'ELEC001',
    name: 'Circuit Analysis',
    department: 'Electrical Engineering',
    description: 'Introduces electrical circuits, components, and analysis techniques.',
    createdAt: new Date().toISOString()
  },
  {
    id: 104,
    code: 'ELEC002',
    name: 'Power Systems Engineering',
    department: 'Electrical Engineering',
    description: 'Covers power generation, transmission, and distribution.',
    createdAt: new Date().toISOString()
  },
  {
    id: 105,
    code: 'ELEC003',
    name: 'Electronics & Instrumentation',
    department: 'Electrical Engineering',
    description: 'Explores electronic devices, sensors, and instrumentation systems.',
    createdAt: new Date().toISOString()
  },

  // English Literature (ENGL)
  {
    id: 106,
    code: 'ENGL001',
    name: 'Introduction to Literary Studies',
    department: 'English Literature',
    description: 'Covers literary analysis, critical theory, and textual interpretation.',
    createdAt: new Date().toISOString()
  },
  {
    id: 107,
    code: 'ENGL002',
    name: 'Shakespeare & Renaissance Literature',
    department: 'English Literature',
    description: 'Explores major works of Shakespeare and Renaissance writers.',
    createdAt: new Date().toISOString()
  },
  {
    id: 108,
    code: 'ENGL003',
    name: 'Modern & Contemporary Literature',
    department: 'English Literature',
    description: 'Examines literature from the 20th century to the present.',
    createdAt: new Date().toISOString()
  },

  // Environmental Science (ENVS)
  {
    id: 109,
    code: 'ENVS001',
    name: 'Environmental Systems',
    department: 'Environmental Science',
    description: 'Introduces ecological systems, biogeochemical cycles, and environmental processes.',
    createdAt: new Date().toISOString()
  },
  {
    id: 110,
    code: 'ENVS002',
    name: 'Climate Change Science',
    department: 'Environmental Science',
    description: 'Explores climate systems, global warming, and mitigation strategies.',
    createdAt: new Date().toISOString()
  },
  {
    id: 111,
    code: 'ENVS003',
    name: 'Environmental Impact Assessment',
    department: 'Environmental Science',
    description: 'Covers methods for assessing environmental impacts of development.',
    createdAt: new Date().toISOString()
  },

  // History (HIST)
  {
    id: 112,
    code: 'HIST001',
    name: 'World History',
    department: 'History',
    description: 'Examines major global historical developments and civilisations.',
    createdAt: new Date().toISOString()
  },
  {
    id: 113,
    code: 'HIST002',
    name: 'British History',
    department: 'History',
    description: 'Covers key events and themes in British history.',
    createdAt: new Date().toISOString()
  },
  {
    id: 114,
    code: 'HIST003',
    name: 'Modern European History',
    department: 'History',
    description: 'Explores political, social, and cultural developments in modern Europe.',
    createdAt: new Date().toISOString()
  },

  // Human Resources & Organisational Behaviour (HROB)
  {
    id: 115,
    code: 'HROB001',
    name: 'Human Resource Management',
    department: 'Human Resources & Organisational Behaviour',
    description: 'Covers recruitment, training, and employee relations.',
    createdAt: new Date().toISOString()
  },
  {
    id: 116,
    code: 'HROB002',
    name: 'Organisational Psychology',
    department: 'Human Resources & Organisational Behaviour',
    description: 'Explores psychological principles applied to workplace behaviour.',
    createdAt: new Date().toISOString()
  },
  {
    id: 117,
    code: 'HROB003',
    name: 'Leadership & Change Management',
    department: 'Human Resources & Organisational Behaviour',
    description: 'Examines leadership theories and organisational change processes.',
    createdAt: new Date().toISOString()
  },

  // Law (LAWS)
  {
    id: 118,
    code: 'LAWS001',
    name: 'Foundations of Law',
    department: 'Law',
    description: 'Introduces legal systems, principles, and case analysis.',
    createdAt: new Date().toISOString()
  },
  {
    id: 119,
    code: 'LAWS002',
    name: 'Contract Law',
    department: 'Law',
    description: 'Covers contract formation, terms, and breach of contract.',
    createdAt: new Date().toISOString()
  },
  {
    id: 120,
    code: 'LAWS003',
    name: 'Criminal Law',
    department: 'Law',
    description: 'Explores criminal offences, defences, and legal procedures.',
    createdAt: new Date().toISOString()
  },

  // Marketing (MARK)
  {
    id: 121,
    code: 'MARK001',
    name: 'Marketing Principles',
    department: 'Marketing',
    description: 'Introduces marketing concepts, consumer behaviour, and market research.',
    createdAt: new Date().toISOString()
  },
  {
    id: 122,
    code: 'MARK002',
    name: 'Digital Marketing',
    department: 'Marketing',
    description: 'Covers online marketing strategies, analytics, and digital campaigns.',
    createdAt: new Date().toISOString()
  },
  {
    id: 123,
    code: 'MARK003',
    name: 'Brand Management',
    department: 'Marketing',
    description: 'Explores brand strategy, identity, and positioning.',
    createdAt: new Date().toISOString()
  },

  // Materials Science & Engineering (MATE)
  {
    id: 124,
    code: 'MATE001',
    name: 'Materials Science Fundamentals',
    department: 'Materials Science & Engineering',
    description: 'Covers material properties, structure, and characterisation.',
    createdAt: new Date().toISOString()
  },
  {
    id: 125,
    code: 'MATE002',
    name: 'Metallurgy & Alloys',
    department: 'Materials Science & Engineering',
    description: 'Explores metallic materials and their applications.',
    createdAt: new Date().toISOString()
  },
  {
    id: 126,
    code: 'MATE003',
    name: 'Polymer & Composite Materials',
    department: 'Materials Science & Engineering',
    description: 'Examines polymers, composites, and advanced materials.',
    createdAt: new Date().toISOString()
  },

  // Mathematics (MATH)
  {
    id: 127,
    code: 'MATH001',
    name: 'Calculus & Analysis',
    department: 'Mathematics',
    description: 'Covers differential and integral calculus and mathematical analysis.',
    createdAt: new Date().toISOString()
  },
  {
    id: 128,
    code: 'MATH002',
    name: 'Linear Algebra',
    department: 'Mathematics',
    description: 'Explores vector spaces, matrices, and linear transformations.',
    createdAt: new Date().toISOString()
  },
  {
    id: 129,
    code: 'MATH003',
    name: 'Probability & Statistics',
    department: 'Mathematics',
    description: 'Introduces probability theory and statistical methods.',
    createdAt: new Date().toISOString()
  },

  // Mechanical Engineering (MECH)
  {
    id: 130,
    code: 'MECH001',
    name: 'Engineering Mechanics',
    department: 'Mechanical Engineering',
    description: 'Covers statics, dynamics, and mechanical systems.',
    createdAt: new Date().toISOString()
  },
  {
    id: 131,
    code: 'MECH002',
    name: 'Thermodynamics',
    department: 'Mechanical Engineering',
    description: 'Explores energy systems, heat transfer, and thermodynamic cycles.',
    createdAt: new Date().toISOString()
  },
  {
    id: 132,
    code: 'MECH003',
    name: 'Mechanical Design',
    department: 'Mechanical Engineering',
    description: 'Covers design principles, CAD, and mechanical components.',
    createdAt: new Date().toISOString()
  },

  // Medical Sciences (MEDS)
  {
    id: 133,
    code: 'MEDS001',
    name: 'Human Physiology',
    department: 'Medical Sciences',
    description: 'Covers organ systems, physiological processes, and homeostasis.',
    createdAt: new Date().toISOString()
  },
  {
    id: 134,
    code: 'MEDS002',
    name: 'Pathophysiology',
    department: 'Medical Sciences',
    description: 'Explores disease mechanisms and physiological dysfunction.',
    createdAt: new Date().toISOString()
  },
  {
    id: 135,
    code: 'MEDS003',
    name: 'Clinical Biochemistry',
    department: 'Medical Sciences',
    description: 'Examines biochemical processes relevant to human health.',
    createdAt: new Date().toISOString()
  },

  // Modern Languages & Linguistics (MODL)
  {
    id: 136,
    code: 'MODL001',
    name: 'Introduction to Linguistics',
    department: 'Modern Languages & Linguistics',
    description: 'Covers phonetics, syntax, semantics, and linguistic theory.',
    createdAt: new Date().toISOString()
  },
  {
    id: 137,
    code: 'MODL002',
    name: 'Language Acquisition',
    department: 'Modern Languages & Linguistics',
    description: 'Explores how humans acquire first and second languages.',
    createdAt: new Date().toISOString()
  },
  {
    id: 138,
    code: 'MODL003',
    name: 'Sociolinguistics',
    department: 'Modern Languages & Linguistics',
    description: 'Examines the relationship between language and society.',
    createdAt: new Date().toISOString()
  },

  // Neuroscience (NEUR)
  {
    id: 139,
    code: 'NEUR001',
    name: 'Introduction to Neuroscience',
    department: 'Neuroscience',
    description: 'Covers neural structure, function, and communication.',
    createdAt: new Date().toISOString() 
  },
  {
    id: 140,
    code: 'NEUR002',
    name: 'Neurophysiology',
    department: 'Neuroscience',
    description: 'Explores electrical and chemical signalling in the nervous system.',
    createdAt: new Date().toISOString()
  },
  {
    id: 141,
    code: 'NEUR003',
    name: 'Cognitive Neuroscience',
    department: 'Neuroscience',
    description: 'Examines neural mechanisms underlying cognition and behaviour.',
    createdAt: new Date().toISOString()
  },

  // Nursing (NURS)
  {
    id: 142,
    code: 'NURS001',
    name: 'Foundations of Nursing Practice',
    department: 'Nursing',
    description: 'Introduces core nursing skills, patient care, and clinical practice.',
    createdAt: new Date().toISOString()
  },
  {
    id: 143,
    code: 'NURS002',
    name: 'Adult Nursing',
    department: 'Nursing',
    description: 'Covers nursing care for adult patients across healthcare settings.',
    createdAt: new Date().toISOString()
  },
  {
    id: 144,
    code: 'NURS003',
    name: 'Clinical Assessment Skills',
    department: 'Nursing',
    description: 'Explores patient assessment, monitoring, and clinical decision-making.',
    createdAt: new Date().toISOString()
  },

  // Operations & Supply Chain (OPSC)
  {
    id: 145,
    code: 'OPSC001',
    name: 'Operations Management',
    department: 'Operations & Supply Chain',
    description: 'Covers production systems, process design, and operations strategy.',
    createdAt: new Date().toISOString()
  },
  {
    id: 146,
    code: 'OPSC002',
    name: 'Supply Chain Management',
    department: 'Operations & Supply Chain',
    description: 'Explores logistics, procurement, and supply chain optimisation.',
    createdAt: new Date().toISOString()
  },
  {
    id: 147,
    code: 'OPSC003',
    name: 'Lean Systems & Quality',
    department: 'Operations & Supply Chain',
    description: 'Covers lean methodologies and quality management systems.',
    createdAt: new Date().toISOString()
  },

  // Optometry (OPTO)
  {
    id: 148,
    code: 'OPTO001',
    name: 'Optics & Visual Science',
    department: 'Optometry',
    description: 'Covers optical principles and visual system function.',
    createdAt: new Date().toISOString()
  },
  {
    id: 149,
    code: 'OPTO002',
    name: 'Clinical Optometry',
    department: 'Optometry',
    description: 'Explores clinical assessment and management of visual disorders.',
    createdAt: new Date().toISOString()
  },
  {
    id: 150,
    code: 'OPTO003',
    name: 'Ocular Disease',
    department: 'Optometry',
    description: 'Examines diseases affecting the eye and visual pathways.',
    createdAt: new Date().toISOString()    
  },

  // Pharmacy (PHAR)
  {
    id: 151,
    code: 'PHAR001',
    name: 'Pharmaceutical Chemistry',
    department: 'Pharmacy',
    description: 'Covers chemical principles underlying drug design and development.',
    createdAt: new Date().toISOString()
  },
  {
    id: 152,
    code: 'PHAR002',
    name: 'Pharmacology',
    department: 'Pharmacy',
    description: 'Explores drug mechanisms, interactions, and therapeutic uses.',
    createdAt: new Date().toISOString()
  },
  {
    id: 153, 
    code: 'PHAR003',
    name: 'Clinical Pharmacy Practice',
    department: 'Pharmacy',
    description: 'Covers patient-centred pharmaceutical care and clinical decision-making.',
    createdAt: new Date().toISOString()
  },

  // Philosophy (PHIL)
  {
    id: 154,
    code: 'PHIL001',
    name: 'Introduction to Philosophy',
    department: 'Philosophy',
    description: 'Covers major philosophical questions and traditions.',
    createdAt: new Date().toISOString()
  },
  {
    id: 155,
    code: 'PHIL002',
    name: 'Ethics & Moral Philosophy',
    department: 'Philosophy',
    description: 'Explores ethical theories and moral reasoning.',
    createdAt: new Date().toISOString()
  },
  {
    id: 156,
    code: 'PHIL003',
    name: 'Philosophy of Mind',
    department: 'Philosophy',
    description: 'Examines theories of consciousness, cognition, and mental states.',
    createdAt: new Date().toISOString()
  },

  // Physics & Astronomy (PHAS)
  {
    id: 157,
    code: 'PHAS001',
    name: 'Classical Mechanics',
    department: 'Physics & Astronomy',
    description: 'Covers Newtonian mechanics, motion, and forces.',
    createdAt: new Date().toISOString()
  },
  {
    id: 158,
    code: 'PHAS002',
    name: 'Quantum Physics',
    department: 'Physics & Astronomy',
    description: 'Explores quantum theory, wave-particle duality, and atomic structure.',
    createdAt: new Date().toISOString()
  },
  {
    id: 159,
    code: 'PHAS003',
    name: 'Astrophysics',
    department: 'Physics & Astronomy',
    description: 'Examines stars, galaxies, and cosmological phenomena.',
    createdAt: new Date().toISOString()
  },

  // Politics & International Relations (POLI)
  {
    id: 160,
    code: 'POLI001',
    name: 'Introduction to Politics',
    department: 'Politics & International Relations',
    description: 'Covers political systems, ideologies, and governance.',
    createdAt: new Date().toISOString()
  },
  {
    id: 161,
    code: 'POLI002',
    name: 'International Relations Theory',
    department: 'Politics & International Relations',
    description: 'Explores global politics, diplomacy, and international systems.',
    createdAt: new Date().toISOString()
  },
  {
    id: 162,
    code: 'POLI003',
    name: 'Comparative Politics',
    department: 'Politics & International Relations',
    description: 'Examines political institutions and behaviour across countries.',
    createdAt: new Date().toISOString()
  },

  // Psychology (PSYC)
  {
    id: 163,
    code: 'PSYC001',
    name: 'Introduction to Psychology',
    department: 'Psychology',
    description: 'Covers major psychological theories and research methods.',
    createdAt: new Date().toISOString()
  },
  {
    id: 164,
    code: 'PSYC002',
    name: 'Cognitive Psychology',
    department: 'Psychology',
    description: 'Explores perception, memory, and cognitive processes.',
    createdAt: new Date().toISOString()
  },
  {
    id: 165,
    code: 'PSYC003',
    name: 'Developmental Psychology',
    department: 'Psychology',
    description: 'Examines human development across the lifespan.',
    createdAt: new Date().toISOString()
  },

  // Public Health (PBHL)
  {
    id: 166,
    code: 'PBHL001',
    name: 'Public Health Foundations',
    department: 'Public Health',
    description: 'Covers health promotion, epidemiology, and public health systems.',
    createdAt: new Date().toISOString()
  },
  {
    id: 167,
    code: 'PBHL002',
    name: 'Epidemiology',
    department: 'Public Health',
    description: 'Explores disease patterns, risk factors, and population health.',
    createdAt: new Date().toISOString()
  },
  {
    id: 168,
    code: 'PBHL003',
    name: 'Global Health',
    department: 'Public Health',
    description: 'Examines global health challenges and international health policy.',
    createdAt: new Date().toISOString()
  },
    // Social Policy (SCPL)
  {
    id: 169,
    code: 'SCPL001',
    name: 'Social Policy Analysis',
    department: 'Social Policy',
    description: 'Covers policy development, evaluation, and the impact of social interventions.',
    createdAt: new Date().toISOString()
  },
  {
    id: 170,
    code: 'SCPL002',
    name: 'Welfare Systems & Reform',
    department: 'Social Policy',
    description: 'Explores welfare models, social justice, and contemporary policy debates.',
    createdAt: new Date().toISOString()
  },
  {
    id: 171,
    code: 'SCPL003',
    name: 'Poverty & Inequality Studies',
    department: 'Social Policy',
    description: 'Examines the causes and consequences of poverty and social inequality.',
    createdAt: new Date().toISOString()
  },

  // Sociology (SOCI)
  {
    id: 172,
    code: 'SOCI001',
    name: 'Foundations of Sociology',
    department: 'Sociology',
    description: 'Introduces sociological theory, research methods, and social structures.',
    createdAt: new Date().toISOString()    
  },
  {
    id: 173,
    code: 'SOCI002',
    name: 'Sociology of Culture',
    department: 'Sociology',
    description: 'Explores cultural practices, identity, and social meaning.',
    createdAt: new Date().toISOString()
  },
  {
    id: 174,
    code: 'SOCI003',
    name: 'Social Research Methods',
    department: 'Sociology',
    description: 'Covers qualitative and quantitative research techniques in sociology.',
    createdAt: new Date().toISOString()
  },

  // Sports Science (SPOR)
  {
    id: 175,
    code: 'SPOR001',
    name: 'Exercise Physiology',
    department: 'Sports Science',
    description: 'Examines physiological responses to exercise and physical activity.',
    createdAt: new Date().toISOString()
  },
  {
    id: 176,
    code: 'SPOR002',
    name: 'Sports Performance Analysis',
    department: 'Sports Science',
    description: 'Covers performance metrics, biomechanics, and athlete development.',
    createdAt: new Date().toISOString()
  },
  {
    id: 177,
    code: 'SPOR003',
    name: 'Nutrition for Sport & Exercise',
    department: 'Sports Science',
    description: 'Explores nutritional strategies to support athletic performance.',
    createdAt: new Date().toISOString()
  },

  // Theology & Religion (THRE)
  {
    id: 178,
    code: 'THRE001',
    name: 'Introduction to Theology',
    department: 'Theology & Religion',
    description: 'Covers major theological traditions, beliefs, and historical development.',
    createdAt: new Date().toISOString()
  },
  {
    id: 179,
    code: 'THRE002',
    name: 'World Religions',
    department: 'Theology & Religion',
    description: 'Explores global religious traditions and their cultural significance.',
    createdAt: new Date().toISOString()
  },
  {
    id: 180,
    code: 'THRE003',
    name: 'Philosophy of Religion',
    department: 'Theology & Religion',
    description: 'Examines philosophical questions surrounding belief, faith, and spirituality.',
    createdAt: new Date().toISOString()
  },

  // Urban Planning (URBP)
  {
    id: 181,
    code: 'URBP001',
    name: 'Urban Planning Principles',
    department: 'Urban Planning',
    description: 'Introduces planning theory, urban development, and land-use strategies.',
    createdAt: new Date().toISOString()
  },
  {
    id: 182,
    code: 'URBP002',
    name: 'Sustainable Cities',
    department: 'Urban Planning',
    description: 'Explores sustainable urban design, green infrastructure, and environmental planning.',
    createdAt: new Date().toISOString()
  },
  {
    id: 183,
    code: 'URBP003',
    name: 'Transport & Infrastructure Planning',
    department: 'Urban Planning',
    description: 'Covers transport systems, infrastructure design, and mobility planning.',
    createdAt: new Date().toISOString()
  },
]

