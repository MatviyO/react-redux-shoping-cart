import {DECREASE, INCREASE, CLEAR_CART, TOGGLE_AMOUNT, GET_TOTALS, REMOVE} from "./actions";

function reducer(state, action) {

   switch(action.type) {
       case GET_TOTALS:
           let {total, amount} = state.cart.reduce((cartTotal, cartItem) => {
               const {price, amount} = cartItem
               const itemTotal = amount * price;

               cartTotal.total += itemTotal
               cartTotal.amount += amount

               return cartTotal

           }, {total: 0, amount: 0})

           total = parseInt(total.toFixed(2));
           return {...state, total, amount}
       case TOGGLE_AMOUNT:
           return
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
