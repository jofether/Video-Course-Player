export const COURSE_DATA = {
  title: 'Advanced Multimodal AI Engineering',
  instructor: 'Dr. Sarah Chen',
  rating: 4.8,
  reviewCount: 2847,
  students: 34200,
  image: 'https://images.unsplash.com/photo-1677442d019cecf474d69a4ee5365fe46ab200e89eee308547528c25d456cf61?w=1200&h=600&fit=crop',
  description: 'Master the art of building cutting-edge AI systems that understand both images and text. Learn how to build gating networks, vision transformers, and multimodal fusion architectures.',
  level: 'Advanced',
  duration: '12 weeks',
  price: '$299.99',
  highlights: [
    'Hands-on projects with real-world datasets',
    'Access to community forum with 50k+ members',
    'Downloadable resources and code templates',
    'Certificate of completion'
  ]
};

export const LESSONS = [
  { 
    id: 1, 
    title: 'Introduction to Multimodal AI', 
    duration: '10:05',
    description: 'Understand the fundamentals of combining visual and textual data in AI systems.',
    videoUrl: 'https://player.vimeo.com/video/placeholder'
  },
  { 
    id: 2, 
    title: 'Setting up the Environment', 
    duration: '15:30',
    description: 'Configure your development environment with PyTorch, transformers, and CUDA support.'
  },
  { 
    id: 3, 
    title: 'Understanding Vision Transformers', 
    duration: '22:15',
    description: 'Deep dive into ViT architecture, attention mechanisms, and image tokenization.'
  },
  { 
    id: 4, 
    title: 'Building the Dataset', 
    duration: '18:00',
    description: 'Explore data collection strategies, preprocessing, and augmentation techniques.'
  },
  { 
    id: 5, 
    title: 'Training the Gating Network', 
    duration: '25:45',
    description: 'Implement and optimize gating mechanisms for dynamic feature fusion.'
  },
  { 
    id: 6, 
    title: 'Advanced Fusion Strategies', 
    duration: '19:30',
    description: 'Learn multi-head attention and cross-modal interaction patterns.'
  },
];
