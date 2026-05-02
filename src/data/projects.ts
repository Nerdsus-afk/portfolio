import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

export type Project = {
  slug: string;
  img: string;
  title: string;
  tag: string;
  year: string;
  desc: string;
  stack: string[];
  role: string;
  duration: string;
  overview: string;
  highlights: string[];
  challenges: string[];
  outcomes: string[];
  github?: string;
};

export const projects: Project[] = [
  {
    slug: "lms-platform",
    img: p1,
    title: "LMS Platform",
    tag: "Internship · Full-Stack",
    year: "2025",
    desc: "Contributed to a Learning Management System with secure auth, course management, payments, and a real-time chat module using Socket.IO during my internship at Opportive.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Socket.IO", "JWT"],
    role: "Web Development Intern",
    duration: "Jul 2025 – Aug 2025",
    github: "https://github.com/Yashwantkumar2005/Learning-Management-System",
    overview:
      "At Opportive, I joined a small team improving a Learning Management System used by students and instructors. My focus areas were secure authentication, the course management surface, payment integration, and a brand new real-time chat experience.",
    highlights: [
      "Implemented secure authentication flows with hashed credentials and protected routes.",
      "Built course management features including listing, enrollment, and progress tracking.",
      "Wired up a payment flow so instructors could publish paid courses.",
      "Developed a real-time chat module with group messaging, reactions and notifications using Socket.IO and Express.",
    ],
    challenges: [
      "Designing chat rooms that scaled cleanly across devices and tabs.",
      "Keeping authentication strict while still allowing a smooth UX for new students.",
    ],
    outcomes: [
      "Smoother onboarding and checkout for paid courses.",
      "A chat experience that felt instantaneous, with reactions and unread indicators.",
    ],
  },
  {
    slug: "fake-news-classifier",
    img: p2,
    title: "Fake News Classifier",
    tag: "Machine Learning · NLP",
    year: "2024",
    desc: "Comparative study of Passive-Aggressive, Naïve Bayes, SVM, and Logistic Regression for fake news detection — tuned with GridSearch and evaluated via ROC, F1, precision, and recall.",
    stack: ["Python", "scikit-learn", "NLP", "Pandas", "Matplotlib"],
    role: "Collaborative Development · Academic Research",
    duration: "2024",
    github: "https://github.com/Yashwantkumar2005/Fake-News-Detection",
    overview:
      "An end-to-end ML study comparing four classical models for fake news classification. The goal was to understand which model genuinely generalised best, not just which had the highest top-line accuracy.",
    highlights: [
      "Cleaned and vectorised a labelled news dataset with TF-IDF.",
      "Trained Passive-Aggressive Classifier, Naïve Bayes, SVM, and Logistic Regression.",
      "Used GridSearchCV for hyperparameter tuning across all four models.",
      "Visualised performance via confusion matrices, ROC curves, and classification reports.",
    ],
    challenges: [
      "Naïve Bayes had a deceptively high accuracy but lagged on F1 and recall.",
      "Balancing speed and accuracy when tuning SVM on a larger feature space.",
    ],
    outcomes: [
      "Three of the four models reached comparably high accuracy.",
      "Demonstrated why F1 and recall matter more than accuracy for imbalanced misinformation data.",
    ],
  },
  {
    slug: "food-ordering-system",
    img: p3,
    title: "Food Ordering System",
    tag: "Desktop App",
    year: "2024",
    desc: "JavaFX restaurant ordering platform with dynamic menu switching, secure order processing, real-time database updates and authenticated user flows.",
    stack: ["Java", "JavaFX", "Scene Builder", "MySQL"],
    role: "Collaborative Development",
    duration: "2024",
    github: "https://github.com/Yashwantkumar2005/Food-Ordering-System",
    overview:
      "A desktop application that lets a restaurant manage menus and process orders while customers browse and order from a clean JavaFX interface.",
    highlights: [
      "Designed a menu-switching system that loads categories dynamically.",
      "Integrated MySQL for real-time order and inventory updates.",
      "Added authenticated login with database-backed verification.",
      "Built the UI in Scene Builder for clean separation of layout and logic.",
    ],
    challenges: [
      "Keeping the JavaFX UI responsive while doing live database calls.",
      "Modelling menus in a way that supported quick category switches.",
    ],
    outcomes: [
      "A reliable end-to-end flow from login to confirmed order.",
      "A code structure that made adding new menu sections trivial.",
    ],
  },
  {
    slug: "package-manager",
    img: p4,
    title: "Package Manager",
    tag: "Systems · Tooling",
    year: "2023",
    desc: "A desktop package manager for seamless library tracking with database-backed change history and a clean Tkinter interface.",
    stack: ["Python", "Tkinter", "MySQL"],
    role: "Collaborative Development",
    duration: "2023",
    github: "https://github.com/Yashwantkumar2005/Package-Manager",
    overview:
      "A small but useful desktop tool that helps track installed libraries and their changes across time, backed by a relational database.",
    highlights: [
      "Designed a schema to track packages and their version history.",
      "Built a Tkinter UI for installs, updates, and inspection.",
      "Wired live MySQL connectivity so changes were always reflected.",
    ],
    challenges: [
      "Making a Tkinter UI that still felt clean and modern.",
      "Designing a schema that handled both current state and history.",
    ],
    outcomes: [
      "A working tool for managing local library installations.",
      "Hands-on experience with desktop UI + relational database design.",
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
