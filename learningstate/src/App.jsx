import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Likebutton from "./Likebutton.jsx"

function App() {

  return (<div>
    <h3>Like and count number of clicks</h3>
    <Likebutton/>
 </div>
  );
}

export default App
