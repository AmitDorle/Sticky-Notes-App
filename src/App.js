import './App.css';
import { Route, BrowserRouter , Routes } from 'react-router-dom';

import Home from './views/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
