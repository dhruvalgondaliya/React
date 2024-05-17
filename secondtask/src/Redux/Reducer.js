


const initialvalue = {
    Counter: 0
}
const Reducer = (state = initialvalue, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {

                Counter: state.Counter + action.payload
            }
        case 'DECREMENT':
            return {

                Counter: state.Counter - action.payload
            }
        default:
            return state;
    }
}
export default Reducer;