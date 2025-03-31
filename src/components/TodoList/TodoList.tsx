import TodoFooter from '../TodoFooter/TodoFooter'
import "./TodoList.css"

interface Todo {
    id: number;
    task: string;
    completed: boolean;
}

function TodoList({
    todos, setTodos
}: { todos: Todo[]; setTodos: React.Dispatch<React.SetStateAction<Todo[]>> }) {

    const updateTask = (id: number) => {
        const updatedTasks = todos.map((todo) => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
                return todo
            } else {
                return todo
            }
        });
        setTodos(updatedTasks)
    }

    const calcNumberOfIncompletedTasks = () => {
        let count = 0;
        todos.forEach(todo => {
            if(!todo.completed) count++
        })
        return count
    }

    return (
        <div className="todolist-container">
            <div className="todos-container">
                <div>
                    {
                        todos.map((todo) => (
                            <div 
                                className={`todo-item ${todo.completed && "todo-item-active"}`} 
                                onClick={() => updateTask(todo.id)}
                                key={`todo-${todo.id}`}
                                data-testid="task-container"
                            >
                                {todo.task}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <TodoFooter 
                    numberOfIncompleteTasks={calcNumberOfIncompletedTasks()}
                />
            </div>
        </div>
    )
}

export default TodoList
