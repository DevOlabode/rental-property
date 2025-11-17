import './App.css'
import PropertyList from './PropertyList'

const properties  = [
  {id: 1, name : 'Eggs', rating : 12, price : false},
  {id: 2, name : 'milk', rating : 1, completed : true},
  {id: 3, name : 'Carrots', rating : 4, completed : true},
  {id: 4, name : 'Chicken', rating : 10, completed : false},
]

function App() {
  <PropertyList />
}

export default App
