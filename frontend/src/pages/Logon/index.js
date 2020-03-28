import React from "react";

import { Link } from "react-router-dom";

import './styles.css';

import { FiLogIn } from "react-icons/fi";

import logo from "../../assets/logo.svg";

import heroesImg from '../../assets/heroes.png';

function Logon() {
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="Be the Hero"/>
                <form>
                    <h1>Faça seu Logon</h1>
                    <input placeholder="Sua ID" />
                    <button type="submit" className="button">Entrar</button>
                    <Link className="back-link" to="/register"> {/* O componente Link é um substituto ao <a>, pois não necessita que a haja uma nova request do servidor (pagina recarregue) para que troque a rota, agilizando a vida do usuário. Em vez de "href", a propriedade é "to". Nos estilos, o seletor continua sendo "a" */}
                        <FiLogIn size="30" color="#E02041" /> {/* Uso do ícone. Ele aceita as propriedades "size" e "color" */}
                        Não possuo registro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}

export default Logon;