import { Project, SkillCategory, Achievement, Certification, Education } from '../types';
import geoAiImg from '../assets/images/geoai_disaster_1789401289719.jpg';
import cropAiImg from '../assets/images/crop_ai_beejuday_1789401272837.jpg';

export const PERSONAL_INFO = {
  name: 'Jenil Prajapati',
  role: 'AI/ML Developer & Full-Stack Engineer',
  tagline: 'Computer Science undergraduate engineering computer vision pipelines, predictive AI models, and real-time full-stack systems.',
  phone: '6359488027',
  email: 'jenilprajapati2626@gmail.com',
  location: 'Ahmedabad, India',
  linkedin: 'https://www.linkedin.com/in/jenil-prajapati-8240a4275/',
  github: 'https://github.com/jenilprajapati777',
  availability: 'Available for AI/ML Roles & Collaborations',
  bio: `Computer Science undergraduate with hands-on experience training and deploying machine learning models using Python, TensorFlow, Pandas, and NumPy across multiple award-winning AI projects in agriculture, disaster management, and generative AI. Skilled in data preprocessing and computer vision pipelines, with full-stack experience (React, Flutter, Firebase/Supabase) to ship ML-powered products end-to-end. Finalist in national hackathons including SkyHack and Gujarat Innovation Showcase. Seeking an AI & Machine Learning role to apply and grow these skills on real-world projects.`
};

export const METRICS = [
  { value: 'Top 20', label: 'National SkyHack Finalist (Rank 14/200+)' },
  { value: '2nd', label: 'Gujarat Innovation Showcase Award' },
  { value: '98%', label: 'Radar Signal Accuracy (Sentinel-1)' },
  { value: '3+', label: 'Trained & Shipped ML Models' }
];

export const TECH_BRANDS = [
  { name: 'TensorFlow', category: 'Deep Learning' },
  { name: 'Python', category: 'Core Language' },
  { name: 'OpenCV', category: 'Computer Vision' },
  { name: 'Sentinel-1 SAR', category: 'Satellite Radar' },
  { name: 'Flutter', category: 'Mobile Engineering' },
  { name: 'React.js', category: 'Frontend' },
  { name: 'GCP & Cloud', category: 'Infrastructure' },
  { name: 'Supabase', category: 'Database & Auth' },
  { name: 'Firebase', category: 'Realtime Backend' },
  { name: 'Scikit-learn', category: 'Machine Learning' },
  { name: 'Docker', category: 'DevOps' }
];

export const PROJECTS: Project[] = [
  {
    id: 'aapda-predict',
    title: 'Aapda-Predict',
    codename: 'GeoAI Disaster Command Center',
    period: 'Nov 2025 – Dec 2025',
    role: 'Computer Vision & ML Pipeline Lead',
    github: 'https://github.com/jenilprajapati777/Aapda-Predict-SkyHack',
    stack: ['Python', 'Streamlit', 'OpenCV', 'Sentinel-1 SAR', 'Altair', 'NumPy'],
    achievement: 'Rank 14 of 200+ Teams • SkyHack 2025 National Finalist',
    summary: 'A mission-critical disaster management GeoAI engine mapping flood hazards through 100% cloud cover using Sentinel-1 synthetic aperture radar (SAR).',
    image: geoAiImg,
    stats: [
      { label: 'Signal Accuracy', value: '98%' },
      { label: 'National Rank', value: '14 / 200+' },
      { label: 'Cloud Penetration', value: '100% SAR' }
    ],
    tags: ['Computer Vision', 'SAR Radar', 'GeoAI', 'Disaster Tech'],
    bullets: [
      'Applied computer vision to fuse Sentinel-1 satellite radar data and map flood extents through 100% cloud cover, solving the "optical blindness" problem for disaster response teams.',
      'Engineered a live data-processing/visualization pipeline that filters radar speckle noise via morphological operations, achieving 98% signal accuracy for real-time water detection.',
      'Ranked 14th nationally (Top 20 finalist) out of 200+ competing teams at SkyHack 2025 national hackathon.'
    ]
  },
  {
    id: 'crop-shift-beejuday',
    title: 'Crop Shift Mitigation (BeejUday)',
    codename: 'AgriTech Predictive Intelligence',
    period: 'Sep 2025 – Jan 2026',
    role: 'AI Model Developer & Mobile Architect',
    github: 'https://github.com/jenilprajapati777/BeejUday',
    stack: ['Flutter', 'Python (ML)', 'Supabase', 'Google API', 'Scikit-learn'],
    achievement: 'Runner-Up of 100+ Teams • SustainAIthon 2025',
    summary: 'An end-to-end intelligent agricultural decision platform recommending sustainable crop transitions based on soil, climate, and predictive market yield dynamics.',
    image: cropAiImg,
    stats: [
      { label: 'ML Models Deployed', value: '3 Trained' },
      { label: 'Hackathon Finish', value: '2nd / 100+ Teams' },
      { label: 'Stack Depth', value: 'End-to-End' }
    ],
    tags: ['Predictive ML', 'Flutter', 'AgriTech', 'Data Pipelines'],
    bullets: [
      'Developed and trained 3 machine learning models for crop price prediction, yield prediction, and crop recommendation, using ReLU and Softmax activation for data-driven agricultural recommendations.',
      'Performed rigorous data cleaning and preprocessing using Scikit-learn on multidimensional agricultural datasets (soil composition, micro-climate, historical yields, market prices).',
      'Designed a user-centric Flutter mobile interface to visualize crop-shift recommendations, climate risks, and real-time market demand data.'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'AI, ML & Data Engineering',
    iconName: 'Cpu',
    description: 'Neural networks, computer vision, data normalization, and generative pipelines.',
    skills: [
      { name: 'TensorFlow', level: 'Advanced', highlight: true },
      { name: 'OpenCV', level: 'Advanced', highlight: true },
      { name: 'Computer Vision', level: 'Advanced', highlight: true },
      { name: 'Scikit-learn', level: 'Advanced', highlight: true },
      { name: 'Pandas & NumPy', level: 'Advanced' },
      { name: 'Stable Diffusion', level: 'Proficient' },
      { name: 'Data Preprocessing', level: 'Advanced' }
    ]
  },
  {
    title: 'Core Programming Languages',
    iconName: 'Code',
    description: 'Object-oriented programming, data structures, and typed development.',
    skills: [
      { name: 'Python', level: 'Advanced', highlight: true },
      { name: 'Java (Core & Advanced)', level: 'Advanced', highlight: true },
      { name: 'C / C++', level: 'Proficient' },
      { name: 'JavaScript (ES6+)', level: 'Advanced' },
      { name: 'Dart', level: 'Proficient' }
    ]
  },
  {
    title: 'Frontend & Mobile Engineering',
    iconName: 'Layout',
    description: 'Responsive web apps, cross-platform mobile experiences, and reactive UI.',
    skills: [
      { name: 'React.js', level: 'Advanced', highlight: true },
      { name: 'Flutter (Dart)', level: 'Advanced', highlight: true },
      { name: 'HTML5 / CSS3', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'Android SDK', level: 'Proficient' }
    ]
  },
  {
    title: 'Backend, Cloud & Databases',
    iconName: 'Server',
    description: 'RESTful architectures, cloud infrastructure, and realtime datastores.',
    skills: [
      { name: 'Node.js', level: 'Advanced' },
      { name: 'RESTful API Design', level: 'Advanced', highlight: true },
      { name: 'Firebase (Firestore/RTDB)', level: 'Advanced' },
      { name: 'Supabase', level: 'Advanced' },
      { name: 'Google Cloud Platform (GCP)', level: 'Proficient' },
      { name: 'Docker', level: 'Proficient' }
    ]
  },
  {
    title: 'Developer Tools & Environments',
    iconName: 'Wrench',
    description: 'Version control, profiling, and modern multi-language IDE toolchains.',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced' },
      { name: 'VS Code', level: 'Advanced' },
      { name: 'PyCharm', level: 'Advanced' },
      { name: 'IntelliJ IDEA', level: 'Proficient' },
      { name: 'Android Studio', level: 'Proficient' },
      { name: 'Eclipse', level: 'Working' }
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'gujarat-showcase',
    title: 'Runner-Up (2nd Prize) — Gujarat Innovation Showcase',
    rank: '2nd Place (Runner-Up)',
    organization: 'Edunet Foundation / Green Skills & AI for Future Program',
    date: '2025 – 2026',
    description: 'Advanced from 100+ competing teams to the Top 25 semifinals and Top 8 finals, earning 2nd prize for AI innovation in environmental sustainability.',
    badge: 'State Innovation Honor',
    iconName: 'Trophy'
  },
  {
    id: 'skyhack-national',
    title: '14th Rank Nationally (Top 20 Finalist) — SkyHack 2025',
    rank: 'Rank 14 (Top 20)',
    organization: 'SkyHack National Hackathon',
    date: 'Dec 2025',
    description: 'Competed with the Aapda-Predict platform against 200+ teams nationwide, recognizing outstanding computer vision execution on Sentinel-1 SAR satellite radar data.',
    projectLinked: 'Aapda-Predict',
    badge: 'National Finalist',
    iconName: 'Award'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Foundation Course on Artificial Intelligence and Green Skills',
    issuer: 'Edunet Foundation, Shell India & AICTE',
    date: 'February 2026',
    description: 'Specialized curriculum focused on sustainable AI deployments, environmental data analytics, and green computing methodologies.',
    skills: ['Applied AI', 'Green Computing', 'Sustainability Analytics', 'Ethics in AI']
  }
];

export const EDUCATION: Education = {
  institution: 'Gujarat Law Society (GLS), Ahmedabad',
  degree: 'Bachelor of Technology in Computer Science',
  period: 'Jun 2023 – Expected May 2027',
  location: 'Ahmedabad, Gujarat, India',
  coursework: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (Java)',
    'Database Management Systems',
    'Artificial Intelligence',
    'Web Development'
  ]
};
