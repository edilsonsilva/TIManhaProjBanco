import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'white'
    },
    titulo:{
        textAlign:'center',
        margin:5,
        fontSize:15
    },
    caixa:{
        borderColor:'#ddd',
        borderWidth:1,
        margin:5,
        shadowColor:'black',
        shadowOpacity:0.2,
        shadowOffset:{width:2, height:2},
        shadowRadius:5,
        elevation:2

    },
    imgproduto:{
        width:150,
        height:150,
        resizeMode:'cover'
    },
    nome:{
        margin:5,
        fontSize:18,
        fontWeight:'bold'
    },
    preco:{
        margin:5,
        fontSize:14,
        color:'#900'
    },
    btnmais:{
        backgroundColor:'lightblue',
        padding:10
    },
    txtmais:{
        textAlign:'center',
        fontSize:12,
        fontWeight:'bold',
        color:'white'
    },
    display:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    imgdetalheprod:{
        width:'100%',
        height:300,
        resizeMode:'cover'
    },
    descricao:{
        fontSize:12,
        margin:10
    },
    input:{
        borderBottomColor:'silver',
        borderBottomWidth:1,
        margin:10,
        paddingTop:10
    },
    btncadastrar:{
        marginTop:20,
        backgroundColor:'#900',
        width:150,
        padding:5,
        borderRadius:20,
        marginLeft:'auto',
        marginRight:'auto'
    },
    txtcadastrar:{
        color:'white',
        textAlign:'center'
    },
    areabusca:{
        flexDirection:'row',
        margin:0,
        padding:10,
        shadowColor:'black',
        shadowOffset:{width:5, height:5},
        shadowOpacity:1,
        shadowRadius:10,
        elevation:5,
        backgroundColor:'white'
        
    },
    cxbusca:{
        flex:6,
        borderColor:'#eee',
        borderWidth:1,
        padding:5
    },
    btnbusca:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ddd',
        borderRadius:50,
        marginLeft:5


    }
});
