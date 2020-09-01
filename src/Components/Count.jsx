import React from 'react';
import { connect } from 'react-redux'

const Count = (props) => {
    console.log(props.name)
    return (
        <div>
            <h3>Count : {props.count}</h3>
            { props.name ? <div>true</div> : <div>false</div> }
        </div>
    );
};

function mapStateToProps(state) {
    return {
        count : state.count,
        name : state.name
    }
}

export default connect(mapStateToProps)(Count);