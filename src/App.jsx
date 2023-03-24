import React, { useEffect, useState } from 'react'
import Content from './assets/component/Content'
import Heading from './assets/component/Heading'
import axios from 'axios'
import Style from './assets/style/Style.css'

const App = () => {
  // const storeItem = JSON.parse(localStorage.getItem('job'))
  const [todoList, setTodoList] = useState([])
  const [originalList, setOriginalList] = useState([])
  // useState(storeItem ?? [])
  useEffect(() => {
    // fetch('https://api.jikan.moe/v4/users')
    //   .then((res) => res.json())
    //   .then(json => {
    //     const newDataArr = [...json.data]
    //     newDataArr.map((newData, index) => {
    //       return newData.id = index
    //     })
    //     setTodoList(newDataArr)
    //     console.log(newDataArr)
    //   })

    axios.get('https://api.jikan.moe/v4/users')
      .then((res) => {
        const newArr = [...res.data.data]
        newArr.map((newData, index) => {
          return (newData.id = index, newData.isCompleted = false)
        })
        setTodoList(newArr)
        setOriginalList(newArr)
      })
  }, [])

  const handleFilterCompleted = () => {
    // const filterCompletedData = [...todoList]
    // filterCompletedData.filter((item) =>
    //   item.isCompleted ===true
    //   )
    const filterCompletedData = todoList.filter((item) => item.isCompleted)
      console.log(filterCompletedData)
    setTodoList(filterCompletedData)
  }
  // console.log(originalList);

  const handleShowAll = () => {
    // console.log(todoList);
    // todoList.filter(item => item.isCompleted = !item.isCompleted)
    setTodoList(originalList)
  }

  const DeleteAll = () => {
    setTodoList([])
  }

  const handleClearCompletedData = () => {
    const clearCompletedData = [...todoList]
    clearCompletedData.filter((item) =>
      !item.isCompleted)
    setTodoList(clearCompletedData)
    console.log(clearCompletedData);
  }




  return (
    <div className='wrapper'>
      <Heading todoList={todoList} setTodoList={setTodoList} />
      <div className="content-wrapper">
        <button
          className="todo-showAll"
          onClick={handleShowAll}
        >
          Show All
        </button>
        <button
          className="todo-filter-checked"
          onClick={handleFilterCompleted}
        >
          Completed
        </button>
        <button
          className="todo-deleteAll"
          onClick={DeleteAll}
        >
          Clear All
        </button>
        <button
          className="todo-clearCompleted"
          onClick={handleClearCompletedData}
        >
          Clear Completed
        </button>

        {todoList && todoList?.map((todo, index) => (
          // console.log(todo),
          todo.title !== '' &&
          <Content
            todo={todo}
            key={todo.id}
            index={index}
            todoList={todoList}
            setTodoList={setTodoList}
          // checkTodo={checkTodo}
          // setCheckTodo={setCheckTodo}
          />
        )
        )}
      </div>
    </div>
  )
}

export default App