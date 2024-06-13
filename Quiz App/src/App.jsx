import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <Router>
      <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}>
        </Route>
        <Route path='/login' element={<Login/>}>
        </Route>
        <Route path='/register' element={<Signup/>}>
        </Route>
      </Routes>
      </div>
    </Router>

  )}

export default App
