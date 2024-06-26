import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import App from './App.jsx'
import Producao from './Producao.jsx'
import Navbar from './Navbar.jsx'
import Manutencao from './Manutencao.jsx'
import Dashboard from './Dashboard.jsx'
import NoPage from './Nopage.jsx'
import './normalize.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <div className="container">
        <Navbar />
        <Routes>
          <Route index element={<App />} />
          <Route path="/prototipo_MES/producao" element={<Producao />} />
          <Route path="/prototipo_MES/manutencao" element={<Manutencao />} />
          <Route path="/prototipo_MES/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </HashRouter>
  </React.StrictMode>
)
