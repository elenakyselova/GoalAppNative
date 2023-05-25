import { StyleSheet, View, Text, Pressable } from "react-native";


function GoalItem(props) {
    return (
         <View style={style.goalItem}>
                <Pressable 
                android_ripple={{color: '#008080'}}
                onPress={props. onDeleteItem.bind(this, props.id)}
                style={({pressed}) => pressed && style.pressedItem}>
                 <Text style={style.goalText}>{props.text}</Text>
                </Pressable>
         </View>
    );
};

export default GoalItem;

const style = StyleSheet.create({
    goalItem:{
        margin: 8,
        borderRadius: 10,
        backgroundColor: '#4682B4'
       },
       pressedItem: {
        opacity: 0.5
       },
       goalText: {
        color: 'white',
        padding: 8,
       },

});
