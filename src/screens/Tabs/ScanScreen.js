import React, { useState, useEffect, useContext  } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import OpenFoodContext from '../../context/openfood/openfoodContext'
import Spinner from '../../components/Spinner';

// Issue: API query not rendering

const ScanScreen = () => {

  const openFoodContext = useContext(OpenFoodContext);
  const { searchItem, item, loading } = openFoodContext;

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('');
  

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({
    type ='', 
    data
  }) => {
    setScanned(true);
    setText(data);
    useEffect(() => {
      if (!loading && !item) {
          searchItem(data);
      }
  }, [item, loading]);
  }
  if (!item || loading) return <Spinner />;

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }

  // Return the View
  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 600, width: 600 }} />
      </View>
      <View >
        
        <Text key={item._id}>{item.data}</Text>
    
      </View>

      {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 500,
    width: 600,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'
  }
});

export default ScanScreen;
