import React from 'reactn'
import { addTodo } from '../helpers/todos';

const AddTodo = () => {

  return (
    <div>
      <form onSubmit={(e) => addTodo(e)}>
        <input id='todo-input' />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default AddTodo;