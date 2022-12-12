import './App.css';
import { Route, BrowserRouter , Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/' element={<AddNote/>} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
