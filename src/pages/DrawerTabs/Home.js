import React from 'react';
import { StyleSheet,View ,Text , TouchableHighlight,Button} from 'react-native';
import TaskForm from '../../ui/TaskForm';
import { NativeBaseProvider, Checkbox, Box, Pressable, Heading, ScrollView, Icon, HStack, VStack, Spacer, Center} from 'native-base';
import { useSelector,useDispatch } from 'react-redux';
import { MaterialIcons, Ionicons, Entypo } from '@expo/vector-icons';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useEffect, useState } from "react";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import {  deletion, toggleTask } from "../../actions/index";


const formatDate = (date) => {
  return moment(date).format("DD MMMM yyyy");
};

function Example() {
  const [mode, setMode] = useState("Basic");
  return (

    <Center h="full">
      <Box
        _dark={{
          bg: "coolGray.800",
        }}
        _light={{
          bg: "white",
        }}
        flex="1"
        safeAreaTop
        maxW="400px"
        w="100%"
      >
        <Heading p="4" pb="3" size="lg" style={Styles.head}>
          Task List
        </Heading>
        <View style={Styles.items}>
           <TaskForm/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Basic />
        </ScrollView>
      </Box>
    </Center>
  );
}

function Basic() {
  
  const List = useSelector((state)=>state.Reducer.list);
  console.log("list : ", List);
  const navigation = useNavigation();
  const dispatch = useDispatch();


  const [dataList, setDataList] = useState(List);

  console.log('data list : ', dataList);

  useEffect(() => {
    console.log("Tasks updated", List);
    setDataList(List);
  }, [List]);

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...dataList];
    const prevIndex = dataList.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setDataList(newData);
  };

  const onRowDidOpen = (rowKey) => {
    console.log("This row opened", rowKey);
  };

  const handleCheckToggle = (id) => {
    dispatch(toggleTask(id));
  };

  const onRemove = (id) => {
    dispatch(deletion({id}));
  };


  const renderItem = ({ item, index }) => (
    <Box>
      <Pressable
        onPress={() => console.log("You touched me")}
        _dark={{
          bg: "coolGray.800",
        }}
        _light={{
          bg: "white",
        }}
      >
        <Box pl="4" pr="5" py="2">
          <HStack alignItems="center" space={3}>
            
            <VStack w="55%">
              <Text style={Styles.title}>
                {item.title}
              </Text>
              <Text>
                {item.description}
              </Text>
              <Text
                fontSize="xs"
                color="coolGray.800"
                _dark={{
                  color: "warmGray.50",
                }}
                alignSelf="flex-start"
              >
                {formatDate(item.date)}
              </Text>
            </VStack>
            <Spacer />
            <Checkbox
              defaultIsChecked={item.completed}
              onChange={() => handleCheckToggle(item.id)}
            >
            </Checkbox>
          </HStack>
        </Box>
      </Pressable>
    </Box>
  );

  const renderHiddenItem = (data, rowMap) => {
    console.log('data : ', data);
    return (
  <HStack flex="1" pl="2">
  <Pressable w="70" ml="auto" cursor="pointer" bg="coolGray.200" justifyContent="center" _pressed={{
  opacity: 0.5}}
  onPress={() => {
    navigation.navigate("EditTask", { list: data.item });
  
}}>
    <VStack alignItems="center" space={2}>
      <Icon as={<MaterialIcons name="edit" />} size="xs" color="coolGray.800" />
      <Text fontSize="xs" fontWeight="medium" color="coolGray.800"
     
      >
        Edit
      </Text>
    </VStack>
  </Pressable>
  <Pressable w="70" cursor="pointer" bg="red.500" justifyContent="center" onPress={() => onRemove(data.item.id)} _pressed={{
  opacity: 0.5
}}>
    <VStack alignItems="center" space={2}>
      <Icon as={<MaterialIcons name="delete" />} color="white" size="xs" />
      <Text color="white" fontSize="xs" fontWeight="medium"
        onPress={() => {
            onRemove(data.item.id)  
        }}
      >
        Delete
      </Text>
    </VStack>
  </Pressable>
</HStack>
 )};


  return (
    <Box bg="white" safeArea flex="1">
      <SwipeListView
        data={dataList}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-130}
        previewRowKey={"0"}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onRowDidOpen={onRowDidOpen}
      />
    </Box>
  );
}

const Home = ({status}) => {
    return ( 
      <NativeBaseProvider>
      <Example/>
      </NativeBaseProvider>
);
 }

const Styles = StyleSheet.create({
    container: {
 flex: 1, 
 alignItems: 'center',
 marginTop: 50,
   },
   row:{
    fontSize:30,
    fontWeight:'bold'
   },
   title:{
    color:"black",
    fontWeight:'bold',
    fontSize:23
   },
   head:{
    marginLeft:130
   }
})

export default Home;