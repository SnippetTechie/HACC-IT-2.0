import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import './Shortlisted.css';

const teams = [
  { name: '404 Found', leader: 'Anushka Roy', theme: '' },
  { name: 'Arena Blitz', leader: 'Girieesh Koppad', theme: '' },
  { name: 'Ayur', leader: 'Devanshi Awasthi', theme: '' },
  { name: 'BluePill', leader: 'Jay Pandian', theme: '' },
  { name: 'BotLifeMatters', leader: 'Viha Shomikha A S', theme: '' },
  { name: 'Byte me', leader: 'Akash BM', theme: '' },
  { name: 'ByteForce', leader: 'Y Sreenivas Kowshik', theme: '' },
  { name: 'CashCats', leader: 'Sneha', theme: '' },
  { name: 'CodeForCause', leader: 'Manavi K A', theme: '' },
  { name: 'CodeLab', leader: 'Preetham AK', theme: '' },
  { name: 'CodeXplorers', leader: 'Arpita Modi', theme: '' },
  { name: 'Cred Shield', leader: 'Talanki Venkata', theme: '' },
  { name: 'CredX', leader: 'Feba Aiman', theme: '' },
  { name: 'Curacode', leader: 'Namitha N G', theme: '' },
  { name: 'EcoVision.AI', leader: 'R KOUSHIK', theme: '' },
  { name: 'Fried Maggi', leader: 'Aniketh', theme: '' },
  { name: 'Gecko', leader: 'Sudhanshu Bhardwaj', theme: '' },
  { name: 'HackX', leader: 'Akash Anderson', theme: '' },
  { name: 'HealthLens', leader: 'Michael Tunglut', theme: '' },
  { name: 'Help us', leader: 'Kartik Jarali', theme: '' },
  { name: 'Immortal', leader: 'Abhishek Biradar', theme: '' },
  { name: 'Innov8tors', leader: 'Reddymasi Manasa', theme: '' },
  { name: 'InsightAI', leader: 'Poushali', theme: '' },
  { name: 'LawGorithm', leader: 'Kiran Kumar P', theme: '' },
  { name: 'LearnBots', leader: 'Rohan B', theme: '' },
  { name: 'Lethal Minds', leader: 'Vamshidhar Mohan', theme: '' },
  { name: 'LIVE-IT', leader: 'Sharanya', theme: '' },
  { name: 'MEDIMIND', leader: 'Arjun', theme: '' },
  { name: 'Oxygen', leader: 'Chethan R', theme: '' },
  { name: 'Phoenix', leader: 'Jeevika Srinath', theme: '' },
  { name: 'Pixel_Party', leader: 'Krishh Murjani', theme: '' },
  { name: 'PorTTrack', leader: 'Nagarjun DP', theme: '' },
  { name: 'Rockstar', leader: 'Sunil S', theme: '' },
  { name: 'RootAccess', leader: 'G Joyce Arpana', theme: '' },
  { name: 'Savesmart', leader: 'Keertana S', theme: '' },
  { name: 'Sehathi', leader: 'Harshita Harihar', theme: '' },
  { name: 'SKYNET', leader: 'Shadab Ahmad Khan', theme: '' },
  { name: 'TEAM ULTIMATE', leader: 'Shrisai Aski', theme: '' },
  { name: 'Void Coders', leader: 'Gowtham KC', theme: '' },
  { name: 'Xcape matriX', leader: 'Tanveer Pasha S', theme: '' },
];

function Shortlisted() {
  const sortedTeams = [...teams].sort((a, b) => a.name.localeCompare(b.name));
  const waitlistTeams = [
    'Alchemist',
    'Ecologic',
    'Hackstorm',
    'Team Rocket',
    'Rural Minds',
  ];
  const sectionRef = useRef(null);
  const confettiPlayed = useRef(false);

  useEffect(() => {
    function handleScroll() {
      if (!sectionRef.current || confettiPlayed.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= 40) {
        confettiPlayed.current = true;
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
        });
        confetti({
          particleCount: 80,
          angle: 120,
          spread: 60,
          origin: { x: 0.1, y: 0.7 },
        });
        confetti({
          particleCount: 80,
          angle: 60,
          spread: 60,
          origin: { x: 0.9, y: 0.7 },
        });
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="shortlisted" className="shortlisted-section confetti-fade-in" ref={sectionRef}>
      <div className="hookup-message">
        <h2>Shortlisted Teams</h2>
      </div>
      <ul className="team-list">
        {sortedTeams.map(team => (
          <li key={team.name} className="team-card small-card">
            <span className="team-name">{team.name}</span>
            <span className="team-leader">{team.leader}</span>
          </li>
        ))}
      </ul>
      <div className="waitlist-section">
        <h3 className="waitlist-title">Waitlisted Teams</h3>
        <ul className="team-list">
          {waitlistTeams.map(team => (
            <li key={team} className="team-card small-card waitlist-card">
              <span className="team-name">{team}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Shortlisted;
