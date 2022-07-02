import React, { useContext, useEffect } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import OpenFoodContext from "../../context/openfood/openfoodContext";
import Spinner from "../../components/Spinner";
import List from "../../components/List";
import { container } from "../../styling/globalStyles";

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
    <View>
      <FlatList
        data={items.product}
        ListHeaderComponent={List}
        keyExtractor={items}
        renderItem={({ items  }) => {
          return <List items={items} />;
        }}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container,
});

export default ListScreen;
