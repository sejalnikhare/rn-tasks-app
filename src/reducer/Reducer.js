const initialData ={
    list : []
}


const Reducer = (state=initialData, action)=>{
    switch(action.type){
        case "ADD" :{

            const { id, data } = action.payload;
            console.log('id : ', id);
            console.log('data : ', data);
            return{
                ...state,
                list:[...state.list,
                    {
                        ...data
                    }
                ]
            }
        }
        case "DELETE" :{

            const { id } = action.payload;
            console.log("id : ", id.id);
            
            const newList = state.list.filter((item)=>item.id != id.id)
            console.log(state.list,"...action pay");
            return{
                ...state,
                list: newList
            }
        }

        case "TOGGLE_TASK": {
                const { id } = action.payload;
                console.log("id : ", id);
          
                const updatedList = state.list.map((item) => {
                  if (item.id === id) {
                    return { ...item, completed: !item.completed };
                  }
                  return item;
                });
                return {
                  list: updatedList,
                };
              }


        case "UPDATE": {
                const { task,id } = action.payload;

                console.log("idUpdate : ", task);
          
                const updatedTasks = state.list.map((item) => {
                    
                  if (item.id === id) {
                    return {...task};
                  }
                  return item;
                });     
                return {
                  list: updatedTasks,
                };
              }

        default: return state;
    }
}
export default Reducer;