import React from 'react';
import { Calendar, Clock, MapPin, Users, Code, Lightbulb, Trophy, Zap, Globe, Heart, Shield, Cpu, Smartphone, Database, Gamepad2, Brain } from 'lucide-react';


function Test1(){
const domains = [
    { name: 'Web Development', icon: Globe, color: 'bg-blue-500' },
    { name: 'Mobile Apps', icon: Smartphone, color: 'bg-green-500' },
    { name: 'AI/ML', icon: Brain, color: 'bg-purple-500' },
    { name: 'IoT', icon: Cpu, color: 'bg-orange-500' },
    { name: 'Blockchain', icon: Database, color: 'bg-yellow-500' },
    { name: 'Gaming', icon: Gamepad2, color: 'bg-red-500' },
    { name: 'HealthTech', icon: Heart, color: 'bg-pink-500' },
    { name: 'CyberSecurity', icon: Shield, color: 'bg-indigo-500' }
  ];

  const rounds = [
    {
      title: 'Registration',
      description: 'Sign up and form your team',
      date: 'Jan 15 - Feb 10',
      icon: Users
    },
    {
      title: 'Idea Submission',
      description: 'Submit your innovative project idea',
      date: 'Feb 11 - Feb 15',
      icon: Lightbulb
    },
    {
      title: 'Development Phase',
      description: '48-hour coding marathon begins',
      date: 'Feb 16 - Feb 18',
      icon: Code
    },
    {
      title: 'Final Presentation',
      description: 'Present your solution to judges',
      date: 'Feb 19',
      icon: Trophy
    }
  ];

  return (
    <div className="hackathon-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-icon">
            <Zap size={40} />
          </div>
          <h1 className="hero-title">
            HackFusion 2025
          </h1>
          <p className="hero-subtitle">
            Where Innovation Meets Implementation. Join us for 48 hours of non-stop coding, creativity, and collaboration.
          </p>
          <div className="hero-info">
            <div className="info-badge">
              <Calendar className="info-icon" />
              <span>Feb 16-19, 2025</span>
            </div>
            <div className="info-badge">
              <Clock className="info-icon" />
              <span>48 Hours</span>
            </div>
            <div className="info-badge">
              <MapPin className="info-icon" />
              <span>Tech Hub Campus</span>
            </div>
          </div>
          <a href="#apply" className="apply-button">
            Apply Now
          </a>
        </div>
      </div>

      {/* About Section */}
      <section className="section section-overlay">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">About HackFusion</h2>
            <div className="section-underline"></div>
          </div>
          <div className="about-grid">
            <div>
              <p className="about-text">
                HackFusion is more than just a hackathon—it's a catalyst for innovation. We bring together the brightest minds from across the globe to tackle real-world challenges using cutting-edge technology.
              </p>
              <p className="about-text">
                Whether you're a seasoned developer, a creative designer, or a visionary entrepreneur, HackFusion provides the perfect platform to transform your ideas into reality.
              </p>
              <div className="stats-container">
                <div className="stat">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Participants</div>
                </div>
                <div className="stat">
                  <div className="stat-number">$50K</div>
                  <div className="stat-label">Prize Pool</div>
                </div>
              </div>
            </div>
            <div className="about-card-container">
              <div className="about-card-bg"></div>
              <div className="about-card">
                <h3 className="about-card-title">Why Participate?</h3>
                <ul className="about-list">
                  <li className="about-list-item">
                    <div className="list-dot"></div>
                    Network with industry experts
                  </li>
                  <li className="about-list-item">
                    <div className="list-dot"></div>
                    Learn cutting-edge technologies
                  </li>
                  <li className="about-list-item">
                    <div className="list-dot"></div>
                    Win amazing prizes and recognition
                  </li>
                  <li className="about-list-item">
                    <div className="list-dot"></div>
                    Get mentored by industry leaders
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Rounds */}
      <section className="section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Event Rounds</h2>
            <div className="section-underline"></div>
            <p className="section-description">
              Our hackathon is structured in four exciting phases, each designed to challenge and inspire participants.
            </p>
          </div>
          <div className="rounds-grid">
            {rounds.map((round, index) => {
              const IconComponent = round.icon;
              return (
                <div key={index} className="round-card">
                  <div className="round-icon">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="round-title">{round.title}</h3>
                  <p className="round-description">{round.description}</p>
                  <div className="round-date">
                    {round.date}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Domains */}
      <section className="section section-overlay">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Problem Domains</h2>
            <div className="section-underline"></div>
            <p className="section-description">
              Choose from diverse domains and tackle real-world problems that matter. Each domain offers unique challenges and opportunities for innovation.
            </p>
          </div>
          <div className="domains-grid">
            {domains.map((domain, index) => {
              const IconComponent = domain.icon;
              return (
                <div key={index} className="domain-card">
                  <div className="domain-card-inner">
                    <div className={`domain-icon ${domain.color}`}>
                      <IconComponent size={32} />
                    </div>
                    <h3 className="domain-title">
                      {domain.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="cta-container">
          <div className="cta-card">
            <h2 className="cta-title">Ready to Innovate?</h2>
            <p className="cta-description">
              Join hundreds of developers, designers, and innovators in the ultimate coding challenge. Your next breakthrough is just 48 hours away.
            </p>
            <div className="cta-buttons">
              <a href="#apply" id="apply" className="apply-button">
                Apply Now
              </a>
              <div className="early-bird">
                Early bird registration ends Feb 5th
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <Zap className="footer-brand-icon" />
            <span className="footer-brand-text">HackFusion 2025</span>
          </div>
          <p className="footer-tagline">
            Innovate • Create • Transform
          </p>
          <div className="footer-copyright">
            © 2025 HackFusion. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Test1;