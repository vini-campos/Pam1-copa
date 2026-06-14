import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Pressable, Modal, ImageBackground } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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

const jogadores = [
    {
        id: 1,
        nome: 'Lamine Yamal',
        pais: 'Espanha',
        idade: 18,
        velocidade: 8,
        forca: 7,
        altura: 8,
        chute: 8,
        drible: 8,
        foto: require('../assets/lamineYamal.png'),
    },
    {
        id: 2,
        nome: 'Lamine',
        pais: 'Espanha',
        idade: 18,
        velocidade: 8,
        forca: 7,
        altura: 8,
        chute: 8,
        drible: 8,
        foto: require('../assets/lamineYamal.png'),
    },
    {
        id: 3,
        nome: 'Lula',
        pais: 'PT',
        idade: 607,
        velocidade: 10,
        forca: 10,
        altura: -1,
        chute: 10,
        drible: 100,
        foto: require('../assets/figLula.png'),
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
                    <Text style={styles.botaoTexto}>Ver figurinhas da Copa 2026 ›</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}

function Figurinhas() {
    const [modalVisivel, setModalVisivel] = useState(false);
    const [jogadorSelecionado, setJogadorSelecionado] = useState(null);

    return (
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>

            <Pressable onPress={() => { setJogadorSelecionado(jogadores[0]); setModalVisivel(true); }}>
                <View style={styles.cardFig}>
                    <Image source={jogadores[0].foto} style={styles.figFoto} />
                    <View style={styles.figInfo}>
                        <Text style={styles.figNome}>{jogadores[0].nome}</Text>
                        <Text style={styles.figPais}>{jogadores[0].pais} · {jogadores[0].idade} anos</Text>
                        <Text style={styles.figDica}>Toque para ver mais</Text>
                    </View>
                </View>
            </Pressable>

            <Pressable onPress={() => { setJogadorSelecionado(jogadores[1]); setModalVisivel(true); }}>
                <View style={styles.cardFig}>
                    <Image source={jogadores[1].foto} style={styles.figFoto} />
                    <View style={styles.figInfo}>
                        <Text style={styles.figNome}>{jogadores[1].nome}</Text>
                        <Text style={styles.figPais}>{jogadores[1].pais} · {jogadores[1].idade} anos</Text>
                        <Text style={styles.figDica}>Toque para ver mais</Text>
                    </View>
                </View>
            </Pressable>

            <Pressable onPress={() => { setJogadorSelecionado(jogadores[2]); setModalVisivel(true); }}>
                <View style={styles.cardFig}>
                    <Image source={jogadores[2].foto} style={styles.figFoto} />
                    <View style={styles.figInfo}>
                        <Text style={styles.figNome}>{jogadores[2].nome}</Text>
                        <Text style={styles.figPais}>{jogadores[2].pais} · {jogadores[2].idade} anos</Text>
                        <Text style={styles.figDica}>Toque para ver mais</Text>
                    </View>
                </View>
            </Pressable>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisivel}
                onRequestClose={() => setModalVisivel(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalCard}>
                        <Text style={styles.modalNome}>{jogadorSelecionado?.nome}</Text>
                        <Image source={jogadorSelecionado?.foto} style={styles.modalFoto} resizeMode="cover" />
                        <Text style={styles.modalPais}>{jogadorSelecionado?.pais} · {jogadorSelecionado?.idade} anos</Text>
                        <View style={styles.modalStats}>
                            <Text style={styles.modalStat}>Velocidade: {jogadorSelecionado?.velocidade}/10</Text>
                            <Text style={styles.modalStat}>Força: {jogadorSelecionado?.forca}/10</Text>
                            <Text style={styles.modalStat}>Altura: {jogadorSelecionado?.altura}/10</Text>
                            <Text style={styles.modalStat}>Chute: {jogadorSelecionado?.chute}/10</Text>
                            <Text style={styles.modalStat}>Drible: {jogadorSelecionado?.drible}/10</Text>
                        </View>
                        <Pressable onPress={() => setModalVisivel(false)} style={styles.modalBotao}>
                            <Text style={styles.modalBotaoTexto}>FECHAR</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

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

    // Cards figurinhas
    cardFig: {
        backgroundColor: '#fff',
        marginHorizontal: 16,
        marginBottom: 10,
        borderRadius: 10,
        padding: 14,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
    },
    figFoto: { width: 70, height: 90, borderRadius: 8 },
    figInfo: { flex: 1 },
    figNome: { fontSize: 16, fontWeight: '700', color: '#1a1a1a', marginBottom: 2 },
    figPais: { fontSize: 13, color: '#888', marginBottom: 4 },
    figDica: { fontSize: 12, color: VERDE },

    // Modal
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalCard: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 24,
        alignItems: 'center',
        width: '90%',
    },
    modalNome: { fontSize: 22, fontWeight: '800', color: AZUL, marginBottom: 14 },
    modalFoto: { width: 220, height: 300, borderRadius: 12, marginBottom: 12 },
    modalPais: { fontSize: 14, color: '#888', marginBottom: 12 },
    modalStats: {
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        padding: 14,
        width: '100%',
        marginBottom: 16,
        gap: 4,
    },
    modalStat: { fontSize: 14, color: '#1a1a1a' },
    modalBotao: {
        backgroundColor: AZUL,
        padding: 14,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
    },
    modalBotaoTexto: { color: '#fff', fontWeight: '700', fontSize: 15 },
});