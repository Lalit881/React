import React from "react";
function Card({ hotel }){
    return(
        <div className="card">
            <div className="card-container">
                <div className="img">
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square600/483829989.webp?k=092bff942a2449a715462c97df978a6337f8822ad75926dbeecb7d871de41fce&o="></img>
                </div>
                <div className="details">
                    <div className="Title">
                        <div className="htname">
                            <h3>DoubleTree by Hilton Ahmedabad</h3>
                            <div className="location">
                                <p>Ahmedabad</p>
                                <p>show on map</p>
                                <p>km from centre</p>
                            </div>
                        </div>
                        <div className="rating">
                            <div className="review">
                                <h4>Very Good</h4>
                                <p>818 review</p>
                            </div>
                            <div className="box"><p>8.2</p></div>
                        </div>
                    </div>
                    <div className="rooms">
                        <div className="room-detail">
                            <h5>Deluxe King Room</h5>
                            <p>1 extra-large double bed</p>
                        </div>
                        <div className="rate">
                            <p>1 night, 1 adult</p>
                            <h3>₹ 6,999</h3>
                            <p>+₹ 839 taxes and charges</p>
                            <button>See availability</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;