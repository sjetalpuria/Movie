import Movies from './components/Movies';
import Details from "./components/Details";
import {Routes, Route } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Movies />}>Home</Route>
       <Route path="/details/" element={<Details />}>Details</Route> 
      </Routes>
    </div>

  );
}

export default App;
