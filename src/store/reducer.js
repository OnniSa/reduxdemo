const initialState = {
    counter:0
}

const reducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
            case 'INCREMENT':
                return {...state, counter: state.counter +1};
            case 'DECREMENT':
                return {...state, counter: state.counter -1};
            case 'ADD':
                return {...state, counter: state.counter + action.value};
            case 'REMOVE':
                return {...state, counter: state.counter - action.value};
        }
        return state;
    }


// const reducer = (state = initialState, action) => {
//     if (action.type === 'INCREMENT') {
//         return {
//             ...state,
//             counter: state.counter + action.value
//         }
//     }
//     if (action.type === 'DECREMENT') {
//         return {
//             ...state,
//             counter: state.counter - action.value
//         }
//     }
//     if (action.type === 'ADD') {
//         return {
//             ...state,
//             counter: state.counter + action.value
//         }
//     }
//     if (action.type === 'REMOVE') {
//         return {
//             ...state,
//             counter: state.counter - action.value
//         }
//     }

//     return state;
// }

export default reducer;