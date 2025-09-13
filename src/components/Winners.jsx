import { motion } from 'framer-motion'
import { FaTrophy } from 'react-icons/fa'
import './Winners.css'

export default function Winners() {
  return (
    <section id="winners" className="winners">
      <div className="inner">
        <h2>Prizes & Recognition</h2>
        <div className="podium">
          <motion.div className="pod second" initial={{ y: 80, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.05 }}>
            <div className="circle"><FaTrophy className="icon silver" /></div>
            <div className="bar second" />
            <div className="caption">2nd 🥈</div>
          </motion.div>
          <motion.div className="pod first" initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.1 }}>
            <div className="circle"><FaTrophy className="icon gold" /></div>
            <div className="bar first" />
            <div className="caption">1st 🥇</div>
          </motion.div>
          <motion.div className="pod third" initial={{ y: 80, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.15 }}>
            <div className="circle"><FaTrophy className="icon bronze" /></div>
            <div className="bar third" />
            <div className="caption">3rd 🥉</div>
          </motion.div>
        </div>
        <p className="line">Three winning teams will shine. Will yours be one of them?</p>
        <a className="cta-button" href="https://bit.ly/3KlIVAj" target = "_blank">
          Register Now
        </a>
      </div>
    </section>
  )
}

