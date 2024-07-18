
import { Route, Routes } from 'react-router-dom';
import './App.css';
import React, { useContext, useState } from 'react';

import NavBar from './components/NavBar/NavBar';
import { Home } from './pages/Home/Home';
import { Introduce } from './pages/Introduce';
import { Business } from './pages/Business';
import { IRPR } from './pages/IRPR';
import { Contacts } from './pages/Contacts';
import { IntroCompanyContent } from './components/Intro/IntroCompanyContent';
import { HistoryContent } from './components/Intro/HistoryContent';
import { VisionContent } from './components/Intro/VisionContent';
import { AwardsContent } from './components/Intro/AwardsContent';
import { PolarBusiness } from './components/Business/PolarBusiness';
import { CharLeBusiness } from './components/Business/CharLeBusiness';
import { CharsBusiness } from './components/Business/CharsBusiness';
import { ReboozBusiness } from './components/Business/Rebooz';
import { Announcements } from './components/IRPR/Announcements';
import { NewsReports } from './components/IRPR/NewsReports';
import { IRData } from './components/IRPR/IRData';
import { CharLeRoof } from './components/Business/CharLeRoof';
import { LanguageContext } from './context/languageContext';

function App() {

  
  return (
    <div className="App">
      <div className='nav-container'>
        <NavBar/>
      </div>

      <Routes>
        <Route path={process.env.PUBLIC_URL + '/'} element={<Home></Home>}/>
        
        <Route path={process.env.PUBLIC_URL + '/intro'} element={<Introduce></Introduce>}>
          <Route path={process.env.PUBLIC_URL + '/intro/company'} element={<IntroCompanyContent/>}/>
          <Route path={process.env.PUBLIC_URL + '/intro/history'} element={<HistoryContent/>}/>
          <Route path={process.env.PUBLIC_URL + '/intro/vision'} element={<VisionContent/>}/>
          <Route path={process.env.PUBLIC_URL + '/intro/awards'} element={<AwardsContent/>}/>
        </Route>

        <Route path={process.env.PUBLIC_URL + '/business'} element={<Business></Business>}>
          <Route path={process.env.PUBLIC_URL + '/business/roof'} element={<CharLeRoof/>}/>
          <Route path={process.env.PUBLIC_URL + '/business/charle'} element={<CharLeBusiness/>}/>
          <Route path={process.env.PUBLIC_URL + '/business/chars'} element={<CharsBusiness/>}/>
          <Route path={process.env.PUBLIC_URL + '/business/rebooz'} element={<ReboozBusiness/>}/>
        </Route>

        <Route path={process.env.PUBLIC_URL + '/irpr'} element={<IRPR></IRPR>}>
          <Route path={process.env.PUBLIC_URL + '/irpr/announcements'} element={<Announcements/>}/>
          <Route path={process.env.PUBLIC_URL + '/irpr/media'} element={<NewsReports/>}/>
          <Route path={process.env.PUBLIC_URL + '/irpr/ir'} element={<IRData/>}/>
        </Route>

        <Route path={process.env.PUBLIC_URL + '/contacts'} element={<Contacts></Contacts>}/>
      </Routes>

    </div>
  );
}

export default App;
