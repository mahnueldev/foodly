
import React, { useContext, useEffect } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import OpenFoodContext from "../../context/openfood/openfoodContext";
import Spinner from "../../components/Spinner";
import List from "../../components/List";
import { container } from "../../styling/globalStyles";

const AllergenScreen = () => {
  const openfoodContext = useContext(OpenFoodContext);
  const { allergens, loading, getAllergens } = openfoodContext;

  useEffect(() => {
    if (!loading && !allergens) { 
      getAllergens();
    }
  }, [allergens, loading]);

  if (!allergens || loading) return <Spinner />;

  return (
    <View style={styles.container}>
      <FlatList
        data={allergens}
        keyExtractor={item => item.id}
        renderItem={List}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container,
});

export default AllergenScreen;
