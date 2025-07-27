"use client"

import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="container">
      <section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-12 text-center md:py-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Hi, I'm <span className="text-primary">Mina</span>
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-muted-foreground">
         I'm a frontend developer who turns real-world problems into clean, efficient websites—code first, no fluff.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/projects">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">Contact Me</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

