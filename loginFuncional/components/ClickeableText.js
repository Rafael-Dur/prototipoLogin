import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { COLORS, FONT_SIZES } from '../constants/constants';

const ClickeableText = ({ onPress, title, clickeableText, styleType, singleLink }) => {
  const styles = getStyles(styleType);

  return (
    <View style={singleLink ? styles.singleLinkContainer : styles.container}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.clickeable}>{clickeableText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const getStyles = (styleType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      marginVertical: 50,
      width: '100%',

    },
    singleLinkContainer: {
      alignItems: 'flex-end',
      //backgroundColor: COLORS.white,
      width: '100%',
      marginBottom: 15,
      maxHeight: 40,
      maxWidth: 350,
    },
    title: {
      fontFamily: 'Delivery',
      fontSize: FONT_SIZES.small,
      fontWeight: 'bold',
    },
    clickeable: {
      fontFamily: 'Delivery2',
      fontSize: FONT_SIZES.small,
      fontWeight: 'bold',
      color: styleType === 'link' ? COLORS.red : COLORS.black, //Letra roja para los links
    },
  });

export default ClickeableText;
