import React, { useEffect, useState } from "react";

import api from "../../services/api";

import './styles.css';

import { Link, useHistory } from "react-router-dom";

import { FiPower, FiDelete } from "react-icons/fi";

import logoImg from '../../assets/logo.svg';

function Profile() {

    const history = useHistory();

    const [incidents, setIncidents] = useState([])

    const name = localStorage.getItem('ong_name');
    const id = localStorage.getItem('ong_id');

    useEffect(() => {
        api.get('/profile', { headers: { auth: id } })
            .then(res => setIncidents(res.data));
    }, [id]) 

    async function handleDeleteIncident(incidentID) {
        try {
            await api.delete(`/incidents/${incidentID}`, { headers: { auth: id } });

            setIncidents(incidents.filter(incident => incident.id !== incidentID)) /* update the incidents in screen in real time */
        } catch (error) {
            alert('Erro ao deletar caso. Pode ser que este não seja um caso cadastrado em sua conta.');
        }
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }
    
    return(
        <div className="profile-container" >
            <header>
                <img src={logoImg} alt="Be the Hero"/>
                <span>Bem vind@, {name} </span>
                <Link className="button" to="/incidents/new" >Cadastrar novo caso</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size="22" color="red" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
                            <FiDelete size="30" color="#41414D" />
                        </button>
                        <strong>Caso</strong>
                        <p>{incident.title}</p>
                        <strong>Descrição</strong>
                        <p>{incident.description}</p>
                        <strong>Valor</strong>
                        <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(incident.value)}</p>
                    </li>
                ))} 
            </ul>
        </div>
    );
}

export default Profile;