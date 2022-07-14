import React, {useEffect, useState} from 'react';

import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import {ProductItem} from './src/components/ProductItem';
import {ProductList} from './src/components/ProductList';

import axios from 'axios';
import {IProductItem} from './src/types';

const App = () => {
  const [mode, setMode] = useState('list');
  const [data, setData] = useState<IProductItem[]>([]);

  useEffect(() => {
    axios
      .get('https://demo.spreecommerce.org/api/v2/storefront/products')
      .then(({data: {data: newData}}) => {
        setData(newData);
      });
  }, []);
  const handleProductSelect = () => {
    setMode('item');
  };

  const handleProductClose = () => {
    setMode('list');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar />
      {mode === 'list' && (
        <ProductList list={data} onProductSelect={handleProductSelect} />
      )}
      {mode === 'item' && (
        <ProductItem item={data[0]} onProductClose={handleProductClose} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
