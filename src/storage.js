import {createStore} from 'redux';

const  reducer =(state, action)=>{

if(action.type ==='ADD_TO_TARGET'){
    return{
        ...state,
        cart: state.cart.concat(action.obj)
    }

}
    return state;
}
export default createStore(reducer,{cart:[]})