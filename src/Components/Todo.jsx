import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


function Todo() {

  const [input, inputSet] = useState("");
  const [todoList, todoListSet] = useState([]);

  const removeitem = (id) => {
    todoListSet(() => {
      return (todoList.filter(item => item.id !== id))
    })
  }

  const changeTodoItem = (id, title) => {
    todoListSet(() => {
      todoList.map(item => (item.id === id) ? item.title = title : item)
    })
  }

  return (
    <div className="todo">
      <div className="todo__page">
        <div className="todo__box">
          <div className='todo__header'>Todo List</div>
          <TodoForm input={input} inputSet={inputSet} todoList={todoList} todoListSet={todoListSet} changeTodoItem={changeTodoItem}></TodoForm>
          <TodoList todoList={todoList} todoListSet={todoListSet} inputSet={inputSet} removeTodo={removeitem}></TodoList>
        </div>
      </div>
    </div>
  );
}

export default Todo;
