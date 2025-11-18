import './App.css'
import PropertyList from './PropertyList'

const properties  = [
  {id: 1, name : 'Desert Yurt', rating : 10, price : 245},
  {id: 2, name : 'Lone Mountain Cabin', rating : 1, price : 200},
  {id: 3, name : 'Cactus Retreat', rating : 4, price : 500},
  {id: 4, name : 'Ocean View Condo', rating : 7, price : 450},
  {id: 5, name : 'Gold Miner Campground', rating : 8, price : 550},
];

function App() {
  return <PropertyList properties={properties} />
}

export default App