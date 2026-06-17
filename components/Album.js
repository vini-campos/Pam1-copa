import { StyleSheet, Text, View, ScrollView, Image, Pressable, ImageBackground } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Figurinhas from './Figurinhas';

const capitulos = [
    {
        ano: '1950',
        titulo: 'Os primeiros Álbums',
        pais: 'Brasil',
        campeao: 'Uruguai',
        texto: 'Na copa de 1950, disputada no Brasil, surgiram os primeiros Álbums da copa. Eles eram feitos por diversas empresas, não sendo oficiais da organizadora do evento mundial',
        imagem: require('../assets/album_1950.jpg'),
    },
    {
        ano: '1970',
        titulo: 'A chegada da Panini',
        pais: 'México',
        campeao: 'Brasil',
        texto: 'Na Copa de 1970, a empresa italiana Panini lançou o primeiro álbum oficial da Copa do Mundo. O álbum marcou o início de uma tradição mundial de colecionar figurinhas durante os mundiais.',
        imagem: require('../assets/album_1970.jpg'),
    },
    {
        ano: '1974',
        titulo: 'As figurinhas adesivas',
        pais: 'Alemanha Ocidental',
        campeao: 'Alemanha Ocidental',
        texto: 'Na Copa de 1974, os álbums passaram a utilizar figurinhas adesivas no formato moderno. Antes disso, muitas precisavam ser coladas manualmente com cola.',
        imagem: require('../assets/album_1974.jpg'),
    },
    {
        ano: '1982',
        titulo: 'Os brilhantes lendários',
        pais: 'Espanha',
        campeao: 'Itália',
        texto: 'Durante a Copa de 1982 surgiram as famosas figurinhas brilhantes dos escudos das seleções. Elas rapidamente viraram as mais desejadas pelos colecionadores.',
        imagem: require('../assets/copa_1982.webp'),
    },
    {
        ano: '2022',
        titulo: 'A era digital dos álbums',
        pais: 'Catar',
        campeao: 'Argentina',
        texto: 'Na Copa de 2022, os álbums ganharam versões digitais e figurinhas raras especiais. A coleção virou um fenômeno mundial entre crianças e adultos.',
        imagem: require('../assets/copa_2022.jpg'),
    },
];

const Stack = createNativeStackNavigator();

function Tela() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Album" component={Album} options={{ headerShown: false }} />
            <Stack.Screen name="Figurinhas" component={Figurinhas} options={{ title: 'Figurinhas 2026',}} />
        </Stack.Navigator>
    );
}

function Album({ navigation }) {

    const backGroundImg = require('../assets/album_fundo.jpg');

    return (
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>

            <ImageBackground
                source={backGroundImg}
                style={styles.header}
                imageStyle={{ opacity: 0.45 }} // escurece a imagem
            >
                <Text style={styles.headerEyebrow}>PANINI · FIFA WORLD CUP</Text>
                <Text style={styles.headerTitle}>Álbum da Copa</Text>
            </ImageBackground>

            <Text style={styles.sectionTitle}>A história dos Álbums</Text>

            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardAno}>{capitulos[0].ano}</Text>
                    <Text style={styles.cardPais}>Sede: {capitulos[0].pais}</Text>
                </View>
                <Text style={styles.cardTitulo}>{capitulos[0].titulo}</Text>
                <Image source={capitulos[0].imagem} style={styles.imagem} resizeMode='contain'></Image>
                <Text style={styles.cardTexto}>{capitulos[0].texto}</Text>
                <Text style={styles.campeao}>🏆 Campeão: <Text style={styles.campeaoNome}>{capitulos[0].campeao}</Text></Text>
            </View>

            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardAno}>{capitulos[1].ano}</Text>
                    <Text style={styles.cardPais}>Sede: {capitulos[1].pais}</Text>
                </View>
                <Text style={styles.cardTitulo}>{capitulos[1].titulo}</Text>
                <Image source={capitulos[1].imagem} style={styles.imagem} resizeMode='contain'></Image>
                <Text style={styles.cardTexto}>{capitulos[1].texto}</Text>
                <Text style={styles.campeao}>🏆 Campeão: <Text style={styles.campeaoNome}>{capitulos[1].campeao}</Text></Text>
            </View>

            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardAno}>{capitulos[2].ano}</Text>
                    <Text style={styles.cardPais}>Sede: {capitulos[2].pais}</Text>
                </View>
                <Text style={styles.cardTitulo}>{capitulos[2].titulo}</Text>
                <Image source={capitulos[2].imagem} style={styles.imagem} resizeMode='contain'></Image>
                <Text style={styles.cardTexto}>{capitulos[2].texto}</Text>
                <Text style={styles.campeao}>🏆 Campeão: <Text style={styles.campeaoNome}>{capitulos[2].campeao}</Text></Text>
            </View>

            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardAno}>{capitulos[3].ano}</Text>
                    <Text style={styles.cardPais}>Sede: {capitulos[3].pais}</Text>
                </View>
                <Text style={styles.cardTitulo}>{capitulos[3].titulo}</Text>
                <Image source={capitulos[3].imagem} style={styles.imagem} resizeMode='contain'></Image>
                <Text style={styles.cardTexto}>{capitulos[3].texto}</Text>
                <Text style={styles.campeao}>🏆 Campeão: <Text style={styles.campeaoNome}>{capitulos[3].campeao}</Text></Text>
            </View>

            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardAno}>{capitulos[4].ano}</Text>
                    <Text style={styles.cardPais}>Sede: {capitulos[4].pais}</Text>
                </View>
                <Text style={styles.cardTitulo}>{capitulos[4].titulo}</Text>
                <Image source={capitulos[4].imagem} style={styles.imagem} resizeMode='contain'></Image>
                <Text style={styles.cardTexto}>{capitulos[4].texto}</Text>
                <Text style={styles.campeao}>🏆 Campeão: <Text style={styles.campeaoNome}>{capitulos[4].campeao}</Text></Text>
            </View>

            <View style={styles.botaoContainer}>
                <Pressable onPress={() => navigation.navigate('Figurinhas')} style={styles.botao}>
                    <Text style={styles.botaoTexto}>Ver figurinhas do Brasil de 2026 ›</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}

export default Tela;

const VERDE = '#009c3b';
const AMARELO = '#FFCC00';
const AZUL = '#002776';

const styles = StyleSheet.create({
    scroll: { flex: 1, backgroundColor: '#f5f5f5' },
    scrollContent: { paddingBottom: 40 },

    header: {
        backgroundColor: AZUL,
        minHeight: 225,
        paddingTop: 130,
        paddingBottom: 24,
        paddingHorizontal: 20,
        borderBottomWidth: 3,
        borderBottomColor: AMARELO,
    },
    headerEyebrow: { color: AMARELO, fontSize: 11, fontWeight: '700', letterSpacing: 2, marginBottom: 4 },
    headerTitle: { color: '#fff', fontSize: 26, fontWeight: '800' },

    sectionTitle: {
        fontSize: 15,
        fontWeight: '700',
        color: '#1a1a1a',
        marginHorizontal: 16,
        marginTop: 16,
        marginBottom: 8,
    },

    // Cards história
    card: {
        backgroundColor: '#fff',
        marginHorizontal: 16,
        marginBottom: 10,
        borderRadius: 10,
        padding: 16,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    cardHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
    cardAno: { color: VERDE, fontWeight: '800', fontSize: 13 },
    cardPais: { color: '#888', fontSize: 12 },
    cardTitulo: { color: '#1a1a1a', fontSize: 16, fontWeight: '700', marginBottom: 10 },
    imagem: { width: '100%', height: 160, borderRadius: 8, marginBottom: 10 },
    imagemPlaceholder: {
        height: 100,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    imagemPlaceholderText: { color: '#aaa', fontSize: 13 },
    cardTexto: { color: '#555', fontSize: 14, lineHeight: 21, marginBottom: 10 },
    campeao: { color: '#888', fontSize: 13 },
    campeaoNome: { color: AZUL, fontWeight: '700' },

    // Botão
    botaoContainer: { marginHorizontal: 16, marginTop: 8 },
    botao: { backgroundColor: AZUL, borderRadius: 10, padding: 16, alignItems: 'center' },
    botaoTexto: { color: '#fff', fontWeight: '700', fontSize: 15 },
});