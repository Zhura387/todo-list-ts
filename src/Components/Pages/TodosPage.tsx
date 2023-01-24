import React, { useState, useEffect } from 'react';
import { TodoForm } from '../TodoForm';
import { TodoList } from '../TodoList';
import { ITodo } from '../../interFaces';

export const TodosPage: React.FC = () => {

  const [todos, setTodos] = useState<ITodo[]>(JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    }
    setTodos(prev => [newTodo, ...todos])
  }

  const toggleHandler = (id: number) => {
    setTodos(prev => prev.map(item => {
      if (item.id === id) {
        item.completed = !item.completed
      }
      return item
    }))
  }

  const removeHandler = (id: number) => {
    const shoudRemove = window.confirm('Are you sure?')
    if (shoudRemove) {
      setTodos(prev => prev.filter(item => item.id !== id))
    }
  }

  return <React.Fragment>
    <TodoForm onAdd={addHandler} />
    <TodoList
      todos={todos}
      onToggle={toggleHandler}
      onRemove={removeHandler}
    />
  </React.Fragment>
}

