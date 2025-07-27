"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  const skills = [
    "WordPress",
    "PHP",
    "JavaScript",
    "HTML",
    "CSS",
    "SCSS",
    "Tailwind CSS",
    "Git",
    "RESTful APIs",
    "MySQL",
    "React",
    "TypeScript",
    "Next.js"
  ]

  return (
    <div className="container py-12 md:py-24">
      <h1 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About Me</h1>

      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="text-lg text-muted-foreground">
            Hello! I'm Mina, and as a front-end developer with over five years of experience, I specialize in building custom solutions using WordPress, including theme and plugin development. In my current role at Cardinal Digital Marketing, I contribute to the design and development of optimized websites, combining skills in HTML, SCSS, Tailwind, JavaScript, and PHP to deliver both functional and visually appealing results.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            My goal is to integrate modern technologies like React and TypeScript to strengthen our frontend solutions and enhance user experience. Passionate about teamwork and continuous improvement, I strive to add value through effective collaboration and the implementation of efficient development practices.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            When I'm not coding, I'm probably on the padel court, hanging out with my two cats and three dogs, or enjoying a good football match.
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

          <h2 className="mb-4 mt-8 text-2xl font-bold">Actual Job</h2>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">Front-End Developer | WordPress Specialist</h3>
              <p className="text-muted-foreground">Cardinal Digital Marketing</p>
              <p className="text-sm text-muted-foreground">June 2023 - Present</p>
            </CardContent>
          </Card>

          <h2 className="mb-4 mt-8 text-2xl font-bold">Last Job</h2>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">Programming Teacher - HTML, CSS & JavaScript</h3>
              <p className="text-muted-foreground">Digital House & Coderhouse.</p>
              <p className="text-sm text-muted-foreground">2022 - 2023</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

