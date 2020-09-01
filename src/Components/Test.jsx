import React from 'react';
import { connect } from 'react-redux'

const Test = (props) => {
    return (
        <div>
            <button
                className="btn btn-info mr-3"
                onClick={() => props.add()} >+ Add</button>

            <button
                className="btn btn-info"
                onClick={() => props.sub()} >- Sub</button>

            {props.name ? <h2>true </h2> : <h2>false</h2>}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        name: state.name,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: () => { dispatch({ type: 'ADD', payload: 5 }) },
        sub: () => { dispatch({ type: 'SUB', payload: 10 }) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);