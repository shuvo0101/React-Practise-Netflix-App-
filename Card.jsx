import React from 'react';
import Sdata from './Sdata';

function Card(props){
    return(
    <>

    <div className = "cards" >
    <div className = "card" >
     <img src={props.imgsrc}
     alt ="my pic" 
      className="img__card"
      />
     <div className ="card__info">
      <span className="card__catagory">{props.title} </span>
      <h3 className="card__title"> {props.sname}</h3>
      <a href={props.link} target="_blank">
     <button>watch now</button>
      </a>
    
    </div>
    </div>
    </div>
    </>
    )
    
    }
    export default Card;