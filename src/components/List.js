import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import {container, font_H1, font_P} from '../styling/globalStyles'

// Issue: API query not rendering
const List = ({item}) => {
   
    return (
        <View style={styles.container}>
            <View>
            <Text style={styles.font_H1}>{item.id}</Text>
            <Text style={styles.font_P}>{item.name}</Text>
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
