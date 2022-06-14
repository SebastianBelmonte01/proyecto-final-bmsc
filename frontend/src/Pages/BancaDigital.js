import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const BancaDigital = () => {
    const navigate = useNavigate();
    const home = () => {
        navigate("/Main");
    };

    return (
        <React.Fragment>
            <Header showBtn={true} btnText="Volver a Inicio" btnOnClick={ home } />
        </React.Fragment>
    );
};

export default BancaDigital;
