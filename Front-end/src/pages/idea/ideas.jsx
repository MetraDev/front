import React from 'react';
import TargetIdea from "../../components/Idea/TargetIdea";
import  {Link} from 'react-router-dom'
const ideas =()=>{

    return(
        <div>
            <TargetIdea/>
            <div
            className={'text-right mr-3'}
            ><Link to="/createIdea" className={'bg-primary badge-pill text-light'}> <h3>Add</h3></Link></div>

        </div>)
}
export default ideas;

