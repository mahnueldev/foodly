import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import {
  container,
  magSpace_T,
  align_cent,
  justify_cent,
  flex,
  font_P3,
  box5,
  font_H1,
  align_start,
} from '../../styling/globalStyles';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase';
import Spinner from '../../components/Spinner';

const AddScreen = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    let result = [];
    const querySnapshot = await getDocs(collection(db, 'products'));
    querySnapshot.forEach((doc) => {
      result.push({ id: doc.id, ...doc.data() });
    });

    setUsers([...result]);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View>
        <View style={box5}>
          <View style={align_start}>
            <Text style={font_P3}>{`${item.code}`}</Text>
            <Text style={font_H1}>{`${item.brand}`}</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderLoader = () => {
    return isLoading ? <Spinner /> : null;
  };

  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

 

  const onRefresh = () => {
    setIsLoading(false);
    getUsers();
  };

  return (
    <View style={container}>
      <View style={magSpace_T}>
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListFooterComponent={renderLoader}
          onEndReached={loadMoreItem}
          onEndReachedThreshold={0}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          maxToRenderPerBatch={3}
          onRefresh={onRefresh}
          refreshing={isLoading}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container,

  magSpace_T,
  align_cent,
  justify_cent,
  flex,
  font_P3,
  box5,
  font_H1,
  align_start,
});

export default AddScreen;
