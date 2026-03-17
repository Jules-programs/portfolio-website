'use client'

import { useState } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'About',     href: '#intro'     },
  { label: 'Projects',  href: '#projects'  },
  { label: 'Tech Stack',href: '#tech-stack'},
  { label: 'Contact',   href: '#contact'   },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => setOpen(false)

  return (
    <nav
      className="
        sticky top-0 z-50 w-full
        bg-white/10 backdrop-blur-md
        border-b border-white/20
        shadow-lg
      "
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">

        {/* Logo / Brand */}
        <span className="text-white font-bold text-lg sm:text-xl tracking-tight select-none">
          Julien Mongrain
        </span>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="
                  px-4 py-2 rounded-full text-sm font-medium text-white/90
                  hover:bg-white/20 hover:text-white
                  transition-all duration-200
                "
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setOpen(prev => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="
            md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px]
            rounded-lg hover:bg-white/10 transition-colors duration-200
          "
        >
          <span
            className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 origin-center
              ${open ? 'rotate-45 translate-y-[7px]' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 bg-white rounded transition-all duration-300
              ${open ? 'opacity-0 scale-x-0' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 origin-center
              ${open ? '-rotate-45 -translate-y-[7px]' : ''}`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <ul className="flex flex-col px-4 pb-4 gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={handleLinkClick}
                className="
                  block w-full px-4 py-2.5 rounded-xl text-sm font-medium text-white/90
                  hover:bg-white/20 hover:text-white
                  transition-all duration-200
                "
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}