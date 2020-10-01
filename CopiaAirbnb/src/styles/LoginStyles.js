import {StyleSheet} from 'react-native';

const LoginStyles = StyleSheet.create({

    // Meu projeto
    img: {
      marginTop: 25,
      marginBottom: 10,
      height: 50
    },
  
    fechar: {
      marginTop: 10,
    },
  
    titulo: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 25,
      marginTop: 10,
    },
  
    body: {
      backgroundColor: '#fff',
      marginRight: 30,
      marginLeft: 30,
    },

    divBusca:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomColor: '#c5c4c3',
      borderBottomWidth: 1,
    },

    imgSeta:{
      alignSelf: 'center',
      marginTop: 20,
      marginRight: 20
    },
  
    div: {
      marginBottom: 10,
      marginTop: -10
    },
  
    div2: {
      flexDirection: 'row',
      borderBottomColor: '#c5c4c3',
      borderBottomWidth: 1,
      height: 40,
      alignItems: 'center',
      marginTop: 4
    },
  
    pais: {
      borderRightColor: '#c5c4c3',
      borderRightWidth: 1,
      height: 23,
      paddingRight: 10,
      textAlignVertical: 'center',
      color: '#000',
      
    },
  
    txtInput: {
      height: 40,
  
    },
    txtInput2: {
      height: 40,
      textAlignVertical: 'center',
      color: 'black'
    },
  
    botaoTxt: {
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
      textAlignVertical: 'center',
      marginTop: 15,
    },
  
    botaoNumero: {
      backgroundColor: '#ffe1e1',
      height: 50,
      marginTop: 10,
      borderRadius: 4
    },
  
    txtOu: {
      color: '#c5c4c3',
      fontSize: 13,
      
    },
  
    div3: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: 10,
    },
  
    botaoRedes:{
      backgroundColor: '#fff',
      height: 50,
      marginTop: 10,
      borderRadius: 4,
      borderColor: 'black',
      borderWidth: 1,
      
    },
  
    
    botaoRedesTxt: {
      alignSelf: 'center',
      textAlignVertical: 'center',
  
    },
  
    div4: {
      marginTop: 10,
      flexDirection: 'row',
    },
  
    icone: {
      alignItems: 'flex-start',
      marginLeft: 20,
      marginRight: 60,
    },
    mensagemFinal: {
      marginTop: 20
    },
  
    cadastrar: {
      fontWeight: 'bold',
      textDecorationLine: 'underline'
    },
  
    mensagem: {
      marginTop: 10
    },
  });

  export default LoginStyles