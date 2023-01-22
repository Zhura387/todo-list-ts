import React from "react";
import { ITodo } from "../interFaces";


type TodoListProps = {
    todos: ITodo[]
    onToggle(id: number): void
    onRemove(id: number): void
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {

    if (todos.length === 0) {
        return <p className="center">Tthe list is empty</p>
    }

    const removeHandler = (e: React.MouseEvent, id: number) => {
        e.preventDefault()
        onRemove(id)
    }
    return (
        <ul>
            {todos.map(item => {
                const classes = ['todo']
                if (item.completed) {
                    classes.push('completed')
                }
                return (
                    <li className={classes.join(' ')} key={item.id}>
                        <label>
                            <input type='checkbox' checked={item.completed}
                                onChange={onToggle.bind(null, item.id)}
                            ></input>
                            <span>{item.title}</span>
                            <i className="material-icons red-text"
                                onClick={e => removeHandler(e, item.id)}>delete</i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}