import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

function Home() {
  const partidas = [
    { time1: 'Brasil', placar1: 2, time2: 'Argentina', placar2: 1, status: 'Encerrado' },
    { time1: 'França', placar1: 1, time2: 'Alemanha', placar2: 1, status: 'Ao vivo' },
    { time1: 'Portugal', placar1: null, time2: 'Espanha', placar2: null, status: '18:00' },
  ];

  const grupos = ['A', 'B', 'C', 'D'];

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerEyebrow}>FIFA WORLD CUP 2026</Text>
        <Text style={styles.headerTitle}>⚽ Copa do{'\n'}Mundo</Text>
        <Text style={styles.headerSub}>Acompanhe resultados, grupos e classificação</Text>
      </View>

      {/* Destaque ao vivo */}
      <View style={styles.liveCard}>
        <View style={styles.liveBadge}>
          <View style={styles.liveDot} />
          <Text style={styles.liveLabel}>AO VIVO</Text>
        </View>
        <View style={styles.liveMatch}>
          <Text style={styles.liveTeam}>França</Text>
          <Text style={styles.liveScore}>1 — 1</Text>
          <Text style={styles.liveTeam}>Alemanha</Text>
        </View>
        <Text style={styles.liveMinute}>72'  •  Grupo F</Text>
      </View>

      {/* Partidas */}
      <Text style={styles.sectionTitle}>Partidas de Hoje</Text>

      {partidas.map((p, i) => (
        <TouchableOpacity key={i} style={styles.matchCard}>
          <View style={styles.matchRow}>
            <Text style={styles.matchTeam}>{p.time1}</Text>
            <View style={[
              styles.matchScoreBox,
              p.status === 'Ao vivo' && styles.matchScoreBoxLive,
            ]}>
              <Text style={[
                styles.matchScore,
                p.status === 'Ao vivo' && styles.matchScoreLive,
              ]}>
                {p.placar1 !== null ? `${p.placar1} - ${p.placar2}` : p.status}
              </Text>
            </View>
            <Text style={[styles.matchTeam, styles.matchTeamRight]}>{p.time2}</Text>
          </View>
          <Text style={styles.matchStatus}>{p.status}</Text>
        </TouchableOpacity>
      ))}

      {/* Grupos */}
      <Text style={styles.sectionTitle}>Grupos</Text>
      <View style={styles.gruposGrid}>
        {grupos.map((g) => (
          <TouchableOpacity key={g} style={styles.grupoCard}>
            <Text style={styles.grupoLetra}>{g}</Text>
            <Text style={styles.grupoSub}>4 seleções</Text>
          </TouchableOpacity>
        ))}
      </View>

    </ScrollView>
  );
}

export default Home;

const VERDE = '#009c3b';
const AMARELO = '#e6b800';
const AZUL = '#002776';
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
    paddingBottom: 40,
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
    fontSize: 42,
    fontWeight: '900',
    lineHeight: 46,
    marginBottom: 10,
  },
  headerSub: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 14,
  },

  // Card ao vivo
  liveCard: {
    backgroundColor: VERDE,
    margin: 20,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: VERDE,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
  liveBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: AMARELO,
    marginRight: 6,
  },
  liveLabel: {
    color: AMARELO,
    fontWeight: '800',
    fontSize: 11,
    letterSpacing: 2,
  },
  liveMatch: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  liveTeam: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    flex: 1,
    textAlign: 'center',
  },
  liveScore: {
    color: AMARELO,
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: 2,
  },
  liveMinute: {
    color: 'rgba(255,255,255,0.75)',
    fontSize: 13,
    marginTop: 10,
  },

  // Seções
  sectionTitle: {
    color: TEXTO,
    fontSize: 18,
    fontWeight: '800',
    marginHorizontal: 20,
    marginTop: 8,
    marginBottom: 12,
  },

  // Partidas
  matchCard: {
    backgroundColor: CARD,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: BORDA,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  matchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  matchTeam: {
    color: TEXTO,
    fontSize: 15,
    fontWeight: '600',
    flex: 1,
  },
  matchTeamRight: {
    textAlign: 'right',
  },
  matchScoreBox: {
    backgroundColor: FUNDO,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: BORDA,
  },
  matchScoreBoxLive: {
    backgroundColor: VERDE,
    borderColor: VERDE,
  },
  matchScore: {
    color: TEXTO,
    fontWeight: '700',
    fontSize: 14,
    letterSpacing: 1,
  },
  matchScoreLive: {
    color: '#fff',
  },
  matchStatus: {
    color: TEXTO_MUTED,
    fontSize: 12,
    marginTop: 6,
  },

  // Grupos
  gruposGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 20,
    gap: 12,
  },
  grupoCard: {
    backgroundColor: CARD,
    borderRadius: 14,
    width: '46%',
    paddingVertical: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: BORDA,
    borderLeftWidth: 4,
    borderLeftColor: AMARELO,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  grupoLetra: {
    color: AZUL,
    fontSize: 28,
    fontWeight: '900',
  },
  grupoSub: {
    color: TEXTO_MUTED,
    fontSize: 12,
    marginTop: 4,
  },
});