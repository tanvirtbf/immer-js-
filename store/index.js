import { combineReducers, createStore } from 'redux'
import productsReducer from './slices/productsSlice'
import cartReducer from './slices/cartSlice'
import wishListReducer from './slices/wishListSlice'
import { produce } from 'immer'

const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
})

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
)

const users = [
  {
    name: 'Tanvir',
    age: 25,
  },
  {
    name: 'Sadia',
    age: 15,
  },
  {
    name: 'Maymuna',
    age: 16,
  },
  {
    name: 'Humaira',
    age: 17,
  }
]

users[1].age = 20;  
// console.log(users)
const newUsers = users.map((item, i) => {
  if(i==1){
    return {...item, age: 20}
  }
  return item;
})
console.log(newUsers)
console.log(users)

// produce()

