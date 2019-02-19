export const actionTypesNom = {

    envNom:"@ENV-->NOM"

}


const reducer = (state =[] ,action) => {


    switch (action.type) {

        case actionTypesNom.envNom:
            console.log('reducer'+ action.id)
            state =action.id

            return [ state]


        default:
            return state;
    }
}

export default reducer;