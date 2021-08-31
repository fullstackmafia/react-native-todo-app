import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Task = (props) => {
  return (
    <SafeAreaView>
    <View style={styles.item}>
      <View style={styles.itemLeft}>
      <TouchableOpacity style={styles.square}></TouchableOpacity>

      </View>
      <Text style={styles.itemText}>{props.text}</Text>
      <View style={styles.circular}></View>
    </View>
    </SafeAreaView>
  )
} 

const styles = StyleSheet.create({
  item:  {
    backgroundColor: 'FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  itemLeft: {
    flexDirection: 'row', 
    alignItems: 'center',
    flexWrap: 'center'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15, 

  }, 
  itemText: {
    maxWidth: '80%'
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  }
})

export default Task