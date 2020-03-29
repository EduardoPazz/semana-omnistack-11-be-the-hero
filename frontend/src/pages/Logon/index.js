import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";

import './styles.css';

import { FiLogIn } from "react-icons/fi";

import logo from "../../assets/logo.svg";

import heroesImg from '../../assets/heroes.png';

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
            <section className="form">
                <img src={logo} alt="Be the Hero"/>
                <form onSubmit={handleLogon} >
                    <h1>Faça seu Logon</h1>
                    <input 
                        placeholder="Sua ID" 
                        value={id}
                        onChange={event => setID(event.target.value)}
                    />
                    <button type="submit" className="button">Entrar</button>

                    <Link className="back-link" to="/register"> 
                        <FiLogIn size="30" color="#E02041" />
                        Não possuo registro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}

export default Logon;