
import { Route, Routes } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import { Home } from './pages/Home/Home';
import { Footer } from './components/Footer/Footer';
import { Introduce } from './pages/Introduce';


function App() {




  return (
    <div className="App">
      <div className='nav-container'>
        <NavBar/>
      </div>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/intro' element={<Introduce></Introduce>}></Route>
      </Routes>

      {/* <div className='footer-container'>
        <Footer/>
      </div> */}

    </div>
  );
}

export default App;
