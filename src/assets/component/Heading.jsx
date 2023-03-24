import React, { useEffect, useState } from 'react'

const Heading = ({ todoList, setTodoList }) => {

  const [inputValue, setInputValue] = useState('')
// keyPress Event 
  // const enterAddTodo = (e) => { 
  //   if(e.keyCode === 13 ) { 
  //     const todoTemp = {
  //       id: todoList.length + 1,
  //       title: inputValue,
  //       isCompleted: false
  //     }
  //     const newTodo = [...todoList]
  //     newTodo.push(todoTemp)
  //     setTodoList(newTodo)
  //     setInputValue('')
  //     const jsonData = JSON.stringify(todoList)
  //     localStorage.setItem('job', jsonData)
  //   }
  // }

  const handleAddTodo = () => {
    const todoTemp = {
      id: todoList.length + 1,
      title: inputValue,
      isCompleted: false,
      
    }
    const newTodo = [...todoList]
    newTodo.push(todoTemp)
    setTodoList(newTodo)
    setInputValue('')
    // console.log(todoList);
    const jsonData = JSON.stringify(todoList)
    localStorage.setItem('job', jsonData)
  }

  return (
    <div className='heading'>
      <input
        type="text"
        className='input'
        value={inputValue}
        onChange={(e) =>
          setInputValue(e.target.value)}
        // onKeyUp={(e) => enterAddTodo(e)}
      />
      <button
        className="button"
        onClick={handleAddTodo}
      >
        Add todo
      </button>
    </div>
  )
}

export default Heading