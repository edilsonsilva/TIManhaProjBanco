import * as React from 'react';
import {View,Text,TextInput, TouchableOpacity, ToastAndroid} from 'react-native';
import { path } from '../config/settings';
import { styles } from '../css/Styles';

// Vamos criar variáveis globais para acessar os conteudo
// do formulário
let n = "";
let d = "";
let q = "";
let p = "";
let f = "";



export default function Cadastro(){
    // elementos de estado para o formaulário
    const[nome,setNome] = React.useState("");
    const[descricao,setDescricao] = React.useState("");
    const[quantidade,setQuantidade] = React.useState("");
    const[preco, setPreco] = React.useState("");
    const[foto,setFoto] = React.useState("");
    
    
    return(
        <View style={styles.container}>
            <View>
                <TextInput 
                    placeholder="Nome do Produto"
                    value={nome}
                    onChangeText={(value) => setNome(value)}  
                    style={styles.input}              
                />

                <TextInput
                    placeholder="Descrição"
                    value={descricao}
                    onChangeText={(value)=> setDescricao(value)}
                    style={styles.input}              
                />


                <TextInput 
                    placeholder="Quantidade" keyboardType="number-pad"
                    value={quantidade}
                    onChangeText={(value)=>setQuantidade(value)}
                    style={styles.input}              
                />

                <TextInput 
                    placeholder="Preço" keyboardType="decimal-pad"
                    value={preco}
                    onChangeText={(value)=>setPreco(value)}
                    style={styles.input}              
                />

                <TextInput 
                    placeholder="Foto"
                    value={foto}    
                    onChangeText={(value)=>setFoto(value)}
                    style={styles.input}              
                />

                <TouchableOpacity style={styles.btncadastrar} onPress={()=>{
                   n = nome;
                   d = descricao;
                   q = quantidade;
                   p = preco;
                   f = foto; 
                   cadastrar();
                }}>
                    <Text style={styles.txtcadastrar}> Cadastrar Produto </Text>
                </TouchableOpacity>
            </View>



        </View>
    )
}

function cadastrar(){
    
    

    fetch(`${path}/cad`,{
        method:'POST',
        headers:{
            accept:'application/json',
            'content-type':'application/json'
        },
        body:JSON.stringify({
            nome:n,
            descricao:d,
            quantidade:q,
            preco:p,
            foto:f
        })
    })
    .then((response)=>response.json())
    .then((rs)=>alert(rs.resultado))
    .catch((erro)=>console.error(`Ocorreu um erro ao tentar cadastrar o produto ${erro}`))
}