import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    StatusBar,
    Image, TouchableHighlight
} from 'react-native';
import ViajensStyles from './styles/ViajensStyles.js'

const Viagens = ({ navigation }) => {

    const handleGoLogin = () => {
        navigation.navigate('Login');
    }

    return (
        <>
            <StatusBar backgroundColor='#ffffff' barStyle="dark-content" />

            <SafeAreaView style={ViajensStyles.body}>
                <View>
                    <Text style={ViajensStyles.titulo}>Viagens</Text>
                </View>

                <View style={ViajensStyles.div1}>
                    <View>
                        <Text style={ViajensStyles.prog}>Programadas</Text>
                    </View>
                    <View>
                        <Text>Anteriores</Text>
                    </View>
                </View>
                <View>
                    <Text style={ViajensStyles.next}>Where will you go next?</Text>
                </View>

                <View style={ViajensStyles.div2}>
                    <View>
                        <Image source={require('./assets/images/imagem1.png')} />
                    </View>
                    <View style={ViajensStyles.div2Align}>
                        <Text style={ViajensStyles.div2Txt}>Angra dos Reis</Text>
                        <Text><Text style={ViajensStyles.div2Txt}>R$407</Text>/noite em média</Text>
                    </View>
                </View>

                <View style={ViajensStyles.div2}>
                    <View>
                        <Image source={require('./assets/images/imagem2.png')} />
                    </View>
                    <View style={ViajensStyles.div2Align}>
                        <Text style={ViajensStyles.div2Txt}>Paraty</Text>
                        <Text><Text style={ViajensStyles.div2Txt}>R$288</Text>/noite em média</Text>
                    </View>
                </View>

                <View style={ViajensStyles.div2}>
                    <View>
                        <Image source={require('./assets/images/imagem3.png')} />
                    </View>
                    <View style={ViajensStyles.div2Align}>
                        <Text style={ViajensStyles.div2Txt}>Petrópolis</Text>
                        <Text><Text style={ViajensStyles.div2Txt}>R$316</Text>/noite em média</Text>
                    </View>
                </View>

                <TouchableHighlight style={ViajensStyles.botaoNumero} activeOpacity={1} underlayColor="#f0f0f0" onPress={handleGoLogin}>
                    <Text style={ViajensStyles.botaoNumeroTxt}>Explore destinos perto de você</Text>
                </TouchableHighlight>

                <View style={ViajensStyles.mensagemAlign}>
                    <Text style={ViajensStyles.mensagem}>Não consegue encontrar a sua reserva aqui? <Text style={ViajensStyles.mensagemDestaque}>Acesse a Central de ajuda.</Text></Text>
                </View>

                <View style={ViajensStyles.iconesAlign}>
                    <View>
                        <Image source={require('./assets/images/icone-lupa2.png')} />
                    </View>
                    <View>
                        <Image source={require('./assets/images/icone-coracao.png')} />
                    </View>
                    <View>
                        <Image source={require('./assets/images/icone-via.png')} />

                    </View>
                    <View>
                        <Image source={require('./assets/images/icone-mensagens.png')} />
                    </View>
                    <View>
                        <Image source={require('./assets/images/icone-perfil.png')} />
                    </View>
                </View>
            </SafeAreaView>
        </>
    )

}
export default Viagens
