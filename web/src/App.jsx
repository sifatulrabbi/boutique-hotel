import {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import Navbar from './modules/Navbar';
import Footer from './modules/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
      <Footer />
    </Suspense>
  );
}

export default App;
