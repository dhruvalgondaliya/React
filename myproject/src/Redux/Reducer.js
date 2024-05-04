const initialValue = {
    counter: 0
}

const Reducer = (state = initialValue, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                counter: state.counter + action.payload
            }

        case 'DECREMENT':
            return {
                counter: state.counter - action.payload
            }

        default:
            return state;
    }
}

export default Reducer;
