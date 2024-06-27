import '../src/styles/App.css'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Login from './components/Login'
import LandingPage from './components/LandingPage'
import QuizzesArea from './components/QuizzesArea'
import Quiz from './components/Quiz'
import Result from './components/Result'
import Profile from './components/Profile'
// import Testing from './components/Testing'
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
        <Route path='/quiz/:quizId' element={<Quiz/>}>
        </Route>
        <Route path='/profile' element={<Profile/>}>
        </Route>
        <Route path='/result' element={<Result/>}>
        </Route>
        <Route path='/quizzes' element={<QuizzesArea/>}>
        </Route>
        {/* <Route path='/profile' element={<Testing/>}>
        </Route> */}
      </Routes>
      </div>
    </Router>

  )}

export default App
