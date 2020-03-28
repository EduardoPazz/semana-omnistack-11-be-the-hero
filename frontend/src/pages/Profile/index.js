import React from "react";

import './styles.css';

import { Link } from "react-router-dom";

import { FiPower, FiDelete } from "react-icons/fi";

import logoImg from '../../assets/logo.svg';

function Profile() {
    return(
        <div className="profile-container" >
            <header>
                <img src={logoImg} alt="Be the Hero"/>
                <span>Bem vindx, {} </span>
                <Link className="button" to="/incidents/new" >Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size="22" color="red" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                <li>
                    <button type="button">
                        <FiDelete />
                    </button>
                    <strong>Caso</strong>
                    <p>Título do Caso</p>
                    <strong>Descrição</strong>
                    <p>Descrição do caso</p>
                    <strong>Valor</strong>
                    <p>Valor do caso</p>
                </li>
                <li>
                    <button type="button">
                        <FiDelete />
                    </button>
                    <strong>Caso</strong>
                    <p>Título do Caso</p>
                    <strong>Descrição</strong>
                    <p>Descrição do caso</p>
                    <strong>Valor</strong>
                    <p>Valor do caso</p>
                </li>
                <li>
                    <button type="button">
                        <FiDelete />
                    </button>
                    <strong>Caso</strong>
                    <p>Título do Caso</p>
                    <strong>Descrição</strong>
                    <p>Descrição do caso</p>
                    <strong>Valor</strong>
                    <p>Valor do caso</p>
                </li>
                <li>
                    <button type="button">
                        <FiDelete />
                    </button>
                    <strong>Caso</strong>
                    <p>Título do Caso</p>
                    <strong>Descrição</strong>
                    <p>Descrição do caso</p>
                    <strong>Valor</strong>
                    <p>Valor do caso</p>
                </li>
                <li>
                
                    <button type="button">
                        <FiDelete />        
                    </button>
                    <strong>Caso</strong>
                    <p>Título do Caso</p>
                    <strong>Descrição</strong>
                    <p>Descrição do caso</p>
                    <strong>Valor</strong>
                    <p>Valor do caso</p>
                </li>
            </ul>
        </div>
    );
}

export default Profile;