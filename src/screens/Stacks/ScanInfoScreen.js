import React, { useContext, useEffect, useState } from 'react'
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native'
import OpenFoodContext from '../../context/openfood/openfoodContext'
import styles, {
  image_Size,
  magSpace_TB,
  magSpace_T,
  magSpace_B,
  box,
  box2,
  box3,
  box4,
  align_cent,
  justify_cent,
  border,
} from '../../styling/globalStyles'
import Spinner from '../../components/Spinner'
import NotFound from '../../components/NotFound'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ITEM_STORAGE_KEY } from '../../../const'

const ScanInfoScreen = ({ route, navigation }) => {
  const openFoodContext = useContext(OpenFoodContext)
  const { searchItem, item, loading } = openFoodContext
  const { barcode } = route.params

  const storeData = async (barcode, product) => {
    if (!(barcode && product)) return;
    let Storage = JSON.parse(await AsyncStorage.getItem(ITEM_STORAGE_KEY))

    if (!Storage) Storage = []
    Storage.push({
      id: new Date().getTime(),
      barcode,
      product
    })
    await AsyncStorage.setItem(ITEM_STORAGE_KEY, JSON.stringify(Storage))
  }

  useEffect(() => {
    searchItem(barcode)
  }, [])

  useEffect(()=> {
    if(loading || !item) return;

    storeData(barcode, item)
  }, [item])

  if (loading) return <Spinner/>

  if (!item && !loading)
    return (
      <NotFound
        height="100"
        width="100"
        heading="Ooops!"
        subheading="Didn't find anything"
      />
    )

  return (
    // cannot call image     //
    <View style={styles.container}>
      {item && (
        <>
          <View style={[magSpace_T, align_cent]}>
            <Image
              source={{ uri: item.image_url }}
              style={[image_Size, magSpace_TB]}
            />
            <ScrollView
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            >
              <View style={[magSpace_TB, box]}>
                <Text style={styles.font_P1}> Barcode</Text>
                <Text style={styles.font_P3}> {item.id}</Text>
              </View>

              <View style={[magSpace_TB, box]}>
                <Text style={styles.font_P1}> Product name</Text>
                <Text style={styles.font_A1}>{item.product_name}</Text>
              </View>
              <View style={[magSpace_TB, box]}>
                <Text style={styles.font_P1}> Brand</Text>
                <Text style={styles.font_H1}>{item.brands}</Text>
              </View>
              <View style={[magSpace_TB, box]}>
                <Text style={styles.font_P1}> Creator</Text>
                <Text style={styles.font_H1}>{item.creator}</Text>
              </View>
              <View style={[magSpace_TB, box]}>
                <Text style={styles.font_P1}> Nova group</Text>
                <View style={[styles.RGBgreen, box2, align_cent, justify_cent]}>
                  <Text style={styles.font_B}>{item.nova_group}</Text>
                </View>
              </View>
              <View style={[magSpace_TB, box]}>
                <Text style={styles.font_P1}> Nutri score</Text>
                <View style={[styles.RGBgreen, box3, align_cent, justify_cent]}>
                  <Text style={styles.font_B}>{item.nutriscore_score}</Text>
                </View>
              </View>
              <View style={[magSpace_TB, box]}>
                <Text style={styles.font_P1}> Nutri grade</Text>
                <View style={[styles.RGBgreen, box4, align_cent, justify_cent]}>
                  <Text style={styles.font_B}>{item.nutriscore_grade}</Text>
                </View>
              </View>
              <View style={[magSpace_TB, box]}>
                <Text style={styles.font_P1}> Nutrient levels</Text>
                <View style={styles.font_H1}>
                  {Object.keys(item.nutrient_levels).map((nutrient) => (
                    <Text key={nutrient} style={styles.font_H1}>
                      {nutrient}:{' '}
                      <Text style={styles.font_A3}>
                        {item.nutrient_levels[nutrient]}
                      </Text>
                      <Text style={styles.font_P1}> in quantity</Text>
                    </Text>
                  ))}
                  <View style={border}>
                    <Text style={[styles.font_P1, magSpace_TB]}>
                      Warning: the amount of fiber is not specified, their
                      possible positive contribution to the grade could not be
                      taken into account.
                    </Text>
                  </View>
                  {/*<View>
                    {Object.keys(item.ingredients).map((id) => (
                      <Text key={id} style={styles.font_H1}>
                        {id}:{' '}
                        <Text style={styles.font_A3}>
                          {item.ingredients[id]}
                        </Text>
                      </Text>
                    ))}
                  </View>*/}
                </View>
              </View>
              <View style={[magSpace_TB, box]}>
                <Text style={styles.font_P1}> Data source</Text>
                <Text style={styles.font_P1}>{item.data_sources}</Text>
              </View>
            </ScrollView>
            <TouchableOpacity
              style={[styles.button_2, magSpace_B]}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.font_H2}>Back</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  )
}

export default ScanInfoScreen
