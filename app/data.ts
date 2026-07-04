type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  icon: string
  company: string
  title: string
  start: string
  end: string
  location: string
  link: string
  id: string
}

type SocialLink = {
  label: string
  link: string
}

type Tech = {
  name: string
  icon: string
  category: 'Languages' | 'Full-stack Dev' | 'LLMs/ML'
}

export const PROJECTS: Project[] = [
  {
    name: 'Yannanbot',
    description:
      'Personal agentic finance tracker that links to Google Sheets to track my budget and spending.',
    link: '/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Moodwave',
    description: 'ML app that generates music based on the mood of a photo.',
    link: '/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    icon: '/amazon.png',
    company: 'Amazon',
    title: 'SDE Intern',
    start: 'June 2026',
    end: 'Present',
    location: 'Seattle, WA',
    link: '/',
    id: 'work1',
  },
  {
    icon: '/amazon.png',
    company: 'Amazon',
    title: 'SDE Intern',
    start: 'May 2025',
    end: 'Aug. 2025',
    location: 'Seattle, WA',
    link: '/',
    id: 'work2',
  },
  {
    icon: '/ucberkeley.svg',
    company: 'Parameswaran Lab',
    title: 'Undergraduate Research Assistant',
    start: 'Sep. 2025',
    end: 'Dec. 2025',
    location: 'Berkeley, CA',
    link: 'https://arxiv.org/html/2501.06659v2',
    id: 'work3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/ycai27',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/yannan-cai-5b473a297/',
  }
]

export const EMAIL = 'yannancai@berkeley.edu'

const TECHS = {
  Languages: [
    ['Python', 'python.webp'],
    ['Java', 'java.svg'],
    ['JavaScript', 'javascript.svg'],
    ['TypeScript', 'typescript.svg'],
    ['SQL', 'sql.svg'],
  ],
  'Full-stack Dev': [
    ['React', 'react.svg'],
    ['Node.js', 'nodejs.svg'],
    ['Express.js', 'express.svg'],
    ['AWS', 'aws.svg'],
    ['MongoDB', 'mongodb.svg'],
    ['PostgreSQL', 'postgresql.svg'],
    ['HTML/CSS', 'htmlcss.svg'],
  ],
  'LLMs/ML': [
    ['LangChain', 'langchain.svg'],
    ['PyTorch', 'pytorch.svg'],
    ['Jupyter', 'jupyter.svg'],
    ['Pandas', 'pandas.svg'],
    ['Scikit-learn', 'scikitlearn.svg'],
    ['TensorFlow.js', 'tensorflow.svg'],
  ],
} as const

export const TECH_STACK: Tech[] = Object.entries(TECHS).flatMap(
  ([category, techs]) =>
    techs.map(([name, icon]) => ({
      name,
      icon: `/${icon}`,
      category: category as Tech['category'],
    }))
)
