import React, {FC, useCallback, useState} from 'react';

import {
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {IProductItem} from '../types';
import {Header} from './Header';
import {Search} from './Search';
import {ProductItemDescription} from './ProductItemDescription';

interface ProductListProps {
  list: IProductItem[];
  onProductSelect: () => void;
  onRefresh: () => Promise<void>;
}

export const ProductList: FC<ProductListProps> = ({
  list,
  onProductSelect,
  onRefresh,
}) => {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    onRefresh().then(() => setRefreshing(false));
  }, [onRefresh]);

  const renderItem = (item: IProductItem) => (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={onProductSelect}>
        <Image
          source={{uri: `https://picsum.photos/200/300?random=${item.id}`}}
        />
        <ProductItemDescription item={item} />
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      <Header
        title="E-commerce Store"
        rightBlock={() => (
          <Image source={require('../../assets/shopping-cart.png')} />
        )}
      />
      <Search />
      <FlatList
        contentInsetAdjustmentBehavior="automatic"
        numColumns={2}
        keyExtractor={({id}) => '_' + id}
        data={list}
        renderItem={({item}) => renderItem(item)}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
    </>
  );
};

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
});
