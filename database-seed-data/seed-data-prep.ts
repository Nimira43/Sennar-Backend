import { Subject } from "@/types"

export const DEPARTMENTS = [
  { id: 1, code: 'AIML', name: 'Artificial Intelligence & Machine Learning', description: 'Study of intelligent systems and learning algorithms.' },
  { id: 2, code: 'BIOI', name: 'Bioinformatics', description: 'Computational analysis of biological data.' },
  { id: 3, code: 'CLDS', name: 'Cloud & Distributed Systems', description: 'Scalable cloud computing and distributed architectures.' },
  { id: 4, code: 'COMP', name: 'Computer Networks', description: 'Design and management of communication networks.' },
  { id: 5, code: 'COSC', name: 'Computer Science', description: 'Foundations of computing, algorithms, and software.' },
  { id: 6, code: 'CPNE', name: 'Computational Neuroscience', description: 'Modelling and analysis of neural systems.' },
  { id: 7, code: 'CYBR', name: 'Cybersecurity', description: 'Protection of systems from digital threats.' },
  { id: 8, code: 'DSAA', name: 'Data Science & AI', description: 'Data analysis, modelling, and intelligent systems.' },
  { id: 9, code: 'DIGF', name: 'Digital Forensics', description: 'Investigation of digital evidence and cybercrime.' },
  { id: 10, code: 'DMID', name: 'Digital Media & Interactive Design', description: 'Creation of digital content and interactive experiences.' },
  { id: 11, code: 'GAME', name: 'Games Technology', description: 'Development of games and interactive simulations.' },
  { id: 12, code: 'HLTH', name: 'Health Informatics', description: 'Digital systems supporting healthcare delivery.' },
  { id: 13, code: 'HPCO', name: 'High-Performance Computing', description: 'Advanced computing for large-scale problems.' },
  { id: 14, code: 'HCI', name: 'Human-Computer Interaction', description: 'Design of effective human-technology interactions.' },
  { id: 15, code: 'INFS', name: 'Information Systems', description: 'Organisational systems for managing information.' },
  { id: 16, code: 'ITEC', name: 'Information Technology', description: 'IT infrastructure, support, and system management.' },
  { id: 17, code: 'IOTE', name: 'Internet of Things Engineering', description: 'Connected devices and embedded systems.' },
  { id: 18, code: 'MLSY', name: 'Machine Learning Systems', description: 'Engineering scalable machine learning pipelines.' },
  { id: 19, code: 'NLP', name: 'Natural Language Processing', description: 'Computational understanding of human language.' },
  { id: 20, code: 'QUAN', name: 'Quantum Computing', description: 'Computation using quantum mechanical principles.' },
  { id: 21, code: 'ROBO', name: 'Robotics & Autonomous Systems', description: 'Intelligent robots and autonomous technologies.' },
  { id: 22, code: 'SOFT', name: 'Software Engineering', description: 'Design and development of software systems.' },
  { id: 23, code: 'UXUI', name: 'UX/UI Design', description: 'Design of user experiences and interfaces.' },

  // NON‑IT
  { id: 24, code: 'ACFI', name: 'Accounting & Finance', description: 'Financial reporting, analysis, and management.' },
  { id: 25, code: 'AERO', name: 'Aerospace Engineering', description: 'Design of aircraft and aerospace systems.' },
  { id: 26, code: 'BIOM', name: 'Biomedical Sciences', description: 'Biological foundations of human health.' },
  { id: 27, code: 'BIOS', name: 'Biosciences', description: 'Study of living organisms and ecosystems.' },
  { id: 28, code: 'BUSM', name: 'Business & Management', description: 'Organisational leadership and business strategy.' },
  { id: 29, code: 'CHEN', name: 'Chemical Engineering', description: 'Engineering chemical processes and materials.' },
  { id: 30, code: 'CIVL', name: 'Civil Engineering', description: 'Design of infrastructure and built environments.' },
  { id: 31, code: 'DENT', name: 'Dentistry', description: 'Oral health, anatomy, and clinical practice.' },
  { id: 32, code: 'DRAM', name: 'Drama & Theatre Arts', description: 'Performance, production, and theatre history.' },
  { id: 33, code: 'ECON', name: 'Economics', description: 'Study of markets, behaviour, and economies.' },
  { id: 34, code: 'EDUC', name: 'Education', description: 'Teaching, learning, and curriculum design.' },
  { id: 35, code: 'ELEC', name: 'Electrical Engineering', description: 'Electrical systems, power, and electronics.' },
  { id: 36, code: 'ENGL', name: 'English Literature', description: 'Study of literary texts and traditions.' },
  { id: 37, code: 'ENVS', name: 'Environmental Science', description: 'Study of ecosystems and environmental change.' },
  { id: 38, code: 'HIST', name: 'History', description: 'Analysis of past events and societies.' },
  { id: 39, code: 'HROB', name: 'Human Resources & Organisational Behaviour', description: 'Workplace behaviour and people management.' },
  { id: 40, code: 'LAWS', name: 'Law', description: 'Legal systems, principles, and case analysis.' },
  { id: 41, code: 'MARK', name: 'Marketing', description: 'Understanding markets, consumers, and branding.' },
  { id: 42, code: 'MATE', name: 'Materials Science & Engineering', description: 'Study of materials and their properties.' },
  { id: 43, code: 'MATH', name: 'Mathematics', description: 'Mathematical theory, structures, and methods.' },
  { id: 44, code: 'MECH', name: 'Mechanical Engineering', description: 'Mechanics, machines, and engineered systems.' },
  { id: 45, code: 'MEDS', name: 'Medical Sciences', description: 'Biological foundations of human disease.' },
  { id: 46, code: 'MODL', name: 'Modern Languages & Linguistics', description: 'Study of languages and linguistic theory.' },
  { id: 47, code: 'NEUR', name: 'Neuroscience', description: 'Study of the nervous system and cognition.' },
  { id: 48, code: 'NURS', name: 'Nursing', description: 'Clinical care and patient support.' },
  { id: 49, code: 'OPSC', name: 'Operations & Supply Chain', description: 'Management of processes and logistics.' },
  { id: 50, code: 'OPTO', name: 'Optometry', description: 'Vision science and eye health.' },
  { id: 51, code: 'PHAR', name: 'Pharmacy', description: 'Drugs, therapeutics, and clinical practice.' },
  { id: 52, code: 'PHIL', name: 'Philosophy', description: 'Study of ideas, ethics, and reasoning.' },
  { id: 53, code: 'PHAS', name: 'Physics & Astronomy', description: 'Study of matter, energy, and the universe.' },
  { id: 54, code: 'POLI', name: 'Politics & International Relations', description: 'Governance, diplomacy, and global systems.' },
  { id: 55, code: 'PSYC', name: 'Psychology', description: 'Study of mind, behaviour, and cognition.' },
  { id: 56, code: 'PBHL', name: 'Public Health', description: 'Population health and disease prevention.' },
  { id: 57, code: 'SCPL', name: 'Social Policy', description: 'Analysis of welfare and social systems.' },
  { id: 58, code: 'SOCI', name: 'Sociology', description: 'Study of society, culture, and institutions.' },
  { id: 59, code: 'SPOR', name: 'Sports Science', description: 'Human performance and exercise physiology.' },
  { id: 60, code: 'THRE', name: 'Theology & Religion', description: 'Study of beliefs, traditions, and spirituality.' },
  { id: 61, code: 'URBP', name: 'Urban Planning', description: 'Design and development of urban spaces.' },
]

export const SUBJECTS = [
  // Artificial Intelligence & Machine Learning (dept_id: 1)
  { id: 1, department_id: 1, code: 'AIML001', name: 'Foundations of Artificial Intelligence', description: 'An introduction to core AI concepts including search, reasoning, and intelligent agents.' },
  { id: 2, department_id: 1, code: 'AIML002', name: 'Machine Learning Algorithms', description: 'A study of supervised and unsupervised learning techniques used in modern AI systems.' },
  { id: 3, department_id: 1, code: 'AIML003', name: 'Deep Learning & Neural Networks', description: 'Explores neural architectures, backpropagation, and deep learning applications.' },

  // Bioinformatics (dept_id: 2)
  { id: 4, department_id: 2, code: 'BIOI001', name: 'Introduction to Bioinformatics', description: 'Covers computational methods for analysing biological data and genomic sequences.' },
  { id: 5, department_id: 2, code: 'BIOI002', name: 'Computational Genomics', description: 'Focuses on genome analysis, annotation, and comparative genomics techniques.' },
  { id: 6, department_id: 2, code: 'BIOI003', name: 'Biological Data Mining', description: 'Applies data mining and machine learning to biological datasets.' },

  // Cloud & Distributed Systems (dept_id: 3)
  { id: 7, department_id: 3, code: 'CLDS001', name: 'Cloud Computing Fundamentals', description: 'Introduces cloud architectures, virtualisation, and distributed computing models.' },
  { id: 8, department_id: 3, code: 'CLDS002', name: 'Distributed Systems Engineering', description: 'Examines distributed algorithms, consensus, and system reliability.' },
  { id: 9, department_id: 3, code: 'CLDS003', name: 'Scalable Cloud Applications', description: 'Focuses on designing and deploying scalable cloud-native applications.' },

  // Computer Networks (dept_id: 4)
  { id: 10, department_id: 4, code: 'COMP001', name: 'Computer Networking Principles', description: 'Covers network models, protocols, and communication fundamentals.' },
  { id: 11, department_id: 4, code: 'COMP002', name: 'Network Security & Management', description: 'Explores secure network design, monitoring, and threat mitigation.' },
  { id: 12, department_id: 4, code: 'COMP003', name: 'Advanced Network Architectures', description: 'Studies modern network technologies including SDN and high-performance routing.' },

  // Computer Science (dept_id: 5)
  { id: 13, department_id: 5, code: 'COSC001', name: 'Programming & Software Design', description: 'Introduces programming principles, software design patterns, and problem-solving.' },
  { id: 14, department_id: 5, code: 'COSC002', name: 'Algorithms & Data Structures', description: 'Covers algorithmic thinking, complexity, and core data structures.' },
  { id: 15, department_id: 5, code: 'COSC003', name: 'Operating Systems & Architecture', description: 'Explores OS design, memory management, and hardware-software interaction.' },

  // Computational Neuroscience (dept_id: 6)
  { id: 16, department_id: 6, code: 'CPNE001', name: 'Neural Computation', description: 'Examines computational models of neural systems and information processing.' },
  { id: 17, department_id: 6, code: 'CPNE002', name: 'Brain Simulation Techniques', description: 'Covers simulation frameworks for modelling neural circuits.' },
  { id: 18, department_id: 6, code: 'CPNE003', name: 'Cognitive Modelling', description: 'Studies computational models of cognition and behaviour.' },

  // Cybersecurity (dept_id: 7)
  { id: 19, department_id: 7, code: 'CYBR001', name: 'Cybersecurity Fundamentals', description: 'Introduces security principles, threat landscapes, and defensive strategies.' },
  { id: 20, department_id: 7, code: 'CYBR002', name: 'Ethical Hacking & Penetration Testing', description: 'Teaches penetration testing methodologies and ethical hacking practices.' },
  { id: 21, department_id: 7, code: 'CYBR003', name: 'Digital Threat Intelligence', description: 'Focuses on threat analysis, incident response, and cyber forensics.' },

  // Data Science & AI (dept_id: 8)
  { id: 22, department_id: 8, code: 'DSAA001', name: 'Data Analysis & Visualisation', description: 'Covers statistical analysis, data cleaning, and visualisation techniques.' },
  { id: 23, department_id: 8, code: 'DSAA002', name: 'Applied Machine Learning', description: 'Applies machine learning techniques to real-world datasets.' },
  { id: 24, department_id: 8, code: 'DSAA003', name: 'Big Data Engineering', description: 'Explores big data platforms, pipelines, and distributed processing.' },

  // Digital Forensics (dept_id: 9)
  { id: 25, department_id: 9, code: 'DIGF001', name: 'Introduction to Digital Forensics', description: 'Covers forensic investigation techniques for digital devices.' },
  { id: 26, department_id: 9, code: 'DIGF002', name: 'Forensic Data Recovery', description: 'Focuses on recovering and analysing digital evidence.' },
  { id: 27, department_id: 9, code: 'DIGF003', name: 'Cybercrime Investigation', description: 'Examines cybercrime patterns and investigative methodologies.' },

  // Digital Media & Interactive Design (dept_id: 10)
  { id: 28, department_id: 10, code: 'DMID001', name: 'Digital Media Production', description: 'Introduces digital content creation and interactive design principles.' },
  { id: 29, department_id: 10, code: 'DMID002', name: 'Interactive Systems Design', description: 'Covers user interaction models and interface design.' },
  { id: 30, department_id: 10, code: 'DMID003', name: 'Creative Coding for Media', description: 'Explores programming techniques for interactive digital experiences.' },

  // Games Technology (dept_id: 11)
  { id: 31, department_id: 11, code: 'GAME001', name: 'Game Development Fundamentals', description: 'Covers core game development concepts and engines.' },
  { id: 32, department_id: 11, code: 'GAME002', name: '3D Graphics & Simulation', description: 'Explores 3D rendering, physics simulation, and animation.' },
  { id: 33, department_id: 11, code: 'GAME003', name: 'Game AI & Behaviour', description: 'Studies AI techniques used in modern game design.' },

  // Health Informatics (dept_id: 12)
  { id: 34, department_id: 12, code: 'HLTH001', name: 'Health Information Systems', description: 'Covers digital systems used in healthcare environments.' },
  { id: 35, department_id: 12, code: 'HLTH002', name: 'Clinical Data Management', description: 'Explores the management and analysis of clinical datasets.' },
  { id: 36, department_id: 12, code: 'HLTH003', name: 'Digital Health Technologies', description: 'Examines emerging technologies in digital healthcare.' },

  // High-Performance Computing (dept_id: 13)
  { id: 37, department_id: 13, code: 'HPCO001', name: 'High-Performance Computing Fundamentals', description: 'Introduces HPC architectures and parallel programming.' },
  { id: 38, department_id: 13, code: 'HPCO002', name: 'Parallel Algorithms', description: 'Covers algorithmic techniques for parallel computation.' },
  { id: 39, department_id: 13, code: 'HPCO003', name: 'Scientific Computing', description: 'Applies HPC techniques to scientific and engineering problems.' },

  // Human–Computer Interaction (dept_id: 14)
  { id: 40, department_id: 14, code: 'HCI001', name: 'Human-Computer Interaction Principles', description: 'Explores user-centred design and interaction models.' },
  { id: 41, department_id: 14, code: 'HCI002', name: 'Usability Engineering', description: 'Covers usability testing, evaluation, and design improvement.' },
  { id: 42, department_id: 14, code: 'HCI003', name: 'Designing Interactive Experiences', description: 'Focuses on designing engaging and accessible digital experiences.' },

  // Information Systems (dept_id: 15)
  { id: 43, department_id: 15, code: 'INFS001', name: 'Information Systems Foundations', description: 'Introduces organisational information systems and digital transformation.' },
  { id: 44, department_id: 15, code: 'INFS002', name: 'Enterprise Systems Architecture', description: 'Covers enterprise-level system design and integration.' },
  { id: 45, department_id: 15, code: 'INFS003', name: 'Business Information Management', description: 'Explores information management strategies in organisations.' },

  // Information Technology (dept_id: 16)
  { id: 46, department_id: 16, code: 'ITEC001', name: 'IT Infrastructure & Support', description: 'Covers IT infrastructure, support systems, and service management.' },
  { id: 47, department_id: 16, code: 'ITEC002', name: 'Systems Administration', description: 'Explores system configuration, maintenance, and automation.' },
  { id: 48, department_id: 16, code: 'ITEC003', name: 'IT Project Management', description: 'Covers project planning, execution, and risk management in IT contexts.' },

  // Internet of Things Engineering (dept_id: 17)
  { id: 49, department_id: 17, code: 'IOTE001', name: 'IoT Systems & Architecture', description: 'Introduces IoT devices, communication models, and architectures.' },
  { id: 50, department_id: 17, code: 'IOTE002', name: 'Embedded Systems Programming', description: 'Covers embedded programming for IoT applications.' },
  { id: 51, department_id: 17, code: 'IOTE003', name: 'Smart Devices & Sensors', description: 'Explores sensor networks and smart device integration.' },

  // Machine Learning Systems (dept_id: 18)
  { id: 52, department_id: 18, code: 'MLSY001', name: 'Machine Learning System Design', description: 'Covers the design and deployment of ML systems at scale.' },
  { id: 53, department_id: 18, code: 'MLSY002', name: 'Model Deployment & MLOps', description: 'Explores MLOps pipelines and production ML workflows.' },
  { id: 54, department_id: 18, code: 'MLSY003', name: 'Automated Machine Learning', description: 'Examines AutoML techniques and automated model optimisation.' },

  // Natural Language Processing (dept_id: 19)
  { id: 55, department_id: 19, code: 'NLP001', name: 'Natural Language Processing Fundamentals', description: 'Introduces NLP concepts including tokenisation and language modelling.' },
  { id: 56, department_id: 19, code: 'NLP002', name: 'Text Mining & Analysis', description: 'Covers text analytics, sentiment analysis, and information extraction.' },
  { id: 57, department_id: 19, code: 'NLP003', name: 'Neural NLP Models', description: 'Explores transformer models and neural NLP architectures.' },

  // Quantum Computing (dept_id: 20)
  { id: 58, department_id: 20, code: 'QUAN001', name: 'Introduction to Quantum Computing', description: 'Covers quantum bits, gates, and fundamental quantum algorithms.' },
  { id: 59, department_id: 20, code: 'QUAN002', name: 'Quantum Algorithms', description: 'Explores quantum search, optimisation, and simulation algorithms.' },
  { id: 60, department_id: 20, code: 'QUAN003', name: 'Quantum Information Theory', description: 'Examines quantum information, entanglement, and communication.' },

  // Robotics & Autonomous Systems (dept_id: 21)
  { id: 61, department_id: 21, code: 'ROBO001', name: 'Robotics Fundamentals', description: 'Introduces robot kinematics, control, and sensing.' },
  { id: 62, department_id: 21, code: 'ROBO002', name: 'Autonomous Navigation', description: 'Covers localisation, mapping, and autonomous navigation techniques.' },
  { id: 63, department_id: 21, code: 'ROBO003', name: 'Intelligent Robotics', description: 'Explores AI-driven robotics and autonomous decision-making.' },

  // Software Engineering (dept_id: 22)
  { id: 64, department_id: 22, code: 'SOFT001', name: 'Software Engineering Principles', description: 'Covers software development methodologies and engineering practices.' },
  { id: 65, department_id: 22, code: 'SOFT002', name: 'Software Architecture & Design', description: 'Explores architectural patterns and system design.' },
  { id: 66, department_id: 22, code: 'SOFT003', name: 'Quality Assurance & Testing', description: 'Covers testing strategies, automation, and quality assurance.' },

  // UX/UI Design (dept_id: 23)
  { id: 67, department_id: 23, code: 'UXUI001', name: 'User Experience Design', description: 'Introduces UX principles, research methods, and design processes.' },
  { id: 68, department_id: 23, code: 'UXUI002', name: 'User Interface Design', description: 'Covers interface design, layout, and visual communication.' },
  { id: 69, department_id: 23, code: 'UXUI003', name: 'Prototyping & Interaction Design', description: 'Explores prototyping tools and interactive design workflows.' },

  // Accounting & Finance (dept_id: 24)
  { id: 70, department_id: 24, code: 'ACFI001', name: 'Financial Accounting', description: 'Introduces financial reporting and accounting principles.' },
  { id: 71, department_id: 24, code: 'ACFI002', name: 'Corporate Finance', description: 'Covers financial management, investment, and capital structure.' },
  { id: 72, department_id: 24, code: 'ACFI003', name: 'Management Accounting', description: 'Explores budgeting, costing, and performance measurement.' },

  // Aerospace Engineering (dept_id: 25)
  { id: 73, department_id: 25, code: 'AERO001', name: 'Aerospace Engineering Fundamentals', description: 'Introduces aerodynamics, propulsion, and aerospace systems.' },
  { id: 74, department_id: 25, code: 'AERO002', name: 'Flight Mechanics', description: 'Covers aircraft stability, control, and flight performance.' },
  { id: 75, department_id: 25, code: 'AERO003', name: 'Aerospace Materials', description: 'Examines materials used in aerospace structures and design.' },

  // Biomedical Sciences (dept_id: 26)
  { id: 76, department_id: 26, code: 'BIOM001', name: 'Cell Biology & Physiology', description: 'Covers cellular structure, function, and physiological processes.' },
  { id: 77, department_id: 26, code: 'BIOM002', name: 'Medical Microbiology', description: 'Explores microorganisms and their role in human disease.' },
  { id: 78, department_id: 26, code: 'BIOM003', name: 'Human Anatomy', description: 'Studies the structure and organisation of the human body.' },

  // Biosciences (dept_id: 27)
  { id: 79, department_id: 27, code: 'BIOS001', name: 'Introduction to Biosciences', description: 'Covers fundamental biological concepts and scientific methods.' },
  { id: 80, department_id: 27, code: 'BIOS002', name: 'Ecology & Evolution', description: 'Explores ecological systems and evolutionary processes.' },
  { id: 81, department_id: 27, code: 'BIOS003', name: 'Molecular Biology', description: 'Examines molecular mechanisms underlying biological function.' },

  // Business & Management (dept_id: 28)
  { id: 82, department_id: 28, code: 'BUSM001', name: 'Principles of Management', description: 'Introduces management theory, organisational structures, and leadership practices.' },
  { id: 83, department_id: 28, code: 'BUSM002', name: 'Organisational Behaviour', description: 'Explores human behaviour in organisations and its impact on performance.' },
  { id: 84, department_id: 28, code: 'BUSM003', name: 'Strategic Management', description: 'Covers strategic analysis, competitive advantage, and long-term planning.' },

  // Chemical Engineering (dept_id: 29)
  { id: 85, department_id: 29, code: 'CHEN001', name: 'Chemical Engineering Principles', description: 'Introduces mass balances, energy balances, and core chemical engineering concepts.' },
  { id: 86, department_id: 29, code: 'CHEN002', name: 'Process Engineering & Design', description: 'Covers process design, optimisation, and industrial chemical systems.' },
  { id: 87, department_id: 29, code: 'CHEN003', name: 'Reaction Engineering', description: 'Explores chemical reaction kinetics and reactor design.' },

  // Civil Engineering (dept_id: 30)
  { id: 88, department_id: 30, code: 'CIVL001', name: 'Structural Analysis', description: 'Covers structural behaviour, loading, and analysis techniques.' },
  { id: 89, department_id: 30, code: 'CIVL002', name: 'Geotechnical Engineering', description: 'Explores soil mechanics and foundation engineering.' },
  { id: 90, department_id: 30, code: 'CIVL003', name: 'Transportation Engineering', description: 'Examines transport systems, planning, and infrastructure design.' },

  // Dentistry (dept_id: 31)
  { id: 91, department_id: 31, code: 'DENT001', name: 'Dental Anatomy & Physiology', description: 'Covers oral anatomy, tooth structure, and craniofacial development.' },
  { id: 92, department_id: 31, code: 'DENT002', name: 'Clinical Dentistry Techniques', description: 'Introduces clinical procedures and patient care in dentistry.' },
  { id: 93, department_id: 31, code: 'DENT003', name: 'Oral Pathology', description: 'Explores diseases of the oral cavity and diagnostic methods.' },

  // Drama & Theatre Arts (dept_id: 32)
  { id: 94, department_id: 32, code: 'DRAM001', name: 'Acting & Performance Techniques', description: 'Covers acting methods, performance skills, and stage presence.' },
  { id: 95, department_id: 32, code: 'DRAM002', name: 'Theatre Production', description: 'Explores directing, stagecraft, and production management.' },
  { id: 96, department_id: 32, code: 'DRAM003', name: 'History of Theatre', description: 'Examines the evolution of theatre from classical to contemporary forms.' },

  // Economics (dept_id: 33)
  { id: 97, department_id: 33, code: 'ECON001', name: 'Microeconomics', description: 'Introduces consumer behaviour, market structures, and economic decision-making.' },
  { id: 98, department_id: 33, code: 'ECON002', name: 'Macroeconomics', description: 'Covers national income, inflation, unemployment, and fiscal policy.' },
  { id: 99, department_id: 33, code: 'ECON003', name: 'Econometrics', description: 'Explores statistical modelling and data analysis in economics.' },

  // Education (dept_id: 34)
  { id: 100, department_id: 34, code: 'EDUC001', name: 'Foundations of Education', description: 'Covers educational theory, learning models, and teaching principles.' },
  { id: 101, department_id: 34, code: 'EDUC002', name: 'Curriculum Design', description: 'Explores curriculum planning, assessment, and instructional design.' },
  { id: 102, department_id: 34, code: 'EDUC003', name: 'Inclusive Education', description: 'Examines strategies for supporting diverse learners in educational settings.' },

  // Electrical Engineering (dept_id: 35)
  { id: 103, department_id: 35, code: 'ELEC001', name: 'Circuit Analysis', description: 'Introduces electrical circuits, components, and analysis techniques.' },
  { id: 104, department_id: 35, code: 'ELEC002', name: 'Power Systems Engineering', description: 'Covers power generation, transmission, and distribution.' },
  { id: 105, department_id: 35, code: 'ELEC003', name: 'Electronics & Instrumentation', description: 'Explores electronic devices, sensors, and instrumentation systems.' },

  // English Literature (dept_id: 36)
  { id: 106, department_id: 36, code: 'ENGL001', name: 'Introduction to Literary Studies', description: 'Covers literary analysis, critical theory, and textual interpretation.' },
  { id: 107, department_id: 36, code: 'ENGL002', name: 'Shakespeare & Renaissance Literature', description: 'Explores major works of Shakespeare and Renaissance writers.' },
  { id: 108, department_id: 36, code: 'ENGL003', name: 'Modern & Contemporary Literature', description: 'Examines literature from the 20th century to the present.' },

  // Environmental Science (dept_id: 37)
  { id: 109, department_id: 37, code: 'ENVS001', name: 'Environmental Systems', description: 'Introduces ecological systems, biogeochemical cycles, and environmental processes.' },
  { id: 110, department_id: 37, code: 'ENVS002', name: 'Climate Change Science', description: 'Explores climate systems, global warming, and mitigation strategies.' },
  { id: 111, department_id: 37, code: 'ENVS003', name: 'Environmental Impact Assessment', description: 'Covers methods for assessing environmental impacts of development.' },

  // History (dept_id: 38)
  { id: 112, department_id: 38, code: 'HIST001', name: 'World History', description: 'Examines major global historical developments and civilisations.' },
  { id: 113, department_id: 38, code: 'HIST002', name: 'British History', description: 'Covers key events and themes in British history.' },
  { id: 114, department_id: 38, code: 'HIST003', name: 'Modern European History', description: 'Explores political, social, and cultural developments in modern Europe.' },

  // Human Resources & Organisational Behaviour (dept_id: 39)
  { id: 115, department_id: 39, code: 'HROB001', name: 'Human Resource Management', description: 'Covers recruitment, training, and employee relations.' },
  { id: 116, department_id: 39, code: 'HROB002', name: 'Organisational Psychology', description: 'Explores psychological principles applied to workplace behaviour.' },
  { id: 117, department_id: 39, code: 'HROB003', name: 'Leadership & Change Management', description: 'Examines leadership theories and organisational change processes.' },

  // Law (dept_id: 40)
  { id: 118, department_id: 40, code: 'LAWS001', name: 'Foundations of Law', description: 'Introduces legal systems, principles, and case analysis.' },
  { id: 119, department_id: 40, code: 'LAWS002', name: 'Contract Law', description: 'Covers contract formation, terms, and breach of contract.' },
  { id: 120, department_id: 40, code: 'LAWS003', name: 'Criminal Law', description: 'Explores criminal offences, defences, and legal procedures.' },

  // Marketing (dept_id: 41)
  { id: 121, department_id: 41, code: 'MARK001', name: 'Marketing Principles', description: 'Introduces marketing concepts, consumer behaviour, and market research.' },
  { id: 122, department_id: 41, code: 'MARK002', name: 'Digital Marketing', description: 'Covers online marketing strategies, analytics, and digital campaigns.' },
  { id: 123, department_id: 41, code: 'MARK003', name: 'Brand Management', description: 'Explores brand strategy, identity, and positioning.' },

  // Materials Science & Engineering (dept_id: 42)
  { id: 124, department_id: 42, code: 'MATE001', name: 'Materials Science Fundamentals', description: 'Covers material properties, structure, and characterisation.' },
  { id: 125, department_id: 42, code: 'MATE002', name: 'Metallurgy & Alloys', description: 'Explores metallic materials and their applications.' },
  { id: 126, department_id: 42, code: 'MATE003', name: 'Polymer & Composite Materials', description: 'Examines polymers, composites, and advanced materials.' },

  // Mathematics (dept_id: 43)
  { id: 127, department_id: 43, code: 'MATH001', name: 'Calculus & Analysis', description: 'Covers differential and integral calculus and mathematical analysis.' },
  { id: 128, department_id: 43, code: 'MATH002', name: 'Linear Algebra', description: 'Explores vector spaces, matrices, and linear transformations.' },
  { id: 129, department_id: 43, code: 'MATH003', name: 'Probability & Statistics', description: 'Introduces probability theory and statistical methods.' },

  // Mechanical Engineering (dept_id: 44)
  { id: 130, department_id: 44, code: 'MECH001', name: 'Engineering Mechanics', description: 'Covers statics, dynamics, and mechanical systems.' },
  { id: 131, department_id: 44, code: 'MECH002', name: 'Thermodynamics', description: 'Explores energy systems, heat transfer, and thermodynamic cycles.' },
  { id: 132, department_id: 44, code: 'MECH003', name: 'Mechanical Design', description: 'Covers design principles, CAD, and mechanical components.' },

  // Medical Sciences (dept_id: 45)
  { id: 133, department_id: 45, code: 'MEDS001', name: 'Human Physiology', description: 'Covers organ systems, physiological processes, and homeostasis.' },
  { id: 134, department_id: 45, code: 'MEDS002', name: 'Pathophysiology', description: 'Explores disease mechanisms and physiological dysfunction.' },
  { id: 135, department_id: 45, code: 'MEDS003', name: 'Clinical Biochemistry', description: 'Examines biochemical processes relevant to human health.' },

  // Modern Languages & Linguistics (dept_id: 46)
  { id: 136, department_id: 46, code: 'MODL001', name: 'Introduction to Linguistics', description: 'Covers phonetics, syntax, semantics, and linguistic theory.' },
  { id: 137, department_id: 46, code: 'MODL002', name: 'Language Acquisition', description: 'Explores how humans acquire first and second languages.' },
  { id: 138, department_id: 46, code: 'MODL003', name: 'Sociolinguistics', description: 'Examines the relationship between language and society.' },

  // Neuroscience (dept_id: 47)
  { id: 139, department_id: 47, code: 'NEUR001', name: 'Introduction to Neuroscience', description: 'Covers neural structure, function, and communication.' },
  { id: 140, department_id: 47, code: 'NEUR002', name: 'Neurophysiology', description: 'Explores electrical and chemical signalling in the nervous system.' },
  { id: 141, department_id: 47, code: 'NEUR003', name: 'Cognitive Neuroscience', description: 'Examines neural mechanisms underlying cognition and behaviour.' },

  // Nursing (dept_id: 48)
  { id: 142, department_id: 48, code: 'NURS001', name: 'Foundations of Nursing Practice', description: 'Introduces core nursing skills, patient care, and clinical practice.' },
  { id: 143, department_id: 48, code: 'NURS002', name: 'Adult Nursing', description: 'Covers nursing care for adult patients across healthcare settings.' },
  { id: 144, department_id: 48, code: 'NURS003', name: 'Clinical Assessment Skills', description: 'Explores patient assessment, monitoring, and clinical decision-making.' },

  // Operations & Supply Chain (dept_id: 49)
  { id: 145, department_id: 49, code: 'OPSC001', name: 'Operations Management', description: 'Covers production systems, process design, and operations strategy.' },
  { id: 146, department_id: 49, code: 'OPSC002', name: 'Supply Chain Management', description: 'Explores logistics, procurement, and supply chain optimisation.' },
  { id: 147, department_id: 49, code: 'OPSC003', name: 'Lean Systems & Quality', description: 'Covers lean methodologies and quality management systems.' },

  // Optometry (dept_id: 50)
  { id: 148, department_id: 50, code: 'OPTO001', name: 'Optics & Visual Science', description: 'Covers optical principles and visual system function.' },
  { id: 149, department_id: 50, code: 'OPTO002', name: 'Clinical Optometry', description: 'Explores clinical assessment and management of visual disorders.' },
  { id: 150, department_id: 50, code: 'OPTO003', name: 'Ocular Disease', description: 'Examines diseases affecting the eye and visual pathways.' },

  // Pharmacy (dept_id: 51)
  { id: 151, department_id: 51, code: 'PHAR001', name: 'Pharmaceutical Chemistry', description: 'Covers chemical principles underlying drug design and development.' },
  { id: 152, department_id: 51, code: 'PHAR002', name: 'Pharmacology', description: 'Explores drug mechanisms, interactions, and therapeutic uses.' },
  { id: 153, department_id: 51, code: 'PHAR003', name: 'Clinical Pharmacy Practice', description: 'Covers patient-centred pharmaceutical care and clinical decision-making.' },

  // Philosophy (dept_id: 52)
  { id: 154, department_id: 52, code: 'PHIL001', name: 'Introduction to Philosophy', description: 'Covers major philosophical questions and traditions.' },
  { id: 155, department_id: 52, code: 'PHIL002', name: 'Ethics & Moral Philosophy', description: 'Explores ethical theories and moral reasoning.' },
  { id: 156, department_id: 52, code: 'PHIL003', name: 'Philosophy of Mind', description: 'Examines theories of consciousness, cognition, and mental states.' },

  // Physics & Astronomy (dept_id: 53)
  { id: 157, department_id: 53, code: 'PHAS001', name: 'Classical Mechanics', description: 'Covers Newtonian mechanics, motion, and forces.' },
  { id: 158, department_id: 53, code: 'PHAS002', name: 'Quantum Physics', description: 'Explores quantum theory, wave-particle duality, and atomic structure.' },
  { id: 159, department_id: 53, code: 'PHAS003', name: 'Astrophysics', description: 'Examines stars, galaxies, and cosmological phenomena.' },

  // Politics & International Relations (dept_id: 54)
  { id: 160, department_id: 54, code: 'POLI001', name: 'Introduction to Politics', description: 'Covers political systems, ideologies, and governance.' },
  { id: 161, department_id: 54, code: 'POLI002', name: 'International Relations Theory', description: 'Explores global politics, diplomacy, and international systems.' },
  { id: 162, department_id: 54, code: 'POLI003', name: 'Comparative Politics', description: 'Examines political institutions and behaviour across countries.' },

  // Psychology (dept_id: 55)
  { id: 163, department_id: 55, code: 'PSYC001', name: 'Introduction to Psychology', description: 'Covers major psychological theories and research methods.' },
  { id: 164, department_id: 55, code: 'PSYC002', name: 'Cognitive Psychology', description: 'Explores perception, memory, and cognitive processes.' },
  { id: 165, department_id: 55, code: 'PSYC003', name: 'Developmental Psychology', description: 'Examines human development across the lifespan.' },

  // Public Health (dept_id: 56)
  { id: 166, department_id: 56, code: 'PBHL001', name: 'Public Health Foundations', description: 'Covers health promotion, epidemiology, and public health systems.' },
  { id: 167, department_id: 56, code: 'PBHL002', name: 'Epidemiology', description: 'Explores disease patterns, risk factors, and population health.' },
  { id: 168, department_id: 56, code: 'PBHL003', name: 'Global Health', description: 'Examines global health challenges and international health policy.' },

  // Social Policy (dept_id: 57)
  { id: 169, department_id: 57, code: 'SCPL001', name: 'Social Policy Analysis', description: 'Covers policy development, evaluation, and social interventions.' },
  { id: 170, department_id: 57, code: 'SCPL002', name: 'Welfare Systems & Reform', description: 'Explores welfare models, social justice, and policy debates.' },
  { id: 171, department_id: 57, code: 'SCPL003', name: 'Poverty & Inequality Studies', description: 'Examines causes and consequences of poverty and inequality.' },

  // Sociology (dept_id: 58)
  { id: 172, department_id: 58, code: 'SOCI001', name: 'Foundations of Sociology', description: 'Introduces sociological theory, research methods, and social structures.' },
  { id: 173, department_id: 58, code: 'SOCI002', name: 'Sociology of Culture', description: 'Explores cultural practices, identity, and social meaning.' },
  { id: 174, department_id: 58, code: 'SOCI003', name: 'Social Research Methods', description: 'Covers qualitative and quantitative research techniques.' },

  // Sports Science (dept_id: 59)
  { id: 175, department_id: 59, code: 'SPOR001', name: 'Exercise Physiology', description: 'Examines physiological responses to exercise and activity.' },
  { id: 176, department_id: 59, code: 'SPOR002', name: 'Sports Performance Analysis', description: 'Covers performance metrics, biomechanics, and athlete development.' },
  { id: 177, department_id: 59, code: 'SPOR003', name: 'Nutrition for Sport & Exercise', description: 'Explores nutritional strategies for athletic performance.' },

  // Theology & Religion (dept_id: 60)
  { id: 178, department_id: 60, code: 'THRE001', name: 'Introduction to Theology', description: 'Covers major theological traditions, beliefs, and development.' },
  { id: 179, department_id: 60, code: 'THRE002', name: 'World Religions', description: 'Explores global religious traditions and cultural significance.' },
  { id: 180, department_id: 60, code: 'THRE003', name: 'Philosophy of Religion', description: 'Examines philosophical questions about belief and spirituality.' },

  // Urban Planning (dept_id: 61)
  { id: 181, department_id: 61, code: 'URBP001', name: 'Urban Planning Principles', description: 'Introduces planning theory, development, and land-use strategies.' },
  { id: 182, department_id: 61, code: 'URBP002', name: 'Sustainable Cities', description: 'Explores sustainable design, green infrastructure, and planning.' },
  { id: 183, department_id: 61, code: 'URBP003', name: 'Transport & Infrastructure Planning', description: 'Covers transport systems, infrastructure design, and mobility.' },

]
