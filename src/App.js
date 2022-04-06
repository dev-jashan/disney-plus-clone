/** all direct imports from react env */

import {Route,Routes} from 'react-router-dom';

/** all component imports */
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';

/** all css imports */
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header> 
      <Routes>
       
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home/>}/>
      </Routes>
       
    </div>
  );
}

export default App;
