"use client"

import { ExternalLink, Github } from "lucide-react"
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
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product search, cart functionality, and payment processing.",
      tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      image: "/placeholder.svg?height=300&width=500",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A productivity app that helps users organize tasks, set priorities, and track progress. Built with React and Firebase for real-time updates.",
      tags: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
      image: "/placeholder.svg?height=300&width=500",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A weather application that provides current conditions and forecasts for locations worldwide. Utilizes the OpenWeather API and features a responsive design.",
      tags: ["React", "API Integration", "CSS", "JavaScript"],
      image: "/placeholder.svg?height=300&width=500",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing my projects and skills. Built with React, TypeScript, and Tailwind CSS.",
      tags: ["React", "TypeScript", "Tailwind CSS", "React Router"],
      image: "/placeholder.svg?height=300&width=500",
      githubUrl: "https://github.com",
    },
  ]

  return (
    <div className="container py-12 md:py-24">
      <h1 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">My Projects</h1>
      <p className="mb-12 max-w-3xl text-lg text-muted-foreground">
        Here are some of the projects I've worked on. Each project represents a unique challenge and learning
        experience.
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
              {project.githubUrl && (
                <Button asChild variant="outline" size="sm">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    Code
                    <Github className="ml-2 h-4 w-4" />
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

