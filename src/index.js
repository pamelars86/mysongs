// 3erd libs
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // is a component!
import { createStore } from 'redux'; // this receives a set of reducers and returned back to us

// my own code
import App from './components/App';
import reducers from './reducers';

// Now, any component inside of our application can get access to that redux store
// through the provider tag.

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>, 
    document.querySelector('#root')
);