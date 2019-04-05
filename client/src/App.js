import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList';
import { Provider } from 'react-redux';
import store from './Store';
import ItemModal from './components/ItemModal';
import { loadUser } from './actions/authActions';


class App extends Component {

  componentDidMount() {
      store.dispatch(loadUser());
  }

  render() {
    return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <ItemModal />
        <ShoppingList />
      </div>
    </Provider>
    );
  }
}

export default App;
