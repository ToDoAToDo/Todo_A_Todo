import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import { CreateTodo } from './components/createTodo'
import { ShowTodoList } from './components/showTodoList'
import { UserList } from './components/user/user'
import { CreateUserForm } from './components/user/createUserForm'
import carddesign from './components/carddesign/cardDesign'
import navbar from './components/navbar'
const cardDesign = new carddesign()
const navBar = new navbar()

function App() {
  return (
    <div className="app-contents">
      {navBar.getNavBar()}

      <BrowserRouter>
        <Route exact path="/" component={ShowTodoList} />
        <Route path="/create-todo" component={CreateTodo} />
        <Route exact path="/user" component={UserList} />
        <Route exact path="/user/new" component={CreateUserForm} />
      </BrowserRouter>
      {cardDesign.getCardDesign('Glenn', 'Dishes')}
    </div>
  )
}

export default App
