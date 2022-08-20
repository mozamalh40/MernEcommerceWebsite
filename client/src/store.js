import { createStore ,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productReducer,productDetailsReducer, newReviewReducer, newProductReducer, productsReducer, productReviewsReducer, reviewReducer } from './reducers/productReducer'
import { allUsersReducer, forgotPasswordReducer, profileReducer, userDetailsReducer, userReducer } from './reducers/userReducer'
import {cartReducer} from './reducers/cartReducer'
import { myOrdersReducer, newOrderReducer, orderDetailsReducer } from './reducers/orderReducer'
import { allOrdersReducer, orderReducer } from './actions/orderAction'
import { favouriteReducer } from "./reducers/FavouriteReducer";
import { categoryDetailsReducer, CategoryReducer, categorysReducer, newCategoryReducer } from './reducers/categoryReducer'

const reducer=combineReducers({
products:productsReducer,
productDetails:productDetailsReducer,   
user:userReducer,
profile:profileReducer,
forgotPassword:forgotPasswordReducer,
cart:cartReducer,
favourite:favouriteReducer,
newOrder:newOrderReducer,
myOrders:myOrdersReducer,
orderDetails:orderDetailsReducer,
newReview:newReviewReducer,
newProduct:newProductReducer,
product:productReducer,
allOrders:allOrdersReducer,
order:orderReducer,
allUsers:allUsersReducer,
userDetails:userDetailsReducer,
productReviews:productReviewsReducer,
review:reviewReducer,
categorys:categorysReducer,
categoryDetails:categoryDetailsReducer,
Category:CategoryReducer,
newCategory:newCategoryReducer



})
//initialState is empty first but in case of localStorage it will be updated
//ya neacha ya likha haa k agr local storage ma cart ho toh in state cart wali krdena othe wise empty
let initialState={
cart:{
    cartItems:localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    :[],
    shippingInfo:localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("shippingInfo")) : {},
    
  favourite: {
    favouriteItems: localStorage.getItem("favouriteItems")
      ? JSON.parse(localStorage.getItem("favouriteItems"))
      : [],
  },
}
}
const middleware=[thunk]
const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store