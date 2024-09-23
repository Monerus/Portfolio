import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Home, Projects } from './pages'
import Header from './components/Header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </Router>
  </StrictMode>,
)
