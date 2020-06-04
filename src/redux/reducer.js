import {DECREASE, INCREASE, CLEAR_CART, GET_AMOUNT, GET_TOTALS, REMOVE} from "./actions";

function reducer(state, action) {

   switch(action.type) {
       case CLEAR_CART:
           return {...state, cart: []}
       case DECREASE:
           let temCart = []
           if (action.payload.amount === 1) {
               temCart =  state.cart.filter(item => item.id !== action.payload.id);
           } else {
                temCart = state.cart.map(item => {
                   if (item.id === action.payload.id) {
                       item = {...item, amount: item.amount - 1}
                   }

                   return item
               })
           }

           return {...state, cart: temCart}
       case INCREASE:
           let tempCart = state.cart.map(item => {
               if (item.id === action.payload.id) {
                   item = {...item, amount: item.amount + 1}
               }

               return item
           })
           return {...state, cart: tempCart}
       case REMOVE:
           return {...state, cart: state.cart.filter(item => item.id !== action.payload.id)}
       default:
           return state;
   }
}

export default reducer
