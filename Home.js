import React, {useState} from 'react';
import {StatusBar, Button, FlatList, StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';
import {datasource} from './Data';
import Icon from "react-native-vector-icons/FontAwesome6";
import RNPickerSelect from 'react-native-picker-select';

const styles = StyleSheet.create({
    opacityStyle: {
        borderWidth: 0.75,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#F6F6F6',
    },
    textStyle: {
        fontSize: 15,
        margin: 5,
        textAlign: 'center',
    },
    headerElement: {
        flexDirection: "row",
        margin: 5,
        marginTop: 30,
        justifyContent: "center",
    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    button: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    }
});

const Home = ({navigation}) => {

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity style={styles.opacityStyle}
                              onPress={()=>
                              {
                                  navigation.navigate("Edit", {key:item.food});
                              }
                              }
            >
                <Text style={styles.textStyle}>
                    {item.food} - {item.calories} calories</Text>
            </TouchableOpacity>
        );
    };

    const [gender, setGender] = useState('Select gender');
    return (
        <View style={{backgroundColor:'wheat', display: "flex", flex: 1}}>
            <StatusBar/>

            <View>
                <View style={styles.headerElement}>
                    <Text style={styles.headerText}>
                        Calorie Intake Tracker
                    </Text>
                    <Icon style={{marginLeft: 7}} name={"cookie-bite"} size={25} />
                </View>

                <View styles={{padding:30, paddingBottom: 20, borderWidth: 1, borderColor: "gray"}}>
                    <FlatList
                        data={datasource}
                        renderItem={renderItem}
                    />
                </View>
                {/*<Text>{datasource.length}</Text>, to double check if array is updating*/}
            </View>

            <View style={{backgroundColor:'white', margin: 15, borderColor: "black", borderWidth: 1}}>
                <RNPickerSelect
                    onValueChange={(value) => setGender((value))}
                    items={[
                        { label: 'Male', value: 'Male' },
                        { label: 'Female', value: 'Female' },
                    ]}
                />
            </View>

            <View styles={{justifyContent:"flex-end"}}>
                <Button
                    style={styles.button}
                    title='Add Food'
                    color={"#91754a"}
                    onPress={()=>{navigation.navigate('Add')}}
                />

                <Button
                    style={styles.button}
                    title='Calculate Calories'
                    color={"#91754a"}
                    onPress={()=> {
                        let mymessage = ""
                        // let mymessage2 = ""
                        let calorieTotal = 0
                        let i = 0
                        // for (i; datasource.length; i++) {
                        //     calorieTotal += datasource[i].calories;
                        // }
                        mymessage = "Total calories: " + calorieTotal;
                        // if (gender == 'Male' && calorieTotal < 2000) {
                        //     mymessage2 = "Below the recommended daily intake for males ";
                        // } else (gender == 'Female' && calorieTotal < 1600) {
                        //     mymessage2 = "Below the recommended daily intake for females";
                        // }
                        Alert.alert(mymessage)
                    }}
                />
            </View>
        </View>
    );
};

export default Home;

// i dont know if i have the right approaches.