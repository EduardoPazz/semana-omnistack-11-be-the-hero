import React, { useEffect, useState } from "react";

import api from "../../services/api";

import './styles.css';

import { Link } from "react-router-dom";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import logoImg from '../../assets/logo.svg';

function Doner() {

    const [incidents, setIncidents] = useState([]);
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(0);

    useEffect(() => {
        api.get(`/incidents?page=${page}`).then(res => {
            setIncidents(res.data.data);
            setCount(res.data.num);
        });
    }, [page]) 

    function countText(count) {
        let message;
        switch (count) {
            case 0:
                message = "Nenhum caso pendente";
                break;
            case 1:
                message = "Um único caso pendente";
                break;
            default:
                message = `${count} casos pendentes`;
                break;
        }
        return message;
    }

    function handlePreviousPage() {
        if (page !== 1) setPage(page - 1); /* Previne que page assuma um valor menor que 1 */
    }    

    function handleNextPage() {
        if (!(count/page*6 <= 1)) setPage(page + 1); /* Previne que o usuário fique avançando infinitas páginas */
    }

    function formatPhoneNumber(number) { /* gambiarra alert. Deve haver alguma melhor forma de fazer isso, mas não a conheço ainda */
        return `(${number[0]}${number[1]}) ${number[2]}${number[3]}${number[4]}${number[5]}${number[6]}-${number[7]}${number[8]}${number[9]}${number[10]}`;
    }

    return(
        <div className="doner-container" >
            <header>
                <img src={logoImg} alt="Be the Hero"/>
                <span>Bem vind@, hero!</span>
                <Link className="back-link donner" to="/"> 
                    <FiArrowLeft size="30" color="#E02041" />
                    Voltar para a Home
                </Link>
            </header>

            <h1>{countText(count)}</h1>

            <div className="page">
                <button type="button" onClick={handlePreviousPage}><FiArrowLeft size="20" color="#E02041" /></button>
                <span>Página {page}</span>
                <button type="button" onClick={handleNextPage}><FiArrowRight size="20" color="#E02041" /></button>
            </div>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <div className="incident">
                            <strong>Caso</strong>
                            <p>{incident.title}</p>

                            <strong>Descrição</strong>
                            <p>{incident.description}</p>

                            <strong>Valor</strong>
                            <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(incident.value)}</p>
                        </div>

                        <div className="ong">
                            <strong>ONG Responsável</strong>
                            <p>{incident.name}</p>

                            <div className="location">
                                <div>
                                    <strong>Cidade</strong>
                                    <p>{incident.city}</p>
                                </div>
                                <div>
                                    <strong>Estado</strong>
                                    <p>{incident.uf}</p>
                                </div>
                            </div>

                            <div className="contact">
                                <div>
                                    <strong>Email</strong>
                                    <p>{incident.email}</p>
                                </div>
                                <div>
                                    <strong>WhatsApp</strong>
                                    <p>{formatPhoneNumber(incident.whatsapp)}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                ))} 
            </ul>
        </div>
    );
}

export default Doner;