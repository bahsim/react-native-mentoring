import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {IProductItem} from '../types';

export const ProductItemDescription = ({item}: {item: IProductItem}) => (
  <>
    <View style={styles.content}>
      <Text style={styles.cardName}>{item.attributes.name}</Text>
    </View>
    <View style={styles.content}>
      <Text style={styles.price2}>{item.attributes.display_price}</Text>
    </View>
  </>
);

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: '3%',
    marginVertical: '3%',
    padding: 15,
    width: '40%',
    color: 'red',
    borderWidth: 1,
    borderColor: 'grey',
  },
  cardName: {
    fontSize: 16,
  },
  content: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginTop: 10,
  },
  price1: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
    paddingRight: 4,
  },
  price2: {
    fontWeight: 'bold',
    color: 'grey',
    fontSize: 16,
    paddingHorizontal: 4,
  },
  discount: {
    fontWeight: 'bold',
    color: 'blue',
    fontSize: 16,
    paddingHorizontal: 4,
  },
});
