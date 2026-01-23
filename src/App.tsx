import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <footer className="footer">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms</Link>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
