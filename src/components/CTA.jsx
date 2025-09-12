import './CTA.css'

export default function CTA() {
  return (
    <section className="cta">
      <div className="inner">
        <h3>Are you ready to code the future?</h3>
        <a className="button" href="#register" onClick={(e) => e.preventDefault()}>
          Register Now
        </a>
      </div>
    </section>
  )
}

