import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import categories from './categories';
import tasks from './tasks';

export default combineReducers({
    form: formReducer,
    routing: routerReducer,
    categories,
    tasks
});
