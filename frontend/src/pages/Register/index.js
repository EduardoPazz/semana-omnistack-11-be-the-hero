import React from "react";

import { Link } from "react-router-dom";

import './styles.css';

import { FiArrowLeft } from "react-icons/fi";

import logoImg from '../../assets/logo.svg'

function Register() {
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size="30" color="#E02041" />
                        Retornar ao Login
                    </Link>
                </section>
                <form action="POST">
                    <input placeholder="Nome da ONG" />
                    <input type="Email" placeholder="Email" />
                    <input type="number" placeholder="WhatsApp" />
                    <div className="input-group">
                        <input placeholder="Cidade" />
                        <input placeholder="UF" maxLength="2" style={{ width: 73}}/> {/* Em React, alterações inline do CSS também são possível, basta usar a propriedade style e atribuir a ela um objeto como membros as declarações em CSS */}
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

export default Register;