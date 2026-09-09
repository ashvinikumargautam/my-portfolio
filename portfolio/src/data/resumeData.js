export const profile = {
  name: 'Ashvini Kumar Gautam',
  role: 'Data Science & Machine Learning Engineer',
  location: 'Sonbhadra, Uttar Pradesh, India',
  email: 'ashvini1275@gmail.com',
  phone: '+91-7897622597',
  linkedin: 'https://linkedin.com',
  github: 'https://github.com',
  portfolio: 'https://ashvinikumargautam.vercel.app/',
  summary:
    "Computer Science undergraduate specializing in Data Science, Machine Learning, and Generative AI with hands-on experience building end-to-end ML pipelines, RAG-based LLM applications, and AI-powered web tools. Proficient in Python, Scikit-Learn, TensorFlow, LangChain, and SQL with expertise in NLP, prompt engineering, and model deployment — seeking an ML/Data Science internship to contribute to data-driven product development.",
}

export const skillGroups = [
  {
    label: 'Languages',
    items: ['Python', 'SQL', 'Java', 'C++', 'HTML', 'CSS', 'JavaScript', 'Flask'],
  },
  {
    label: 'ML / AI',
    items: [
      'Scikit-Learn',
      'TensorFlow',
      'Keras',
      'NLTK',
      'LangChain',
      'Hugging Face',
      'Generative AI',
      'Prompt Engineering',
      'OpenAI API',
      'Groq API',
    ],
  },
  {
    label: 'Data & Visualization',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly'],
  },
  {
    label: 'Tools & Platforms',
    items: ['Jupyter Notebook', 'Google Colab', 'Git/GitHub', 'VS Code', 'Cloudflare Pages', 'Render', 'REST APIs'],
  },
  {
    label: 'Concepts',
    items: [
      'Regression',
      'Classification',
      'Clustering',
      'NLP',
      'Feature Engineering',
      'EDA',
      'Deep Learning (CNN, ANN)',
      'RAG',
      'Vector Embeddings',
      'Model Deployment',
    ],
  },
]

export const experience = [
  {
    role: 'Web Development Volunteer',
    org: 'Security & Privacy in Cyber World (SPCW)',
    period: 'Live Portal',
    points: [
      'Developed and deployed the official SPCW Certificate Distribution Portal on Netlify to automate credential issuance for course participants.',
      'Streamlined digital verification and downloads via a responsive UI, eliminating manual processing overhead for organizers.',
    ],
  },
]

export const projects = [
  {
    title: 'RAG-Based AI Teaching Assistant',
    stack: ['Python', 'LangChain', 'Vector DB', 'LLM APIs'],
    points: [
      'Designed a RAG-based AI assistant using LangChain and FAISS vector database to answer academic queries via top-k similarity search across 10+ indexed documents.',
      'Improved answer relevance by ~40% vs. standalone LLM baseline by combining retrieval with generation, significantly reducing hallucinations.',
    ],
    links: [],
  },
  {
    title: 'End-to-End Medical Chatbot (Generative AI)',
    stack: ['Python', 'LangChain', 'LLM APIs', 'Vector DB'],
    points: [
      'Developed a domain-specific Generative AI medical chatbot using Groq API and LangChain over 500+ pages of healthcare knowledge, with FAISS vector indexing for context-aware retrieval.',
      'Built full RAG pipeline (ingestion, chunking, embedding, retrieval) and deployed with Flask REST API on Render — live in production.',
    ],
    links: [
      { label: 'Live Demo', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
  },
  {
    title: 'Housing Prices Prediction (Kaggle Competition)',
    stack: ['Python', 'Scikit-Learn', 'Pandas'],
    points: [
      'Built a machine learning model to predict house prices using feature engineering and regression techniques on real-world housing data.',
      'Handled missing values, categorical encoding, and data preprocessing to improve model performance.',
      'Trained and evaluated multiple models to optimize prediction accuracy on validation data.',
      'Applied best practices in model validation and submission workflow on the Kaggle platform.',
    ],
    links: [],
  },
  {
    title: 'theDoc Pulse — AI-Augmented Web Developer',
    stack: ['HTML', 'CSS', 'JavaScript', 'Flask', 'Python'],
    points: [
      'Architected and deployed 14+ document manipulation tools using an AI-first workflow, cutting development lifecycle by 60%; deployed on Cloudflare Pages for global edge performance and Render for backend.',
      'Implemented zero-server architecture using WebAssembly (WASM), PDF-lib, and PDF.js — ensuring 100% client-side processing and zero data privacy risk.',
    ],
    links: [{ label: 'Live Demo', href: '#' }],
  },
  {
    title: 'WiSense — Wi-Fi Human Movement Sensing Platform',
    stack: ['Python', 'FastAPI', 'React', 'TypeScript', 'Scikit-Learn', 'PostgreSQL'],
    points: [
      'Built a full-stack platform to detect human movement from Wi-Fi Channel State Information (CSI), with a FastAPI + WebSocket backend and a React/TypeScript dashboard for real-time visualization.',
      'Implemented JWT-based authentication, an auto-trained Scikit-Learn model to classify movement states (no movement / movement / walking) from simulated and ESP32-based CSI signals, and PostgreSQL (via SQLAlchemy) for persistence.',
      'Containerized the app with Docker Compose for one-command setup across backend, frontend, and database.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/ashvinikumargautam/WiSense' }],
  },
]

export const education = {
  degree: 'B.Tech in Computer Science & Engineering',
  period: '2023 – 2027',
  school: 'Rajkiya Engineering College, Sonbhadra, Uttar Pradesh',
  score: 'SGPA: 7.6',
  coursework: [
    'Machine Learning',
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Statistics & Probability',
    'Artificial Intelligence',
  ],
}

export const certifications = [
  { name: 'Data Science Professional Certification', issuer: 'CodeWithHarry', year: '2026' },
  { name: 'Machine Learning Specialization', issuer: 'Kaggle', year: '2026' },
]

export const achievements = [
  {
    name: '1st Position — Internal Hackathon for Smart India Hackathon (SIH) 2025',
    detail: 'Team "Bridge Builders" (Problem ID 25017), Rajkiya Engineering College Sonbhadra',
    year: '2025',
  },
]