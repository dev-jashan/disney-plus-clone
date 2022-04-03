/** all direct imports from react env */

import {Route,Routes} from 'react-router-dom';

/** all component imports */

import Login from './components/Login';

/** all css imports */
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        
      <Route index element={<Login />} />

        
      </Routes>
       
    </div>
  );
}

export default App;
