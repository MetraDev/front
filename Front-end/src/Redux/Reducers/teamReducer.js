
const defaultState = []

export const actionTypesTeam = {

    addTeam: '@ADD-->TEAM',
    modTeam: '@MOD-->TEAM',
    modTar: '@MOD-->TAR',
}


const reducer = (state =defaultState, action) => {

    switch (action.type) {

        case actionTypesTeam.addTeam:

            state = action.data.map(ind =>{
                return ind;
            })

            return [...state]

        case actionTypesTeam.modTeam:

            state = state.filter( item => {if (item._id === action.data.id){
                item.cityId= action.data.name
                    item.users[0].id= action.data.user1
                    item.users[1].id= action.data.user2
            }
            return item._id})
            return[...state]

        case actionTypesTeam.modTar:

            console.log('llllll' + action.id + 'ssssssssssssss' + action.stado)
            state = state.map(ind =>{if(ind._id === action.id){
                ind = action.stado

            } return ind})
            return [state]



        default:
            return state;
    }
}

export default reducer