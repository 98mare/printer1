import { StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { RNCamera } from 'react-native-camera'
import { useNavigation } from '@react-navigation/native';


const QrScanner = () => {
  const navigation = useNavigation()
  useEffect(() => {
  }, [])
  
  const onBarcodeScan = (data) => {
    console.log("bar code", data.data)
    navigation.navigate('ReceiptInfoScreen', {
      id: data.data,
      // id: 68,
    })
  }

  return (
    <View style={{
      flex: 1,
    }}>
      <RNCamera style={styles.rnCamer}
        onBarCodeRead={(e) => onBarcodeScan(e)}
      />
    </View>
  )
}

export default QrScanner

const styles = StyleSheet.create({
  rnCamer: {
    flex: 1,
    position: 'relative',
  },
})