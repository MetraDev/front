import React from 'react';
import { connect } from 'react-redux';
import CreateIdea from "../../components/Idea/CreateIdea";

const createIdea =()=>{

    return(
        <div>
            <CreateIdea/>
        </div>)
}
export default connect()(createIdea);

