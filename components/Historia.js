import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';

const capitulos = [
    {
        ano: '1930',
        titulo: 'O Início de Tudo',
        pais: '🇺🇾 Uruguai',
        campeao: 'Uruguai',
        texto: 'A primeira Copa do Mundo foi realizada no Uruguai, país que também levou o título. Apenas 13 seleções participaram, todas convidadas pela FIFA. O torneio nasceu do sonho de Jules Rimet de unir o mundo pelo futebol.',
        imagem: require('../assets/primeira_copa.jpg'),
    },
    {
        ano: '1950',
        titulo: 'A Tragédia do Maracanã',
        pais: '🇧🇷 Brasil',
        campeao: 'Uruguai',
        texto: 'O Brasil sediou a Copa e era favorito absoluto. No jogo decisivo, 200 mil pessoas lotaram o Maracanã. O Uruguai venceu por 2 a 1 e o "Maracanazo" marcou para sempre a história do futebol brasileiro.',
        imagem: require('../assets/copa_1950.jpg'),
    },
    {
        ano: '1970',
        titulo: 'O Brasil Tri',
        pais: '🇲🇽 México',
        campeao: 'Brasil',
        texto: 'Pelé, Tostão, Rivelino e Jairzinho formaram a seleção considerada a melhor de todos os tempos. O Brasil conquistou o tricampeonato e ficou com a taça Jules Rimet definitivamente.',
        imagem: require('../assets/copa_1970.jpg'),
    },
    {
        ano: '1994',
        titulo: 'O Tetracampeonato',
        pais: '🇺🇸 Estados Unidos',
        campeao: 'Brasil',
        texto: 'Após 24 anos, o Brasil voltou a ser campeão. Romário e Bebeto formaram a dupla mais famosa do torneio. A final contra a Itália foi decidida nos pênaltis — Roberto Baggio perdeu o último.',
        imagem: require('../assets/copa_1994.jpg'),
    },
    {
        ano: '2002',
        titulo: 'O Pentacampeonato',
        pais: '🇯🇵🇰🇷 Japão/Coreia',
        campeao: 'Brasil',
        texto: 'Ronaldo, depois de superar problemas de saúde graves, foi o grande herói. Marcou dois gols na final contra a Alemanha e sacramentou o penta — o maior título da história do futebol brasileiro.',
        imagem: require('../assets/copa_2002.jpg'),
    },
    {
        ano: '2026',
        titulo: 'O hexa?',
        pais: '🇺🇸🇨🇦🇲🇽 EUA/Canadá/México',
        campeao: '?',
        texto: 'Pela primeira vez, três países sediam juntos a Copa do Mundo. Com 48 seleções participantes, o torneio promete ser o maior da história. Um novo capítulo está sendo escrito.',
        imagem: require('../assets/copa_2026.jpg'),
    },
];

function Historia() {

    const backGroundImg = require('../assets/neymar_fundo.jpg');

    return (
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>

            <ImageBackground
                source={backGroundImg}
                style={styles.header}
                imageStyle={{ opacity: 0.45 }} // escurece a imagem
            >
                <Text style={styles.headerEyebrow}>DESDE 1930</Text>
                <Text style={styles.headerTitle}>A História da Copa</Text>
            </ImageBackground>

            <Text style={styles.sectionTitle}>Momentos Históricos</Text>

             <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardAno}>{capitulos[0].ano}</Text>
                    <Text style={styles.cardPais}>{capitulos[0].pais}</Text>
                </View>
                <Text style={styles.cardTitulo}>{capitulos[0].titulo}</Text>
                <Image source={capitulos[0].imagem} style={styles.imagem} resizeMode='cover'></Image>
                <Text style={styles.cardTexto}>{capitulos[0].texto}</Text>
                <Text style={styles.campeao}>🏆 Campeão: <Text style={styles.campeaoNome}>{capitulos[0].campeao}</Text></Text>
            </View>
 
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardAno}>{capitulos[1].ano}</Text>
                    <Text style={styles.cardPais}>{capitulos[1].pais}</Text>
                </View>
                <Text style={styles.cardTitulo}>{capitulos[1].titulo}</Text>
                <Image source={capitulos[1].imagem} style={styles.imagem} resizeMode='cover'></Image>
                <Text style={styles.cardTexto}>{capitulos[1].texto}</Text>
                <Text style={styles.campeao}>🏆 Campeão: <Text style={styles.campeaoNome}>{capitulos[1].campeao}</Text></Text>
            </View>
 
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardAno}>{capitulos[2].ano}</Text>
                    <Text style={styles.cardPais}>{capitulos[2].pais}</Text>
                </View>
                <Text style={styles.cardTitulo}>{capitulos[2].titulo}</Text>
                <Image source={capitulos[2].imagem} style={styles.imagem} resizeMode='cover'></Image>
                <Text style={styles.cardTexto}>{capitulos[2].texto}</Text>
                <Text style={styles.campeao}>🏆 Campeão: <Text style={styles.campeaoNome}>{capitulos[2].campeao}</Text></Text>
            </View>
 
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardAno}>{capitulos[3].ano}</Text>
                    <Text style={styles.cardPais}>{capitulos[3].pais}</Text>
                </View>
                <Text style={styles.cardTitulo}>{capitulos[3].titulo}</Text>
                <Image source={capitulos[3].imagem} style={styles.imagem} resizeMode='cover'></Image>
                <Text style={styles.cardTexto}>{capitulos[3].texto}</Text>
                <Text style={styles.campeao}>🏆 Campeão: <Text style={styles.campeaoNome}>{capitulos[3].campeao}</Text></Text>
            </View>
 
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardAno}>{capitulos[4].ano}</Text>
                    <Text style={styles.cardPais}>{capitulos[4].pais}</Text>
                </View>
                <Text style={styles.cardTitulo}>{capitulos[4].titulo}</Text>
                <Image source={capitulos[4].imagem} style={styles.imagem} resizeMode='cover'></Image>
                <Text style={styles.cardTexto}>{capitulos[4].texto}</Text>
                <Text style={styles.campeao}>🏆 Campeão: <Text style={styles.campeaoNome}>{capitulos[4].campeao}</Text></Text>
            </View>
 
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardAno}>{capitulos[5].ano}</Text>
                    <Text style={styles.cardPais}>{capitulos[5].pais}</Text>
                </View>
                <Text style={styles.cardTitulo}>{capitulos[5].titulo}</Text>
                <Image source={capitulos[5].imagem} style={styles.imagem} resizeMode='cover'></Image>
                <Text style={styles.cardTexto}>{capitulos[5].texto}</Text>
                <Text style={styles.campeao}>🏆 Campeão: <Text style={styles.campeaoNome}>{capitulos[5].campeao}</Text></Text>
            </View>

        </ScrollView>
    );
}

export default Historia;

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
});