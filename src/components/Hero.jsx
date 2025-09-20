import { motion } from 'framer-motion'
import { useMemo } from 'react'
import './Hero.css'

export default function Hero() {
  const stars = useMemo(() => (
    Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: 0.4 + (i % 8) * 0.15,
      size: Math.random() * 3 + 1,
    }))
  ), [])
  
  const particles = useMemo(() => (
    Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
      duration: 8 + Math.random() * 12,
    }))
  ), [])
  return (
    <section id="home" className="hero">
      <div className="bg" aria-hidden />
      <motion.div
        className="particles"
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Enhanced floating orbs */}
        <motion.span
          className="bubble b1"
          initial={{ x: -60, y: -20, scale: 0.8 }}
          animate={{ 
            x: [ -60, -20, -60, -80, -60 ], 
            y: [ -20, 30, -20, -10, -20 ],
            scale: [0.8, 1.2, 0.8, 1.0, 0.8]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.span
          className="bubble b2"
          initial={{ x: 30, y: 15, scale: 0.9 }}
          animate={{ 
            x: [ 30, 60, 30, 10, 30 ], 
            y: [ 15, -20, 15, 25, 15 ],
            scale: [0.9, 1.3, 0.9, 1.1, 0.9]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.span
          className="bubble b3"
          initial={{ x: 80, y: -40, scale: 0.7 }}
          animate={{ 
            x: [ 80, 40, 80, 100, 80 ], 
            y: [ -40, 10, -40, -60, -40 ],
            scale: [0.7, 1.4, 0.7, 1.0, 0.7]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        {/* Floating particles */}
        <motion.div className="floating-particles">
          {particles.map(p => (
            <motion.span
              key={p.id}
              className="particle"
              style={{ left: p.left, top: p.top }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 0.8, 1.2, 0],
                opacity: [0, 0.6, 0.3, 0.8, 0],
                y: [0, -20, -40, -60, -80]
              }}
              transition={{ 
                duration: p.duration, 
                repeat: Infinity, 
                ease: 'easeInOut', 
                delay: p.delay 
              }}
            />
          ))}
        </motion.div>
        
        {/* Enhanced twinkling stars */}
        <motion.ul className="stars" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.8 }}>
          {stars.map(s => (
            <motion.li
              key={s.id}
              className="star"
              style={{ 
                left: s.left, 
                top: s.top,
                width: `${s.size}px`,
                height: `${s.size}px`
              }}
              initial={{ scale: 0, opacity: 0, rotate: 0 }}
              animate={{ 
                scale: [0, 1.2, 0.8, 1.5, 0.8],
                opacity: [0, 0.8, 0.4, 1, 0.4],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 4 + Math.random() * 2, 
                repeat: Infinity, 
                ease: 'easeInOut', 
                delay: s.delay 
              }}
            />
          ))}
        </motion.ul>
      </motion.div>
      <motion.div
        className="gradient-shift"
        aria-hidden
        initial={{ backgroundPosition: '0% 50%', opacity: 0.3 }}
        animate={{ 
          backgroundPosition: [ '0% 50%', '100% 50%', '0% 50%' ],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />
      
      {/* Additional animated layers */}
      <motion.div
        className="wave-layer"
        aria-hidden
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      
      <motion.div
        className="pulse-layer"
        aria-hidden
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: [0.8, 1.2, 0.8],
          opacity: [0, 0.1, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="title"
        >
          HACC-IT 2.0
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="subtitle"
        >
          Code the Future with AI
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="organizer"
        >
          organized by HACKATHON AND CODING CLUB
        </motion.p>
      </div>
    </section>
  )
}

