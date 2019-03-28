import { GET_ITEMS,ADD_ITEMS,DEL_ITEMS,ITEMS_LOADING } from './Types';
import axios from 'axios';

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios
      .get('/api/items')
      .then(res => dispatch({
        type: GET_ITEMS,
        payload: res.data
      }));
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

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
}
