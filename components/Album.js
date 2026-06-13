import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Pressable, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const capitulos = [
    {
        ano: '1950',
        titulo: 'Os primeiros Álbums',
        pais: 'Brasil',
        campeao: 'Uruguai',
        texto:
            'Na copa de 1950, disputada no Brasil, surgiram os primeiros Álbums da copa. Eles eram feitos por diversas empresas, não sendo oficiais da organizadora do evento mundial',
        imagem: null, // substitua por require('./assets/1930.jpg')
    },
    {
        ano: '1970',
        titulo: 'A chegada da Panini',
        pais: 'México',
        campeao: 'Brasil',
        texto:
            'Na Copa de 1970, a empresa italiana Panini lançou o primeiro álbum oficial da Copa do Mundo. O álbum marcou o início de uma tradição mundial de colecionar figurinhas durante os mundiais.'
    },

    {
        ano: '1974',
        titulo: 'As figurinhas adesivas',
        pais: 'Alemanha Ocidental',
        campeao: 'Alemanha Ocidental',
        texto:
            'Na Copa de 1974, os álbums passaram a utilizar figurinhas adesivas no formato moderno. Antes disso, muitas precisavam ser coladas manualmente com cola.'
    },

    {
        ano: '1982',
        titulo: 'Os brilhantes lendários',
        pais: 'Espanha',
        campeao: 'Itália',
        texto:
            'Durante a Copa de 1982 surgiram as famosas figurinhas brilhantes dos escudos das seleções. Elas rapidamente viraram as mais desejadas pelos colecionadores.'
    },

    {
        ano: '2022',
        titulo: 'A era digital dos álbums',
        pais: 'Catar',
        campeao: 'Argentina',
        texto:
            'Na Copa de 2022, os álbums ganharam versões digitais e figurinhas raras especiais. A coleção virou um fenômeno mundial entre crianças e adultos.'
    }
];


const jogadores = [
    {
        id: 1,
        nome: 'Lamine Yamal',
        pais: 'Espanha',
        idade: 18,
        velocidade: 8,// 8/10
        forca: 7,
        altura: 8,
        chute: 8,
        drible: 8,
        foto: require('../assets/lamineYamal.png') //coloca o caminho da foto do cara
    },
    {
        id: 2,
        nome: 'Lamine',
        pais: 'Espanha',
        idade: 18,
        velocidade: 8,// 8/10
        forca: 7,
        altura: 8,
        chute: 8,
        drible: 8,
        foto: require('../assets/lamineYamal.png') //coloca o caminho da foto do cara
    },
    {
        id: 3,
        nome: 'Lula',
        pais: 'PT',
        idade: 607,
        velocidade: 10,// 8/10
        forca: 10,
        altura: -1,
        chute: 10,
        drible: 100,
        foto: require('../assets/figLula.png') //coloca o caminho da foto do cara
    }
]

const Stack = createNativeStackNavigator();
function Tela() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Album" component={Album} />
            <Stack.Screen name="Figurinhas" component={Figurinhas} />
        </Stack.Navigator>
    )
}


function Album({ navigation }) {
    return (
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>O Álbum de Figurinhas da copa</Text>
                <Text style={styles.headerSub}>
                    A "nova" febre do futebol: Figurinhas colecionáveis
                </Text>
            </View>

            {/* Estatísticas rápidas (tirar) */}
            <View style={styles.statsRow}>
                <View style={styles.statItem}>
                    <Text style={styles.statNum}>15</Text>
                    <Text style={styles.statLabel}>Edições oficiais</Text>
                </View>

            </View>


            <Text style={styles.sectionTitle}>A história dos Álbums da copa</Text>

            {capitulos.map((cap, i) => (
                <View key={i} style={styles.capitulo}>

                    {/* Conteúdo */}
                    <View style={styles.capituloContent}>
                        <View style={styles.capituloHeader}>
                            <Text style={styles.capituloAno}>{cap.ano}</Text>
                            <Text style={styles.capituloFlag}>Sede: {cap.pais}</Text>
                        </View>

                        <Text style={styles.capituloTitulo}>{cap.titulo}</Text>

                        {/* Espaço para imagem */}
                        <View style={styles.imagemContainer}>
                            {cap.imagem ? (
                                <Image source={cap.imagem} style={styles.imagem} resizeMode="cover" />
                            ) : (
                                <View style={styles.imagemPlaceholder}>
                                    <Text style={styles.imagemPlaceholderIcon}>📷</Text>
                                    <Text style={styles.imagemPlaceholderText}>Adicione uma imagem</Text>
                                </View>
                            )}
                        </View>

                        <Text style={styles.capituloTexto}>{cap.texto}</Text>

                        <View style={styles.campeaoBadge}>
                            <Text style={styles.campeaoLabel}>🏆 Campeão: </Text>
                            <Text style={styles.campeaoNome}>{cap.campeao}</Text>
                        </View>
                    </View>

                </View>
            ))}

            <View style={styles.divFigs}>
                <Pressable onPress={() => navigation.navigate('Figurinhas')}>
                    <View style={styles.divCard}>
                        <Text style={{ color: '#ffffff', fontSize: 15, fontWeight: 'bold' }}>Veja também: Príncipais figurinhas da Copa de 2026</Text>
                    </View>
                </Pressable>
            </View>

        </ScrollView>
    );
}





function Figurinhas({ navigation }) {
    const [modalVisivel, setModalVisivel] = useState(false);
    const [jogadorSelecionado, setJogadorSelecionado] = useState(null);
    return (
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>

            <View style={{ flexDirection: 'column' }}>

                {jogadores.map((fig) => (// for dessa joça de linguagem
                    <Pressable onPress={() => {
                        setJogadorSelecionado(fig);
                        setModalVisivel(true);
                    }}>
                        <View key={fig.id} style={styles.cardFig}>
                            <Text style={{ fontWeight: 'bold', paddingBottom: 5, fontSize: 15 }}>{fig.nome}</Text>
                            <Image source={fig.foto} style={{ height: 250, width: 180, borderRadius: 20 }} />
                            <Text style={{ color: '#818181', paddingTop: 5 }}>Toque para ver mais</Text>
                        </View>
                    </Pressable>
                ))}

            </View>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisivel}
                onRequestClose={() => setModalVisivel(false)}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        backgroundColor: '#fff',
                        borderRadius: 25,
                        padding: 25,
                        alignItems: 'center',
                        width: '90%'
                    }}>

                        <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#002776', marginBottom: 15 }}>
                            {jogadorSelecionado?.nome}
                        </Text>

                        <Image
                            source={jogadorSelecionado?.foto}
                            style={{ width: 250, height: 340, borderRadius: 15 }}
                            resizeMode="cover"
                        />

                        <Text style={{ fontSize: 16, marginTop: 10 }}>
                            {jogadorSelecionado?.pais}
                        </Text>
                        <Text style={{ fontSize: 16, marginBottom: 10 }}>
                            {jogadorSelecionado?.idade} anos
                        </Text>

                        <View style={{
                            backgroundColor: '#f5f5f5',
                            padding: 15,
                            borderRadius: 10,
                            width: '100%',
                            marginBottom: 20
                        }}>
                            <Text>Velocidade: {jogadorSelecionado?.velocidade}/10</Text>
                            <Text>Força: {jogadorSelecionado?.forca}/10</Text>
                            <Text>Altura: {jogadorSelecionado?.altura}/10</Text>
                            <Text>Chute: {jogadorSelecionado?.chute}/10</Text>
                            <Text>Drible: {jogadorSelecionado?.drible}/10</Text>
                        </View>

                        <Pressable
                            onPress={() => setModalVisivel(false)}
                            style={{
                                backgroundColor: '#002776',
                                padding: 15,
                                borderRadius: 12,
                                width: '100%',
                                alignItems: 'center'
                            }}
                        >
                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>FECHAR</Text>
                        </Pressable>

                    </View>
                </View>
            </Modal>

        </ScrollView>
    )
}

export default Tela;

const VERDE = '#009c3b';
const AMARELO = '#e6b800';
const AZUL = '#65ca4c';
const FUNDO = '#f0f4f8';
const CARD = '#ffffff';
const TEXTO = '#0d1b2a';
const TEXTO_MUTED = '#6b7a8d';
const BORDA = '#dde3ec';

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        backgroundColor: FUNDO,
    },
    scrollContent: {
        paddingBottom: 60,
    },
    //funcao figurinhas
    cardFig: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 20,
        width: 'auto',
        height: 330,
        margin: 7,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.28,
        shadowRadius: 10,
        alignItems: 'center',
    },



    //div do botão
    divFigs: {
        justifyContent: "center",
        alignItems: 'center',
        margin: 10,
    },

    divCard: {
        borderRadius: 16,
        padding: 20,
        backgroundColor: '#2a55ac',
    },

    // Header
    header: {
        backgroundColor: AZUL,
        paddingTop: 60,
        paddingBottom: 36,
        paddingHorizontal: 24,
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
    },
    headerEyebrow: {
        color: AMARELO,
        fontSize: 11,
        fontWeight: '700',
        letterSpacing: 3,
        marginBottom: 10,
    },
    headerTitle: {
        color: '#ffffff',
        fontSize: 36,
        fontWeight: '900',
        lineHeight: 40,
        marginBottom: 10,
    },
    headerSub: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 14,
        lineHeight: 20,
    },

    // Stats
    statsRow: {
        flexDirection: 'row',
        backgroundColor: CARD,
        marginHorizontal: 20,
        marginTop: -20,
        borderRadius: 16,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-around',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 10,
        elevation: 4,
    },
    statItem: {
        alignItems: 'center',
        flex: 1,
    },
    statNum: {
        color: AZUL,
        fontSize: 26,
        fontWeight: '900',
    },
    statLabel: {
        color: TEXTO_MUTED,
        fontSize: 12,
        marginTop: 2,
    },
    statDivider: {
        width: 1,
        height: 36,
        backgroundColor: BORDA,
    },

    // Seção
    sectionTitle: {
        color: TEXTO,
        fontSize: 18,
        fontWeight: '800',
        marginHorizontal: 20,
        marginTop: 28,
        marginBottom: 16,
    },

    // Capítulo / timeline
    capitulo: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginBottom: 4,
    },
    timelineCol: {
        alignItems: 'center',
        width: 24,
        marginRight: 16,
        paddingTop: 4,
    },
    timelineDot: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: VERDE,
        borderWidth: 2,
        borderColor: '#fff',
        shadowColor: VERDE,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 2,
    },
    timelineLine: {
        flex: 1,
        width: 2,
        backgroundColor: BORDA,
        marginTop: 4,
        marginBottom: -4,
    },

    capituloContent: {
        flex: 1,
        backgroundColor: CARD,
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: BORDA,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 6,
        elevation: 2,
    },
    capituloHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6,
    },
    capituloAno: {
        color: VERDE,
        fontSize: 13,
        fontWeight: '800',
        letterSpacing: 1,
    },
    capituloFlag: {
        fontSize: 12,
        color: TEXTO_MUTED,
    },
    capituloTitulo: {
        color: TEXTO,
        fontSize: 18,
        fontWeight: '800',
        marginBottom: 12,
        lineHeight: 24,
    },

    // Imagem
    imagemContainer: {
        width: '100%',
        height: 180,
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 12,
        backgroundColor: '#eef1f6',
    },
    imagem: {
        width: '100%',
        height: '100%',
    },
    imagemPlaceholder: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: BORDA,
        borderStyle: 'dashed',
        borderRadius: 12,
        gap: 6,
    },
    imagemPlaceholderIcon: {
        fontSize: 28,
    },
    imagemPlaceholderText: {
        color: TEXTO_MUTED,
        fontSize: 13,
    },

    capituloTexto: {
        color: TEXTO_MUTED,
        fontSize: 14,
        lineHeight: 22,
        marginBottom: 14,
    },
    campeaoBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fffbea',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 6,
        alignSelf: 'flex-start',
        borderWidth: 1,
        borderColor: '#f5e49a',
    },
    campeaoLabel: {
        fontSize: 13,
        color: TEXTO_MUTED,
    },
    campeaoNome: {
        fontSize: 13,
        fontWeight: '700',
        color: AZUL,
    },
});