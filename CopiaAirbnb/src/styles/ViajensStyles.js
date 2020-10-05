import {StyleSheet} from 'react-native';

const ViajensStyles = StyleSheet.create({
    body: {
        backgroundColor: '#fff',
        marginRight: 30,
        marginLeft: 30,
      },

    titulo:{
        fontSize: 29,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 45
    },

    div1:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderBottomColor: '#c5c4c3',
        borderBottomWidth: 1,
    },

    prog:{
        marginRight: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        paddingBottom: 12
    },

    next:{
        fontSize: 23,
        marginTop: 20,
        marginBottom: 25
    },

    div2: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 10
    },

    div2Align: {
        marginLeft: 10,
        marginTop: 20,
    },

    div2Txt:{
        fontWeight: 'bold',
    },
    
    botaoNumero: {
        backgroundColor: '#fff',
        height: 50,
        marginTop: 10,
        borderRadius: 4,
        borderColor: 'black',
        borderWidth: 1,
      },

      botaoNumeroTxt:{
       alignSelf: 'center',
      textAlignVertical: 'center',
      marginTop: 12,
      fontWeight:'bold'
      },

      mensagemAlign:{
        marginTop: 35,
        borderTopColor: '#c5c4c3',
        borderTopWidth: 1,
        paddingTop: 16,
      },

      mensagem:{
        fontSize: 14,
        textAlign: 'justify',
        
      },

      mensagemDestaque: {
          fontWeight: 'bold',
          textDecorationLine: 'underline',
          
      },

      iconesAlign:{
        marginTop: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }

})

export default ViajensStyles