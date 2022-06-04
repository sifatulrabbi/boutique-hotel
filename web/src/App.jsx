import {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import Navbar from './modules/Navbar';
import Footer from './modules/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RoomsPage from './pages/RoomsPage';
import RoomPage from './pages/RoomPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route
          path='/rooms/*'
          element={
            <Routes>
              <Route path='/' element={<RoomsPage />} />
              <Route path='/:id' element={<RoomPage />} />
            </Routes>
          }
        />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <Footer />
    </Suspense>
  );
}

export default App;
