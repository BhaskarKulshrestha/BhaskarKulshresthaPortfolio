"use server"

import { jsPDF } from "jspdf"

// Resume data structure
interface ResumeData {
  name: string
  title: string
  contact: {
    email: string
    phone?: string
    github: string
    linkedin: string
    leetcode: string
  }
  summary: string
  skills: {
    languages: string[]
    frameworks: string[]
    tools: string[]
  }
  experience: Array<{
    title: string
    company: string
    duration: string
    description: string[]
  }>
  education: Array<{
    degree: string
    institution: string
    duration: string
    gpa?: string
  }>
  projects: Array<{
    name: string
    description: string
    technologies: string[]
    link?: string
  }>
}

// Sample resume data for Bhaskar
const resumeData: ResumeData = {
  name: "Bhaskar Kulshrestha",
  title: "Software Developer",
  contact: {
    email: "bhaskarkulshrestha03@gmail.com",
    phone: "+91 9876543210",
    github: "github.com/BhaskarKulshrestha",
    linkedin: "linkedin.com/in/bhaskar-kulshrestha",
    leetcode: "leetcode.com/u/bhaskar_kulshrestha",
  },
  summary:
    "Passionate software developer with expertise in building web applications and solving complex programming challenges. Skilled in JavaScript, Python, and Java with experience in modern frameworks like React and Next.js.",
  skills: {
    languages: ["JavaScript", "Python", "Java", "C++", "HTML/CSS"],
    frameworks: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"],
    tools: ["Git", "Docker", "MongoDB", "PostgreSQL", "AWS"],
  },
  experience: [
    {
      title: "Software Developer",
      company: "Tech Solutions Inc.",
      duration: "Jan 2023 - Present",
      description: [
        "Developed and maintained full-stack web applications using React and Node.js",
        "Implemented RESTful APIs and database integrations",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "InnovateTech",
      duration: "May 2022 - Dec 2022",
      description: [
        "Assisted in developing front-end components using React",
        "Participated in code reviews and testing procedures",
        "Contributed to the implementation of new features and bug fixes",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Indian Institute of Technology",
      duration: "2019 - 2023",
      gpa: "8.5/10",
    },
  ],
  projects: [
    {
      name: "Competitive Programming",
      description: "A collection of competitive programming solutions and algorithms",
      technologies: ["C++", "Python", "Data Structures", "Algorithms"],
    },
    {
      name: "Data Structures and Algorithms",
      description: "Implementation of various data structures and algorithms in C++",
      technologies: ["C++", "Data Structures", "Algorithms", "Problem Solving"],
    },
    {
      name: "Machine Learning Projects",
      description: "Collection of machine learning models and projects",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Data Analysis"],
    },
    {
      name: "Web Development Portfolio",
      description: "Collection of web development projects using modern frameworks",
      technologies: ["JavaScript", "React", "Next.js", "Tailwind CSS"],
    },
  ],
}

export async function generateResumePDF(): Promise<string> {
  // Create a new PDF document
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  })

  // Set initial position
  let y = 15

  // Add header with name and title
  doc.setFontSize(24)
  doc.setTextColor(89, 65, 169) // Purple color
  doc.text(resumeData.name, 20, y)
  y += 8

  doc.setFontSize(14)
  doc.setTextColor(100, 100, 100)
  doc.text(resumeData.title, 20, y)
  y += 15

  // Add contact information
  doc.setFontSize(10)
  doc.setTextColor(80, 80, 80)
  const contactInfo = [
    `Email: ${resumeData.contact.email}`,
    `Phone: ${resumeData.contact.phone}`,
    `GitHub: ${resumeData.contact.github}`,
    `LinkedIn: ${resumeData.contact.linkedin}`,
    `LeetCode: ${resumeData.contact.leetcode}`,
  ]

  doc.text(contactInfo, 20, y)
  y += 20

  // Add summary
  addSection(doc, "SUMMARY", y)
  y += 8
  doc.setFontSize(10)
  doc.setTextColor(80, 80, 80)

  const splitSummary = doc.splitTextToSize(resumeData.summary, 170)
  doc.text(splitSummary, 20, y)
  y += splitSummary.length * 5 + 5

  // Add skills
  addSection(doc, "SKILLS", y)
  y += 8
  doc.setFontSize(10)

  doc.setFont("helvetica", "bold")
  doc.text("Languages:", 20, y)
  doc.setFont("helvetica", "normal")
  doc.text(resumeData.skills.languages.join(", "), 50, y)
  y += 5

  doc.setFont("helvetica", "bold")
  doc.text("Frameworks:", 20, y)
  doc.setFont("helvetica", "normal")
  doc.text(resumeData.skills.frameworks.join(", "), 50, y)
  y += 5

  doc.setFont("helvetica", "bold")
  doc.text("Tools:", 20, y)
  doc.setFont("helvetica", "normal")
  doc.text(resumeData.skills.tools.join(", "), 50, y)
  y += 15

  // Add experience
  addSection(doc, "EXPERIENCE", y)
  y += 8

  for (const exp of resumeData.experience) {
    doc.setFontSize(12)
    doc.setFont("helvetica", "bold")
    doc.setTextColor(50, 50, 50)
    doc.text(exp.title, 20, y)

    doc.setFontSize(10)
    doc.setFont("helvetica", "normal")
    doc.setTextColor(100, 100, 100)
    doc.text(exp.company, 20, y + 5)

    doc.setTextColor(120, 120, 120)
    doc.text(exp.duration, 150, y + 5, { align: "right" })
    y += 10

    doc.setTextColor(80, 80, 80)
    for (const desc of exp.description) {
      doc.text(`• ${desc}`, 25, y)
      y += 5
    }
    y += 5
  }

  // Add education
  addSection(doc, "EDUCATION", y)
  y += 8

  for (const edu of resumeData.education) {
    doc.setFontSize(12)
    doc.setFont("helvetica", "bold")
    doc.setTextColor(50, 50, 50)
    doc.text(edu.degree, 20, y)

    doc.setFontSize(10)
    doc.setFont("helvetica", "normal")
    doc.setTextColor(100, 100, 100)
    doc.text(edu.institution, 20, y + 5)

    doc.setTextColor(120, 120, 120)
    doc.text(edu.duration, 150, y + 5, { align: "right" })

    if (edu.gpa) {
      doc.text(`GPA: ${edu.gpa}`, 20, y + 10)
    }
    y += 15
  }

  // Add projects
  addSection(doc, "PROJECTS", y)
  y += 8

  for (const project of resumeData.projects) {
    doc.setFontSize(12)
    doc.setFont("helvetica", "bold")
    doc.setTextColor(50, 50, 50)
    doc.text(project.name, 20, y)
    y += 5

    doc.setFontSize(10)
    doc.setFont("helvetica", "normal")
    doc.setTextColor(80, 80, 80)
    const splitDesc = doc.splitTextToSize(project.description, 170)
    doc.text(splitDesc, 20, y)
    y += splitDesc.length * 5

    doc.setTextColor(100, 100, 100)
    doc.text(`Technologies: ${project.technologies.join(", ")}`, 20, y)
    y += 10
  }

  // Add footer
  doc.setFontSize(8)
  doc.setTextColor(150, 150, 150)
  doc.text(`Generated on ${new Date().toLocaleDateString()}`, 105, 285, { align: "center" })

  // Convert the PDF to a data URL
  const pdfDataUrl = doc.output("datauristring")
  return pdfDataUrl
}

// Helper function to add section headers
function addSection(doc: jsPDF, title: string, y: number) {
  doc.setFontSize(14)
  doc.setTextColor(89, 65, 169) // Purple color
  doc.setFont("helvetica", "bold")
  doc.text(title, 20, y)
  doc.setLineWidth(0.5)
  doc.setDrawColor(200, 200, 200)
  doc.line(20, y + 2, 190, y + 2)
  doc.setFont("helvetica", "normal")
}
