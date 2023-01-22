import React, { useState, useEffect } from "react";
import { Navbar } from "./Components/Navbar";
import { TodoForm } from "./Components/TodoForm";
import { TodoList } from "./Components/TodoList";
import { ITodo } from "./interFaces";



const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  }, [])

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
  return (
    <>
      <Navbar />
      <div className="container">
        <TodoForm onAdd={addHandler} />
        <TodoList
          todos={todos}
          onToggle={toggleHandler}
          onRemove={removeHandler}
        />
      </div>
    </>
  );
}

export default App;
