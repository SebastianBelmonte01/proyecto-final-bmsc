import React, {useState} from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

import { useNavigate } from "react-router-dom";

import '../Styles/main.css';

const Main = () => {
    const history = useNavigate();

    const openDigital = () => {
        history('/BancaDigital');
    }

    const openFisica = () => {
        history('/BancaFisica');
    }

    const openMovimientos = () => {
        history('/Movimientos');
    }

    return (
    <div>
        <Header />

        <div className="card-wrapper" style={{ paddingBottom: "1rem" }}>
                <Card
                    subtitle="Dashboard Banca Digital"
                    img="/img/bancaDigital.png"
                    text="Dashboard Banca Digital 2019 - 2022"
                    buttonText="Banca Digital"
                    onClick={openDigital}
                />
                <Card
                    subtitle="Dashboard Banca Física"
                    img="/img/bancaFisica.png"
                    text="Dashboard Banca Física 2019 - 2022"
                    buttonText="Banca Fisica"
                    onClick={openFisica}
                />
                <Card
                    subtitle="Dashboard de Movimientos"
                    img="/img/movimientos.png"
                    text="Dashboard de Movimientos 2019 - 2022"
                    buttonText="Movimientos"
                    onClick={openMovimientos}
                />

            </div>

        <Footer />
    </div>
  )
}

export default Main;