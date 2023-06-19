import checkIcon from '../images/check.png';
import pencilIcon from '../images/pencil.png';
import trashIcon from '../images/trash-can.png';


function TodoItem({ id, title, completed, todoList, todoListSet, removeTodo, inputSet }) {

    const activeEditMode = (id, title) => {
        inputSet(() => title);
        const addBtn = document.querySelector('#addBtn');
        addBtn.classList.add('edit');
        addBtn.innerHTML = "Edit";
        addBtn.setAttribute("data-id", id);
    }

    const compeleteTask = (id) => {
        todoListSet(() => {
            return todoList.map((item) => {
                if (item.id == id) item.completed = true;
                return item;
            })
        })
    }


    return (
        <div className={`todo-list__item todo-item ${(completed) ? 'completed' : null} `} data-id={id}>
            <div className="todo-item__title">{title}</div>
            <div className="todo-item__buttons">
                <button className="todo-item__done" onClick={() => todoListSet(() => compeleteTask(id))}>
                    <img src={checkIcon} alt="sample" width={'14px'} height={'14px'} />
                </button>
                <button className="todo-item__edit" onClick={() => activeEditMode(id, title)}>
                    <img src={pencilIcon} alt="sample" width={'14px'} height={'14px'} />
                </button>
                <button className="todo-item__remove" onClick={() => removeTodo(id)}>
                    <img src={trashIcon} alt="sample" width={'14px'} height={'14px'} />
                </button>
            </div>
        </div>
    );
}

export default TodoItem;
