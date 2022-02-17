import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import { CreateTodo } from './components/createTodo'
import { ShowTodoList } from './components/showTodoList'
import { UserList } from './components/user/user'
import { CreateUserForm } from './components/user/createUserForm'
import carddesign from './components/carddesign/cardDesign'
import navbar from './components/navbar'
import { Container } from 'react-bootstrap'
const cardDesign = new carddesign()
const navBar = new navbar()

function App() {
  return (
    <div className="app-contents">
      {navBar.getNavBar()}
      <Container fluid className="mt-4">
        <BrowserRouter>
          <Route exact path="/" component={ShowTodoList} />
          <Route path="/create-todo" component={CreateTodo} />
          <Route exact path="/user" component={UserList} />
          <Route exact path="/user/new" component={CreateUserForm} />
        </BrowserRouter>
      </Container>
    </div>
  )
}

export default App
