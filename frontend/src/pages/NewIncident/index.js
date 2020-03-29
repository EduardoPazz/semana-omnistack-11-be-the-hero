import React, { useState } from "react";

import api from "../../services/api";

import { Link, useHistory } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";

import './styles.css';

import logoImg from '../../assets/logo.svg';

function NewIncident() {

    const history = useHistory();

    const id = localStorage.getItem('ong_id');

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState(0);

    async function handleNewIncident(event) {
        event.preventDefault();

        try {
            await api.post('/incidents', { title, description, value}, { headers: { authentication: id }}); /* quando é necessário enviar body e headers em uma requisição, o headers fica como tercerio parâmetro */
            history.push('/profile');
        } catch (error) {
            alert('Erro no cadastro, tente novamente')
        }
    }

    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt=""/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link to="/profile" className="back-link" > <FiArrowLeft size="30" color="#e0204e" /> Voltar para o perfil</Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Título do caso" 
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição" 
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                    />
                    <input 
                        placeholder="Valor requerido" type="number" 
                        value={value}
                        onChange={event => setValue(event.target.value)}
                    />
                    <div className="input-group">
                        <button className="button" type="button" >Cancelar</button>
                        <button className="button" type="submit">Cadastrar caso</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewIncident;