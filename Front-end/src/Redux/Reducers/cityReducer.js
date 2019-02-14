export const actionTypes = {
    addCity: '@ADD-->CITY',
    deleteCity: '@DELETE-->CITY',
    modCity: '@MOD-->CITY',
    addCities: '@ADD_CITIES',
    sendID: '@send-->ID',
}

const reducer = (state = [], action) => {

    switch (action.type) {


        case actionTypes.addCity:
            console.log('llllll' + action.id + 'ssssssssssssss' + action.stado)
            state = state.map(ind => {
                if (ind._id === action.id) {
                    ind = action.stado
                }
                return ind
            })
            return [...state];

        case actionTypes.addCities:
            console.log('el actioon' , action.data);
            return [ ...action.data];

        case actionTypes.deleteCity:

            state = state.filter(item => {
                return item._id !== action.id
            });
            return [...state];

        case actionTypes.modCity:
            state = state.filter
            (item => {
                item._id === action.data.id ?
                    item.users[action.data.indx].id = action.data.nom :
                    console.log('error')

                return item._id
            })
            return [...state];

        case actionTypes.sendID:
            console.log('error redux' + action.id)
            state = action.id
            return [state]


        default:
            return state;
    }
}

export default reducer;