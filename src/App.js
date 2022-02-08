import './App.css'
import { ShowTodoList } from './components/showTodoList'
import InputField from './poc/InputField'

function App() {
  return (
    <div className="app-contents">
      <InputField />
      <ShowTodoList />
    </div>
  )
}

export default App
