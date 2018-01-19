import React from 'react';
import './styles/index.css';
import App from './components/app/App';
import loginComp from "./components/login/Login"
import todoAPP from "./reducers/index";
import { createStore, applyMiddleware } from 'redux';
import {Provider} from "react-redux";
import { render } from 'react-dom'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import Shop from "./containers/shop/shop"
import {getAllProducts} from "./actions/shop/index"
import LoginControl from "./components/test/LoginControl"
import FilterableProductTable from "./components/test/ThinkWithReact"
import Clock from "./components/test/Clock"
import Toggle from "./components/test/Toggle"
import Todo from "./components/test/Todo"
const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const store = createStore(
    todoAPP,
    applyMiddleware(...middleware)
)

store.dispatch(getAllProducts())

//provider作业是让容器组件拿到state
render(
    <Provider store={store}>
        <Router >
            <div>
                <Route exact path="/" component={loginComp} />
                <Route path="/show" component={App}/>
                <Route path="/shop" component={Shop}/>
                <Route path="/login" component={LoginControl}/>
                <Route path="/demo" component={FilterableProductTable}/>
                <Route path="/clock" component={Clock} />
                <Route path="/toggle" component={Toggle} />
                <Route path="/todo" component={Todo} />
            </div>
        </Router>

    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
