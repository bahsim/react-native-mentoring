import React, {FC, ReactElement} from 'react';

import {Image, StyleSheet, Text, View} from 'react-native';

interface HeaderProps {
  title: string;
  rightBlock: () => ReactElement;
}

export const Header: FC<HeaderProps> = ({title, rightBlock}) => (
  <View style={styles.header}>
    <View style={[styles.headerItem, styles.icon]}>
      <Image source={require('../../assets/menu.png')} />
    </View>
    <View style={[styles.headerItem, styles.titleContainer]}>
      <Text style={styles.title}>{title}</Text>
    </View>
    <View style={[styles.headerItem, styles.icon]}>{rightBlock()}</View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    backgroundColor: '#008ACE',
  },
  headerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100%',
    padding: 10,
  },
  titleContainer: {
    flexGrow: 1,
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  icon: {
    textAlign: 'center',
    width: '25%',
  },
});
