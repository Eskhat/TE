import logo from './logo.svg'
import './App.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Courses from './pages/Courses'
import Home from './pages/Home'
import Login from './pages/Login'
import Course from './pages/Course'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/course" element={<Course />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
