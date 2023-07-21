
import './App.css';
import Home from './components/Home';
import Signup from './signup/Signup';
import Login from './login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Add from './components/Add';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
          <Route path='/' element={<Signup></Signup>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/add' element={<Add></Add>}> </Route>
            <Route path='/edit' element={<Edit></Edit>}></Route>


          </Routes>
        </Router>

      </header>
    </div>
  );
}

export default App;
