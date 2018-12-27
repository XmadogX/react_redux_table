import { ADD_ROW, ADD_COLUMN, EDIT_HEAD, EDIT_CELL, DELETE_ROW, DELETE_COLUMN } from "../actionTypes";

const initialState = {
    head:["Number","Name","Theme","Exemple"],
    table:[
        ["№1","First","First Theme","Exemple first"],
        ["№2","Second","Second Theme","Exemple second"],
        ["№3","Three","test2","test2"],
        ["№4","Four","test3","test3"]
    ]
};

  export default function(state = initialState, action) {
    switch (action.type) {
      case ADD_ROW: {
        return{
          ...state,
          table:[...state.table, state.table[0].map((item)=>action.row)]
        }
      }
      case ADD_COLUMN: {
        state.table.map((item)=>item.push(action.column));
        return{
          ...state,
          head:[...state.head, action.column]
        }
      }
      case DELETE_ROW: {
        let obj = {...state}
        if(obj.table.length >1){
          obj.table = obj.table.slice(0,-1)
        }
        return obj
      }
      case DELETE_COLUMN: {
        let obj = {...state}
        obj.head = obj.head.slice(0,-1)
        obj.table = obj.table.map((item)=>item.slice(0,-1));
        return obj
      }
      case EDIT_HEAD: {
        state.head = state.head.map((item,index)=>{
          if(action.number === index){
            return action.value
          }else{
            return item
          }
        });
        return {...state};
      }
      case EDIT_CELL: {
        state.table = state.table.map((item,index)=>{
          if(action.number_row === index){
            return item.map((item,index)=>{
              if(action.number_cell === index){
                return action.value
              }else{
                return item
              }
            })
          }else{
            return item
          }
        });
        return {...state};
      }
      default:
      return state;
    }
}