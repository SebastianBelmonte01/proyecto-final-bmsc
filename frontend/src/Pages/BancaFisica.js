import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import TableauReport from 'tableau-react';

const BancaFisica = () => {
    const navigate = useNavigate();
    const home = () => {
        navigate("/Main");
    };

    const options = {
        width: 1500,
        height: 900
    }

    return (
        <React.Fragment>
            <Header showBtn={true} btnText="Volver a Inicio" btnOnClick={ home } />
            <TableauReport
                url="https://prod-useast-a.online.tableau.com/t/dssbmsc/views/Bancafisica/Dashboard1"
                query="?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link"
                options={options}
                />
        </React.Fragment>
    );
};

export default BancaFisica;
