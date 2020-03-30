import React from "react";

import { View, Text, Image } from "react-native";

import logoImg from '../../assets/logo.png'

import styles from './styles' /* agora, importando o resultado de StyleSheet.create() temos todos os membros presentes para o uso. O esquema é criar um membro para cada tipo de componente da nossa página como se fosse uma classe a se aplicar */

export default function Incidents() {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} /> {/* Diferente de src, a propriedade é source */}
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold} >0 casos.</Text>
                </Text>
            </View>

            <Text style={styles.title}>Bem-Vinda!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia:</Text>
        </View>
    );
};