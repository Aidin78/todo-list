import { useReact } from 'react';

function TodoForm(props) {
    //Variables
    const { input, inputSet, todoList, todoListSet, changeTodoItem } = props;

    //Methods
    //Add Task
    const addTask = (e) => {
        if (input) {
            const addBtn = document.querySelector('#addBtn')
            if (addBtn.classList.contains('edit')) {
                addBtn.classList.remove('edit')
                addBtn.innerHTML = "Add";
                todoListSet(() => {
                    const id = addBtn.getAttribute('data-id');
                    return todoList.map((item) => {
                        if (item.id == id) item.title = input
                        return item;
                    });
                })
                inputSet(() => {
                    return ("")
                })
            }
            else {
                todoListSet(() => {
                    let uniqueId = (todoList[0]) ? todoList[0].id + 1 : 1;
                    return (
                        [{ id: uniqueId, title: input, complete: false }, ...todoList]
                    )
                })

                inputSet(() => {
                    return ("")
                })
            }
        }
    }
    //Change inputValue
    const updateInput = (e) => {
        inputSet(() => e.target.value)
    }
    //Reset
    const clearInput = () => {
        document.querySelector('#task-title').value = "";
    }

    return (
        <div className="todo__form todo-form">
            <input id='task-title' type="text" className="todo-form__input" placeholder='Write down your task' onChange={updateInput} value={input} onKeyDown={(e) => (e.key === 'Enter') ? addTask() : null} />
            <button onClick={addTask} className="todo-form__button" id='addBtn'>Add</button>
        </div>
    );
}

export default TodoForm;
