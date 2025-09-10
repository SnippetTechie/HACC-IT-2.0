import { motion } from 'framer-motion'
import { FaHeartbeat, FaSeedling, FaRecycle, FaGraduationCap } from 'react-icons/fa'
import './Themes.css'

const items = [
  { icon: FaHeartbeat, title: 'Healthcare', desc: 'AI for diagnostics, triage, and well-being.' },
  { icon: FaSeedling, title: 'Agriculture', desc: 'Smart farming, yield prediction, and supply chains.' },
  { icon: FaRecycle, title: 'Sustainability', desc: 'Climate action, energy efficiency, waste reduction.' },
  { icon: FaGraduationCap, title: 'Education', desc: 'Personalized learning and assistive tools.' },
]

export default function Themes() {
  return (
    <section id="themes" className="themes">
      <div className="inner">
        <h2>Themes</h2>
        <div className="grid">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <div className="icon">{<item.icon />}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

