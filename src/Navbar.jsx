//Imports libs
import { Outlet, Link } from "react-router-dom";

//Imports assets
import Logo from './assets/fraldas_capricho_logo.jpg'
import Dashboard from './assets/dashboard.png'
import Home from './assets/home.png'
import Fabrica from './assets/fabrica.png'
import Engrenagem from './assets/engrenagem.png'

//imports css
import './nav.css'

function Navbar() {
  return (
    <>
      <nav className="nav">
        <img src={Logo} alt="logo" className="logo" />
        <p><small>Bem vindo Drylock Brasil</small></p>
        <br></br>
        <ul>
          <li>
            <Link to="/prototipo_MES/"><img src={Home} alt="" className="icon" /> Home</Link>
          </li>
          <li>
            <Link to="/prototipo_MES/dashboard"><img src={Dashboard} alt="" className="icon" /> Dashboard</Link>
          </li>
          <li>
            <Link to="/prototipo_MES/producao"><img src={Fabrica} alt="" className="icon" /> Produção</Link>
          </li>
          <li>
            <Link to="/prototipo_MES/manutencao"><img src={Engrenagem} alt="" className="icon" /> Manutenção</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Navbar;