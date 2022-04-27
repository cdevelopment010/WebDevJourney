import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/main.scss';
import MealPlanner from './MealPlanner';
import ShoppingList from './ShoppingList';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<MealPlanner />}></Route>
          <Route path="/shopping-list" element = {<ShoppingList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
