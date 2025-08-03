"use client"

import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
  liveUrl?: string
  githubUrl?: string
}

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      id: 1,
      title: "WordPress Development + API Automation",
      description:
        "A dynamic WordPress integration where a custom plugin creates CPTs based on external API data. Each response is stored in the database and displayed on the frontend without manual intervention. Built for scalability and maintainability.",
      tags: ["API Integration", "PHP", "WordPress", "SCSS", "JavasScript"],
      image: "/pt-solutions.jpeg?height=300&width=500",
      liveUrl: "https://ptsolutions.com/",
    },
    {
      id: 2,
      title: "Advanced Filtering & CPT Architecture",
      description:
        "A custom WordPress setup featuring multiple interrelated CPTs and dynamic filtering capabilities. Users can filter content by location and provider, with relationships powering the front-end display. Built for scalability and user-friendly content management.",
      tags: ["PHP", "WordPress", "SCSS", "JavasScript"],
      image: "/hello-hospcotch.jpeg?height=300&width=500",
      liveUrl: "https://hellohopscotch.com/",
    },
    {
      id: 3,
      title: "Custom WordPress Theme & CPTs",
      description:
        "A fully custom WordPress theme designed with meticulous attention to detail and mobile-first responsiveness. Includes multiple CPTs with defined relationships to structure complex content and enhance user experience.",
      tags: ["PHP", "WordPress", "SCSS", "JavasScript"],
      image: "/clarus-care.jpeg?height=300&width=500",
      liveUrl: "https://claruscare.com/",
    },
    {
      id: 4,
      title: "Hierarchical CPT Framework",
      description:
        "Custom WordPress theme built around a hierarchical CPT structure with parent-child relationships. Content is automatically populated across the site based on these connections, enabling dynamic rendering without manual updates.",
      tags: ["PHP", "WordPress", "SCSS", "JavasScript"],
      image: "/pelvic-rehab.jpeg?height=300&width=500",
      liveUrl: "https://pelvicrehabilitation.com/",
    },
    {
      id: 5,
      title: "Custom UI & Gutenberg Blocks",
      description:
        "A modern interface redesign paired with custom-built Gutenberg blocks to enhance content flexibility and editorial control. Each block was handcrafted to match the design system and improve user experience in the WordPress editor.",
      tags: ["React", "Gutenberg", "WordPress", "JavaScript", "PHP"],
      image: "/eleanor-health.jpeg?height=300&width=500",
      liveUrl: "https://eleanorhealth.com/",
    },
    {
      id: 6,
      title: "React Weather App",
      description:
        "A real-time weather application with animated backgrounds and geolocation features. Built with React, Vite, and Tailwind CSS, integrated with OpenWeatherMap API.",
      tags: ["React", "JavaScript", "Tailwind", "Weather API", "Vite", "Geolocation API", "OpenWeatherMap API"],
      image: "/weather-app.jpeg?height=300&width=500",
      liveUrl: "https://react-weather-app-ten-tau.vercel.app/",
    },
    {
      id: 7,
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing my projects and skills. Built with React, TypeScript, and Tailwind CSS.",
      tags: ["React", "TypeScript", "Tailwind CSS", "React Router"],
      image: "/portfolio.jpeg?height=300&width=500",
    },
  ]

  return (
    <div className="container py-12 md:py-24">
      <h1 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">My Projects</h1>
      <p className="mb-12 max-w-3xl text-lg text-muted-foreground">
        Here are some of the projects I've worked on. Each project represents a unique challenge and learning experience.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{project.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex gap-2">
              {project.liveUrl && (
                <Button asChild variant="default" size="sm">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

