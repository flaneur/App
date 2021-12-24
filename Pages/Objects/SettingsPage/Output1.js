import React, {useEffect} from 'react'
import { StyleSheet, Text, View, Button, SafeAreaView, FlatList, StatusBar, TouchableOpacity } from 'react-native'
import Paramsfiltered from '../../Objects/Paramsfiltered.json';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-paper';
import Values from '../Paramsfiltered.json';
import LenghtChecker from '../../../Navigation/Functions/Utililty';
import react from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

let Output1Params = Paramsfiltered.find(Output1Params => Output1Params.Tag === "Output1");
let MenuParams = Output1Params.menu;
const StackOutput1 = createStackNavigator();

var filtered = Values.filter(row => row.Tag == 'Output1');
var filteredAT = filtered.filter(row => row.Tag == 'Switch Output');


const Output1Screen = ({ route, navigation }) => {

  const CheckButtoned = (selectedValue, sentValue) => {
    if (selectedValue === sentValue) {
      return (

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
    else {
      return (
        <View style={{ flexDirection: "row" }}>
          <Text>{sentValue}</Text>
        </View>
      )
    }
  }
  
  function Item(title, value) {
    switch (title) {
      case 'Switch Output':
        return (
          <TouchableOpacity style={styles.itemButton} onPress={() => navigation.navigate('Switch Output')}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{value}</Text>
          </TouchableOpacity>
        )
      case 'Current Output':
        return (
          <TouchableOpacity style={styles.itemButton} onPress={() => navigation.navigate('Current Output')}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{value}</Text>
          </TouchableOpacity>
        )
      case 'Conduction Start Value':
        return (
          <TouchableOpacity style={styles.itemButton} onPress={() => navigation.navigate('Current Output Settings', {
            Tag: title,
          })}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{value}</Text>
          </TouchableOpacity>
        )
      case 'Conduction End Value':
        return (
          <TouchableOpacity style={styles.itemButton} onPress={() => navigation.navigate('Current Output Settings', {
            Tag: title,
          })}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{value}</Text>
          </TouchableOpacity>
        )
        case 'Output Type':
          return (
            <TouchableOpacity style={styles.itemButton} onPress={() => navigation.navigate('Output Type', {
              Tag: title,
            })}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.value}>{value}</Text>
            </TouchableOpacity>
          )

      case 'Concentration Start Value':
        return (
          <TouchableOpacity style={styles.itemButton} onPress={() => navigation.navigate('Current Output Settings', {
            Tag: title,
          })}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{value}</Text>
          </TouchableOpacity>
        )
      case 'Concentration End Value':
        return (
          <TouchableOpacity style={styles.itemButton} onPress={() => navigation.navigate('Current Output Settings', {
            Tag: title,
          })}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{value}</Text>
          </TouchableOpacity>
        )
      case 'Output-Assign':
        return (
          <TouchableOpacity style={styles.itemButton} onPress={() => navigation.navigate('Output-Assign', {
            Tag: title,
          })}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{value}</Text>
          </TouchableOpacity>
        )
      case 'Temperature Start Value':
        return (
          <TouchableOpacity style={styles.itemButton} onPress={() => navigation.navigate('Current Output Settings', {
            Tag: title,
          })}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{value}</Text>
          </TouchableOpacity>
        )
      case 'Temperature End Value':
        return (
          <TouchableOpacity style={styles.itemButton} onPress={() => navigation.navigate('Current Output Settings', {
            Tag: title,
          })}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{value}</Text>
          </TouchableOpacity>
        )
      case 'Switch Function':
        return (
          <TouchableOpacity style={styles.itemButton} onPress={() => navigation.navigate('Switch Function', {
            Tag: title,
          })}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{value}</Text>
          </TouchableOpacity>
        )
      case 'Conduction On Value':
        return (
          <TouchableOpacity style={styles.itemButton} onPress={() => navigation.navigate('Switch Output Settings', {
            Tag: title,
          })}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{value}</Text>
          </TouchableOpacity>
        )
      case 'Conduction Off Value':
        return (
          <TouchableOpacity style={styles.itemButton} onPress={() => navigation.navigate('Switch Output Settings', {
            Tag: title,
          })}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{value}</Text>
          </TouchableOpacity>
        )
      case 'Concentration On Value':
        return (
          <TouchableOpacity style={styles.itemButton} onPress={() => navigation.navigate('Switch Output Settings', {
            Tag: title,
          })}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{value}</Text>
          </TouchableOpacity>
        )
      case 'Concentration Off Value':
        return (
          <TouchableOpacity style={styles.itemButton} onPress={() => navigation.navigate('Switch Output Settings', {
            Tag: title,
          })}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{value}</Text>
          </TouchableOpacity>
        )
      case 'Temperature On Value':
        return (
          <TouchableOpacity style={styles.itemButton} onPress={() => navigation.navigate('Switch Output Settings', {
            Tag: title,
          })}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{value}</Text>
          </TouchableOpacity>
        )
      case 'Temperature Off Value':
        return (
          <TouchableOpacity style={styles.itemButton} onPress={() => navigation.navigate('Switch Output Settings', {
            Tag: title,
          })}>
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
  /// Bu Case Functionı Sonrasında Daha Basit Bir Yapıya Çevrilecek
  const renderItem1 = ({ item }) => (
    Item(item.Tag, item.Value)
  );
  // console.log(JSON.stringify(Output1Params));
  // console.log(JSON.stringify(MenuParams));

  const Output1MainScreen = ({ navigation }) => (

    <SafeAreaView style={styles.container}>
      <FlatList
        data={MenuParams}
        renderItem={renderItem}
        keyExtractor={item => item.Tag}
      />
    </SafeAreaView>
  )
  const CurrentOutputScreen = () => {
    const valSystemUnits = Values.filter(row => row.Tag == 'Output1');
    const val = valSystemUnits[0].menu.filter(row => row.Tag == 'Current Output');
    const possibleValues = val[0].menu;


    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={possibleValues}
          renderItem={renderItem1}
          keyExtractor={item => item.Tag}
        />
      </SafeAreaView>
    );
  };
  const CurrentOutputSettingsScreen = ({ route, navigation }) => {
    const {Tag} = route.params
    const filtered = Values.filter(row => row.Tag == 'Output1')[0].menu;
    const filteredSub = filtered.filter(row => row.Tag == 'Current Output')[0].menu;
    const filteredAT = filteredSub.filter(row => row.Tag == Tag);
    const [text, setText] = React.useState(filteredAT[0].Value);
    console.log(route)
    console.log("route")

    return (
      <View>
        <TextInput
          label={"Set " + Tag }
          value={text}
          selectionColor='#000'
          underlineColor='#000'
          activeOutlineColor='#000'
          outlineColor='#000'
          // activeUnderlineColor='#000'
          error={false}
          right={<TextInput.Icon name="close-circle-outline" onPress={text => setText("")} />}
          onChangeText={text => setText(text)}
        />
        {/* <LenghtChecker lenght={32} /> */}

          <Button
          onPress={() => {console.log( typeof(text))}}
          title="Save"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        {/* TODOACTION :: Burada (LenghtChecker )Lenghting çekildği yeri storedan referanslayarak çek*/}
        
      </View>
    );
  }
  const OutputTypeScreen = ({ route, navigation}) =>{
    const {Tag} = route.params
    const valSystemUnits = Values.filter(row => row.Tag == 'Output1');
    const val = valSystemUnits[0].menu.filter(row => row.Tag == Tag);
    const possibleValues = val[0].PossibleValues;
    const [selection, setSelection] = React.useState(val[0].Value);
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
    useEffect(() => {

    if (selection != val[0].Value) {
      navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity >
            <View style={styles.buttonBar}>
              <Text>Save</Text>
            </View>
          </TouchableOpacity>
        ),
      });
    }
    else {
      navigation.setOptions({
        headerRight: () => (
          <></>
        ),
      });
    }
  });
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={possibleValues}
          renderItem={renderItemSelectable}
          keyExtractor={item => item.Tag}
        />
      </SafeAreaView>
    );
  };
  const OutputAssignScreen = ({ route, navigation}) =>{
    const {Tag} = route.params
    const valSystemUnits = Values.filter(row => row.Tag == 'Output1')[0].menu;
    const subTitle = valSystemUnits.filter(row => row.Tag == 'Current Output');
    const val = subTitle[0].menu.filter(row => row.Tag == Tag);
    const possibleValues = val[0].PossibleValues;
    const [selection, setSelection] = React.useState(val[0].Value);
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
    useEffect(() => {
  
    if (selection != val[0].Value) {
      navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity >
            <View style={styles.buttonBar}>
              <Text>Save</Text>
            </View>
          </TouchableOpacity>
        ),
      });
    }
    else {
      navigation.setOptions({
        headerRight: () => (
          <></>
        ),
      });
    }
  });
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={possibleValues}
          renderItem={renderItemSelectable}
          keyExtractor={item => item.Tag}
        />
      </SafeAreaView>
    );
  };
  const SwitchFunctionScreen = ({ route, navigation}) =>{
    const {Tag} = route.params
    const valSystemUnits = Values.filter(row => row.Tag == 'Output1')[0].menu;
    const subTitle = valSystemUnits.filter(row => row.Tag == 'Switch Output');
    const val = subTitle[0].menu.filter(row => row.Tag == Tag);
    const possibleValues = val[0].PossibleValues;
    const [selection, setSelection] = React.useState(val[0].Value);
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
    useEffect(() => {
  
    if (selection != val[0].Value) {
      navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity >
            <View style={styles.buttonBar}>
              <Text>Save</Text>
            </View>
          </TouchableOpacity>
        ),
      });
    }
    else {
      navigation.setOptions({
        headerRight: () => (
          <></>
        ),
      });
    }
  });
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={possibleValues}
          renderItem={renderItemSelectable}
          keyExtractor={item => item.Tag}
        />
      </SafeAreaView>
    );
  };
  
  
  const SwitchOutputSettingsScreen = ({ route, navigation }) => {
    const {Tag} = route.params
    const filtered = Values.filter(row => row.Tag == 'Output1')[0].menu;
    const filteredSub = filtered.filter(row => row.Tag == 'Switch Output')[0].menu;
    const filteredAT = filteredSub.filter(row => row.Tag == Tag);
    const [text, setText] = React.useState(filteredAT[0].Value);
   
    return (
      <View>
        <TextInput
          label={"Set " + Tag }
          value={text}
          selectionColor='#000'
          underlineColor='#000'
          activeOutlineColor='#000'
          outlineColor='#000'
          // activeUnderlineColor='#000'
          error={false}
          right={<TextInput.Icon name="close-circle-outline" onPress={text => setText("")} />}
          onChangeText={text => setText(text)}
        />
        {/* <LenghtChecker lenght={32} /> */}

          <Button
          onPress={() => {console.log( typeof(text))}}
          title="Save"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        {/* TODOACTION :: Burada (LenghtChecker )Lenghting çekildği yeri storedan referanslayarak çek*/}
        
      </View>
    );
  }
  const SwitchOutputScreen = () => {
    const valSystemUnits = Values.filter(row => row.Tag == 'Output1');
    const val = valSystemUnits[0].menu.filter(row => row.Tag == 'Switch Output');
    const possibleValues = val[0].menu;

    console.log(possibleValues)
    console.log(typeof (possibleValues))
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={possibleValues}
          renderItem={renderItem1}
          keyExtractor={item => item.Tag}
        />
      </SafeAreaView>
    );
  };
  const renderItem = ({ item }) => (
    Item(item.Tag, item.Value)
  );

  return (
    <StackOutput1.Navigator screenOptions={{ headerShown: true, headerTitleAlign: 'center' }}>
      <StackOutput1.Screen name='Output1 Main' component={Output1MainScreen} options={{ headerTitle: "Output 1" }} />
      <StackOutput1.Screen name='Switch Output' component={SwitchOutputScreen} />
      <StackOutput1.Screen name='Current Output' component={CurrentOutputScreen} />
      <StackOutput1.Screen name='Current Output Settings' component={CurrentOutputSettingsScreen} />
      <StackOutput1.Screen name='Switch Output Settings' component={SwitchOutputSettingsScreen} />
      <StackOutput1.Screen name='Output Type' component={OutputTypeScreen} />
      <StackOutput1.Screen name='Output-Assign' component={OutputAssignScreen} />
      <StackOutput1.Screen name='Switch Function' component={SwitchFunctionScreen} />

    </StackOutput1.Navigator>

  );
}

export default Output1Screen

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
  
  buttonBar: {
    alignItems: "center",
    backgroundColor: "#9A348E",
    padding: 8,
    marginRight:3,
    borderRadius: 10, 
  },

  myText: {
    color: 'black',
    fontSize: 25,
    textAlign: 'center'
  }
});


