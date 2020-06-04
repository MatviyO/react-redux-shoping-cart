import {DECREASE, INCREASE, CLEAR_CART, GET_AMOUNT, GET_TOTAL, REMOVE} from "./actions";

function reducer(state, action) {
   
   switch(action.type) {
       case CLEAR_CART:
           return {...state, cart: []}
       case DECREASE:
           return console.log()
       case INCREASE:
           return console.log()
       case REMOVE:
           return {...state, cart: state.cart.filter(item => item.id !== action.payload.id)}
       default:
           return state;
   }
}

export default reducer
