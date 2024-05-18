
import { Route, Routes } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import { Home } from './pages/Home/Home';
import { Footer } from './components/Footer/Footer';
import { Introduce } from './pages/Introduce';
import { Business } from './pages/Business';
import { IRPR } from './pages/IRPR';

function App() {




  return (
    <div className="App">
      <div className='nav-container'>
        <NavBar/>
      </div>

      <Routes>
        <Route path={process.env.PUBLIC_URL + '/'} element={<Home></Home>}/>
        <Route path={process.env.PUBLIC_URL + '/intro'} element={<Introduce></Introduce>}/>
        <Route path={process.env.PUBLIC_URL + '/business'} element={<Business></Business>}/>
        <Route path={process.env.PUBLIC_URL + '/irpr'} element={<IRPR></IRPR>}/>
      </Routes>

      {/* <div className='footer-container'>
        <Footer/>
      </div> */}

    </div>
  );
}

export default App;
