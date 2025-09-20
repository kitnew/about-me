export default function Home() {
  return (
    <>
      {/* Theme toggle button (fixed at top center) */}
      <button
        type="button"
        className="theme-button"
        aria-label="Toggle color theme"
        title="Toggle color theme"
        data-action="toggle-theme"
      >
        <img src="/icons/color_theme_white.svg" alt="Theme icon" width={80} height={80} />
      </button>

      {/* Intro section */}
      <section className="intro-section">
        <div className="intro-wrap">
          <img className="intro-photo" src="/images/profile.png" alt="Profile photo" width={215} height={215} />
          <div>
            <div className="intro-name">Nikita Chernysh</div>
            <div className="intro-position">Front-end Developer</div>
            <div className="intro-icons">
              <img className="intro-github-icon" src="/icons/github.svg" alt="Github icon" width={36} height={36} />
              <img className="intro-linkedin-icon" src="/icons/linkedin.svg" alt="Linkedin icon" width={36} height={36} />
            </div>
          </div>
        </div>
      </section>
      {/* Profile facts */}
      <section className="profile-facts-section">
        <div className="profile-facts-wrap">
          <div className="profile-facts-item">
            <div className="profile-facts-item-title">Community member</div>
            <div className="profile-facts-item-description">engaged in student initiatives and projects</div>
          </div>
          <div className="profile-facts-item">
            <div className="profile-facts-item-title">Continuous growth</div>
            <div className="profile-facts-item-description">combining studies, research, and teamwork</div>
          </div>
          <div className="profile-facts-item">
            <div className="profile-facts-item-title">Hands-on projects</div>
            <div className="profile-facts-item-description">machine learning, data analysis, and utilities</div>
          </div>
        </div>
      </section>
      {/* Profile buttons */}
      <section className="profile-buttons-section">
        <div className="profile-buttons-wrap">
          <div className="profile-button-wrap">
            <button type="button" className="profile-button">Resume</button>
          </div>
          <div className="profile-button-wrap">
            <button type="button" className="profile-button">Contact</button>
          </div>
        </div>
      </section>
      {/* Main buttons */}
      <section className="main-buttons-section">
        <div className="main-buttons-wrap">
          <div className="main-button-wrap">
            <button type="button" className="main-button education-button">Education</button>
          </div>
          <div className="main-button-wrap">
            <button type="button" className="main-button experience-button">Experience</button>
          </div>
          <div className="main-button-wrap">
            <button type="button" className="main-button portfolio-button">Portfolio</button>
          </div>
          <div className="main-button-wrap">
            <button type="button" className="main-button about-me-button">About me</button>
          </div>
          <div className="main-button-wrap">
            <button type="button" className="main-button skills-button">Skills</button>
          </div>
          <div className="main-button-wrap">
            <button type="button" className="main-button extracurricular-button">Extracurricular</button>
          </div>
        </div>
      </section>
    </>
  );
}
