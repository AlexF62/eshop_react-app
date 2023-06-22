import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Components
import { Footer, Header } from './components';
//Pages
import { Home, Contact, Login, Register, Reset } from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

function App() {
    return (
        <>
            <BrowserRouter>
                <ToastContainer />
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/reset' element={<Reset />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
