import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import cartItems from "./cart-items";
import {createStore} from "redux";
import reducer from "./redux/reducer";
import {Provider} from 'react-redux'

const initialStore = {
    cart: cartItems,
    amount: 15,
    total: 1000

};

const store = createStore(reducer, initialStore);

function App() {
    return (
        <Provider store={store}>
            <Navbar/>
            <CartContainer />
        </Provider>
    );
}

export default App;
