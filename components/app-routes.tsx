"use client"

import { Routes, Route } from "react-router-dom"
import HomePage from "@/components/pages/home"
import AboutPage from "@/components/pages/about"
import ProjectsPage from "@/components/pages/projects"
import ContactPage from "@/components/pages/contact"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}

