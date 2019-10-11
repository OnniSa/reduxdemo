import React, { Component } from 'react';
import { connect } from 'react-redux';



class Counter extends Component {
    // state = {
    //     counter: 10
    // }

// counterChangedHandler = ( action, value ) => {
//     // eslint-disable-next-line default-case
//     switch ( action ) {
//         case 'inc':
//         this.setState( (prevState ) => { return { counter: prevState.counter + 1 } } )
//         break;
//         case 'dec':
//         this.setState( (prevState ) => { return { counter: prevState.counter - 1 } } )
//         break;
//         case 'add':
//         this.setState( (prevState ) => { return { counter: prevState.counter + value } } )
//         break;
//         case 'sub':
//         this.setState( (prevState ) => { return { counter: prevState.counter - value } } )
//         break;
//     }
// }


    render () {
        return (
            <div>
                <h1>Your score is: {this.props.ctr} </h1>

                <div>
                    <button onClick={this.props.onIncCounter}>Increment</button>
                    <button onClick={this.props.onDecCounter}>Decrement</button>
                    <button onClick={this.props.addCounter}>Add 5</button>
                    <button onClick={this.props.removeCounter}>Remove 5</button>
                    {/* <button onClick={() => this.counterChangedHandler( 'inc' )}> Add one </button>
                    <button onClick={() => this.counterChangedHandler( 'dec' )}> Remove one </button>
                    <button onClick={() => this.counterChangedHandler( 'add', 5 )}> Add five </button>
                    <button onClick={() => this.counterChangedHandler( 'sub', 5 )}> Remove five </button> */}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncCounter: () => dispatch({type: 'INCREMENT', value: 1}),
        onDecCounter: () => dispatch({type: 'DECREMENT', value: 1}),
        addCounter: () => dispatch({type: 'ADD', value: 5}),
        removeCounter: () => dispatch({type: 'REMOVE', value: 5})
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);