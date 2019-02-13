import React from 'react';
import { connect } from 'react-redux';
import FormIdea from "../components/FormIdea";

const ideapag =()=>{

    return(
        <div>
            <FormIdea/>
        </div>)
}
export default connect()(ideapag);

