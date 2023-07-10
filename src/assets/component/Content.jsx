import React, { useEffect, useState } from 'react'

const Content = ({ todo, setTodoList, todoList, index, checkTodo, setCheckTodo, ...props }) => {

  const [text, setText] = useState(todo.title)
  const [edit, setEdit] = useState(false)


  const handleCheckTodo = (completeId) => {
    const todoListTmp = [...todoList]
    todoListTmp.map((todo) => {
      if (todo.id === completeId) {
        return todo.isCompleted = !todo.isCompleted
      } else {
        return todo
      }
    })
    setTodoList(todoListTmp)
  }

  const handleDeleteTodo = (deleteItem) => {
    const newTodoList = todoList.filter(currentTodos => {
      // console.log(todoList[index]);
      deleteItem = todoList[index]
      return currentTodos !== deleteItem
    })
    setTodoList(newTodoList)
  }


  const handleEditTodo = (editItem, editIndex) => {
    todoList.map(() => {
      editItem[editIndex] = todoList[index]
    })
    setEdit(!edit)
  }

  const handleUpdateTodo = (updateId) => {
    const updateTmp = [...todoList]
    console.log('change')
    updateTmp.map(todo => {
      if (todo.id === updateId) {
        return todo.title = text.trim()
      } else {
        return todo
      }
    })
    setTodoList(updateTmp)
    setEdit(!edit)
    console.log(updateTmp);
  }

  const handleFilterCheck = () => {
    const filterCheckData = [...todoList]
    filterCheckData.filter((item) => {
      console.log(item.isCompleted);
      return item.isCompleted
    })
    setTodoList(filterCheckData)
  }


  return (

    <div className='content'>
      {!edit ?
        <div
          className={`todo ${todo.isCompleted ? 'checked' : ''}  `}
          onDoubleClick={handleEditTodo}
        >
          {todo.image ? <img className='img' src={todo.image} /> : <div>{todo.title}</div>}
        </div> :
        <input
          className={`todo `}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              return handleUpdateTodo(todo.id)
            }
          }}
        />
      }

      <div className="option">
        <input type="checkbox" className="todo-check" onClick={() => handleCheckTodo(todo.id)} />
        <div className="todo-delete" onClick={handleDeleteTodo}>x</div>
      </div>
    </div>
  )
}

export default Content