import React from 'react';
import Tarjeta from "../components/Tarjeta";
import { connect } from 'react-redux';

const cities =()=>{

    return(
    <div>
    <Tarjeta/>
    </div>)
}
export default connect()(cities);

