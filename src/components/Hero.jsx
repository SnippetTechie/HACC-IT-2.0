import { motion } from 'framer-motion'
import { useMemo } from 'react'
import './Hero.css'

export default function Hero() {
  const stars = useMemo(() => (
    Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: 0.4 + (i % 6) * 0.2,
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
        transition={{ duration: 1 }}
      >
        <motion.span
          className="bubble b1"
          initial={{ x: -40, y: -10 }}
          animate={{ x: [ -40, -10, -40 ], y: [ -10, 20, -10 ] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.span
          className="bubble b2"
          initial={{ x: 20, y: 10 }}
          animate={{ x: [ 20, 40, 20 ], y: [ 10, -10, 10 ] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.span
          className="bubble b3"
          initial={{ x: 60, y: -30 }}
          animate={{ x: [ 60, 30, 60 ], y: [ -30, 0, -30 ] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.ul className="stars" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
          {stars.map(s => (
            <motion.li
              key={s.id}
              style={{ left: s.left, top: s.top }}
              initial={{ scale: 0.4, opacity: 0.3 }}
              animate={{ scale: [0.6, 1, 0.6], opacity: [0.2, 0.55, 0.2] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
            />
          ))}
        </motion.ul>
      </motion.div>
      <motion.div
        className="gradient-shift"
        aria-hidden
        initial={{ backgroundPosition: '0% 50%' }}
        animate={{ backgroundPosition: [ '0% 50%', '100% 50%', '0% 50%' ] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
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
          organized by HACC – School of C & IT
        </motion.p>
      </div>
    </section>
  )
}

