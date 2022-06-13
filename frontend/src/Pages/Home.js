import React, {useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import '../Styles/home.css';

import { useNavigate } from "react-router-dom";



const Home = () => {
  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');

  const history = useNavigate();


  const openApp = () => {
    history('/Main');
}

  return (
    <div>
        <Header />
        <div className="home-login-container">
            <div className="home-login">
                    <div className="form-container">
                        <label htmlFor="username">Ingrese su Usuario: </label>
                        <input type="text" id="username" onChange={event => setUsername(event.target.value)}/>        
                    </div>
                    <div className="form-container">
                        <label htmlFor="password">Ingrese su Password: </label>
                        <input type="password" id="password" onChange={event => setPassword(event.target.value)}/>  
                    </div>
                    <div className="form-container-button">
                        <div className="form-container">
                            <Button text='Verificar' onClick={openApp}/> 
                            <Button text='Cancelar'/> 
                        </div>
                    </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home;