import React, { useState } from 'react';
import { View, TextInput, Text, Switch, TouchableOpacity } from 'react-native';
import styles from './style';
import Slider from '@react-native-community/slider';

export default InputNome = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [valor, setValor] = useState('');
  const [estudante, setEstudante] = useState(true);

  enviarDados = () => {
    if (nome === '' || idade === '') {
      alert('Preencha os dados corretamente');
      return;
    }
    alert(
      'Conta aberta com sucesso!! \n\n' +
        'Nome: ' +
        nome +
        '\n' +
        'Idade: ' +
        idade +
        '\n' +
        'Limite Conta: ' +
        valor +
        '\n' +
        'Conta Estudante: ' +
        (estudante ? 'Ativo' : 'Inativo'),
    );
  };

  return (
    <View style={styles.inputSpace}>
      <TextInput style={styles.input} placeholder="Digite seu nome" onChangeText={text => setNome(text)} />
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        onChangeText={numero => setIdade(numero)}
        keyboardType="numeric"
      />
      <Slider
        style={styles.inptSlider}
        minimumValue={0}
        maximumValue={1000}
        onValueChange={value => setValor(value.toFixed(2))}
      />
      <Text>{valor}</Text>
      <Switch value={estudante} onValueChange={estudy => setEstudante(estudy)} />
      <Text>{estudante == true ? 'Estudante' : 'Trabalhador'}</Text>

      <TouchableOpacity style={styles.botao} onPress={enviarDados} underlayColor="#000000">
        <Text style={styles.botaoTexto}>Abrir Conta</Text>
      </TouchableOpacity>
    </View>
  );
};
