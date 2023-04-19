import React, { useState } from 'react';
import { Button, Overlay, Icon , Input} from '@rneui/themed';
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { useDispatch } from 'react-redux';
import {addition, updation, deletion} from '../actions/index';
import uuid from "react-native-uuid"
// type TaskFormProps = {};

const TaskForm = () => {
const [visible, setVisible] = useState(false);
const [date, setDate] = useState('');
const [input, setInput] = useState({});

const dispatch = useDispatch();

const toggleOverlay = () => {
  setVisible(!visible);
};

console.log('input : ', input);

return (
  <View>
    <Button
      title="ADD TASK"
      onPress={toggleOverlay}
      style={styles.button}
    />
   
    <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
    <View style={styles.form}> 
    <Input
      type ="text"
      placeholder='Title'
      // value={input}
      onChangeText={(value) => setInput({ ...input, title: value })}
      // onChange={(e)=>setInput(e.target.value)}
    />
    <Input
      type ="text"
      placeholder='Description'
      // value={input}
      onChangeText={(value) => setInput({ ...input, description: value })}
      // onChange={(e)=>setInput(e.target.value)}
    />

<DatePicker
        style={{width: 200}}
        date={date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2022-12-01"
        maxDate="2050-12-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {
          setDate(date);
        }}
      />
          
          {/* <TouchableOpacity onPress={toggleOverlay}>
                <Text>Add Task</Text> 
              </TouchableOpacity> */}
      <Button style={styles.btn}
        title="Add Task"
        // onPress={toggleOverlay}
        onPress={()=>{dispatch(addition({...input,id:uuid.v4()})),
          toggleOverlay(),
          setInput('')}}
        
      />
      </View>
    </Overlay>
    </View>
  
);
};

const styles = StyleSheet.create({
button: {
  margin: 10,
},
textPrimary: {
  marginVertical: 20,
  textAlign: 'center',
  fontSize: 20,
},
textSecondary: {
  marginBottom: 10,
  textAlign: 'center',
  fontSize: 17,
},
form:{
  width:250,
  height:240,
},
btn :{
  marginTop:10,
  width:100,
  marginLeft:70,
},
datePickerStyle: {
  width: 200,
  marginTop: 20,
},
title_btn:{
  width:30,
},
});

export default TaskForm;