

export const actionTypes = {
    addCity: '@ADD-->CITY',
    deleteCity:'@DELETE-->CITY',
    modCity:'@MOD-->CITY',
    createCity:'@Create-->CITY'
}

const reducer = (state = [] , action) => {

    switch (action.type) {


        case actionTypes.addCity:

            return [ ...state, action.data.stado];

            case actionTypes.createCity:

                for (let index in action.data){
                    state.push(action.data[index])
                }
            return [ ...state];

            case actionTypes.deleteCity:

                state = state.filter( item =>  {
                return item._id !== action.id});
            return [...state];

            case actionTypes.modCity:

            state = state.filter
            ( item =>
            {item._id === action.data.id?
                item.users[action.data.indx].id = action.data.nom:
                console.log('error')

            return item._id})
            return [...state];


        default:
            return state;
    }
}

export default reducer;