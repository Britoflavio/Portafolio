import { ArrowRight, Download, ExternalLink, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Portfolio() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Git",
    "Tailwind CSS",
    "GraphQL",
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      image: "",
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration, and analytics.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "",
      github: "#",
      live: "#",
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content creation platform with multiple templates and export options.",
      tech: ["Python", "FastAPI", "OpenAI", "React"],
      image: "",
      github: "#",
      live: "#",
    },
  ]

  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description:
        "Lead development of scalable web applications serving 100K+ users. Mentored junior developers and implemented CI/CD pipelines.",
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2020 - 2022",
      description:
        "Developed responsive web applications for various clients. Collaborated with design teams to implement pixel-perfect UIs.",
    },
    {
      title: "Junior Developer",
      company: "StartupXYZ",
      period: "2019 - 2020",
      description:
        "Built and maintained company website and internal tools. Gained experience in full-stack development.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">Portfolio</div>
            <div className="hidden md:flex space-x-6">
              <Link href="#about" className="hover:text-primary transition-colors">
                Sobre mí
              </Link>
              <Link href="#skills" className="hover:text-primary transition-colors">
                Habilidades
              </Link>
              <Link href="#projects" className="hover:text-primary transition-colors">
                Proyectos
              </Link>
              <Link href="#experience" className="hover:text-primary transition-colors">
                Experiencia
              </Link>
              <Link href="#contact" className="hover:text-primary transition-colors">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              DESARROLLADOR
              <br />
              FULL-STACK
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Creador de soluciones simples, utiles y escalables.
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Enfocado en construir sistemas simples, rápidos y usables.
              Trabajo con tecnologías modernas como MongoDB, Express, React y Node.js para resolver necesidades reales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Ver proyectos
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="group bg-transparent">
                <Download className="mr-2 h-4 w-4" />
                Descargar CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Sobre mí</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Professional portrait"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  Im a passionate Full-Stack Developer with over 5 years of experience creating digital solutions that
                  make a difference. I specialize in building scalable web applications using modern technologies.
                </p>
                <p className="text-lg text-muted-foreground">
                  My expertise spans from frontend development with React and Next.js to backend systems with Node.js
                  and Python. Im committed to writing clean, maintainable code and delivering exceptional user
                  experiences.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Cordoba, Argentina</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>Contacto</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Habilidades tecnicas</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Frontend</CardTitle>
                  <CardDescription>Modern UI/UX Development</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"].map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Backend</CardTitle>
                  <CardDescription>Server & Database Management</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"].map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>DevOps & Tools</CardTitle>
                  <CardDescription>Development & Deployment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["AWS", "Docker", "Git", "CI/CD", "Vercel"].map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Proyectos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" asChild>
                          <Link href={project.github}>
                            <Github className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button size="sm" variant="ghost" asChild>
                          <Link href={project.live}>
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experiencia</h2>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle>{job.title}</CardTitle>
                        <CardDescription className="text-lg">{job.company}</CardDescription>
                      </div>
                      <Badge variant="outline">{job.period}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{job.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Trabajemos juntos</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Siempre me interesan nuevas oportunidades y proyectos emocionantes. Si tienes una idea o un proyecto en mente, no dudes en contactarme.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Mail className="h-8 w-8 mx-auto mb-4 text-primary" />

                  <h3 className="font-semibold mb-2">Email</h3>
                  <a href="mailto:Britoflavio.it@gmail.com" className="text-muted-foreground">Britoflavio.it@gmail.com</a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Phone className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Telefono</h3>
                  <p className="text-muted-foreground">+54 (0351) 2133118</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <MapPin className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Ubicacion</h3>
                  <p className="text-muted-foreground">Cordoba Capital, Argentina</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center gap-4">
              <Button size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Contactame
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://www.linkedin.com/in/britoflavio-it/">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://github.com/Britoflavio">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground">© 2025 Portfolio. Flavio Brito</p>
        </div>
      </footer>
    </div>
  )
}
