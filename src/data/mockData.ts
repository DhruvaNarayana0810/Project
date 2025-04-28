
import { Course } from '@/types';

export const courses: Course[] = [
  {
    id: "1",
    title: "Introduction to Web Development",
    description: "Learn the fundamentals of web development including HTML, CSS, and JavaScript. This course is perfect for beginners who want to start creating websites.",
    image: "/placeholder.svg",
    category: "Web Development",
    lessons: [
      { id: "1-1", title: "HTML Basics", completed: false },
      { id: "1-2", title: "CSS Styling", completed: false },
      { id: "1-3", title: "JavaScript Fundamentals", completed: false },
      { id: "1-4", title: "Building a Simple Webpage", completed: false }
    ]
  },
  {
    id: "2",
    title: "Python Programming for Beginners",
    description: "Start your programming journey with Python. This course covers Python syntax, data types, control structures, and basic algorithms.",
    image: "/placeholder.svg",
    category: "Programming",
    lessons: [
      { id: "2-1", title: "Python Setup", completed: false },
      { id: "2-2", title: "Variables and Data Types", completed: false },
      { id: "2-3", title: "Control Structures", completed: false },
      { id: "2-4", title: "Functions and Modules", completed: false }
    ]
  },
  {
    id: "3",
    title: "Digital Marketing Essentials",
    description: "Understand the fundamentals of digital marketing including SEO, social media marketing, email campaigns, and analytics.",
    image: "/placeholder.svg",
    category: "Marketing",
    lessons: [
      { id: "3-1", title: "Digital Marketing Overview", completed: false },
      { id: "3-2", title: "SEO Fundamentals", completed: false },
      { id: "3-3", title: "Social Media Strategy", completed: false },
      { id: "3-4", title: "Analytics and Reporting", completed: false }
    ]
  },
  {
    id: "4",
    title: "Graphic Design Fundamentals",
    description: "Learn the basics of graphic design including color theory, typography, layout design, and using design software.",
    image: "/placeholder.svg",
    category: "Design",
    lessons: [
      { id: "4-1", title: "Design Principles", completed: false },
      { id: "4-2", title: "Color Theory", completed: false },
      { id: "4-3", title: "Typography Basics", completed: false },
      { id: "4-4", title: "Layout and Composition", completed: false }
    ]
  },
  {
    id: "5",
    title: "Data Science Introduction",
    description: "Start your journey into data science. Learn about data analysis, visualization, and basic statistical concepts.",
    image: "/placeholder.svg",
    category: "Data Science",
    lessons: [
      { id: "5-1", title: "Data Science Overview", completed: false },
      { id: "5-2", title: "Data Collection and Cleaning", completed: false },
      { id: "5-3", title: "Data Visualization", completed: false },
      { id: "5-4", title: "Basic Statistical Analysis", completed: false }
    ]
  },
  {
    id: "6",
    title: "Mobile App Development",
    description: "Learn how to develop mobile applications for iOS and Android platforms using React Native.",
    image: "/placeholder.svg",
    category: "Web Development",
    lessons: [
      { id: "6-1", title: "React Native Setup", completed: false },
      { id: "6-2", title: "Building UI Components", completed: false },
      { id: "6-3", title: "State Management", completed: false },
      { id: "6-4", title: "Publishing Your App", completed: false }
    ]
  }
];
