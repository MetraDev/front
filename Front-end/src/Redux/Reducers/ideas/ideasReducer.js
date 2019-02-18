import {actionTypesTeam} from "../team/teamReducer";


export const actionTypesIdeas = {

    viewAdd: '@ADD-->VIEW',
    modIdea: '@Mod-->Idea'

}


const reducer = (state = [], action) => {


    switch (action.type) {


        case actionTypesIdeas.viewAdd:
            console.log('las ideas'+ action.data)
            state = action.data
            return [...state]

        case actionTypesIdeas.modIdea:

            console.log('llllll' + action.id + 'ssssssssssssss' + action.stado)

            state = state.map(item => {
                if(item._id === action.id.toString()){
                    item = action.stado
                }
                return item
            });

            return [...state];


        default:
            return state;
    }
}

export default reducer;