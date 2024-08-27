import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './view/LandingPage';
import SourcesPage from './view/SourcesPage';
import VisionPage from './view/VisionPage';

function App() {
  return (
    <div className='relative overflow-hidden font-lato'>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<LandingPage />} />
        <Route path='/sources' element={<SourcesPage/>} />
        <Route path='/vision' element={<VisionPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;