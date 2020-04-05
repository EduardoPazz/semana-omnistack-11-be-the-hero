import React, { useState } from "react";

import api from "../../services/api";

import { Link, useHistory } from "react-router-dom";

import './styles.css';

import { FiArrowLeft } from "react-icons/fi";

import logoImg from '../../assets/logo.svg'

function Register() {

    const history = useHistory();

    const [name, setName] = useState(''); /* definindo variáveis que serão completas pelos inputs */
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsApp] = useState(Number);
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    async function handleRegister(event) { 
        event.preventDefault(); /* evitando o recarregar da página */
        
        const data = ({
            name,
            email,
            whatsapp,
            city,
            uf
        });

        try {
            const { data: { id } } = await api.post('/ongs', data)
            
            alert(`Seu ID de acesso: ${id}. Anote para não perder.`);      

            history.push('/logon');
        } catch (error) {
            alert(`Ocorreu algum erro no servidor, tente novamente em 8 horas.`);
        }


    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className="back-link" to="/logon">
                        <FiArrowLeft size="30" color="#E02041" />
                        Retornar ao Login
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da ONG" 
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                    <input 
                        type="Email" 
                        placeholder="Email" 
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                    <input 
                        type="number"
                        placeholder="WhatsApp" 
                        value={whatsapp}
                        onChange={event => setWhatsApp(event.target.value)}
                    />
                    <div className="input-group">
                        <input 
                            placeholder="Cidade" 
                            value={city}
                            onChange={event => setCity(event.target.value)}
                        />
                        <input 
                            placeholder="UF" maxLength="2" style={{ width: 73}}
                            value={uf}
                            onChange={event => setUf(event.target.value)}
                        /> 
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

export default Register;