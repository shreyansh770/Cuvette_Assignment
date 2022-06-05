import React from 'react';
import "./Styles/App.css"
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import DashBoard from './Components/DashBoard';
import { useState } from 'react';
import Modal from './Modal';
import { createContext } from 'react';

export const AuthConext = createContext()


function App() {

  const [active , setActive] = useState(false);

  let userValue = {
    rank : "12800",
    percentile:"37",
    marks : 7
  }

  const [res , setRes] = useState(userValue)

  return (
    
    <>

    <AuthConext.Provider value={{resState:res,resSetState:setRes}} >
    {active ? <>
      <Modal setState ={setActive} state={active}></Modal>
      <div className='parent'>
      <Navbar></Navbar>
      <DashBoard setState ={setActive} state={active}></DashBoard>
    </div>
    </>:<div className='parent'>
      <Navbar></Navbar>
      <DashBoard setState ={setActive} state={active}></DashBoard>
    </div>}
    </AuthConext.Provider>
    </>
  );
}

export default App;
