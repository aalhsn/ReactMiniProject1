import React from "react";


function WandItem(props){
    return(
      <div className="col-md-4 mb-5">
        <div className="card h-100" style={{width: "18rem"}}>
          <img src={props.wand.imageUrl} className="card-img-top" alt={props.wand.core}></img>
          <div className="card-body">
          <h5 className="card-title">{props.wand.core}</h5>
          <p className="card-text">Wood Type: {props.wand.wood}</p>
          <p className="card-subtitle mb-2 text-muted font-italic">Wand's Length: {props.wand.length}</p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary btn-sm">Buy!</a>
          </div>
        </div>
      </div>
  
    )
  }


export default WandItem;