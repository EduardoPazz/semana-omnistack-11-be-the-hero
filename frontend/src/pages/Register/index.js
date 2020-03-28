import React, { useState } from "react"; /* o useState será usado para obter as informações dos inputs */

import api from "../../services/api"; /* Importando API */

import { Link, useHistory /* esta é uma funcionalidade que permite redirecionar nosso usuário ao longo das rotas da aplicação */ } from "react-router-dom";

import './styles.css';

import { FiArrowLeft } from "react-icons/fi";

import logoImg from '../../assets/logo.svg'

function Register() {

    const history = useHistory();

    const [name, setName] = useState(''); /* definindo variáveis que serão completas pelos inputs */
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsApp] = useState(0);
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    async function handleRegister(event) { /* criando função que lidará com a inserção de dados. Por convenção, usa-se "handle" antes do nome do componente */
        event.preventDefault(); /* evitando o recarregar da página */
        
        const data = ({
            name,
            email,
            whatsapp,
            city,
            uf
        });

        try {
            const { data: { id } } = await api.post('/ongs', data) /* Este método realiza a request pro servidor. O primeiro parâmetro é a rota. Como em api.js, já há uma baseURL, aqui basta informar o recurso necessário, conforme fora estruturado no back-end. Como é uma request, ele retornará uma response, e essa response nós podemos inserir em uma variável. */
            console.log(id);
            alert(`Seu ID de acesso: ${id}. Anote para não perder.`);      
            history.push('/'); /* Este submétodo envia o usuário para a rota passada como o parâmetro de push */
        } catch (error) {
            console.error(error);
            alert(`Ocorreu algum erro no servidor, tente novamente em 8 horas.`);
        }


    }

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
                <form onSubmit={handleRegister}> {/* Sempre vamos obter alguma informação de um form, usa-se o evento "submit"  NO FORM para invocar uma função que execute a requisição. Por isso que é obrigatório que, em algum lugar do form, haja um input ou button com type=submit */}
                    <input 
                        placeholder="Nome da ONG" 
                        value={name} /* define o valor do input como sendo igual ao da variável. Porém, por causa da imutabilidade, esse valor não vai se alterar nunca */
                        onChange={event => setName(event.target.value)} /* então, é criado um event handler que invoca uma arrow function que, por sua vez, usa o event.target para referenciar seu próprio valor e joga isso como o retorno da função set* , que de fato altera o valor da variável */
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
                            placeholder="UF" maxLength="2" style={{ width: 73}} /* Em React, alterações inline do CSS também são possível, basta usar a propriedade style e atribuir a ela um objeto como membros as declarações em CSS */
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