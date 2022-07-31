import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NotFound from '../../components/NotFound';
import styles, {
  justify_cent,
  align_cent,
  flex,
} from '../../styling/globalStyles';
import { ITEM_STORAGE_KEY } from '../../../const'

const HistoryScreen = ({ route }) => {
  const [objects, setObjects] = useState([]);
  // const { barcode } = route.params;

  const searchHistory = async () => {
    let Storage = JSON.parse(await AsyncStorage.getItem(ITEM_STORAGE_KEY));

    console.log(Storage);

    if (!Storage) Storage = [];
    setObjects(Storage);
  };

  const clearAll = async () => {
    await AsyncStorage.clear();
    setObjects([]);
    alert('Storage cleared!!');
  };

  useEffect(() => {
    searchHistory();
  }, []);

  return (
    <View style={styles.container} key={new Date()}>
      <TouchableOpacity style={styles.button_2} onPress={clearAll}>
        <Text style={styles.font_H2}>Clear</Text>
      </TouchableOpacity>

      {objects.length ? (
        <FlatList
          data={item}
          renderItem={({ item: item }) => (
            <View>
              <Text> {item.id}</Text>
              <Text>{item.product_name}</Text>
            </View>
          )}
        />
      ) : (
        <View style={[justify_cent, align_cent, flex]}>
          <NotFound height='100' width='100' subheading='Nothing to see here' />
        </View>
      )}
    </View>
  );
};

export default HistoryScreen;
