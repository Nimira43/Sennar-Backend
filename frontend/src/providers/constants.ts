import { GiGraduateCap } from 'react-icons/gi'
import { LiaUniversitySolid } from "react-icons/lia"

export const USER_ROLES = {
  STUDENT: 'student',
  TEACHER: 'teacher',
  ADMIN: 'admin',
}

export const ROLE_OPTIONS = [
  {
    value: USER_ROLES.STUDENT,
    label: 'Student',
    icon: GiGraduateCap,
  },
  {
    value: USER_ROLES.TEACHER,
    label: 'Teacher',
    icon: LiaUniversitySolid,
  },
]

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
  label: dept,
}))

export const MAX_FILE_SIZE = 3 * 1024 * 1024 
export const ALLOWED_TYPES = [
  'image/png',
  'image/jpeg',
  'image/jpg',
  'image/webp',
]

export const CLOUDINARY_UPLOAD_URL = import.meta.env.VITE_CLOUDINARY_UPLOAD_URL
export const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
export const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL

export const BASE_URL = import.meta.env.VITE_API_URL
export const ACCESS_TOKEN_KEY = import.meta.env.VITE_ACCESS_TOKEN_KEY
export const REFRESH_TOKEN_KEY = import.meta.env.VITE_REFRESH_TOKEN_KEY

export const REFRESH_TOKEN_URL = `${BASE_URL}/refresh-token`

export const CLOUDINARY_UPLOAD_PRESET = import.meta.env
  .VITE_CLOUDINARY_UPLOAD_PRESET
