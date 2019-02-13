import { createStore, combineReducers} from 'redux';
import userReducer from './Reducers/usersReducer';
import ideaReducer from './Reducers/ideasReducer';
import cityReducer from './Reducers/cityReducer';
import pagReducer from './Reducers/pagIdeaReducer';
import teamReducer from './Reducers/teamReducer';
import movDtaReducer from './Reducers/movDtaReducer';
import  showTeamReducer from './Reducers/showTeamReducer';

const store = () => {
    const tempStore = createStore(
        combineReducers({
            user: userReducer,
            viewIdea: pagReducer,
            viewAdd: ideaReducer,
            city: cityReducer,
            team:teamReducer,
            teamShow:showTeamReducer,
            movNom:movDtaReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return tempStore;
}

export default store;