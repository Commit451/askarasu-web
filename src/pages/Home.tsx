import logo from '../assets/logo.png'

function Home() {
  return (
    <main className="main-content">
      <div className="home-content">
        <img src={logo} className="logo" alt="Logo" />
        <h1 className="app-name">Askarasu</h1>
        <p className="app-subtitle">Will you answer the caw?</p>
        <div className="store-badges">
          <a
            href="https://play.google.com/store/apps/details?id=com.example.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
              className="store-badge play-store-badge"
            />
          </a>
          <a
            href="https://apps.apple.com/app/example/id123456789"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="store-badge app-store-badge"
            />
          </a>
        </div>
      </div>
    </main>
  )
}

export default Home
