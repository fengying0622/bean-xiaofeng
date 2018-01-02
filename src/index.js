import React from 'react';
import './styles/index.css';
import App from './components/app/App';
import loginComp from "./components/login/Login"
import todoAPP from "./reducers/index";
import { createStore } from 'redux';
import {Provider} from "react-redux";
import { render } from 'react-dom'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route} from 'react-router-dom';

const store = createStore(todoAPP)

//provider作业是让容器组件拿到state
render(
    <Provider store={store}>
        <Router >
            <div>
                <Route path="/" component={loginComp}/>
                <Route path="/show" component={App}/>
            </div>
        </Router>

    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
