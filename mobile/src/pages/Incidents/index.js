import React from "react";

import { useNavigation } from "@react-navigation/native"; /* Este pacote funciona da mesma forma que o useHistory no React Web, alterando o usuário de rota */

import { View, FlatList /* pacote usado quando precisamos mostrar uma lista de conteúdos */ , Text, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

import { Feather } from "@expo/vector-icons"; /* Importando o pacote de ícones que vem out-of-the-box com o expo. Neste caso, basta desconstruir o objeto com o grupo de ícones que queres */

import logoImg from "../../assets/logo.png";

export default function Incidents() {
    const navigation = useNavigation(); /* o useNavigation precisa ser atribuído a uma variável também */

    function navigateToDetails() { /* este será um event handler que será invocado pelo clicar do usuário no botão TouchableOpacity */
        navigation.navigate('Details'); /* Então, é usado esse comando, sendo como parâmetro o nome da Screen conforme informada em routes.js */
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>
                </Text>
            </View>

            <Text style={styles.title}>Hello World!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia</Text>

            <FlatList /* O FlatList é um componente sem fechamento */
                style={styles.incidentsList}
                data={[1, 2, 3]} /* Ele possui uma propriedade para obter os dados que irá dispor ao usuário, sendo eles dispostos em um array */
                showsVerticalScrollIndicator={false} /* Esta é outra propriedade que aceita valores booleanos. Mostra ou não um scroll para a lista quando ela excede o tamanho da tela */
                keyExtractor={incident => String(incident)} /* da mesma forma que na web, a iteração de elemento JSX precisa de uma key. No caso do FlatList, ele possui a propriedade keyExtractor, que recebe uma callback que deverá retornar a tal key, e ela PRECISA SER UMA STRING. Essa callback irá iterar cada elemento do array em data, e, obviamente, cada elemento deve haver alguma informação que seja única a ela (no caso do nosso banco de dados, obtemos um objeto de possui a propriedade id, que é única) */
                renderItem={() => /* E então a função que irá fazer o render das informações. Lembrando, em React (e Native também), quando uma função retorna JSX, usa-se parenteses no bloco, ao invés de colchetes. Aqui vai funcionar que nem com o map na parte web, sendo o nosso conteúdo a ser renderizado passo no bloco desta função */ (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>ONG exemplo</Text>
                        
                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>Caso exemplo</Text>

                        <Text style={styles.incidentProperty}>DESCRIÇÃO:</Text>
                        <Text style={styles.incidentValue}>Descrição exemplo</Text>

                        <TouchableOpacity 
                            style={styles.detailsButton} 
                            onPress={navigateToDetails} /* Este é um componente semelhante a um <button>, que naturalmente muda a opacidade ao ser pressionado para criar uma interação com o usuário. Ele aceita estilos e precisa obrigatóriamente de um um event listener. No caso, usamos o onPress. */
                        > {/* Assim como um <button>, o TouchableOpacity precisa de um conteúdo dentro de si */}
                            <Text style={styles.detailsButtonText}>
                                <Feather 
                                    name="arrow-right" 
                                    size={17} 
                                    color="#e02041" 
                                /> {/* O uso de ícones em RN é diferente que em React. Primeiro, todo o pacote é importado, e o ícone em específico a ser usado é informado na propriedade name do componente */}
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}