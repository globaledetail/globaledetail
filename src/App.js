
import { Route, Routes } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import { Home } from './pages/Home/Home';
import { Footer } from './components/Footer/Footer';
import { Introduce } from './pages/Introduce';
import { Business } from './pages/Business';


function App() {




  return (
    <div className="App">
      <div className='nav-container'>
        <NavBar/>
      </div>

      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/intro' element={<Introduce></Introduce>}/>
        <Route path='/business' element={<Business></Business>}/>
      </Routes>

      {/* <div className='footer-container'>
        <Footer/>
      </div> */}

    </div>
  );
}

export default App;
