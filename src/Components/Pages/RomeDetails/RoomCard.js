import React from "react";
import './RoomCard.css';

const RoomCard = (props) => {
  const { name, img, condition, location } = props.room;
  return (
    
     
     <section>
  
     <div className="card" style={{ width: "18rem" }}>
     <img className="room_img " src={img} class="card-img-top" alt="..." />
     <div class="card-body ">
       <h5 class="card-title">{name}</h5>
       <p class="card-text">{location}</p>
       <p>{condition}</p>
     </div>
   </div>
 
     </section>
   
    
  );
};

export default RoomCard;
