import { StyleSheet } from "react-native"; /* Sempre para lidarmos com estilos, precisamos desse pacote */

import Constants from "expo-constants";

export default StyleSheet.create({ /* Para usar o Stylesheet, é necessário usar o comando create. Ele pode ser um objeto de objetos que, por sua vez, carregam as propriedades CSS */
    container: { /* Como são objetos, as declarações são separadas por vírgulas */
        flex: 1, /* Essa propriedade faz com que o componente ocupe toda a tela, e não só ocupe o tamanho que seus subcomponentes exigem. É importante que todo container geral possua essa propriedade */
        paddingHorizontal: 24, /* Em RN, não existe o shorthand como em CSS comum, e os valores em pixels são simplesmente declarados pelo número.  */
        paddingTop: Constants.statusBarHeight + 20
    },
    header: {
        flexDirection: "row", /* No RN, ao contrário da web, o flex-direction padrão é collum */
        alignItems: "center",
        justifyContent: "space-between",
    },
    headerText: {
        fontSize: 15,
        color: "#737380",
    },
    headerTextBold: {
        fontWeight: 'bold',
    },
    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold',
    },
    description: {
        lineHeight: 24,
        fontSize: 16,
        color: '#737380',
    }
})