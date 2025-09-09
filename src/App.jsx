import React from 'react';
import { Calendar, Clock, MapPin, Users, Code, Lightbulb, Trophy, Zap, Globe, Heart, Shield, Cpu, Smartphone, Database, Gamepad2, Brain } from 'lucide-react';


function App() {
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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-8 mx-auto animate-pulse">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              HackFusion 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Where Innovation Meets Implementation. Join us for 48 hours of non-stop coding, creativity, and collaboration.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg mb-12">
              <div className="flex items-center gap-2 bg-white bg-opacity-10 rounded-full px-6 py-3">
                <Calendar className="w-5 h-5 text-cyan-400" />
                <span>Feb 16-19, 2025</span>
              </div>
              <div className="flex items-center gap-2 bg-white bg-opacity-10 rounded-full px-6 py-3">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span>48 Hours</span>
              </div>
              <div className="flex items-center gap-2 bg-white bg-opacity-10 rounded-full px-6 py-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Tech Hub Campus</span>
              </div>
            </div>
            <a 
              href="#apply" 
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-xl px-12 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-white bg-opacity-5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About HackFusion</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                HackFusion is more than just a hackathon—it's a catalyst for innovation. We bring together the brightest minds from across the globe to tackle real-world challenges using cutting-edge technology.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Whether you're a seasoned developer, a creative designer, or a visionary entrepreneur, HackFusion provides the perfect platform to transform your ideas into reality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                  <div className="text-gray-400">Participants</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">$50K</div>
                  <div className="text-gray-400">Prize Pool</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg transform rotate-6"></div>
              <div className="relative bg-gray-900 rounded-lg p-8 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Why Participate?</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    Network with industry experts
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    Learn cutting-edge technologies
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    Win amazing prizes and recognition
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    Get mentored by industry leaders
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Rounds */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Event Rounds</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our hackathon is structured in four exciting phases, each designed to challenge and inspire participants.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rounds.map((round, index) => {
              const IconComponent = round.icon;
              return (
                <div 
                  key={index} 
                  className="relative group"
                >
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 hover:transform hover:-translate-y-2 transition-all duration-500 border border-gray-700 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-center text-cyan-400">{round.title}</h3>
                    <p className="text-gray-300 text-center mb-4">{round.description}</p>
                    <div className="text-sm text-gray-400 text-center font-semibold bg-gray-800 rounded-full py-2 px-4">
                      {round.date}
                    </div>
                  </div>
                  {index < rounds.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Domains */}
      <section className="py-20 bg-white bg-opacity-5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Problem Domains</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from diverse domains and tackle real-world problems that matter. Each domain offers unique challenges and opportunities for innovation.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {domains.map((domain, index) => {
              const IconComponent = domain.icon;
              return (
                <div 
                  key={index}
                  className="group cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 hover:transform hover:-translate-y-3 hover:scale-105 transition-all duration-500 border border-gray-700 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20">
                    <div className={`w-16 h-16 ${domain.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:rotate-12 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-center text-white group-hover:text-cyan-400 transition-colors duration-300">
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
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl p-12 border border-cyan-500/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Innovate?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of developers, designers, and innovators in the ultimate coding challenge. Your next breakthrough is just 48 hours away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#apply" 
                id="apply"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-xl px-12 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25"
              >
                Apply Now
              </a>
              <div className="text-sm text-gray-400">
                Early bird registration ends Feb 5th
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-cyan-400" />
              <span className="text-xl font-bold">HackFusion 2025</span>
            </div>
            <p className="text-gray-400 mb-4">
              Innovate • Create • Transform
            </p>
            <div className="text-sm text-gray-500">
              © 2025 HackFusion. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
    
}

export default App
