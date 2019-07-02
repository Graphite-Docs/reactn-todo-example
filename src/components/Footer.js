import React from 'reactn'
import { todoFilter } from '../helpers/todos.js';

const Footer = () => {
    return (
        <div>
      <span>Show: </span>
      <button onClick={() => todoFilter('all')}>
          All
      </button>
      <button onClick={() => todoFilter('active')}>
        Active
      </button>
      <button onClick={() => todoFilter('complete')}>
        Completed
      </button>
     </div>
    )
}
  
export default Footer