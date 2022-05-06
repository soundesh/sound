import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Header from './components/Header';
import ProfilePage from './components/ProfilePage';
import Photos from './components/Photos';
import Dragg from './components/dragg';
import Draggable from './components/draggable';
function App() {
  return (
    <div className=' bg-gray-50 '>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/drag" element={<Dragg/>}/>

      <Route path="/draggable" element={<Draggable/>}/>
      <Route  path="/about" element={<ProfilePage/>}/>

      <Route  path="/Photos" element={<Photos/>}/>

      <Route  path="/about" element={<ProfilePage/>}/>
    </Routes>
    </div>
  );
}

export default App;