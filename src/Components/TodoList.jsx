import TodoItem from './TodoItem';


function TodoList({ todoList, todoListSet ,removeTodo, inputSet}) {
    return (
        <div className="todo__list todo-list">
            {
                todoList.map(item => <TodoItem key={item.id} id={item.id} title={item.title} completed={item.completed} todoList={todoList} todoListSet={todoListSet}
                    removeTodo={removeTodo} inputSet={inputSet} />)
            }
        </div>
    );
}

export default TodoList;
