import React, { setGlobal } from 'reactn';
import { render } from 'react-dom'
import App from './components/App';

setGlobal({ 
    todos: [],
    filteredTodos: [], 
    filterBy: "all"
});

render(<App />, document.getElementById('root'));
