import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Pressable, Modal } from 'react-native';

const AZUL = '#002776';

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

export default function Figurinhas() {
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

const styles = StyleSheet.create({
    scroll: { flex: 1, backgroundColor: '#f5f5f5' },
    scrollContent: { paddingBottom: 40 },

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
    figDica: { fontSize: 12, color: '#009c3b' },

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
    