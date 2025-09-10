import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './About.css'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="about">
      <div className="inner" ref={ref}>
        <motion.div
          className="text"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>About</h2>
          <p>
            HACC-IT 2.0 is a high-energy hackathon where innovators, designers, and developers
            harness AI to solve real-world challenges. Collaborate, prototype rapidly, and push
            the boundaries of what’s possible in a vibrant, supportive community.
          </p>
        </motion.div>
        <motion.div
          className="art"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="illustration" aria-hidden />
        </motion.div>
      </div>
    </section>
  )
}

