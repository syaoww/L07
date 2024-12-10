import React, {useState} from 'react'
import {datasource} from "./Data";
import {TextInput, View, Text, Button} from "react-native";

const Add = ({navigation}) => {
    const [food, setFood] = useState('');
    const [calories, setCalories] = useState(0);
    return (
        <View style={{padding: 10}}>
            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold'}}>Food Name:</Text>
                <TextInput style={{borderWidth: 1}} onChangeText= {(text)=> setFood(text)} value={food}/>
            </View>

            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold'}}>Calories:</Text>
                <TextInput style={{borderWidth: 1}} onChangeText= {(text)=> setCalories(text)} value={calories}/>
            </View>

            <Button title="SUBMIT"
                    color={"#91754a"}
                    onPress={()=> {
                        let item = {food: food, calories: calories};
                        datasource.push(item)
                        navigation.navigate("Home");
                    }
                    }
            />
        </View>
    );
};
export default Add;