import React, {FC} from 'react';

import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {Header} from './Header';

import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {ProductItemDescription} from './ProductItemDescription';
import {IProductItem} from '../types';

interface ProductItemProps {
  item: IProductItem;
  onProductClose: () => void;
}

export const ProductItem: FC<ProductItemProps> = ({item, onProductClose}) => {
  return (
    <>
      <TouchableHighlight onPress={onProductClose}>
        <Header
          title="E-commerce Store"
          rightBlock={() => (
            <>
              <Image source={require('../../assets/icons-heart.png')} />
              <Image source={require('../../assets/shopping-cart.png')} />
            </>
          )}
        />
      </TouchableHighlight>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <SwiperFlatList index={1}>
          <Image source={require('../../assets/product-image-1.png')} />
          <Image source={require('../../assets/product-image-2.png')} />
          <Image source={require('../../assets/product-image-1.png')} />
          <Image source={require('../../assets/product-image-2.png')} />
        </SwiperFlatList>
        <View style={styles.descriptionBlock}>
          <ProductItemDescription item={item} />
        </View>
        <View style={styles.descriptionBlock}>
          <Text style={styles.descriptionTitle}>Select Color</Text>
          <Text style={styles.descriptionColor}>Blue</Text>
        </View>
        <View style={styles.descriptionBlock}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>
            The phone features a 6.088 inch HD+ (1560 x 720 pixel) resolution,
            283ppi Super AMOLED display, a glass and plastic body, with Corning
            Gorilla Glass 5 protection on its front as well as its back. It is
            powered by a Qualcomm Snapdragon 665 SoC. It also has a 2.0, Type-C
            1.0 reversible connector.
          </Text>
        </View>
      </ScrollView>
      <Button title="ADD TO CHART" />
    </>
  );
};

const styles = StyleSheet.create({
  descriptionBlock: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  descriptionColor: {
    padding: 3,
    backgroundColor: '#F7F7F7',
  },
  descriptionText: {
    fontSize: 15,
  },
});
