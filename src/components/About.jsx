import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import haccImage from '../assets/Hacc.jpg'
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
            After the success of our first edition, HACC-IT 2.0 returns with bigger ambitions and bolder ideas. This phase is not just about coding. It's about creativity, collaboration and building AI solutions that truly matter. Innovation begins here, where bold minds rise.
          </p>
        </motion.div>
        <motion.div
          className="art"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img src={haccImage} alt="HACC-IT 2.0 event" className="illustration" />
        </motion.div>
      </div>
    </section>
  )
}

