import React, { useState, useEffect } from 'react'
import TodoItem from './TodoItem'
import styled from 'styled-components'
import axios from 'axios'

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 49px;
  overflow-y: auto;
`

function TodoDbList() {
  const [todos, setTodos] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null)
        setTodos(null)
        // loading 상태를 true 로 바꿉니다.
        setLoading(true)
        const response = await axios.get('/api/todos')
        setTodos(response.data) // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e)
      }
      setLoading(false)
    }

    fetchUsers()
  }, [])

  if (loading) return <div>로딩중..</div>
  if (error) return <div>에러가 발생했습니다</div>
  if (!todos) return null
  return (
    <TodoListBlock>
      {todos.map(todo => (
        <TodoItem
          key={todo._id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </TodoListBlock>
  )
}

export default TodoDbList
