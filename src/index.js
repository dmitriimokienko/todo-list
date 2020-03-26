import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles/index.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Route} from 'react-router';
import {ConnectedRouter} from 'react-router-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import reducer from './reducers';
import Home from './pages/Home';
import EditTask from './pages/EditTask';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = createHistory();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/category/:id" component={Home}/>
                <Route path="/task/:id" component={EditTask}/>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
