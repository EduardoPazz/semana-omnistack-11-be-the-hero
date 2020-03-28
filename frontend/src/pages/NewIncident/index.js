import React from "react";

import { Link } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";

import './styles.css';

import logoImg from '../../assets/logo.svg';

function NewIncident() {
    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt=""/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link to="/profile" className="back-link" > <FiArrowLeft size="30" color="#e0204e" /> Voltar para o perfil</Link>
                </section>
                <form action="POST">
                    <input placeholder="Título do caso" />
                    <textarea placeholder="Descrição" />
                    <input placeholder="Valor requerido" type="number" />
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