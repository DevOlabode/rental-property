import './App.css'
import PropertyList from './PropertyList'

const properties  = [
  {id: 1, name : 'Eggs', rating : 10, price : false},
  {id: 2, name : 'milk', rating : 1, price : true},
  {id: 3, name : 'Carrots', rating : 4, price : true},
  {id: 4, name : 'Chicken', rating : 7, price : false},
];

function App() {
  return <PropertyList properties={properties} />
}

export default App
