import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import logo from '../assets/logo.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="inner">
        <div className="col left">
          <div className="brand">
            <img src={logo} alt="HACC-IT 2.0 logo" />
            <span>HACC-IT 2.0</span>
          </div>
          <p className="tag">Connect, Learn, Grow!</p>
        </div>
        {/* center nav removed by request */}
        <div className="col right">
          <div className="socials">
            <h4>Socials</h4>
            <div className="icons">
              <a href="https://www.linkedin.com/company/hacc-thehackathon-and-coding-club/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/the_hacc/profilecard/?igsh=MW43aThmZGx1eXh6YQ%3D%3D" target="_blank" rel="noreferrer noopener" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://chat.whatsapp.com/FRXKH7xvePHHRZSkVyMA82" target="_blank" rel="noreferrer noopener" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>
          <div className="contacts">
            <h4>Contacts</h4>
            <ul>
              <li>
                <span>Satyam Gupta:</span>
                <a href="tel:+918884764833">8884764833</a>
              </li>
              <li>
                <span>Umaiza:</span>
                <a href="tel:+918088520590">8088520590</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom">© {new Date().getFullYear()} HACC-IT 2.0. All rights reserved.</div>
    </footer>
  )
}

