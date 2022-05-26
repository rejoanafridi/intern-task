import React,{FC, useEffect, useState} from 'react';

import './App.css';
import Item from './Components/Item';


const App:FC = () => {
const backArrow = require("./image/back-arrow.png");
const switchImg = require("./image/switch.png")

const [data, setData] = useState([]) 

useEffect(() => {
     fetch('/station.json').then((response) => response.json()).then(data => setData(data))
},[])
  return (
    <div className="App">
       <div className="stations">
               <div className="station-header">
                    <img src={backArrow} alt="" />
                    <h2>stations</h2>
                    <img src={switchImg} alt="" />

               </div>
               <div className="stations-body">
                  {
                       data.map(itm => <Item   ></Item> )
                       
                  }
        
                
                        
                    </div>

                    <div className="station-footer">
                         <hr />
                    <h3>Currently Playing</h3>
                    <p>Dribble FM</p>
               </div>
               </div>

            
          </div>  
    
  );
}

export default App;
