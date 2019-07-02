import React, { useGlobal } from 'reactn'
import { toggleCompleteness } from '../helpers/todos';

const VisibleTodoList = () => {
  const [ filteredTodos ] = useGlobal('filteredTodos');
  return (
    <div>
        <ul>
        {
            filteredTodos.map(todo => {
                let decoration = todo.status === 'complete' ? { textDecoration: "line-through" } : { textDecoration: "none" }
                return(
                    <li style={decoration} onClick={() => toggleCompleteness(todo.id)} key={todo.id}>{todo.todo}</li>
                )
            })
        }
        </ul>
    </div>
  )
}

export default VisibleTodoList;