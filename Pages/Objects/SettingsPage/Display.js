import React,{useEffect} from 'react'
import { StyleSheet, Text, View, Button, SafeAreaView, FlatList, StatusBar, TouchableOpacity,TouchableHighlight } from 'react-native'
import Paramsfiltered from '../../Objects/Paramsfiltered.json';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-paper';
import Values from '../Paramsfiltered.json';
import LenghtChecker from '../../../Navigation/Functions/Utililty';
import Icon from 'react-native-vector-icons/Ionicons';
import react from 'react';
import BleManager from 'react-native-ble-manager';
import BufferArray from '../../../Navigation/Functions/BufferArray';

const HandleWriteCommand = (peripheralId, serviceUUID, characteristicUUID, value, maxbytesize = 512) => {
  BleManager.write(peripheralId, serviceUUID, characteristicUUID, value, maxbytesize)///////////Here Writes to the BLE Peripheral
  console.log("In Button Function")
  ///If anything else is to be done, it will be done here!
}
let peripheralID='0'
let DisplayParams = Paramsfiltered.find(DisplayParams => DisplayParams.Tag === "Display");
let MenuParams = DisplayParams.menu;
const StackDisplay = createStackNavigator();

var filtered = Values.filter(row => row.Tag == 'Display');
var filteredAT = filtered.filter(row => row.Tag == 'Backlight');


const DisplayScreen = ({ route, navigation }) => {
  BleManager.getConnectedPeripherals([]).then((peripheralsArray) => {
    // Success code

    console.log(JSON.stringify(peripheralsArray[0].id));
    peripheralID=peripheralsArray[0].id
  }).catch(() => {
    console.log("Couldnt Find A peripheral");
    // expected output: "Success!"
  });
  function Item(title, value) {
    switch (title) {
      case 'Backlight':
        return (
          <TouchableOpacity style={styles.itemButton} onPress={() => navigation.navigate('Backlight', { Tag: title, Value: value })}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{value}</Text>
          </TouchableOpacity>
        )
      default:
        return (
          <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{value}</Text>
          </View>

        )
    };
  }

  const CheckButtoned=(selectedValue, sentValue )=> {
    if(selectedValue===sentValue){
      return(

          <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
            <Text>{sentValue}</Text>
            <Icon
              name="checkmark-outline"
              size={20}
              color="#f54"
            />
          </View>
        )
    }
    else{
      return(
        <View style={{ flexDirection: "row" }}>
          <Text>{sentValue}</Text>
        </View>
      )
    }
  }
  const ChangedButton = (initialValue,newValue,navigation)=>{
    if(initialValue===newValue){
      return(
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
      </View>
        )
    }
    else{
      return(
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        </View>
      )
    }
  }

  

  const DisplayMainScreen = ({ navigation }) => (

    <SafeAreaView style={styles.container}>
      <FlatList
        data={MenuParams}
        renderItem={renderItem}
        keyExtractor={item => item.Tag}
      />
    </SafeAreaView>
  )

  const BacklightScreen = ({ route, navigation }) => {
    const { Tag } = route.params;
    const { Value } = route.params;
    const [text, setText] = React.useState(Value);

    let indexValue = (text=='On') ? '0':'1'
    useEffect(() => {
    
    if(text!=Value){
      navigation.setOptions({
        headerRight: () => (
        <TouchableOpacity 
        
        onPress={() => { HandleWriteCommand(peripheralID, "a65373b2-6942-11ec-90d6-024200120000", "a65373b2-6942-11ec-90d6-024200120100", BufferArray(`{'Tag':'Display', 'Set Parameters': {'C3':'${indexValue}'}}`)) }}
        >
          <View style={styles.buttonBar}>
            <Text>Save</Text>
          </View>
        </TouchableOpacity>
        ),
      });
    }
    else{
      navigation.setOptions({
        headerRight: () => (
          <></>
        ),
      });
    }
  });
    return (
      <View>
        <TouchableOpacity style={styles.itemButton} onPress={() => setText("On")} >
          {CheckButtoned(text,"On")}
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemButton} onPress={() => setText("Off")} >
          {CheckButtoned(text,"Off")}
        </TouchableOpacity>
        {ChangedButton(Value,text,navigation)}

      </View>
    );
  };
  const renderItem = ({ item }) => (
    Item(item.Tag, item.Value)
  );

  return (
    <StackDisplay.Navigator screenOptions={{ headerShown: true, headerTitleAlign: 'center' }}>
      <StackDisplay.Screen name='Display Main' component={DisplayMainScreen} options={{ headerTitle: "Display" }} />
      <StackDisplay.Screen name='Backlight' component={BacklightScreen} />
    </StackDisplay.Navigator>

  );
}

export default DisplayScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // 
    padding: 0,
    // marginTop: StatusBar.currentHeight || 0,
    paddingTop: 0,
  },
  buttonBar: {
    alignItems: "center",
    backgroundColor: "#9A348E",
    padding: 8,
    marginRight:3,
    borderRadius: 10,

    
    
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 8,
    flexDirection: 'column',
    paddingTop: 0,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,

  },
  title: {
    fontSize: 15,
    color: 'black',
  },
  value: {
    fontSize: 12,
    color: 'gray',
  },
  itemButton: {
    backgroundColor: '#ffffff',
    padding: 8,
    marginVertical: 0,
    marginHorizontal: 0,
    flexDirection: 'column',
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center'
  },
  myText: {
    color: 'black',
    fontSize: 25,
    textAlign: 'center'
  }
});


