import React from "react";
import TableauReport from "tableau-react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom"; 

const Movimientos = () => {
    const navigate = useNavigate();
    const home = () => {
        navigate("/Main");
    };

    return (
        <React.Fragment>
            <Header showBtn={true} btnText="Volver a Inicio" btnOnClick={home}/>
            <TableauReport url="https://prod-useast-a.online.tableau.com/t/dssbmsc/views/Regional/Stocks" query="?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link" />
        </React.Fragment>
    );
};

export default Movimientos;
