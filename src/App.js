import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import {action,originals,horror,comedy,romance} from './url'
import './App.css'

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost title ='Netflix Originals' url={originals}/>
        <RowPost title ='Action Movies' isSmall url={action}/>
        <RowPost title ='Comedy Movies' isSmall url={comedy}/>
        <RowPost title ='Horror Movies' isSmall url={horror}/>
        <RowPost title ='Romance Movies' isSmall url={romance}/>

    </div>
  );
}

/****/

export default App;