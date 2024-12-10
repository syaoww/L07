import React, {useState} from 'react'
import {datasource} from "./Data";
import {TextInput, View, Text, Button, Alert} from "react-native";

const Edit = ({navigation, route}) => {
    const [food, setFood] = useState(route.params.food);
    const [calories, setCalories] = useState('');
    return (
        <View style={{padding: 10}}>
            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold'}}>Food Name: {route.params.food}</Text>
                <TextInput value={food} style={{borderWidth: 1}}
                           onChangeText= {(text)=> setFood(text)}/>
            </View>

            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold'}}>Calories:</Text>
                <TextInput value={calories} style={{borderWidth: 1}}
                           onChangeText= {(text)=> setCalories(text)}/>
            </View>

            <View style={{padding: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flex:1, margin: 10}}>
                    <Button title="SAVE"
                            color={"#91754a"}
                            onPress={()=> {
                                let item = {food, calories};
                                datasource.keyExtractor = (item) => item.id;
                                item.id = {setFood, setCalories};
                                // let i = 0 , dont know how to get this to update
                                navigation.navigate("Home");
                            }
                            }
                    />
                </View>
                <View style={{flex:1, margin: 10}}>
                    <Button title="DELETE"
                            color={"#91754a"}
                            onPress={()=> {
                                Alert.alert("Are you sure?", '',
                                    [{text: 'Yes', onPress:()=>{
                                            datasource.splice(route.params.food, 1);
                                            navigation.navigate("Home");
                                        }},
                                        {text: 'No'}])
                            }
                            }
                    />
                </View>
            </View>
        </View>
    );
};

export default Edit;
