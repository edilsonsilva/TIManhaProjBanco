import * as React from 'react';
import {View,Text,Image,ScrollView, TouchableOpacity, TextInput,ListViewBase, ToastAndroid} from 'react-native';
import { path } from '../config/settings';
import {styles} from '../css/Styles';
import Detalhes from './Detalhes';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {FontAwesome} from '@expo/vector-icons';


const pilhaTelas = createStackNavigator();
let tbusca="";
let rsbusca = "";
export default function Home(){
    return(
    <NavigationContainer independent={true}>
        <pilhaTelas.Navigator initialRouteName="ListaProdutos">
          <pilhaTelas.Screen name="ListaProdutos" component={ListaProdutos} options={{headerShown:false}}/>
          <pilhaTelas.Screen name="Detalhes do Produto" component={Detalhes}/>
        </pilhaTelas.Navigator>
    </NavigationContainer>
    )
}

function ListaProdutos({navigation}){

const [produtos, setProdutos] = React.useState([]);
const [txtbusca, setTxtBusca] = React.useState("");


React.useEffect(()=>{
    fetch(path)
    .then((response)=>response.json())
    .then((rs)=>setProdutos(rs.resultado))
    .catch((erro)=>console.error(`Erro ao tentar carregar os dados da api ${erro}`));
},[])

    return(
        <View style={styles.container}>

            <View style={styles.areabusca}>

                <TextInput 
                    placeholder="procurar produto"
                    value={txtbusca}
                    onChangeText={(value)=>setTxtBusca(value)}
                    style={styles.cxbusca}/>

                <TouchableOpacity onPress={()=>{
                        tbusca = txtbusca;
                        buscar();
                        setProdutos(rsbusca);
                        console.log(rsbusca)

                }} style={styles.btnbusca}>
                    
                    <FontAwesome name="search" size={20} color="black"/>

                </TouchableOpacity>

            </View>

            <View style={styles.display}>

                {console.log("produtos"+produtos)}
            {
                
                produtos.map((itens,index)=>(
                    <View key={itens._id} style={styles.caixa}>

                        <Image source={{uri:`${itens.foto}`}} style={styles.imgproduto}/>

                        <Text style={styles.nome}>{itens.nome}</Text>
                        
                        <Text style={styles.preco}>{itens.preco}</Text>
                        
                        <TouchableOpacity onPress={()=>{
                            navigation.navigate("Detalhes do Produto",{idproduto:`${itens._id}`})
                        }} style={styles.btnmais}>
                        
                            <Text style={styles.txtmais}> Mais ...</Text>
                        
                        </TouchableOpacity>

                    </View>
                ))
            }
            </View>
        </View>
    )
}

function buscar(){
    fetch(`${path}/produto/${tbusca}`)
    .then((response)=>response.json())
    .then((rs)=>{
        if(rs.resultado==null){
            ToastAndroid.showWithGravity("Nenhum produto foi encontrado",ToastAndroid.LONG,ToastAndroid.CENTER)
        }
        else{
            rsbusca=rs.resultado;
            }
        }
    )
    .catch((erro)=>console.error(`Ocorreu um erro ao tentar carregar os dados. ${erro}`))
}