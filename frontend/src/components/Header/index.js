import React from "react";
import "./header.css";

const Header = ({ showBtn, btnText, btnOnClick }) => {
    return (
        <div className="header-container">
            <div className="header">
                <div className="bmsc-logo">
                    <img src="/img/logobmsc.png" alt="" />
                </div>
                <div className="bmsc-header">
                    <h2>Banco Mercantil Santa Cruz S.A</h2>
                </div>
                { showBtn ? 
                <div className="bmsc-button">
                    <button onClick={ btnOnClick }>{ btnText }</button>
                </div> : null }
            </div>
        </div>
    );
};

export default Header;
