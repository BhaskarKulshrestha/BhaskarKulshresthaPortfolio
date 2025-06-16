"use client";

import Image from "next/image";
import { Github, Linkedin, Mail, ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ResumeButton } from "@/components/resume-button";


const getDurationInYearsAndMonths = () => {
  const startYear = 2024;
  const startMonth = 8; // August (1-based index)

  const startDate = new Date(startYear, startMonth - 1); // Convert to 0-based
  const today = new Date();

  let years = today.getFullYear() - startDate.getFullYear();
  let months = today.getMonth() + 1 - startMonth; // Convert to 1-based

  if (months < 0) {
    years--;
    months += 12;
  }

  return `${years > 0 ? `${years} yr${years > 1 ? "s" : ""} ` : ""}${
    months > 0 ? `${months} mo${months > 1 ? "s" : ""}` : ""
  }`;
};


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-10 backdrop-blur-md bg-white/80 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Bhaskar Kulshrestha
          </h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#leetcode"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  LeetCode
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  Bhaskar Kulshrestha
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-6">
                Software Developer & Problem Solver
              </p>
              <p className="text-gray-600 mb-8 max-w-lg">
                Passionate about building elegant solutions to complex problems
                with clean, efficient code.
              </p>
              <div className="flex space-x-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                >
                  <a href="#contact">Get in Touch</a>
                </Button>
                <Button asChild variant="outline">
                  <a href="#projects">View Projects</a>
                </Button>
              </div>
            </div>
            <div className="md:w-2/5 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/95305804-VtJeDqcdGfa8a1OpHdtU4AmDlghMVK.jpeg"
                  alt="Bhaskar Kulshrestha"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              About{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 mb-6 text-lg">
                I'm Bhaskar Kulshrestha, a software developer with a passion for
                creating efficient and elegant solutions. I specialize in
                building web applications and solving complex programming
                challenges.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                My journey in software development began with a curiosity about
                how things work, which evolved into a deep interest in
                programming and problem-solving. I enjoy working with modern
                technologies and continuously expanding my knowledge in the
                field.
              </p>
              <p className="text-gray-600 text-lg">
                When I'm not coding, you can find me solving algorithmic
                problems on LeetCode, contributing to open-source projects, or
                exploring new technologies to enhance my skill set.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              My{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-8">
              {/* SAP Experience */}
              <Card className="border-l-4 border-blue-500 shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold flex items-center gap-2">
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg"
                      alt="SAP Logo"
                      width={100}
                      height={100}
                      className="rounded-sm"
                    />
                    SAP
                  </CardTitle>
                  <CardDescription className="text-gray-500">
{/*                     Full-time • 9 mos • Bengaluru, Karnataka, India */}
                    <span>{`Full-time • ${getDurationInYearsAndMonths()} • Bengaluru, Karnataka, India`}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="py-4">
                  <h3 className="font-semibold mb-2">
                    SAP Next Gen STAR - Software Engineer
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Aug 2024 - Present • ( On-site )
                  </p>
                  <p className="text-gray-600 mb-2 font-semibold">
                    Key Highlights:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4">
                    <ul>
                      <li>
                        Innovative Cloud Solutions: Work on cloud applications
                        in S/4HANA Public Cloud for professional services.
                      </li>
                      <li>
                        End-to-End Project Management: Develop solutions for
                        efficient project planning, execution, and monitoring.
                      </li>
                      <li>
                        High-Impact Clients: Collaborate with industry leaders
                        like PwC and Deloitte, while expanding to new clients.
                      </li>
                    </ul>
                  </ul>

                  <p className="text-gray-600 mb-2 font-semibold">
                    Roles and Responsibilities:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4">
                    <ul>
                      <li>
                        Develop & Customize SAP Applications: Use Fiori, UI5,
                        RAP, ABAP, CDS, OData, etc.
                      </li>
                      <li>
                        Code Quality: Write clean, scalable, and efficient code;
                        troubleshoot and debug.
                      </li>
                      <li>
                        Collaborate Cross-Functionally: Work with product
                        owners, scrum masters, development, and QA teams.
                      </li>
                      <li>
                        Full Development Lifecycle: Engage in design,
                        development, testing, and deployment.
                      </li>
                      <li>
                        Stay Updated: Continuously learn and apply latest SAP
                        technologies and trends.
                      </li>
                    </ul>
                  </ul>
                  <Badge className="bg-gray-200 text-gray-700 mr-2">ABAP</Badge>
                  <Badge className="bg-gray-200 text-gray-700 mr-2">
                    Core data service (CDS) in abap
                  </Badge>
                  <Badge className="bg-gray-200 text-gray-700 mr-2">
                    SAP GUI (SAP Graphical User Interface )
                  </Badge>
                  <Badge className="bg-gray-200 text-gray-700 mr-2">
                    SAP RAP (RESTful Application Programming Model)
                  </Badge>
                  <Badge className="bg-gray-200 text-gray-700 mr-2">
                    REST API
                  </Badge>
                  
                </CardContent>
              </Card>


              {/* Oasis Infobyte Internship */}
              <Card className="border-l-4 border-orange-500 shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold flex items-center gap-2">
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyq7rG9Y9tkmDZLIzbnde7wd08wokqwaSAlA&s"
                      alt="Oasis Infobyte Logo"
                      width={100}
                      height={100}
                      className="rounded-sm"
                    />
                    Web Development and Designing Intern
                  </CardTitle>
                  <CardDescription className="text-gray-500">
                    Oasis Infobyte • Internship • Sep 2022 - Oct 2022 • 2 mos •
                    India
                  </CardDescription>
                </CardHeader>
                <CardContent className="py-4">
                  <p className="text-gray-600 mb-4">
                  Build and design landing pages that are visually appealing and user-friendly,Create a personal portfolio website that showcases one's skills and accomplishments,Develop a temperature converting website that accurately converts temperatures between Celsius and Fahrenheit , Write clean and well-documented code , Collaborate with designers, project managers, and other team members to ensure timely completion of projects , updated my knowledge of web development tools and technologies.
                  </p>
                  <Badge className="bg-gray-200 text-gray-700 mr-2">
                    Problem Solving
                  </Badge>
                  <Badge className="bg-gray-200 text-gray-700 mr-2">
                    English
                  </Badge>
                  <Badge className="bg-gray-200 text-gray-700">+6 skills</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              My{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Languages */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    Languages
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-500 hover:bg-blue-600">
                    JavaScript
                  </Badge>
                  <Badge className="bg-yellow-500 hover:bg-yellow-600">
                    Python
                  </Badge>
                  <Badge className="bg-orange-500 hover:bg-orange-600">
                    Java
                  </Badge>
                  <Badge className="bg-cyan-500 hover:bg-cyan-600">C++</Badge>
                  <Badge className="bg-green-500 hover:bg-green-600">
                    HTML/CSS
                  </Badge>
                  <Badge className="bg-yellow-500 hover:bg-yellow-600">
                    ABAP
                  </Badge>
                  <Badge className="bg-green-500 hover:bg-green-600">
                    SAP RAP
                  </Badge>
                </CardContent>
              </Card>

              {/* Frameworks & Libraries */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    Frameworks & Libraries
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-500 hover:bg-blue-600">React</Badge>
                  <Badge className="bg-purple-500 hover:bg-purple-600">
                    Spring Boot
                  </Badge>
                  <Badge className="bg-green-500 hover:bg-green-600">
                    Node.js
                  </Badge>
                  <Badge className="bg-red-500 hover:bg-red-600">Express</Badge>
  
                </CardContent>
              </Card>

              {/* Tools & Technologies */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    Tools & Technologies
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge className="bg-orange-500 hover:bg-orange-600">
                    Git
                  </Badge>
                  <Badge className="bg-blue-500 hover:bg-blue-600">
                    Docker
                  </Badge>
                  <Badge className="bg-green-500 hover:bg-green-600">
                    MongoDB
                  </Badge>
                  <Badge className="bg-purple-500 hover:bg-purple-600">
                    PostgreSQL
                  </Badge>
                  <Badge className="bg-purple-500 hover:bg-purple-600">
                    MySQL
                  </Badge>
                  <Badge className="bg-purple-500 hover:bg-purple-600">
                    OData
                  </Badge>
                  <Badge className="bg-purple-500 hover:bg-purple-600">
                    Git
                  </Badge>
                  <Badge className="bg-purple-500 hover:bg-purple-600">
                    Github
                  </Badge>
                  <Badge className="bg-red-500 hover:bg-red-600">AWS</Badge>
                </CardContent>
              </Card>

              {/* SAP Technologies */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    SAP Technologies
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge className="bg-orange-500 hover:bg-orange-600">
                    ABAP
                  </Badge>
                  <Badge className="bg-blue-500 hover:bg-blue-600">
                    RAP
                  </Badge>
                  <Badge className="bg-green-500 hover:bg-green-600">
                    CDS view 
                  </Badge>
                  <Badge className="bg-purple-500 hover:bg-purple-600">
                    Debugging
                  </Badge>
                  <Badge className="bg-purple-500 hover:bg-purple-600">
                    SAP Report 
                  </Badge>
                  <Badge className="bg-red-500 hover:bg-red-600">
                    Transaction Codes
                  </Badge>
                </CardContent>
              </Card>

              {/* Other Concepts */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    Other Concepts
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge className="bg-orange-500 hover:bg-orange-600">
                    Data Structure
                  </Badge>
                  <Badge className="bg-blue-500 hover:bg-blue-600">
                    Algorithms
                  </Badge>
                  <Badge className="bg-green-500 hover:bg-green-600">
                    OOPs
                  </Badge>
                  <Badge className="bg-red-500 hover:bg-red-600">
                    Version Control
                  </Badge>
                  
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 relative">
          {/* Blurry coding background */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center opacity-10"
              style={{
                backgroundImage:
                  "url('/placeholder.svg?height=1080&width=1920')",
                filter: "blur(8px)",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/70"></div>
          </div>

          <div className="container mx-auto relative z-10">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Featured{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Project 1 */}
              <Card className="flex flex-col h-full backdrop-blur-sm bg-white/80 border border-gray-200 shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle>CodeSnippetManager</CardTitle>
                  <CardDescription>
                    A collection of competitive programming solutions and
                    algorithms
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">MERN stack</Badge>
                    <Badge variant="outline">Docker</Badge>
                    <Badge variant="outline">Jenkins</Badge>
                  </div>
                  <p className="text-gray-600">
                    Solutions to various competitive programming problems from
                    platforms like LeetCode, CodeForces, and HackerRank.
                    Includes implementations of common algorithms and data
                    structures.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href="https://github.com/BhaskarKulshrestha/CodeSnippetManager"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Code size={16} /> View Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>

              {/* Project 2 */}
              <Card className="flex flex-col h-full backdrop-blur-sm bg-white/80 border border-gray-200 shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle>KEEPER: The Note Apps</CardTitle>
                  <CardDescription>
                  Keeper is the note taking application built on 
                  MERN stack.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">React.js</Badge>
                    <Badge variant="outline">MongoDB</Badge>
                  </div>
                  <p className="text-gray-600">
                  Keeper-Version-2.0 is an updated version of the Keeper application, a simple note-taking web app built with React.js. With Keeper-Version-2.0, users can create, edit, and delete notes effortlessly build on the MERN techstack.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href="https://github.com/BhaskarKulshrestha/Keeper-Version-2.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Code size={16} /> View Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>

              {/* Project 3 */}
              <Card className="flex flex-col h-full backdrop-blur-sm bg-white/80 border border-gray-200 shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle>ECOMM-The-online-Store
                  </CardTitle>
                  <CardDescription>
                    A UI of the E-commerce website.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">HTML</Badge>
                    <Badge variant="outline">CSS</Badge>
                    <Badge variant="outline">Javascript</Badge>
                    <Badge variant="outline">Bootstrap</Badge>
                  </div>
                  <p className="text-gray-600">
                  E-commerce refers to the buying and selling of goods and services online. Online stores, also known as e-commerce websites, are platforms that allow businesses to sell their products or services to customers over the internet. E-commerce has become increasingly popular in recent years due to the convenience and accessibility it offers to both businesses and consumers.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href="https://github.com/BhaskarKulshrestha/Machine-Learning-Projects"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Code size={16} /> View Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>

              {/* Project 4 */}
              <Card className="flex flex-col h-full backdrop-blur-sm bg-white/80 border border-gray-200 shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle>Daily-Journal---The-Blog-Website</CardTitle>
                  <CardDescription>
                    A website where you can write the journal of your daily-tasks and save it.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">Bootstrap</Badge>
                    <Badge variant="outline">EJS</Badge>
                    <Badge variant="outline">MongoDB</Badge>
                  </div>
                  <p className="text-gray-600">
                  The "DAILY-JOURNAL - Your Blog Area" is a web application designed for users who want to maintain a personal blog. This repository provides the complete source code of the application along with the necessary documentation to run it on a local machine.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href="https://github.com/BhaskarKulshrestha/Daily-Journal---The-Blog-Website-Full-Version-"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Code size={16} /> View Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* LeetCode Section */}
        <section id="leetcode" className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              My{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                LeetCode
              </span>{" "}
              Profile
            </h2>

            <div className="max-w-3xl mx-auto">
              <Card>
                <CardHeader className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
                  <CardTitle className="flex items-center justify-between">
                    <span>LeetCode Stats</span>
                    <Code size={24} />
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <p className="text-gray-500 text-sm">Problems Solved</p>
                      <p className="text-3xl font-bold text-orange-500">200+</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <p className="text-gray-500 text-sm">Contest Rating</p>
                      <p className="text-3xl font-bold text-blue-500">1750</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <p className="text-gray-500 text-sm">Global Ranking</p>
                      <p className="text-3xl font-bold text-green-500">
                        Top 30%
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 text-center">
                    I regularly solve algorithmic problems to sharpen my
                    problem-solving skills and coding efficiency.
                  </p>
                  <div className="flex justify-center">
                    <Button
                      asChild
                      className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600"
                    >
                      <a
                        href="https://leetcode.com/u/bhaskar_kulshrestha/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink size={16} /> Visit My LeetCode Profile
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Github Section */}
        <section id="Github" className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              My{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                GitHub
              </span>{" "}
              Profile
            </h2>

            <div className="max-w-3xl mx-auto">
              <Card>
                <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                  <CardTitle className="flex items-center justify-between">
                    <span>GitHub Stats</span>
                    <Code size={24} />
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <p className="text-gray-500 text-sm">Contributions</p>
                      <p className="text-3xl font-bold text-orange-500">160+</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <p className="text-gray-500 text-sm">Trophies</p>
                      <p className="text-3xl font-bold text-blue-500">11</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <p className="text-gray-500 text-sm">
                        Open Source Contributions
                      </p>
                      <p className="text-3xl font-bold text-green-500">
                        HactoberFest 2024
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 text-center">
                    I regularly solve algorithmic problems to sharpen my
                    problem-solving skills and coding efficiency.
                  </p>
                  <div className="flex justify-center">
                    <Button
                      asChild
                      className="bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-orange-600 hover:to-red-600"
                    >
                      <a
                        href="https://github.com/BhaskarKulshrestha/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink size={16} /> Visit My GitHub Profile
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Download My{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Resume
              </span>
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Get a comprehensive overview of my skills, experience, and
              educational background in a downloadable PDF format.
            </p>
            <ResumeButton />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Get In{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>

            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 mb-8 text-center text-lg">
                Feel free to reach out for collaborations, opportunities, or
                just to say hello!
              </p>

              <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
                <a
                  href="https://github.com/BhaskarKulshrestha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-purple-500 hover:bg-white transition-all"
                >
                  <div className="bg-gray-900 p-3 rounded-full">
                    <Github className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium">GitHub</h3>
                    <p className="text-sm text-gray-500">BhaskarKulshrestha</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/bhaskar-kulshrestha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-purple-500 hover:bg-white transition-all"
                >
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Linkedin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium">LinkedIn</h3>
                    <p className="text-sm text-gray-500">bhaskar-kulshrestha</p>
                  </div>
                </a>

                <a
                  href="mailto:bhaskarkulshrestha03@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-purple-500 hover:bg-white transition-all"
                >
                  <div className="bg-red-500 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-gray-500">
                      bhaskarkulshrestha03@gmail.com
                    </p>
                  </div>
                </a>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Send Me a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as
                    possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="contact-right">
                    <form
                      action="https://api.web3forms.com/submit"
                      method="POST"
                      className="space-y-4"
                    >
                      <input
                        type="hidden"
                        name="access_key"
                        value="ab407391-0d88-4806-831c-2fd7c6ba7477"
                      />

                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <input
                          type="text"
                          name="Name"
                          id="name"
                          placeholder="Your Name"
                          required
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Your Email"
                          required
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium"
                        >
                          Message
                        </label>
                        <textarea
                          name="Message"
                          id="message"
                          rows={6}
                          placeholder="Your Message"
                          required
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        ></textarea>
                      </div>

                      <div className="flex space-x-4">
                        <Button
                          type="submit"
                          className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                        >
                          Submit
                        </Button>
                        <Button type="reset" variant="outline">
                          Reset
                        </Button>
                      </div>
                    </form>
                    <script
                      src="https://web3forms.com/client/script.js"
                      async
                      defer
                    ></script>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Bhaskar Kulshrestha</h2>
              <p className="text-gray-400">
                Software Developer & Problem Solver
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/BhaskarKulshrestha"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/bhaskar-kulshrestha"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://leetcode.com/u/bhaskar_kulshrestha/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors"
              >
                <Code className="h-6 w-6" />
                <span className="sr-only">LeetCode</span>
              </a>
              <a
                href="mailto:bhaskarkulshrestha03@gmail.com"
                className="hover:text-purple-400 transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Bhaskar Kulshrestha. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
