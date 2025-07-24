"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  const skills = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Node.js",
    "Express",
    "Next.js",
    "Tailwind CSS",
    "Git",
    "RESTful APIs",
    "GraphQL",
    "MongoDB",
    "PostgreSQL",
  ]

  return (
    <div className="container py-12 md:py-24">
      <h1 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About Me</h1>

      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="text-lg text-muted-foreground">
            Hello! I'm Mina, a passionate web developer with a keen eye for design and a love for creating seamless user
            experiences. With several years of experience in the field, I've had the opportunity to work on a variety of
            projects that have helped me grow both technically and creatively.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            My journey in web development began when I discovered my passion for bringing ideas to life through code.
            Since then, I've been constantly learning and adapting to new technologies and methodologies to stay at the
            forefront of this ever-evolving industry.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            When I'm not coding, you can find me exploring new hiking trails, experimenting with new recipes in the
            kitchen, or diving into a good book.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-bold">Skills & Expertise</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>

          <h2 className="mb-4 mt-8 text-2xl font-bold">Education</h2>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
              <p className="text-muted-foreground">University of Technology</p>
              <p className="text-sm text-muted-foreground">2016 - 2020</p>
            </CardContent>
          </Card>

          <h2 className="mb-4 mt-8 text-2xl font-bold">Experience</h2>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">Senior Frontend Developer</h3>
              <p className="text-muted-foreground">Tech Innovations Inc.</p>
              <p className="text-sm text-muted-foreground">2020 - Present</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

