import logo from './assets/logo.png'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <main className="main-content">
        <img src={logo} className="logo" alt="Logo" />
      </main>
      <footer className="footer">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms</a>
      </footer>
    </div>
  )
}

export default App
