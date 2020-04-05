import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";

import './styles.css';

import { FiLogIn, FiArrowLeft } from "react-icons/fi";

import logo from "../../assets/logo.svg";

function Logon() {

    const history = useHistory();

    const [ id, setID ] = useState('');

    async function handleLogon(event) {
        event.preventDefault();
        
        try {
            const { data: { name } } = await api.post('/sessions', { id });

            localStorage.setItem('ong_id', id)
            localStorage.setItem('ong_name', name)

            history.push('/profile');
        } catch (error) {
            alert(`Usuário ${id} não encontrado.`);
        }
    }

    return(
        <div className="logon-container">
            <section>
                <img src={logo} alt="Be the Hero" width="350"/>
                <form onSubmit={handleLogon} >
                    <h1>Faça seu Logon</h1>
                    <input 
                        placeholder="Sua ID" 
                        value={id}
                        onChange={event => setID(event.target.value)}
                    />
                    <button type="submit" className="button">Entrar</button>

                    <div className="back-links">
                        <Link className="back-link" to="/register"> 
                            <FiLogIn size="30" color="#E02041" />
                            Não possuo registro
                        </Link>
                        <Link className="back-link donner" to="/"> 
                            <FiArrowLeft size="30" color="#E02041" />
                            Sou doador
                        </Link>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Logon;