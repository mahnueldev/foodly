import React, { useContext, useEffect } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import {container, font_H1, font_P} from '../styling/globalStyles'

// Issue: API query not rendering
const List = ({items}) => {
   
    return (
        <View style={styles.container}>
            <View>
            <Text style={styles.font_H1} key={items._id}>{items.abbreviated_product_name}</Text>
            <Text style={styles.font_P}>{items.allergens}</Text>
            {/* <Image style={styles.image} source={item.urlToImage ? {uri: items.image_front_small_url } : null}/> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container,
    font_H1,
    font_P
});

export default List;
