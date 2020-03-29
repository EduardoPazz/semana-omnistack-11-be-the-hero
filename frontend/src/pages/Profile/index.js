import React, { useEffect, useState } from "react"; /* importando useEffect */

import api from "../../services/api";

import './styles.css';

import { Link, useHistory } from "react-router-dom";

import { FiPower, FiDelete } from "react-icons/fi";

import logoImg from '../../assets/logo.svg';

function Profile() {

    const history = useHistory();

    const [incidents, setIncidents] = useState([]) /* como temos que obter da ONG logada todos os Incidents associados a ela, e cada Incident é um objeto em um array (uma linha em uma tabela), definimos o useState como um array vazio, em princípio */

    const name = localStorage.getItem('ong_name');
    const id = localStorage.getItem('ong_id');

    useEffect(() => {
        api.get('/profile', { headers: { auth: id } }) /* Para passar dados pela requisição que não sejam necessariamente pelo corpo, é preciso abrir um objeto no segundo parâmetro do método e informar o membro desejado e seu valor. No caso, estamos fazendo com que o servidor receba req.headers.auth */
            .then(res => setIncidents(res.data));
    }, [id]) /* Esta é uma funcionalidade do react que permite uma espécie de event listener coringa do tipo "change": aceita dois parâmetros, sendo o primeiro um callback, e o segundo um array de dependência. O que são essas dependências? São quaisquer valores que, quando alterados sequer uma vez, disparam a callback. O pulo do gato aqui é que se um array vazio for disponibilizado, o callback será disparado uma primeira vez ao carregar da rota, o que é útil para a autenticação de usuário logado, por exemplo. Porém, ainda sim, recomenda-se informar alguma dependência. Nesse caso, queremos que o callback seja invocado uma única vez, informar o ong_id (uma constante do usuário logado) ainda faz com que a callback só seja invocada uma vez */

    async function handleDeleteIncident(incidentID) {
        try {
            await api.delete(`/incidents/${incidentID}`, { headers: { auth: id } });
            setIncidents(incidents.filter(incident => incident.id !== incidentID))
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
                <span>Bem vindx, {name} </span>
                <Link className="button" to="/incidents/new" >Cadastrar novo caso</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size="22" color="red" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {/* Preste atenção pois os passos aqui serão ardilosos */}
                {/* Primeiro, temos um array de objetos que obtivemos do nosso servidor, e queremos printar todos eles na tela. Pra isso, usaremos o método iterador map. Por que não o forEach? O forEach itera o array mas não retorna o resultado de sua callback naturalmente, enquanto o map faz isso. */}
                {incidents.map(incident => ( /* Estamos iterando cada elemento do array para criar um <li> com as informações de cada elemento. Como queremos retornar a conclusão de cada iteração, normalmente faríamos () => { return something }. Porém, no React podemos encurtar esse processo apenas trocando as { } do corpo da função por ( ), ficando assim: () => (something) */
                    <li key={incident.id}> {/* Em uma iteração de JSX, é sempre importante fornecer uma key única no primeiro elemento para que possa-se identificar essa iteração posteriormente*/}
                        <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
                            <FiDelete size="30" color="#41414D" />
                        </button>
                        <strong>Caso</strong>
                        <p>{incident.title}</p>
                        <strong>Descrição</strong>
                        <p>{incident.description}</p>
                        <strong>Valor</strong>
                        <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(incident.value)}</p> {/* A linha a esquerda converte a formatação de um número para dinheiro BR. */}
                    </li>
                ))} 
            </ul>
        </div>
    );
}

export default Profile;