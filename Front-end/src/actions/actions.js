import {actionTypes} from '../Redux/Reducers/cityReducer'
import {actionTypesIdeas} from '../Redux/Reducers/ideasReducer'
import {actionTypesUser} from "../Redux/Reducers/usersReducer";
import {actionTypesIdeasPages} from "../Redux/Reducers/pagIdeaReducer";
import {actionTypesTeam} from "../Redux/Reducers/teamReducer";
import {actionTypesNom} from "../Redux/Reducers/movDtaReducer";
import {actionTypesTeamShow} from "../Redux/Reducers/showTeamReducer";


export const tareaSi = (stado) => {
    return {
        type: actionTypesUser.addUser,
        data:{

            stado
        }



    }
}
export const deleteUser= (id) => {
    return {
        type: actionTypesUser.deleteUser,
        id



    }
}
export const addCity = (stado) => {
    return {
        type: actionTypes.addCity,
        data:{
            stado
        }



    }
}

export const viewIdeass = (stado) => {
    return {
        type: actionTypesIdeasPages.viewIdea,
        data: stado




    }
}

export const viewAdd = (stado) => {
    return {
        type: actionTypesIdeas.viewAdd,
        data: stado




    }
}

export const addTeam = (stado, id) => {
    return {
        type: actionTypesTeam.addTeam,
        stado,id




    }
}
export const deleteCity =(id) => {
    return {
        type: actionTypes.deleteCity,
        id



    }
}
export const modCity =(id,nom,indx) => {
    return {
        type: actionTypes.modCity,
        data: {id,nom,indx}



    }
}

export const createCity =(data) => {
    return {
        type: actionTypes.createCity,
        data



    }
}

export const movNom=(data) => {
    return {
        type: actionTypesNom.envNom,
        data



    }
}
export const modTeam=(name,user1,user2,id) => {
    return {
        type: actionTypesTeam.modTeam,
        data:{
            name,
            user1,
            user2,
            id}



    }
}

export const showTeam=(data) => {
    return {
        type: actionTypesTeamShow.showTeam,
        data



    }
}

export const modTar=(stado,id) => {
    return {
        type: actionTypesTeam.addTeam,
        stado,id


    }
}









