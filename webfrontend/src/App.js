import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import CarList from './pages/CarList'
import Contact from './pages/ContactNew'
import CarPage from './pages/CarPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route element={<HomePage/>} path="/BPA-Website" exact/>
          <Route element={<CarList/>} path="/CarList" exact/>
          <Route element={<CarPage/>} path="/CarPage"/>
          <Route element={<Contact/>} path="/Contact" exact/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
