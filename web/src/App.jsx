import {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './modules/Navbar';
import Footer from './modules/Footer';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Footer />
    </Suspense>
  );
}

export default App;
