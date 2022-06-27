import React, { useContext, useEffect } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import OpenFoodContext from '../../context/openfood/openfoodContext';
import Spinner from '../../components/Spinner';

// Issue: API query not rendering
const ListScreen = () => {
    const openfoodContext = useContext(OpenFoodContext);
    const { items, loading, getItems } = openfoodContext;

    useEffect(() => {
        if (!loading && !items) {
            getItems();
        }
    }, [items, loading]);

    if (!items || loading) return <Spinner />;
    return (
        <View style={styles.container}>
            <Text style={styles.container} key={items._id}>
                {items.allergens_from_ingredients}
            </Text>
            {/* <Button onPress={getItems} title="Press" /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cda656',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fonts: {
        fontSize: 50,
        color: 'white',
    },
});

export default ListScreen;
