import { motion } from 'framer-motion'
import { FaRegCalendarCheck, FaRegCalendarTimes, FaUsers, FaCreditCard, FaPlayCircle, FaTrophy } from 'react-icons/fa'
import './Timeline.css'

const steps = [
  { icon: FaRegCalendarCheck, title: '9th Sept', desc: 'Registration starts' },
  { icon: FaRegCalendarTimes, title: '19th Sept', desc: 'Registration ends' },
  { icon: FaUsers, title: '21st Sept', desc: '40 Teams will be shortlisted' },
  { icon: FaCreditCard, title: '22nd Sept', desc: 'Payment for confirmation' },
  { icon: FaPlayCircle, title: '24th Sept', desc: 'Hackathon begins!' },
  { icon: FaTrophy, title: '25th Sept', desc: 'Winners Announcement' },
]

export default function Timeline() {
  return (
    <section id="timeline" className="timeline">
      <div className="inner">
        <h2>Event Timeline</h2>
        <div className="vertical">
          {steps.map((s, i) => (
            <motion.div
              className="step"
              key={s.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="marker"><s.icon /></div>
              <div className="content">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

