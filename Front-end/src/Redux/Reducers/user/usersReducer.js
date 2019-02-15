import {actionTypes} from "../cities/cityReducer";


export const actionTypesUser = {
    addUser: '@ADD-->USER',
    deleteUser:'@DELETE-->USER',
    createUser: '@Create-->USER',

}





const reducer = (state = [] , action) => {


    switch (action.type) {
        case actionTypesUser.addUser:
            console.log('llllll' + action.id + 'ssssssssssssss' + action.state)

            state = state.map(item => {
                if(item._id === action.id){
                    item = action.state
                }
                return item
            });

            return [...state];


        case actionTypesUser.createUser:
            console.log('ihoinobobnobojn'+action.data);
            for (let index in action.data){
                state.push(action.data[index])
            }
            return [ ...state];


        case actionTypesUser.deleteUser:
            console.log('ihoinobobnobojn'+action.id);

            state = state.filter( item =>  {
                return item._id !== action.id});
            return [...state];


        default:
            return state;
    }
}

export default reducer;