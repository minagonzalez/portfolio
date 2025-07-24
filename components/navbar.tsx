"use client"

import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <NavLink to="/" className="text-xl font-bold" onClick={closeMenu}>
          Mina
        </NavLink>

        <div className="hidden md:flex md:gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-medium text-primary" : "font-medium text-muted-foreground hover:text-primary"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "font-medium text-primary" : "font-medium text-muted-foreground hover:text-primary"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "font-medium text-primary" : "font-medium text-muted-foreground hover:text-primary"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "font-medium text-primary" : "font-medium text-muted-foreground hover:text-primary"
            }
          >
            Contact
          </NavLink>
        </div>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="container md:hidden">
          <div className="flex flex-col space-y-4 py-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "font-medium text-primary" : "font-medium text-muted-foreground"
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "font-medium text-primary" : "font-medium text-muted-foreground"
              }
              onClick={closeMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "font-medium text-primary" : "font-medium text-muted-foreground"
              }
              onClick={closeMenu}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "font-medium text-primary" : "font-medium text-muted-foreground"
              }
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

