import React, { useEffect, useContext } from 'react'
import react from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Settings, Image, Dimensions, TouchableOpacity, TouchableHighlight } from 'react-native';
import Values from './Objects/Paramsfiltered.json';
import { List } from 'react-native-paper';
import { ContextConfigurationValues, ContextSensorValues } from '../App'

let IdentificationParams;
let MenuParams;
var filtered;
var filteredAT;
const demoConnection = [{ Tag: "Application Tag", Value: "id1" }, { Tag: "Device Name", Value: "id2" }, { Tag: "Device Serial No", Value: "id3" }, { Tag: "Device Type", Value: "id4" }, { Tag: "Random Tag", Value: "Random Value" }]

DeviceScreen = () => {
  const contextConfiguration = useContext(ContextConfigurationValues)
  const contextValues = useContext(ContextSensorValues)
  const bottomValues = [{ "Tag": "Conductivity", "Value": `${contextValues["Value"]["5F"]}` }, { "Tag": "Concentration", "Value": `${contextValues["Value"]["60"]}` }, { "Tag": "Temperature", "Value": `${contextValues["Value"]["61"]}` }]

  const Item = ({ item }) => (
    <View style={styles.itemTab} >
      <Text style={[styles.titleTab, { textAlign: 'center' }]}>{item.Tag}</Text>
      <Text style={styles.titleTab1}>{item.Value}</Text>
    </View>
  );
  const ItemBottom = ({ item, index, seperators }) => (
    <View style={styles.itemTab} >
      {index == 0 ? <Text style={[styles.titleTab, { textAlign: 'center', borderTopWidth: 1 }]}>{item.Tag}</Text> : <Text style={[styles.titleTab, { textAlign: 'center'}]}>{item.Tag}</Text>

      }
      {/* <Text style={[styles.titleTab, { textAlign: 'center', borderTopWidth: StyleSheet.hairlineWidth }]}>{item.Tag}</Text> */}
      <View style={[styles.titleTabButton, { textAlign: 'center' }]}>
        <Text style={{ textAlign: 'center' }} >{item.Value}</Text>
      </View>
    </View>
  );

  const ValuesTab = () => (

    <View style={{ flex: 1 }}>
      <FlatList
        data={demoConnection}
        renderItem={({ item }) => (<Item item={item} />)}
      // keyExtractor={item => item.Tag}
      />
    </View>
  );
  const ValuesTabBottom = () => (
    <View style={{}}>
      <FlatList
        data={bottomValues}
        renderItem={({ item, index, separators }) => (<ItemBottom item={item} index={index} />)}
        keyExtractor={item => item.Tag}
      />
    </View>
  );



  let windowWidth = Dimensions.get('window').width;
  let windowHeight = Dimensions.get('window').height;

  IdentificationParams = Values.find(IdentificationParams => IdentificationParams.Tag === "Identification");
  MenuParams = IdentificationParams.menu;


  console.log(MenuParams)
  return (
    <SafeAreaView style={[styles.container, { flexDirection: 'column', backgroundColor: '#ffffff' }]}>


      {/* Top Component of Settings Page */}
      <View style={{ flexDirection: 'column', borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#000000' }} >
        {/* <Image
          source={require("../Media/sensorimage.png")}
          style={{
             width: 40,
             height: 120,
            // borderRadius: 40,
          }}
        /> */}
        <View style={{ alignItems: 'center' }}>
          <Text style={{ padding: 25, fontSize: 25, color: '#000000', fontWeight: 'bold', marginVertical: 0, marginHorizontal: 10, borderTopWidth: StyleSheet.hairlineWidth }}> Values</Text>
        </View>
        <ValuesTabBottom />


      </View>

      {/* Bottom Componenent of Settings Page */}
      <SafeAreaView style={{ backgroundColor: "#ffffff" }} >

        {/* Values are rendered here. */}


      </SafeAreaView>
      {/* <ValuesTab/> */}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: StatusBar.currentHeight || 0,
    marginTop: 0,
  },
  item: {
    backgroundColor: '#415172',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  titleTab: {
    backgroundColor: '#ffffff',
    padding: 6,
    fontSize: 13,
    color: '#000000',
    fontWeight: 'bold',
    marginVertical: 0,
    marginHorizontal: 10,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  titleTab1: {
    backgroundColor: '#ffffff',
    padding: 6,
    marginVertical: 0,
    marginHorizontal: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  titleTabButton: {
    backgroundColor: '#ffffff',
    padding: 6,
    marginVertical: 0,
    marginHorizontal: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  itemTab: {
    backgroundColor: '#ffffff',
    padding: 1,
    marginVertical: 0,
    marginHorizontal: 0,

  },
  title: {
    fontSize: 12,
  },
  noDevice: {
    // backgroundColor:'rgba(255,255,255,0.26)',
    marginTop: '50%',
    margin: '10%',
    borderRadius: 3,
    width: '80%',
    height: '35%',
    alignItems: 'center',
    justifyContent: 'center',

  }
});

export default DeviceScreen;