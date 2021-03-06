import React from 'react'
import { createGlobalStyle } from 'styled-components'
import TodoTemplate from './components/TodoTemplate'
import TodoHead from './components/TodoHead'
import TodoList from './components/TodoList'
import TodoCreate from './components/TodoCreate'
import { TodoProvider } from './TodoContext'
import TodoDbList from './components/TodoDbList'

const GlobalStyle = createGlobalStyle`
  body {
    background: #ced4da;
  }
`

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoDbList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  )
}

export default App
