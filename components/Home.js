import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';

function Home() {
    const partidas = [
        { time1: 'Brasil', placar1: 2, time2: 'Argentina', placar2: 1, status: 'Encerrado' },
        { time1: 'França', placar1: 1, time2: 'Alemanha', placar2: 1, status: 'Ao vivo' },
        { time1: 'Portugal', placar1: null, time2: 'Espanha', placar2: null, status: '18:00' },
    ];

    const grupos = ['A', 'B', 'C', 'D'];

    const backGroundImg = require('../assets/copa_2026_fundo.webp');

    return (
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>

            <ImageBackground
                source={backGroundImg}
                style={styles.header}
                imageStyle={{ opacity: 0.45 }} //escurece a imagem
            >
                <Text style={styles.headerSub}>FIFA WORLD CUP 2026</Text>
                <Text style={styles.headerTitle}>Copa do Mundo</Text>
            </ImageBackground>

            <View style={styles.liveCard}>
                <Text style={styles.liveLabel}>AO VIVO</Text>
                <View style={styles.liveMatch}>
                    <Text style={styles.liveTeam}>França</Text>
                    <Text style={styles.liveScore}>1 — 1</Text>
                    <Text style={styles.liveTeam}>Alemanha</Text>
                </View>
                <Text style={styles.liveMinute}>72' · Grupo F</Text>
            </View>

            <Text style={styles.sectionTitle}>Partidas de Hoje</Text>

            <TouchableOpacity style={styles.matchCard}>
                <View style={styles.matchRow}>
                    <Text style={styles.matchTeam}>Brasil</Text>
                    <Text style={styles.matchScore}>2 - 1</Text>
                    <Text style={[styles.matchTeam, { textAlign: 'right' }]}>Argentina</Text>
                </View>
                <Text style={styles.matchStatus}>Encerrado</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.matchCard}>
                <View style={styles.matchRow}>
                    <Text style={styles.matchTeam}>França</Text>
                    <Text style={[styles.matchScore, styles.matchScoreLive]}>1 - 1</Text>
                    <Text style={[styles.matchTeam, { textAlign: 'right' }]}>Alemanha</Text>
                </View>
                <Text style={styles.matchStatus}>Ao vivo</Text>
            </TouchableOpacity>
            {/*tem q trocar essas divs dps pra uma não clickável*/}
            <TouchableOpacity style={styles.matchCard}>
                <View style={styles.matchRow}>
                    <Text style={styles.matchTeam}>Portugal</Text>
                    <Text style={styles.matchScore}>18:00</Text>
                    <Text style={[styles.matchTeam, { textAlign: 'right' }]}>Espanha</Text>
                </View>
                <Text style={styles.matchStatus}>18:00</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

export default Home;

// para nao digitar a cor todas as vezes
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
        paddingBottom: 20,
        paddingHorizontal: 20,
        borderBottomWidth: 3,
        borderBottomColor: AMARELO,
    },
    headerSub: { color: AMARELO, fontSize: 11, fontWeight: '700', letterSpacing: 2, marginBottom: 4 },
    headerTitle: { color: '#fff', fontSize: 26, fontWeight: '800' },

    liveCard: {
        backgroundColor: VERDE,
        margin: 16,
        borderRadius: 10,
        padding: 16,
        alignItems: 'center',
    },

    liveLabel: { color: AMARELO, fontWeight: '700', fontSize: 12, marginBottom: 10 },
    liveMatch: { flexDirection: 'row', alignItems: 'center', gap: 12 },
    liveTeam: { color: '#fff', fontSize: 16, fontWeight: '700', flex: 1, textAlign: 'center' },
    liveScore: { color: AMARELO, fontSize: 24, fontWeight: '900' },
    liveMinute: { color: 'rgba(255,255,255,0.7)', fontSize: 12, marginTop: 8 },

    sectionTitle: {
        fontSize: 15,
        fontWeight: '700',
        color: '#1a1a1a',
        marginHorizontal: 16,
        marginTop: 16,
        marginBottom: 8,
    },

    matchCard: {
        backgroundColor: '#fff',
        marginHorizontal: 16,
        marginBottom: 8,
        borderRadius: 8,
        padding: 14,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    matchRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    matchTeam: { color: '#1a1a1a', fontSize: 14, fontWeight: '600', flex: 1 },
    matchScore: { color: '#1a1a1a', fontWeight: '700', fontSize: 13, paddingHorizontal: 8 },
    matchScoreLive: { color: VERDE },
    matchStatus: { color: '#888', fontSize: 11, marginTop: 4 },

    gruposGrid: { flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 16, gap: 10 },
    grupoCard: {
        backgroundColor: '#fff',
        borderRadius: 8,
        width: '46%',
        paddingVertical: 16,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderTopWidth: 3,
        borderTopColor: AMARELO,
    },
    grupoLetra: { color: AZUL, fontSize: 16, fontWeight: '800' },
    grupoSub: { color: '#888', fontSize: 12, marginTop: 2 },
});