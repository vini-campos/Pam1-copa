import { StyleSheet, Text, View, ScrollView, TextInput, Pressable, Switch } from 'react-native';
import { useState } from 'react';

const VERDE = '#009c3b';
const AMARELO = '#FFCC00';
const AZUL = '#002776';

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [selecao, setSelecao] = useState('');
    const [newsletter, setNewsletter] = useState(false);
    const [focado, setFocado] = useState(null);
    const selecoes = ['Brasil 🇧🇷', 'Argentina 🇦🇷', 'França 🇫🇷', 'Alemanha 🇩🇪', 'Outro'];

    function envio() {
        if (!nome || !email) return;
        setNome('');
        setEmail('');
        setSelecao('');
        setNewsletter(false);
        setFocado(null);
    }

    return (
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerEyebrow}>PANINI · COPA 2026</Text>
                <Text style={styles.headerTitle}>Álbum Digital</Text>
            </View>

            {/* Faixa decorativa */}
            <View style={styles.faixa}>
                <View style={[styles.faixaBloco, { backgroundColor: VERDE }]} />
                <View style={[styles.faixaBloco, { backgroundColor: AMARELO }]} />
                <View style={[styles.faixaBloco, { backgroundColor: AZUL }]} />
            </View>

            <View style={styles.corpo}>

                {/* Nome */}
                <View style={styles.campo}>
                    <Text style={styles.label}>Nome <Text style={styles.obrigatorio}>*</Text></Text>
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

                {/* Email */}
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

                {/* Seleção favorita */}
                <View style={styles.campo}>
                    <Text style={styles.label}>Seleção favorita</Text>
                    <View style={styles.chipRow}>
                        {selecoes.map((s) => (
                            <Pressable
                                key={s}
                                style={[styles.chip, selecao === s && styles.chipAtivo]}
                                onPress={() => setSelecao(s === selecao ? '' : s)}
                            >
                                <Text style={[styles.chipTexto, selecao === s && styles.chipTextoAtivo]}>
                                    {s}
                                </Text>
                            </Pressable>
                        ))}
                    </View>
                </View>

                {/* Newsletter */}
                <View style={styles.toggleRow}>
                    <Text style={styles.toggleTitulo}>Receber novidades por e-mail</Text>
                    <Switch
                        value={newsletter}
                        onValueChange={setNewsletter}
                        trackColor={{ false: '#ddd', true: VERDE }}
                        thumbColor={newsletter ? AMARELO : '#fff'}
                    />
                </View>

                {/* Botão */}
                <Pressable
                    style={({ pressed }) => [
                        styles.botao,
                        pressed && styles.botaoPressionado,
                        (!nome || !email) && styles.botaoDesabilitado,
                    ]}
                    onPress={envio}
                >
                    <Text style={styles.botaoTexto}>Criar conta</Text>
                </Pressable>

                <Text style={styles.rodape}>
                    Ao se cadastrar, você concorda com os termos da Panini e da FIFA.
                </Text>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scroll: { flex: 1, backgroundColor: '#f5f5f5' },
    scrollContent: { paddingBottom: 48 },

    header: {
        backgroundColor: AZUL,
        paddingTop: 64,
        paddingBottom: 24,
        paddingHorizontal: 20,
    },
    headerEyebrow: {
        color: AMARELO,
        fontSize: 10,
        fontWeight: '700',
        letterSpacing: 2.5,
        marginBottom: 6,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 28,
        fontWeight: '800',
    },

    faixa: { flexDirection: 'row', height: 5 },
    faixaBloco: { flex: 1 },

    corpo: { paddingHorizontal: 16, paddingTop: 24 },

    campo: { marginBottom: 16 },
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

    chipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
    chip: {
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 7,
        backgroundColor: '#fff',
    },
    chipAtivo: { backgroundColor: AZUL, borderColor: AZUL },
    chipTexto: { fontSize: 13, color: '#555' },
    chipTextoAtivo: { color: '#fff', fontWeight: '600' },

    toggleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 8,
        paddingHorizontal: 14,
        paddingVertical: 12,
        marginBottom: 20,
    },
    toggleTitulo: { fontSize: 14, color: '#1a1a1a' },

    botao: {
        backgroundColor: AZUL,
        borderRadius: 10,
        padding: 16,
        alignItems: 'center',
    },
    botaoPressionado: { opacity: 0.85 },
    botaoDesabilitado: { backgroundColor: '#ccc' },
    botaoTexto: { color: '#fff', fontWeight: '700', fontSize: 15 },

    rodape: {
        textAlign: 'center',
        color: '#aaa',
        fontSize: 11,
        marginTop: 12,
        lineHeight: 16,
    },


});