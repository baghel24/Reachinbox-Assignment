
import './App.css'
import Login from './components/Login'
import Navbar from './components/Navbar';
import Onebox from './components/Onebox'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
 <div className="">
    
 {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/onebox" element={<Onebox/>} />
      </Routes>
    {/* <Footer/> */}
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
