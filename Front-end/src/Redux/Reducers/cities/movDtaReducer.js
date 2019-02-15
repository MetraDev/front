export const actionTypesNom = {

    envNom:"@ENV-->NOM"

}


const reducer = (state =[] ,action) => {


    switch (action.type) {

        case actionTypesNom.envNom:
            console.log('reducer'+ action.id)


            return [ action.id]


        default:
            return state;
    }
}

export default reducer;