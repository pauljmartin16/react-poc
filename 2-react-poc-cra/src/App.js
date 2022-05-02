import './App.css';
import loadable from '@loadable/component';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppHome from './AppHome';

const SpeakersApp = loadable(() => import('./modules/speakers/SpeakersApp'));
const HousesApp = loadable(() => import('./modules/houses/HousesApp'));
const SpeakerDetail = loadable(() => import('./modules/speakers/SpeakerDetail'));
const HouseDetail = loadable(() => import('./modules/houses/HouseDetail'));

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/speakers" element={<SpeakersApp />} />
          <Route path="/houses" element={<HousesApp />} />
          <Route path="/speaker/:id" element={<SpeakerDetail />} />
          <Route path="/house/:id" element={<HouseDetail />} />
          <Route path="/" element={<AppHome />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
