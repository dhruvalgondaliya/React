import  {combineReducers,legacy_createStore as createStore} from 'redux'
import Reducer from './Reducer'
import ToReducer from './ToReducer'

const Reducers = combineReducers({
    
    Reducer : Reducer ,
    ToReducer : ToReducer
})
const store = createStore(Reducers)

export default store;