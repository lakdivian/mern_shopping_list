import { GET_ITEMS,ADD_ITEMS,DEL_ITEMS,ITEMS_LOADING } from '../actions/Types';

const initialState = {
  items: [],
  loading: false
}

export default function(state = initialState, action){
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
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
        ],
        loading: false
      }
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;

  }
}
