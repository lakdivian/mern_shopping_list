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

export const deleteItem = (id) => dispatch => {

  dispatch(setItemsLoading());
  axios
      .delete(`/api/items/${id}`)
      .then(response => dispatch({
        type: DEL_ITEMS,
        payload: id
      }))

}

export const addItem = (item) => dispatch => {
  dispatch(setItemsLoading());
  axios
      .post('/api/items',item)
      .then(res => dispatch({
        type: ADD_ITEMS,
        payload: res.data
      }));
}

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
}
