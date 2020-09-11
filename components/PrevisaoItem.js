import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Cartao from './Cartao';

const PrevisaoItem = (props) => {
  return (
    <Cartao estilos={estilos.cartao} >

    </Cartao>
  )
}

const estilos = StyleSheet.create({
  cartao: {
    marginBottom: 8
  }
});

export default PrevisaoItem;