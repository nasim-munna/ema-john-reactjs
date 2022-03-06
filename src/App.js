
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';


function App() {
  return (
    <div>
      
      <Router>
        <Header></Header>
        <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
          <Route path='/shop' element={<Shop></Shop>}></Route>
          <Route path='/review' element={<Review></Review>}></Route>
          <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
