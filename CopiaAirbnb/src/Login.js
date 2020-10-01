import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StatusBar,
  Image, TouchableHighlight
} from 'react-native';
import LoginStyles from './styles/LoginStyles.js'

const Login = ({navigation}) => {
  const [valueN, setValueN] = useState('Brasil ( +55)');
  const [value, setValue] = useState();

  const handleGoViajens = () => {
    navigation.navigate('Viajens');
  }

  useEffect(() => {

  }, [value])

  return (
    <>
      <StatusBar backgroundColor='#ffffff' barStyle="dark-content" />

      <SafeAreaView style={LoginStyles.body}>
        <View>
          <Image style={LoginStyles.fechar} source={require('./assets/images/icone-facebook2.png')} />
        </View>
        <View>
          <Image style={LoginStyles.img} source={require('./assets/images/icone-airbnb.png')} />
        </View>
        <View>
          <Text style={LoginStyles.titulo}>Entre no Airbnb</Text>
        </View>
        <View >
          <Text>Número de telefone</Text>
          <View style={LoginStyles.divBusca}>
          <View>
            <TextInput style={LoginStyles.txtInput} onChangeText={text => setValueN(text)}
              value={valueN} />
        </View>
              <View>
          <Image style={LoginStyles.imgSeta} source={require('./assets/images/icone-seta.png')} />
          </View>
          </View>
          <View style={LoginStyles.div2}>
            <Text style={LoginStyles.pais}>+55</Text>
            <TextInput placeholder = "Ex: (11) 96123-4567" style={LoginStyles.txtInput2} onChangeText={text => setValue(text)}
              value={value} />
          </View>
        </View>
        <View style={LoginStyles.mensagem}>
          <Text>Ligaremos ou enviaremos uma mensagem para confirmar seu número. Podem ser aplicadas tarifas padrão de dados e mensagens.</Text>
        </View>
        <TouchableHighlight style={LoginStyles.botaoNumero} activeOpacity={1} underlayColor="#e35959" onPress={handleGoViajens}>
          <View>
            <Text style={LoginStyles.botaoTxt}>Entrar com o número de telefone</Text>
          </View>
        </TouchableHighlight>
        <View style={LoginStyles.div3}>
          <View><Text style={LoginStyles.txtOu}>----------------------------------------------</Text></View>
          <Text style={LoginStyles.txtOu}>OU</Text>
          <View><Text style={LoginStyles.txtOu}>----------------------------------------------</Text></View>
        </View>

        <View>
          <TouchableHighlight style={LoginStyles.botaoRedes} activeOpacity={1} underlayColor="#f0f0f0" onPress={() => console.log('Pressed!')}>
            <View style={LoginStyles.div4}>
              <Image style={LoginStyles.icone} source={require('./assets/images/icone-email.png')} />
              <Text style={LoginStyles.botaoRedesTxt}>Continuar com Email</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={LoginStyles.botaoRedes} activeOpacity={1} underlayColor="#f0f0f0" onPress={() => console.log('Pressed!')}>
            <View style={LoginStyles.div4}>
              <Image style={LoginStyles.icone} source={require('./assets/images/icone-facebook.png')} />
              <Text style={LoginStyles.botaoRedesTxt}>Continuar com Facebook</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={LoginStyles.botaoRedes} activeOpacity={1} underlayColor="#f0f0f0" onPress={() => console.log('Pressed!')}>
            <View style={LoginStyles.div4}>
              <Image style={LoginStyles.icone} source={require('./assets/images/icone-google.png')} />
              <Text style={LoginStyles.botaoRedesTxt}>Continuar com Google</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={LoginStyles.botaoRedes} activeOpacity={1} underlayColor="#f0f0f0" onPress={() => console.log('Pressed!')}>
            <View style={LoginStyles.div4}>
              <Image style={LoginStyles.icone} source={require('./assets/images/icone-apple.png')} />
              <Text style={LoginStyles.botaoRedesTxt}>Continuar com Apple</Text>
            </View>
          </TouchableHighlight>
          <View style={LoginStyles.mensagemFinal}>
            <Text>Novo no Airbnb? <Text style={LoginStyles.cadastrar}>Cadastrar-se</Text></Text>
          </View>
        </View>

      </SafeAreaView>
    </>
  );
};

export default Login;
