import './App.css'
import PropertyList from './PropertyList'

const properties  = [
  {id: 1, name : 'Desert Yurt', rating : 10, price : 245},
  {id: 2, name : 'Lone Mountain Cabin', rating : 1, price : 200},
  {id: 3, name : 'Cactus Retreat', rating : 4, price : 500},
  {id: 4, name : 'Ocean View Condo', rating : 7, price : 450},
  {id: 5, name : 'Gold Miner Campground', rating : 8, price : 550},
  {id: 6, name : 'Gold Miner Campground', rating : 8, price : 55},
  {id: 7, name : 'Gold Miner Campground', rating : 8, price : 99},
  {id: 8, name : 'Gold Miner Campground', rating : 8, price : 340},
  {id: 9, name : 'Gold Miner Campground', rating : 8, price : 400},
  {id: 10, name : 'Gold Miner Campground', rating : 8, price : 19},
  {id: 11, name : 'Gold Miner Campground', rating : 8, price : 120},
  {id: 12, name : 'Gold Miner Campground', rating : 8, price : 1500},
  {id: 13, name : 'Gold Miner Campground', rating : 8, price : 780},
  {id: 14, name : 'Gold Miner Campground', rating : 8},
  {id: 15, name : 'Gold Miner Campground', rating : 8, price : 512},
  {id: 16, name : 'Gold Miner Campground', rating : 8, price : 230},
];

function App() {
  return <PropertyList properties={properties} />
}

export default App