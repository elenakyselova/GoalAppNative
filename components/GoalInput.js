import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Image} from "react-native";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
      }
    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
          <View style={style.inputContainer}>
            <Image style={style.image} source={require('../assets/images/goal.png')} />
            <TextInput 
                style={style.textInput} 
                placeholder='Your course goal!' 
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <View style={style.buttonContainer}>
                <View style={style.button}>
                    <Button title='Add Goal' onPress={addGoalHandler} color="#B288F2"/>
                </View>
                <View style={style.button}>
                     <Button title="Cancel" onPress={props.onCancel} color="#f31282"/>
                 </View>
            </View>
          </View>
        </Modal>
    );  
}

export default GoalInput;

const style = StyleSheet.create({
    inputContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#3F3766'
       },
    image: {
        width:100,
        height:100,
        margin: 20
    },   

    textInput:{
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color:'#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16
       },
    buttonContainer:{
        marginTop: 16,
        flexDirection:'row',
    },
    button: {
        width: '30%',
        marginHorizontal: 8
    }
});