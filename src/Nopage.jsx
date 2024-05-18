import './Nopage.css'

import Error from './assets/404.png'

function NoPage() {
  return (
    <>
      <div className="no-page">
        <img src={Error} alt="Error" className='robot404'/>
        <h1>404 - Página não encontrada</h1>
        <p>Isso é constragendor... Mas não conseguimos localizar sua página.
           Entre em contato com o administrador dessa página.</p>
      </div>
    </>
  )
}

export default NoPage
