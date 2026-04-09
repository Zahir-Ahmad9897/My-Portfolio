export const DATA = {
  personal: {
    name: 'Zahir Ahmad',
    role: 'AI & Computer Vision Engineer',
    tagline: 'Building intelligent systems that see, understand, and act.',
    email: 'zahirahmad9897@gmail.com',
    linkedin: 'https://linkedin.com/in/zahir-ahmad9897',
    github: 'https://github.com/Zahir-Ahmad9897',
    location: 'Peshawar, KP, Pakistan',
    phone: '+92 334 1339897',
    bio: 'Computer Software Engineer based in Pakistan, specializing in Computer Vision, Deep Learning, and AI Systems. Experienced in building production-ready ML solutions with PyTorch, YOLO, and edge AI deployment. Passionate about Vision Language Models and Agentic AI.',
    cgpa: '3.10 / 4.00',
    university: 'University of Engineering & Technology, Mardan',
    degree: 'BS Computer Software Engineering',
  },

  stats: [
    { value: '4+', label: 'Projects Built' },
    { value: '99%', label: 'Face Rec. Accuracy' },
    { value: '3.10', label: 'CGPA / 4.00' },
    { value: '2', label: 'Certifications' },
  ],

  skills: {
    Languages: ['Python', 'C++', 'C'],
    'AI/ML Frameworks': ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'NLTK'],
    'Computer Vision': ['OpenCV', 'YOLOv5', 'YOLOv11', 'MTCNN', 'ArcFace', 'ResNet', 'UNet'],
    'Web & APIs': ['Flask', 'Streamlit', 'RESTful APIs'],
    'Data Science': ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    Databases: ['SQLite', 'MySQL'],
    'DevOps & Tools': ['Git', 'GitHub', 'VS Code', 'Google Colab', 'Jupyter'],
    'Hardware & IoT': ['Raspberry Pi', 'Arduino', 'Jetson Nano', 'Proteus'],
  },

  projects: [
    {
      id: 'p1',
      title: 'Face Recognition Attendance System',
      category: 'Computer Vision',
      description:
        'Production-ready AI attendance system achieving 99% accuracy using ArcFace embeddings for face recognition with full hardware integration.',
      tech: ['PyTorch', 'ArcFace', 'MTCNN', 'Flask', 'Arduino'],
      highlights: [
        '99% accuracy using ArcFace embeddings',
        'Hardware simulation: LCD, servo, EEPROM with serial comm',
        'RESTful API with JWT authentication',
        'Edge-deployed on Raspberry Pi & Jetson Nano',
        'Automated email reports',
      ],
      github: 'https://github.com/Zahir-Ahmad9897/Face-attendance-system-using-ArcFace',
    },
    {
      id: 'p2',
      title: 'Object Detection & Segmentation Pipeline',
      category: 'Computer Vision',
      description:
        'Real-time multi-task vision pipeline combining detection, classification, and pixel-level semantic segmentation.',
      tech: ['YOLOv11', 'ResNet', 'UNet', 'OpenCV'],
      highlights: [
        'Real-time detection using YOLOv11',
        'Classification via ResNet transfer learning',
        'UNet semantic segmentation for pixel-level boundaries',
      ],
      github: 'https://github.com/Zahir-Ahmad9897/Computer_Vision_Project-classification-detection-segmentation-',
    },
    {
      id: 'p3',
      title: 'Face Skin Diseases Classification',
      category: 'Computer Vision',
      description:
        'Face Skin diseases classification using MobileNet with an annotated Roboflow dataset.',
      tech: ['Python', 'MobileNet', 'Roboflow'],
      highlights: [
        'MobileNet architecture for efficient classification',
        'Custom annotated dataset using Roboflow',
        'Automated face disease identification pipeline',
      ],
      github: 'https://github.com/Zahir-Ahmad9897/Face_skin_diseases_classification',
    },
    {
      id: 'p4',
      title: 'AI Research Paper Summarizer',
      category: 'NLP',
      description:
        'Production-grade FastAPI application that fetches, analyzes, and summarizes AI research papers from arXiv using the Groq LLM API.',
      tech: ['FastAPI', 'Groq API', 'arXiv API', 'Python'],
      highlights: [
        'Fetches papers live from arXiv API',
        '18-column comparison matrix for multi-paper analysis',
        'Groq LLM-powered intelligent summarization',
        'Modular, team-ready codebase',
      ],
      github: 'https://github.com/Zahir-Ahmad9897/Research-paper-summarizer',
    },
    {
      id: 'p5',
      title: 'Movie Review Sentiment Analyzer',
      category: 'NLP',
      description:
        'Deep learning sentiment classifier trained on 50K IMDB reviews with an interactive real-time web interface.',
      tech: ['TensorFlow', 'SimpleRNN', 'Streamlit'],
      highlights: [
        '85%+ accuracy on 50K IMDB reviews',
        'Real-time sentiment prediction web app',
        'Interactive Streamlit deployment',
      ],
      github: 'https://github.com/Zahir-Ahmad9897/SimpleRNN_IMDB_Review_Classification',
    },
    {
      id: 'p6',
      title: 'Next Word Prediction System',
      category: 'NLP',
      description:
        'Text generation system using LSTM architectures trained on a Shakespeare corpus, with temperature-controlled sampling.',
      tech: ['TensorFlow', 'LSTM', 'NLTK', 'Streamlit'],
      highlights: [
        'LSTM architecture trained on Shakespeare corpus',
        'Temperature-based sampling for creativity control',
        'Interactive web interface for text generation',
      ],
      github: 'https://github.com/Zahir-Ahmad9897/LSTM_Next_word_prediction',
    },
    {
      id: 'p7',
      title: 'Transformer Scratch Code',
      category: 'NLP',
      description:
        'Implementation of a Transformer architecture built entirely from scratch in PyTorch/TensorFlow to understand core concepts.',
      tech: ['Python', 'Transformers', 'Deep Learning'],
      highlights: [
        'Built entirely from scratch without high-level library dependencies',
        'Core self-attention mechanism implementation',
        'Deep architectural understanding of LLMs',
      ],
      github: 'https://github.com/Zahir-Ahmad9897/Transformer_Scratch_code',
    },
    {
      id: 'p8',
      title: 'GPT-BERT Scratch Code',
      category: 'NLP',
      description:
        'Implementations of GPT and BERT foundational models from scratch for deep technical understanding of generative AI.',
      tech: ['Python', 'GPT', 'BERT'],
      highlights: [
        'Scratch implementation of encoder (BERT) architectures',
        'Scratch implementation of decoder (GPT) architectures',
        'Foundational understanding of modern LLM building blocks',
      ],
      github: 'https://github.com/Zahir-Ahmad9897/GPT-BERT_Scratch_code',
    },
    {
      id: 'p9',
      title: 'ANN Classification: Bank Churn',
      category: 'Data Science',
      description:
        'Artificial Neural Network project focused on classifying and predicting bank customer churn rates.',
      tech: ['Python', 'ANN', 'Classification', 'TensorFlow'],
      highlights: [
        'End-to-end data preprocessing pipeline for tabular data',
        'Multi-layer perceptron architecture',
        'Business-case focused predictive modeling',
      ],
      github: 'https://github.com/Zahir-Ahmad9897/ANN_Classification_Bank_Churn_Project',
    },
    {
      id: 'p10',
      title: 'ANN Regression: Bank Salary',
      category: 'Data Science',
      description:
        'Artificial Neural Network regression project for predicting continuous financial values/salaries.',
      tech: ['Python', 'ANN', 'Regression', 'TensorFlow'],
      highlights: [
        'Regression-based neural network architecture',
        'Continuous value prediction metrics tracking',
        'Financial dataset analysis',
      ],
      github: 'https://github.com/Zahir-Ahmad9897/ANN_Regression_Bank_Salary_Project',
    },
    {
      id: 'p11',
      title: 'Computer Vision Face Detection',
      category: 'Computer Vision',
      description:
        'Core foundational face detection implementation exploring different detection methodologies.',
      tech: ['Python', 'Computer Vision', 'OpenCV'],
      highlights: [
        'Implementation of primary face detection algorithms',
        'Real-time processing capabilities',
        'Bounding box generation and tracking',
      ],
      github: 'https://github.com/Zahir-Ahmad9897/Computer_Vision_Face_detection',
    },
    {
      id: 'p12',
      title: 'Generative AI Basic Projects',
      category: 'Gen AI',
      description:
        'A collection of exploratory generative AI projects focusing on the basics of prompt engineering and LLM integrations.',
      tech: ['Gen AI', 'Python', 'LLMs'],
      highlights: [
        'Exploratory generative AI techniques',
        'API integrations and prompt structuring',
        'Hands-on Gen AI playground',
      ],
      github: 'https://github.com/Zahir-Ahmad9897/Generative_Ai_Basic_projects',
    },
  ],

  certifications: [
    { name: 'Computer Vision Bootcamp', org: 'GIKI (Ghulam Ishaq Khan Institute)', year: '2025' },
    { name: 'Generative AI Workshop', org: 'Udemy — Krish Naik', year: '2025' },
  ],

  achievements: [],

  faqs: [
    {
      q: 'Is Zahir available for freelance work?',
      a: 'Yes! Zahir is open to freelance and contract projects in Computer Vision, Deep Learning, and AI systems. Reach him at zahirahmad9897@gmail.com.',
    },
    {
      q: 'What makes Zahir unique?',
      a: 'He combines strong ML fundamentals with hardware and edge AI experience — he ships production-ready systems, not just notebooks.',
    },
    {
      q: 'What is his strongest skill?',
      a: 'Zahir excels at Computer Vision, particularly face recognition and object detection using PyTorch and YOLO architectures.',
    },
    {
      q: 'Can Zahir deploy models on edge devices?',
      a: 'Absolutely — Zahir has hands-on experience deploying models on Raspberry Pi and Jetson Nano with full hardware integration.',
    },
    {
      q: 'What is his educational background?',
      a: 'Zahir holds a BS in Computer Software Engineering from UET Mardan with a CGPA of 3.10/4.00.',
    },
  ],
};
