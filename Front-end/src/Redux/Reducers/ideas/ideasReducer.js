




export const actionTypesIdeas = {

    viewAdd: '@ADD-->VIEW'

}


const reducer = (state = [], action) => {


    switch (action.type) {


        case actionTypesIdeas.viewAdd:
            console.log('las ideas'+ action.data)
            state = action.data.map(ind =>{
                return ind;
            })
            return [...state]


        default:
            return state;
    }
}

export default reducer;