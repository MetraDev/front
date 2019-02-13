import {idea} from '../../idea.json';
const defaultState = idea



export const actionTypesIdeas = {

    viewAdd: '@ADD-->VIEW'

}


const reducer = (state = idea , action) => {


    switch (action.type) {


        case actionTypesIdeas.viewAdd:
            return [...state,action.data]


        default:
            return state;
    }
}

export default reducer;