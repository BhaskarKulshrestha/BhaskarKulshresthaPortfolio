"use client"

import Image from "next/image"
import { Github, Linkedin, Mail, ExternalLink, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ResumeButton } from "@/components/resume-button"

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
                <a href="#about" className="text-gray-600 hover:text-purple-600 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#leetcode" className="text-gray-600 hover:text-purple-600 transition-colors">
                  LeetCode
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors">
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
              <p className="text-xl md:text-2xl text-gray-600 mb-6">Software Developer & Problem Solver</p>
              <p className="text-gray-600 mb-8 max-w-lg">
                Passionate about building elegant solutions to complex problems with clean, efficient code.
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
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 mb-6 text-lg">
                I'm Bhaskar Kulshrestha, a software developer with a passion for creating efficient and elegant
                solutions. I specialize in building web applications and solving complex programming challenges.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                My journey in software development began with a curiosity about how things work, which evolved into a
                deep interest in programming and problem-solving. I enjoy working with modern technologies and
                continuously expanding my knowledge in the field.
              </p>
              <p className="text-gray-600 text-lg">
                When I'm not coding, you can find me solving algorithmic problems on LeetCode, contributing to
                open-source projects, or exploring new technologies to enhance my skill set.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              My{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Skills</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Languages */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">Languages</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-500 hover:bg-blue-600">JavaScript</Badge>
                  <Badge className="bg-yellow-500 hover:bg-yellow-600">Python</Badge>
                  <Badge className="bg-orange-500 hover:bg-orange-600">Java</Badge>
                  <Badge className="bg-cyan-500 hover:bg-cyan-600">C++</Badge>
                  <Badge className="bg-green-500 hover:bg-green-600">HTML/CSS</Badge>
                </CardContent>
              </Card>

              {/* Frameworks & Libraries */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">Frameworks & Libraries</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-500 hover:bg-blue-600">React</Badge>
                  <Badge className="bg-purple-500 hover:bg-purple-600">Next.js</Badge>
                  <Badge className="bg-green-500 hover:bg-green-600">Node.js</Badge>
                  <Badge className="bg-red-500 hover:bg-red-600">Express</Badge>
                  <Badge className="bg-cyan-500 hover:bg-cyan-600">Tailwind CSS</Badge>
                </CardContent>
              </Card>

              {/* Tools & Technologies */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">Tools & Technologies</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge className="bg-orange-500 hover:bg-orange-600">Git</Badge>
                  <Badge className="bg-blue-500 hover:bg-blue-600">Docker</Badge>
                  <Badge className="bg-green-500 hover:bg-green-600">MongoDB</Badge>
                  <Badge className="bg-purple-500 hover:bg-purple-600">PostgreSQL</Badge>
                  <Badge className="bg-red-500 hover:bg-red-600">AWS</Badge>
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
                backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
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
                  <CardTitle>Competitive Programming</CardTitle>
                  <CardDescription>A collection of competitive programming solutions and algorithms</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">C++</Badge>
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">Data Structures</Badge>
                    <Badge variant="outline">Algorithms</Badge>
                  </div>
                  <p className="text-gray-600">
                    Solutions to various competitive programming problems from platforms like LeetCode, CodeForces, and
                    HackerRank. Includes implementations of common algorithms and data structures.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href="https://github.com/BhaskarKulshrestha/Competitive-Programming"
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
                  <CardTitle>Data Structures and Algorithms</CardTitle>
                  <CardDescription>Implementation of various data structures and algorithms in C++</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">C++</Badge>
                    <Badge variant="outline">Data Structures</Badge>
                    <Badge variant="outline">Algorithms</Badge>
                    <Badge variant="outline">Problem Solving</Badge>
                  </div>
                  <p className="text-gray-600">
                    A comprehensive collection of data structures and algorithms implemented in C++. Includes sorting
                    algorithms, searching techniques, graph algorithms, and more.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href="https://github.com/BhaskarKulshrestha/Data-Structures-and-Algorithms"
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
                  <CardTitle>Machine Learning Projects</CardTitle>
                  <CardDescription>Collection of machine learning models and projects</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">TensorFlow</Badge>
                    <Badge variant="outline">Scikit-learn</Badge>
                    <Badge variant="outline">Data Analysis</Badge>
                  </div>
                  <p className="text-gray-600">
                    Various machine learning projects including classification, regression, and clustering models.
                    Implementations of neural networks and data preprocessing techniques.
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
                  <CardTitle>Web Development Portfolio</CardTitle>
                  <CardDescription>Collection of web development projects using modern frameworks</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Next.js</Badge>
                    <Badge variant="outline">Tailwind CSS</Badge>
                  </div>
                  <p className="text-gray-600">
                    A showcase of web development projects built with modern frameworks and libraries. Includes
                    responsive designs, API integrations, and interactive user interfaces.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href="https://github.com/BhaskarKulshrestha/Web-Development-Portfolio"
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
                      <p className="text-3xl font-bold text-green-500">Top 10%</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 text-center">
                    I regularly solve algorithmic problems to sharpen my problem-solving skills and coding efficiency.
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

        {/* Resume Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Download My{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Resume</span>
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Get a comprehensive overview of my skills, experience, and educational background in a downloadable PDF
              format.
            </p>
            <ResumeButton />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Get In{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Touch</span>
            </h2>

            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 mb-8 text-center text-lg">
                Feel free to reach out for collaborations, opportunities, or just to say hello!
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
                    <p className="text-sm text-gray-500">bhaskarkulshrestha03@gmail.com</p>
                  </div>
                </a>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Send Me a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="contact-right">
                    <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
                      <input type="hidden" name="access_key" value="ab407391-0d88-4806-831c-2fd7c6ba7477" />

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
                        <label htmlFor="message" className="text-sm font-medium">
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
                    <script src="https://web3forms.com/client/script.js" async defer></script>
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
              <p className="text-gray-400">Software Developer & Problem Solver</p>
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
              <a href="mailto:bhaskarkulshrestha03@gmail.com" className="hover:text-purple-400 transition-colors">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Bhaskar Kulshrestha. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
