import { useState } from 'react';
import {FlatList, StyleSheet, View, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
    
  function endAddGoalHandler(){
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text: enteredGoalText, key: Math.random(). toString()},
    ]);
   endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }
 
  return (
     <View style={styles.appContainer}>
      <Button 
         title='Add New Goal'
         color='#4682B4'
         onPress={startAddGoalHandler}
      />
      <GoalInput
      visible={modalIsVisible}
      onAddGoal={addGoalHandler} 
      onCancel={endAddGoalHandler}
      />
       <View style={styles.goalsContainer}>
         <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return ( 
               <GoalItem
               text={itemData.item.text}
               id={itemData.item.id}
               onDeleteItem = {deleteGoalHandler}
               />
               );
            }} 
       alwaysBounceVertical={false}/>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
 appContainer: {
  flex: 1,
  paddingTop: 50,
  paddingHorizontal: 14
 },
 goalsContainer:{
  flex: 5
 },

});
