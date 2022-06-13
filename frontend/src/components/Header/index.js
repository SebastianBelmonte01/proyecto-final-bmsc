import React from 'react';
import './header.css';



const index = () => {
  return (
    <div className="header-container">
        <div className="header">
            <div className="bmsc-logo">
                <img src='/img/logobmsc.png' alt="" />
            </div>
            <div className="bmsc-header">
                <h2>Banco Mercantil Santa Cruz S.A</h2>
            </div>
            <div className="bmsc-header-logout">
              <a href="/">Cerrar Sesión</a>
            </div>
        </div>
    </div>
  )
}

export default index;