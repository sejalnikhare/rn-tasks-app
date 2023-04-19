import uuid from "react-native-uuid";

export const addition= (data) =>{
    const newData = {
        data: {  
            ...data
        }
    }
    return{
        type:"ADD",
        payload:{
            ...newData
            }
    }
}

export const deletion = (id) => ({
    type: "DELETE",
    payload: {
        id,
      },
  });
  
export const toggleTask = (id) => ({
    type: "TOGGLE_TASK",
    payload: {
      id,
    },
  });
  
export const updation = (id,task) => ({
    type: "UPDATE",
    payload: {
      task,
      id,
    },
  });