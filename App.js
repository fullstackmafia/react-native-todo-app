import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Task from './components/Tasks';


export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }
  return (
    <SafeAreaProvider>
    <ScrollView>
    <View style={styles.container}>
    <View style={styles.taskWrapper}>
    <SafeAreaView>
      <Text style={ styles.sectionTitle}>Today's Tasks  </Text>
    </SafeAreaView>
  

      <View style={styles.items}>
      {/* This is where the tasks will go   */}

      {
        taskItems.map((item, index) => {
          return(
            <TouchableOpacity onPress={() => completeTask(index)} >
<Task key={index} text={item} />
            </TouchableOpacity>
          )  
        })
      }
      
      </View>
    </View>

    {/* Write a task*/}
<SafeAreaView>
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
    </KeyboardAvoidingView>
  </SafeAreaView>
    </View>
    </ScrollView>
    </SafeAreaProvider>
   
  );
}

const styles = StyleSheet.create({

  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    marginBottom: 100,
    // height: '100%'

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold"
  },
  items: {
    marginTop: 30,

  },
  container: {
    flex: 1
  },
  writeTaskWrapper: {
    marginTop: 0,
    // position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250
    // marginBottom: 300

  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: 'FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1
  },
  addText: {

  }

});
