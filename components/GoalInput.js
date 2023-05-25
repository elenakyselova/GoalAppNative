import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

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
            <TextInput 
                style={style.textInput} 
                placeholder='Your course goal!' 
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <View style={style.buttonContainer}>
                <View style={style.button}>
                    <Button title='Add Goal' onPress={addGoalHandler}/>
                </View>
                <View style={style.button}>
                     <Button title="Cancel" onPress={props.onCancel}/>
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
        marginBottom: 24,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E6E6FA'
       },
    textInput:{
        borderWidth: 1,
        borderColor: '#E6E6FA',
        width: '100%',
        padding: 8
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