import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const capitulos = [
  {
    ano: '1930',
    titulo: 'O Início de Tudo',
    pais: '🇺🇾 Uruguai',
    campeao: 'Uruguai',
    texto:
      'A primeira Copa do Mundo foi realizada no Uruguai, país que também levou o título. Apenas 13 seleções participaram, todas convidadas pela FIFA. O torneio nasceu do sonho de Jules Rimet de unir o mundo pelo futebol.',
    imagem: null, // substitua por require('./assets/1930.jpg')
  },
  {
    ano: '1950',
    titulo: 'A Tragédia do Maracanã',
    pais: '🇧🇷 Brasil',
    campeao: 'Uruguai',
    texto:
      'O Brasil sediou a Copa e era favorito absoluto. No jogo decisivo, 200 mil pessoas lotaram o Maracanã. O Uruguai venceu por 2 a 1 e o "Maracanazo" marcou para sempre a história do futebol brasileiro.',
    imagem: null,
  },
  {
    ano: '1970',
    titulo: 'O Brasil Tri',
    pais: '🇲🇽 México',
    campeao: 'Brasil',
    texto:
      'Pelé, Tostão, Rivelino e Jairzinho formaram a seleção considerada a melhor de todos os tempos. O Brasil conquistou o tricampeonato e ficou com a taça Jules Rimet definitivamente.',
    imagem: null,
  },
  {
    ano: '1994',
    titulo: 'O Tetracampeonato',
    pais: '🇺🇸 Estados Unidos',
    campeao: 'Brasil',
    texto:
      'Após 24 anos, o Brasil voltou a ser campeão. Romário e Bebeto formaram a dupla mais famosa do torneio. A final contra a Itália foi decidida nos pênaltis — Roberto Baggio perdeu o último.',
    imagem: null,
  },
  {
    ano: '2002',
    titulo: 'O Pentacampeonato',
    pais: '🇯🇵🇰🇷 Japão/Coreia',
    campeao: 'Brasil',
    texto:
      'Ronaldo, depois de superar problemas de saúde graves, foi o grande herói. Marcou dois gols na final contra a Alemanha e sacramentou o penta — o maior título da história do futebol brasileiro.',
    imagem: null,
  },
  {
    ano: '2026',
    titulo: 'A Nova Era',
    pais: '🇺🇸🇨🇦🇲🇽 EUA/Canadá/México',
    campeao: '?',
    texto:
      'Pela primeira vez, três países sediam juntos a Copa do Mundo. Com 48 seleções participantes, o torneio promete ser o maior da história. Um novo capítulo está sendo escrito.',
    imagem: null,
  },
];

function Historia() {
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerEyebrow}>DESDE 1930</Text>
        <Text style={styles.headerTitle}>A História da Copa</Text>
        <Text style={styles.headerSub}>
          Mais de 90 anos de glórias, tragédias e momentos inesquecíveis
        </Text>
      </View>

      {/* Estatísticas rápidas */}
      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statNum}>22</Text>
          <Text style={styles.statLabel}>Edições</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNum}>8</Text>
          <Text style={styles.statLabel}>Campeões</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNum}>5×</Text>
          <Text style={styles.statLabel}>Brasil</Text>
        </View>
      </View>

      {/* Linha do tempo */}
      <Text style={styles.sectionTitle}>Momentos Históricos</Text>

      {capitulos.map((cap, i) => (
        <View key={i} style={styles.capitulo}>

          {/* Linha do tempo lateral */}
          <View style={styles.timelineCol}>
            <View style={styles.timelineDot} />
            {i < capitulos.length - 1 && <View style={styles.timelineLine} />}
          </View>

          {/* Conteúdo */}
          <View style={styles.capituloContent}>
            <View style={styles.capituloHeader}>
              <Text style={styles.capituloAno}>{cap.ano}</Text>
              <Text style={styles.capituloFlag}>{cap.pais}</Text>
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

    </ScrollView>
  );
}

export default Historia;

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
    paddingBottom: 60,
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