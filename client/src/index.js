import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index.js';
import {Provider} from 'react-redux';


function configureStore(initialState){
	return createStore(rootReducer,initialState,applyMiddleware(thunk));
}
const store = configureStore();


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
