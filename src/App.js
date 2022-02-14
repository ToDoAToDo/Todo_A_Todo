import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import { CreateTodo } from './components/createTodo'
import { ShowTodoList } from './components/showTodoList'
import InputField from './poc/InputField'
import { UserList } from './components/user/user'

function App() {
  return (
    <div className="app-contents">
      <BrowserRouter>
        <Route exact path="/" component={ShowTodoList} />
        <Route path="/create-todo" component={CreateTodo} />
        <Route path="/user" component={UserList} />
      </BrowserRouter>
    </div>
  )
}

export default App
