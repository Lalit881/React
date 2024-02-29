import React from "react";
function Card({ hotel }){
    if(!hotel){
        return<h3>Selected Hotel Details is Not Found Please Select Only Ahmedabad And Goa</h3>
    }
    return(
        <>
        {hotel.map((h,index)=>(<div className="card">
            <div key={index} className="card-container">
                <div className="img">
                    <img src={h.image}></img>
                </div>
                <div className="details">
                    <div className="Title">
                        <div className="htname">
                            <h3>{h.title}</h3>
                            <div className="location">
                                <p>Ahmedabad</p>
                                <p>show on map</p>
                                <p>{h.distance} km from centre</p>
                            </div>
                        </div>
                        <div className="rating">
                            <div className="review">
                                <h4>Very Good</h4>
                                <p>{h.review} review</p>
                            </div>
                            <div className="box"><p>{h.rating}</p></div>
                        </div>
                    </div>
                    <div className="rooms">
                        <div className="room-detail">
                            <h5>{h.room}</h5>
                            <p>1 extra-large double bed</p>
                        </div>
                        <div className="rate">
                            <p>1 night, 1 adult</p>
                            <h3>₹ {h.rate}</h3>
                            <p>+₹ {h.tax} taxes and charges</p>
                            <button>See availability</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>))}
        </>
    )
}

export default Card;