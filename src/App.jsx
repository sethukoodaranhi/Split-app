import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './view/auth/Login';
import '../src/assets/custom.css'
import SplitDashbaord from './view/auth/Dashboard/SplitDashbaord';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<SplitDashbaord/>} />
      </Routes>
    </Router>
  )
}

export default App
