import { useEffect, useRef, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import logo from '../assets/logo.png'
import './Navbar.css'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#themes', label: 'Themes' },
  { href: '#shortlisted', label: 'Teams' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    function handleClickOutside(e) {
      if (open && menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  return (
    <header className="navbar-wrapper">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <nav className="navbar" role="navigation" aria-label="Main Navigation">
        <a href="#home" className="brand" aria-label="HACC-IT 2.0 Home">
          <img src={logo} alt="HACC-IT 2.0 logo" />
          <span>HACC</span>
        </a>
        <button
          className="menu-toggle"
          aria-controls="primary-navigation"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(v => !v)}
        >
          {open ? <FiX aria-hidden /> : <FiMenu aria-hidden />}
        </button>
        <ul
          id="primary-navigation"
          className={`nav-links ${open ? 'open' : ''}`}
          ref={menuRef}
        >
          {navItems.map(item => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

