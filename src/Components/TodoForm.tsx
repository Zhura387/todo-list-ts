import React, { useState } from "react";

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
    const [title, setTitle] = useState<string>('')
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const keyPressHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            props.onAdd(title)
            setTitle('')
        }
    }

    return (
        <div className="input-field mt2 ">
            <input placeholder="add text"
                type='text'
                id="title"
                onKeyPress={keyPressHandler}
                value={title}
                onChange={changeHandler}
            >
            </input>
            <label htmlFor="title" className="active">add text</label>
        </div>

    )
}