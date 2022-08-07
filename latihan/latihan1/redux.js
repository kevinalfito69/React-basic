const redux = require('redux');
const toolkit = require('@reduxjs/toolkit');
const createStore = redux.createStore;
initialState = {
    count: 0,
    name: '',
    age: 0,
}
//reducer
const reducerRoot = (state = initialState,action)=>{
    return state;
}
//store
const store = createStore(reducerRoot);
console.log(store.getState())



//action
//subcription