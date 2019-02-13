import React from 'react';
import Tarjeta from "../components/Tarjeta";
import { connect } from 'react-redux';
import Team from "../components/Team";

const team =()=>{

    return(
        <div>
            <Team/>
        </div>)
}
export default connect()(team);

