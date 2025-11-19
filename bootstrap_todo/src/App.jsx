// import TEst from "./components/test"
import Item2 from "./components/todo_items2"
import Item1 from "./components/todo_items1"
import Todohead from "./components/Todohead"
import Main_container from "./components/Todoinput"
import './To-do.css'


function App() {
 
  return <div><center><Todohead></Todohead>
  <Main_container></Main_container>
  <Item1></Item1>
  <Item2></Item2>
  </center></div> 
}

export default App
