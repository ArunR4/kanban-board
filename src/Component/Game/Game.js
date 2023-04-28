import React, { useState } from "react";

import './Game.css';

const Game = () => {
    const [data,setData] = useState([
        {id:1, value : "Task 1", stage: 1},
        {id:2, value : "Task 2", stage: 1},
        {id:3, value : "Task 3", stage: 1},
        {id:4, value : "Task 4", stage: 2},
        {id:5, value : "Task 5", stage: 3},
        {id:6, value : "Task 6", stage: 2},
    ]);

    const pre = (id) => {
        let copy = [...data];
        copy = copy.map(el=>{
            if(el.id === id){
                el.stage -=1
            }
            return el;
        })
        setData(copy);
    }

    const next = (id) => {
        let copy = [...data];
        copy = copy.map(el=>{
            if(el.id === id){
                el.stage +=1
            }
            return el;
        })
        setData(copy);
    }


    return(
        <div className="container">
            <div className="items">
                <h2>Backlog</h2>
                {data.filter(el=>el.stage===1).map(el =>(
                <div key={el.id} className="item">{el.value} 
                <button onClick={()=>pre(el.id)} disabled={el.stage===1}>&lt;</button>
                <button onClick={()=>next(el.id)} disabled={el.stage===3}>&gt;</button>
                </div>
                ))}
            </div>
            <div className="items">
            <h2>ToDO</h2>
            {data.filter(el=>el.stage===2).map(el =>(
                <div key={el.id} className="item">{el.value} 
                <button onClick={()=>pre(el.id)} disabled={el.stage===1}>&lt;</button>
                <button onClick={()=>next(el.id)} disabled={el.stage===3}>&gt;</button>
                </div>
                ))}
            </div>
            <div className="items">
            <h2>Done</h2>
            {data.filter(el=>el.stage===3).map(el =>(
                <div key={el.id} className="item">{el.value} 
                <button onClick={()=>pre(el.id)} disabled={el.stage===1}>&lt;</button>
                <button onClick={()=>next(el.id)} disabled={el.stage===3}>&gt;</button>
                </div>
                ))}
            </div>
        </div>
    );

}

export default Game;