import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Forms from './Pages/Forms/Forms';
import Home from './Pages/Home/Home';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <div className='Navbar'>
          <Link to={"/"}>Home</Link>
          <Link to={"/Forms"}>Forms</Link>
       </div>
       <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/Forms" element = {<Forms/>}/>
       </Routes>          
       </BrowserRouter>   
    </div>
  );
}

export default App;
