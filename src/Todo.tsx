import { useState } from 'react'

interface TodoProps {
  id: number
  title: string
  completed: boolean
}

const Todo = () => {
  const [todos, setTodo] = useState<TodoProps[]>([])
  const [newTodo, setNewTodo] = useState<string>('')

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodo([...todos, { id: Date.now(), title: newTodo, completed: false }])
      setNewTodo('')
    }
  }
  const toggleTodo = (id: number) => {
    setTodo(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id: number) => {
    setTodo(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="w-full h-screen bg-[#FFF5E6] flex items-center justify-center">
      <div className="bg-[#FFEBA8] p-4 min-h-[500px] flex flex-col m-auto items-center rounded-xl w-[396px] justify-center">
        <div className="flex items-center justify-center gap-4">
          <input
            className="p-2 shadow-md rounded-md border-2 border-gray-400 text-[#2D3436] focus:outline-none"
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add Todo"
          />
          <button
            className="bg-[#FF6B6B] p-2 px-4 hover:bg-[#FFD8A8] rounded-xl font-bold text-[#3D3D3D]"
            onClick={addTodo}
          >
            Add
          </button>
        </div>

        <div className="mt-8 w-70 pl-4">
          <ul className="text-[#2D3436] text-xl">
            {todos.map((todo) => (
              <div
                className="flex flex-row items-center justify-between"
                key={todo.id}
              >
                <li
                  className="list-disc mt-2 cursor-pointer"
                  onClick={() => toggleTodo(todo.id)}
                  style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    cursor: 'pointer',
                  }}
                >
                  {todo.title}
                </li>
                <button
                  className="bg-[#FF6B6B] text-sm px-2 mt-3 h-6 text-[#3D3D3D] rounded-lg hover:bg-[#FFD8A8]"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Todo
