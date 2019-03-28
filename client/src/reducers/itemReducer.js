import uuid from 'uuid';
import { GET_ITEMS,ADD_ITEMS,DEL_ITEMS } from '../actions/Types';

const initialState = {
  items: [
    {
      id: uuid(),
      name: 'Eggs'
    },
    {
      id: uuid(),
      name: 'Milk'
    },
    {
      id: uuid(),
      name: 'Water'
    },
    {
      id: uuid(),
      name: 'Candy'
    }
  ]
}

export default function(state = initialState, action){
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state
      }
    case DEL_ITEMS:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      }
   case ADD_ITEMS:
      return {
        ...state,
        items: [
          ...state.items,
          action.payload
        ]
      }
    default:
      return state;

  }
}
