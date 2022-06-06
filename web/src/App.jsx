import {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import Navbar from './modules/Navbar';
import Footer from './modules/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RoomsPage from './pages/RoomsPage';
import ContactPage from './pages/ContactPage';
import LocationsPage from './pages/LocationsPage';
import LoginModal from './modules/LoginModal';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <LoginModal />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/rooms' element={<RoomsPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/locations' element={<LocationsPage />} />
      </Routes>
      <Footer />
    </Suspense>
  );
}

export default App;
