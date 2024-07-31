
import './App.css'
import Inbox from './components/Inbox';
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
        <Route path="/inbox" element={<Inbox/>} />
      </Routes>
    {/* <Footer/> */}
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
