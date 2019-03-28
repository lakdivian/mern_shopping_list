import { GET_ITEMS,ADD_ITEMS,DEL_ITEMS } from './Types';

export const getItems = () => {
  return {
    type: GET_ITEMS
  }
}

export const deleteItem = (id) => {
  return {
    type: DEL_ITEMS,
    payload: id
  }
}

export const addItem = (item) => {
  return {
    type: ADD_ITEMS,
    payload: item
  }
}
