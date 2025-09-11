import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Themes from './components/Themes.jsx'
import Timeline from './components/Timeline.jsx'
import Venue from './components/Venue.jsx'
import Winners from './components/Winners.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Themes />
        <Timeline />
        <Venue />
        <Winners />
      </main>
      <Footer />
    </>
  )
}

export default App
