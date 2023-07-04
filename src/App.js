import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './common/navbar';
import Login from './component/login';
import Footer from './common/footer';
import Create from './component/create';
import Home from './component/home';
import Update from './component/update';

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route index path='/login' element={<Login />} />
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/update' element={<Update />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
