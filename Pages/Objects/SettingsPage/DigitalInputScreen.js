import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, Text, View, Button, SafeAreaView, FlatList, StatusBar, TouchableOpacity, ScrollView } from 'react-native'
import Paramsfiltered from '../../Objects/Paramsfiltered.json';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-paper';
import Values from '../Paramsfiltered.json';
import LenghtChecker from '../../../Navigation/Functions/Utililty';
import react from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
let peripheralID = '0'
import BleManager from 'react-native-ble-manager';
import { Picker } from '@react-native-picker/picker';
import { ContextConfigurationValues, ContextSensorValues } from '../../../App';
import HandleWriteCommandGroup from '../../../Utilities/BLEFunctions.js/HandleGroup'
import HandleWriteCommand from '../../../Utilities/BLEFunctions.js/HandleSingle'
const StackDigitalInput = createStackNavigator();

var filtered = Values.filter(row => row.Tag == 'Digital Input')[0];
var MenuParams = filtered.menu;

function renderItem(item, navigation = null, context = null, parent) {
    return (Item(item.Tag, item.Value, navigation, context, parent))
}
const ItemValueBar = ({ item, value }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

        <View style={{ justifyContent: 'center' }}>
            <Text style={styles.title}>{item}</Text>
            <Text style={styles.value}>{value}</Text>

        </View>
        <View style={{ justifyContent: 'center' }}>
            <Icon
                name="chevron-forward-outline"
                size={20}
                color="#000"
            />
        </View>
    </View>
)
const CheckButtoned = (selectedValue, sentValue) => {
    if (selectedValue === sentValue) {
        return (

            <View style={{
                padding: 8,
                marginVertical: 0,
                marginHorizontal: 0, justifyContent: "space-between", flexDirection: "row"
            }}>
                <Text style={{ color: "black" }}>{sentValue}</Text>
                <Icon
                    name="checkmark-outline"
                    size={20}
                    color="#f54"
                />
            </View>
        )
    }
    else {
        return (
            <View style={{
                padding: 8,
                marginVertical: 0,
                marginHorizontal: 0, flexDirection: "row"
            }}>
                <Text >{sentValue}</Text>
            </View>
        )
    }
}
function Item(title, value, navigation = null, context = null, parent = null) {
    switch (title) {
        case 'Digital Input Function':
            return (
                <TouchableOpacity style={styles.itemButton} onPress={() => navigation.navigate('Digital Input Function')}>
                      <ItemValueBar item={title} value={value} />
                </TouchableOpacity>
            )

        case 'Digital Input Status':
                return (
                    <View style={styles.itemButton}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.value}>{context[MenuParams.filter(tag=> tag.Tag =="Digital Input Function")[0].Index]}</Text>
                  </View>
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

const DigitalInputMainScreen = ({ navigation }) => {
    const context = useContext(ContextConfigurationValues);
    return(
    <SafeAreaView style={styles.container}>
        <FlatList
            data={MenuParams}
            renderItem={({ item, index, separators }) => (renderItem(item, navigation,context, item.Tag))}
            keyExtractor={item => item.Tag}
        />
    </SafeAreaView>)
}

const DigitalInputFunctionScreen = ({ route, navigation }) => {
    const context = useContext(ContextConfigurationValues);
    const val = MenuParams.filter(row => row.Tag == 'Digital Input Function');
    const possibleValues = val[0].PossibleValues;
    const indexSelection = val[0].Index
    const indexSelectionDINHIGH="313" /////////Burası Genel Objeden Çekilmiyior Şuanda
    const indexSelectionDINLOW="314"
    const [selection, setSelection] = React.useState(""); /////Digital InPut Function Selection
    const [selectionDINHIGH, setSelectionDINHIGH] = React.useState("Configuration 1");
    const [selectionLOW, setSelectionLOW] = React.useState("Configuration 1");

    console.log("DigitalInputFunctionScreen")
    console.log(selection)
    function ItemSelectable(title) {

        return (
            <TouchableOpacity style={styles.itemButton} onPress={() => { setSelection(title) }}>
                {CheckButtoned(selection, title)}
            </TouchableOpacity>
        )
    }
    const renderItemSelectable = ({ item }) => (
        ItemSelectable(item.Tag)
    );

    return (
        <ScrollView style={{
            // justifyContent: "center", // 
            padding: 0,
            // marginTop: StatusBar.currentHeight || 0,
            paddingTop: 0,
        }}>
            <TouchableOpacity style={styles.itemButton} onPress={() => { setSelection("Configuration Control") }}>
                {CheckButtoned(selection, "Configuration Control")}
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemButton} onPress={() => { setSelection("Status Control") }}>
                {CheckButtoned(selection, "Status Control")}
            </TouchableOpacity>
            
            {
                selection == "Configuration Control" && (
                    <View style={[styles.container1, {  alignItems: 'stretch', backgroundColor: "#ffffff" }]}>
                        <View style={[styles.pickerText, { paddingTop: 15, alignItems: "center" }]} >
                            <Text style={[styles.title]}>{"Choose Digital Input Assign for D-IN STATE:LOW"}</Text>
                        </View>

                        <View style={styles.pickerText} >

                            <Picker style={[styles.picker, { textAlign: 'center' }]}
                                selectedValue={selectionLOW}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelectionLOW(itemValue)
                                }>
                                <Picker.Item label="Configuration 1" value="Configuration 1" />
                                <Picker.Item label="Configuration 2" value="Configuration 2" />
                                <Picker.Item label="Configuration 3" value="Configuration 3" />
                                <Picker.Item label="Configuration 4" value="Configuration 4" />
                                {/* {pickerPossibleValues} */}

                            </Picker>
                        </View>

                        <View style={[styles.pickerText, { paddingTop: 15, alignItems: "center" }]} >
                            <Text style={[styles.title]}>{"Choose Digital Input Assign for D-IN STATE:HIGH"}</Text>
                        </View>

                        <View style={styles.pickerText} >

                            <Picker style={[styles.picker, { textAlign: 'center' }]}
                                selectedValue={selectionDINHIGH}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelectionDINHIGH(itemValue)
                                }>
                                <Picker.Item label="Configuration 1" value="Configuration 1" />
                                <Picker.Item label="Configuration 2" value="Configuration 2" />
                                <Picker.Item label="Configuration 3" value="Configuration 3" />
                                <Picker.Item label="Configuration 4" value="Configuration 4" />
                                {/* {pickerPossibleValues} */}

                            </Picker>
                        </View>
 
                            <Button
                                onPress={() => { HandleWriteCommandGroup(peripheralID, "a65373b2-6942-11ec-90d6-024200120000", "a65373b2-6942-11ec-90d6-024200120100", `{"Tag":"Digital Input", "Set Parameters": {"${indexSelection}":"${selection}","${indexSelectionDINHIGH}":"${selectionDINHIGH}","${indexSelectionDINLOW}":"${selectionLOW}"}}`, context) }}
                                title="Save"
                                color="#841584"
                            />

                    </View>




                )

                //   Status Control Seçiliyken Renderlanacak
                            }
            {
                              
                                selection == "Status Control" &&(
                                <Button
                                    onPress={() => { HandleWriteCommandGroup(peripheralID, "a65373b2-6942-11ec-90d6-024200120000", "a65373b2-6942-11ec-90d6-024200120100", `{"Tag":"Digital Input", "Set Parameters": {"OM":"${selection}"}}`, context) }}
                                    title="Save"
                                    color="#841584"
                                />)
                        
            }
        </ScrollView>
    );
};

const DigitalInputScreen = ({ route, navigation }) => {
    BleManager.getConnectedPeripherals([]).then((peripheralsArray) => {
        // Success code

        console.log(JSON.stringify(peripheralsArray[0].id));
        peripheralID = peripheralsArray[0].id
    }).catch(() => {
        console.log("Couldnt Find A peripheral");
        // expected output: "Success!"
    });



    //   const MeasurementRangeScreen = ({ route, navigation }) => {
    //     const valSystemUnits = Values.filter(row => row.Tag == 'Concentration');
    //     const val = valSystemUnits[0].menu.filter(row => row.Tag == 'Measurement Range');

    //     const possibleValues = val[0].Menu;
    //     const [selection, setSelection] = React.useState(val[0].Value);
    //     function ItemSelectable(title) {

    //       return (
    //         <TouchableOpacity style={styles.itemButton} onPress={() => { setSelection(title) }}>
    //           {CheckButtoned(selection, title)}
    //         </TouchableOpacity>
    //       )
    //     }
    //     const renderItemSelectable = ({ item }) => (
    //       ItemSelectable(item.Tag)
    //     );
    //     useEffect(() => {

    //     if (selection != val[0].Value) {
    //       navigation.setOptions({
    //         headerRight: () => (
    //           <TouchableOpacity >
    //             <View style={styles.buttonBar}>
    //               <Text>Save</Text>
    //             </View>
    //           </TouchableOpacity>
    //         ),
    //       });
    //     }
    //     else {
    //       navigation.setOptions({
    //         headerRight: () => (
    //           <></>
    //         ),
    //       });
    //     }
    //   });
    //     return (
    //       <SafeAreaView style={styles.container}>
    //         <FlatList
    //           data={possibleValues}
    //           renderItem={renderItemSelectable}
    //           keyExtractor={item => item.Tag}
    //         />
    //       </SafeAreaView>
    //     );
    //   };




    // console.log(JSON.stringify(ConcentrationParams));
    // console.log(JSON.stringify(MenuParams));





    return (
        <StackDigitalInput.Navigator screenOptions={{ headerShown: true, headerTitleAlign: 'center' }}>
            <StackDigitalInput.Screen name='Digital Input Main' component={DigitalInputMainScreen} options={{ headerTitle: "Digital Input" }} />
            <StackDigitalInput.Screen name='Digital Input Function' component={DigitalInputFunctionScreen} />

        </StackDigitalInput.Navigator>

    );
}

export default DigitalInputScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center", // 
        padding: 0,
        // marginTop: StatusBar.currentHeight || 0,
        paddingTop: 0,
    },
    item: {
        backgroundColor: '#ffffff',
        padding: 8,
        flexDirection: 'column',
        paddingTop: 0,
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,

    },
    basicText: { color: "#000", textAlign: "center" },
    title: {
        fontSize: 15,
        color: 'black',
    },
    picker: {
        // flex: 1,
        backgroundColor:'#D8D8D8',
        alignItems: "center",
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'column',
    },
    buttonBar: {
        alignItems: "center",
        backgroundColor: "#9A348E",
        padding: 8,
        marginRight: 3,
        borderRadius: 10,
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
    pickerText: {
        backgroundColor: '#ffffff',
        padding: 8,
        paddingLeft:25,
        paddingRight:25,

        marginVertical: 0,
        marginHorizontal: 0,
        flexDirection: 'column',

        justifyContent: 'center'
    },
    myText: {
        color: 'black',
        fontSize: 25,
        textAlign: 'center'
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    container1: {
        justifyContent: "center", // 
        padding: 0,
        flexDirection: "column",
        // marginTop: StatusBar.currentHeight || 0,
        paddingTop: 0,
    },
    // picker: {
    //     flex: 1,
    //     alignItems: "center",
    //     borderBottomColor: 'black',
    //     borderBottomWidth: StyleSheet.hairlineWidth,
    //     flexDirection: 'column',
    //     backgroundColor:'white'

    //   },
    containerSlider: {
        flex: 1,
        marginLeft: 30,
        marginRight: 30,
        alignItems: 'stretch',
        justifyContent: "flex-start",
    },
});


