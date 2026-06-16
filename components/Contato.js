import { StyleSheet, Text, View, ScrollView, TextInput, Pressable, Switch, } from 'react-native';
import { useState } from 'react';

const VERDE = '#009c3b';
const AMARELO = '#FFCC00';
const AZUL = '#002776';
const FUNDO = '#f5f5f5';

export default function Contato() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [selecao, setSelecao] = useState('');
    const [figurinhas, setFigurinhas] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [newsletter, setNewsletter] = useState(false);
    const [focado, setFocado] = useState(null);
    const [enviado, setEnviado] = useState(false);

    const selecoes = ['Brasil 🇧🇷', 'Argentina 🇦🇷', 'França 🇫🇷', 'Alemanha 🇩🇪', 'Outro'];
    const [selecaoAberta, setSelecaoAberta] = useState(false);

    function handleEnviar() {
        if (!nome || !email) return;
        setEnviado(true);
    }

    if (enviado) {
        return (
            <View style={styles.sucessoContainer}>
                <Text style={styles.sucessoEmoji}>🏆</Text>
                <Text style={styles.sucessoTitulo}>Cadastro realizado!</Text>
                <Text style={styles.sucessoSub}>
                    Bem-vindo ao álbum da Copa, {nome.split(' ')[0]}!{'\n'}
                    Fique de olho no seu e-mail para novidades.
                </Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerEyebrow}>PANINI · FIFA WORLD CUP 2026</Text>
                <Text style={styles.headerTitle}>Cadastre-se no{'\n'}Álbum Digital</Text>
                <Text style={styles.headerSub}>
                    Receba atualizações exclusivas e participe da maior coleção do mundo.
                </Text>
            </View>

            {/* Faixa decorativa */}
            <View style={styles.faixaDecorava}>
                <View style={[styles.faixaBloco, { backgroundColor: VERDE }]} />
                <View style={[styles.faixaBloco, { backgroundColor: AMARELO }]} />
                <View style={[styles.faixaBloco, { backgroundColor: AZUL }]} />
            </View>

            <View style={styles.corpo}>

                {/* Seção: Dados pessoais */}
                <Text style={styles.secaoLabel}>DADOS PESSOAIS</Text>

                <View style={styles.campo}>
                    <Text style={styles.label}>Nome completo <Text style={styles.obrigatorio}>*</Text></Text>
                    <TextInput
                        style={[styles.input, focado === 'nome' && styles.inputFocado]}
                        placeholder="Ex: Pelé da Silva"
                        placeholderTextColor="#bbb"
                        value={nome}
                        onChangeText={setNome}
                        onFocus={() => setFocado('nome')}
                        onBlur={() => setFocado(null)}
                    />
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>E-mail <Text style={styles.obrigatorio}>*</Text></Text>
                    <TextInput
                        style={[styles.input, focado === 'email' && styles.inputFocado]}
                        placeholder="seuemail@exemplo.com"
                        placeholderTextColor="#bbb"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onFocus={() => setFocado('email')}
                        onBlur={() => setFocado(null)}
                    />
                </View>

                {/* Seção: Preferências */}
                <Text style={[styles.secaoLabel, { marginTop: 20 }]}>PREFERÊNCIAS</Text>

                <View style={styles.campo}>
                    <Text style={styles.label}>Seleção favorita</Text>
                    <Pressable
                        style={[styles.input, styles.seletor, focado === 'selecao' && styles.inputFocado]}
                        onPress={() => {
                            setSelecaoAberta(!selecaoAberta);
                            setFocado(selecaoAberta ? null : 'selecao');
                        }}
                    >
                        <Text style={selecao ? styles.seletorTexto : styles.seletorPlaceholder}>
                            {selecao || 'Escolha uma seleção'}
                        </Text>
                        <Text style={styles.seletorSeta}>{selecaoAberta ? '▲' : '▼'}</Text>
                    </Pressable>
                    {selecaoAberta && (
                        <View style={styles.dropdown}>
                            {selecoes.map((s) => (
                                <Pressable
                                    key={s}
                                    style={[styles.dropdownItem, selecao === s && styles.dropdownItemAtivo]}
                                    onPress={() => {
                                        setSelecao(s);
                                        setSelecaoAberta(false);
                                        setFocado(null);
                                    }}
                                >
                                    <Text style={[styles.dropdownTexto, selecao === s && styles.dropdownTextoAtivo]}>
                                        {s}
                                    </Text>
                                </Pressable>
                            ))}
                        </View>
                    )}
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Quantas figurinhas você tem?</Text>
                    <TextInput
                        style={[styles.input, focado === 'fig' && styles.inputFocado]}
                        placeholder="Ex: 312"
                        placeholderTextColor="#bbb"
                        value={figurinhas}
                        onChangeText={setFigurinhas}
                        keyboardType="numeric"
                        onFocus={() => setFocado('fig')}
                        onBlur={() => setFocado(null)}
                    />
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Mensagem (opcional)</Text>
                    <TextInput
                        style={[styles.input, styles.textarea, focado === 'msg' && styles.inputFocado]}
                        placeholder="Conte sua história com os álbums da Copa..."
                        placeholderTextColor="#bbb"
                        value={mensagem}
                        onChangeText={setMensagem}
                        multiline
                        numberOfLines={4}
                        textAlignVertical="top"
                        onFocus={() => setFocado('msg')}
                        onBlur={() => setFocado(null)}
                    />
                </View>

                {/* Toggle newsletter */}
                <View style={styles.toggleRow}>
                    <View style={styles.toggleTextos}>
                        <Text style={styles.toggleTitulo}>Novidades por e-mail</Text>
                        <Text style={styles.toggleSub}>Receba alertas de figurinhas raras e promoções</Text>
                    </View>
                    <Switch
                        value={newsletter}
                        onValueChange={setNewsletter}
                        trackColor={{ false: '#ddd', true: VERDE }}
                        thumbColor={newsletter ? AMARELO : '#fff'}
                    />
                </View>

                {/* Badge decorativo */}
                <View style={styles.badge}>
                    <Text style={styles.badgeTexto}>⭐  Membros cadastrados ganham acesso antecipado às figurinhas exclusivas da Copa 2026</Text>
                </View>

                {/* Botão enviar */}
                <Pressable
                    style={({ pressed }) => [
                        styles.botao,
                        pressed && styles.botaoPressionado,
                        (!nome || !email) && styles.botaoDesabilitado,
                    ]}
                    onPress={handleEnviar}
                >
                    <Text style={styles.botaoTexto}>Criar minha conta ›</Text>
                </Pressable>

                <Text style={styles.rodapeForm}>
                    Ao se cadastrar, você concorda com os termos de uso da Panini e da FIFA.
                </Text>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scroll: { flex: 1, backgroundColor: FUNDO },
    scrollContent: { paddingBottom: 48 },

    // Header
    header: {
        backgroundColor: AZUL,
        paddingTop: 64,
        paddingBottom: 28,
        paddingHorizontal: 20,
    },
    headerEyebrow: {
        color: AMARELO,
        fontSize: 10,
        fontWeight: '700',
        letterSpacing: 2.5,
        marginBottom: 8,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 28,
        fontWeight: '800',
        lineHeight: 34,
        marginBottom: 10,
    },
    headerSub: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 13,
        lineHeight: 19,
    },

    // Faixa decorativa
    faixaDecorava: { flexDirection: 'row', height: 5 },
    faixaBloco: { flex: 1 },

    // Corpo
    corpo: { paddingHorizontal: 16, paddingTop: 20 },

    // Seção label
    secaoLabel: {
        fontSize: 10,
        fontWeight: '700',
        letterSpacing: 2,
        color: '#999',
        marginBottom: 12,
    },

    // Campos
    campo: { marginBottom: 14 },
    label: { fontSize: 13, fontWeight: '600', color: '#1a1a1a', marginBottom: 6 },
    obrigatorio: { color: VERDE },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 8,
        paddingHorizontal: 14,
        paddingVertical: 12,
        fontSize: 14,
        color: '#1a1a1a',
    },
    inputFocado: {
        borderColor: AZUL,
        borderWidth: 1.5,
    },
    textarea: {
        minHeight: 96,
        paddingTop: 12,
    },

    // Seletor (dropdown)
    seletor: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    seletorTexto: { fontSize: 14, color: '#1a1a1a' },
    seletorPlaceholder: { fontSize: 14, color: '#bbb' },
    seletorSeta: { fontSize: 11, color: '#888' },
    dropdown: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 8,
        marginTop: 4,
        overflow: 'hidden',
    },
    dropdownItem: {
        paddingHorizontal: 14,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    dropdownItemAtivo: { backgroundColor: '#EEF4FF' },
    dropdownTexto: { fontSize: 14, color: '#1a1a1a' },
    dropdownTextoAtivo: { color: AZUL, fontWeight: '700' },

    // Toggle newsletter
    toggleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 8,
        padding: 14,
        marginBottom: 14,
    },
    toggleTextos: { flex: 1, marginRight: 12 },
    toggleTitulo: { fontSize: 14, fontWeight: '600', color: '#1a1a1a' },
    toggleSub: { fontSize: 12, color: '#888', marginTop: 2 },

    // Badge
    badge: {
        backgroundColor: '#FFF9E0',
        borderLeftWidth: 3,
        borderLeftColor: AMARELO,
        borderRadius: 6,
        padding: 12,
        marginBottom: 20,
    },
    badgeTexto: { fontSize: 12, color: '#5a4a00', lineHeight: 18 },

    // Botão
    botao: {
        backgroundColor: AZUL,
        borderRadius: 10,
        padding: 16,
        alignItems: 'center',
    },
    botaoPressionado: { opacity: 0.85 },
    botaoDesabilitado: { backgroundColor: '#ccc' },
    botaoTexto: { color: '#fff', fontWeight: '700', fontSize: 15 },

    rodapeForm: {
        textAlign: 'center',
        color: '#aaa',
        fontSize: 11,
        marginTop: 12,
        lineHeight: 16,
    },

    // Tela de sucesso
    sucessoContainer: {
        flex: 1,
        backgroundColor: AZUL,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 32,
    },
    sucessoEmoji: { fontSize: 56, marginBottom: 16 },
    sucessoTitulo: { color: AMARELO, fontSize: 24, fontWeight: '800', marginBottom: 10 },
    sucessoSub: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 22,
        marginBottom: 32,
    },
});