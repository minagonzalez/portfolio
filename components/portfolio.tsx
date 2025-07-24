"use client"

import { BrowserRouter as Router } from "react-router-dom"
import AppRoutes from "@/components/app-routes"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useEffect, useState } from "react"

export default function Portfolio() {
  // Use this to ensure the component only renders in the browser
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    // Return a placeholder or loading state when rendering on the server
    return null
  }

  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

