
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button, Keyboard } from 'react-native';
import PrevisaoItem from './components/PrevisaoItem';

export default function App() {

  const [cidade, setCidade] = useState('');
  const [previsoes, setPrevisoes] = useState([]);
  
  const capturarCidade = (cidade) => {
    setCidade(cidade);
  }

  const obtemPrevisoes = () => {
    setPrevisoes([]);
    const target = endPoint + cidade + "&appid=" + apiKey;
    fetch(target)
    .then((dados) => dados.json())
    .then((dados) => {
      setPrevisoes(dados['list'])
      Keyboard.dismiss()
    });
  }

  const endPoint = "https://api.openweathermap.org/data/2.5/forecast?lang=pt_br&units=metric&q=";
  const apiKey = "e2014975b82e748e2bf1d191ff8f31b4";

  return (
    <View style={styles.container}>
      <View style={styles.entrada}>
        <TextInput 
          style={styles.nomeCidade}
          value={cidade}
          onChangeText={capturarCidade}
        />
        <Button 
          title="OK"
          onPress={obtemPrevisoes}
        />
      </View>
      <FlatList 
        data={previsoes}
        renderItem={ previsao => (
          //<Text>{JSON.stringify(previsao)}</Text>
          <PrevisaoItem previsao={previsao.item}></PrevisaoItem>
        )}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#FFF',
    
  },
  entrada: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginBottom: 8,
  },
  nomeCidade:{
    padding: 12,
    borderBottomColor: '#BB96F3',
    borderBottomWidth: 2,
    textAlign: 'left',
    flexGrow: 0.9

  },
});
