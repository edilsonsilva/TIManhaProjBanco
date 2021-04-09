import * as React from 'react';
import {View, Text, Image} from 'react-native';
import { path } from '../config/settings';
import { styles } from '../css/Styles';

export default function Detalhes({route}){
    
    const {idproduto} = route.params;

    const [produto, setProduto] = React.useState([]);

    React.useEffect(()=>{
        fetch(`${path}/${idproduto}`)
        .then((response)=>response.json())
        .then((rs)=>setProduto(rs.resultado))
        .catch((erro)=>console.error(`Ocorreu um erro ao tentar carregar os dado da api ${erro}`))
    },[])
    
       return(
           <View style={styles.container}>
                <Image source={{uri:produto.foto}} style={styles.imgdetalheprod}/>
                <Text style={styles.nome}>{produto.nome}</Text>
                <Text style={styles.descricao}>{produto.descricao}</Text>
                <Text style={styles.descricao}> Quantidade em estoque: {produto.quantidade}</Text>
                <Text style={styles.preco}>{produto.preco}</Text>
                <Text style={styles.descricao}>Referência: {produto._id}</Text>
           </View>

    )
}