import React, {Component} from 'react'; 
import '../assets/css/listView.css'
import greenTimer from '../assets/images/greenTime.png';
import redTimer from '../assets/images/redTime.png';
import yellowTimer from '../assets/images/yellowTime.png';
import addButton from '../assets/images/plus.png';

class ListView extends Component{
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <div className="listBottomContainer">
                <div className="restaurantBubble">
                    <div className="headerTitle">Taco Sinaloa</div>
                    <div className="bottomInfo">
                        <div className="timeInfo"><img src= {greenTimer}/></div>
                        <div className="restaurantInfoContainer">
                            <div className="restaurantInfo">
                                <div className="starsDistanceInfo">
                                    <div className="stars"><span className="boldText">Stars: </span> 4.5</div>
                                    <div className="distance"><span className="boldText">Distance: </span> 5mi</div>
                                </div>
                                <div className="icons">
                                    <div className="dollarSigns">$$$</div>
                                    <div className="addButton">
                                        <img src= {addButton}/>
                                    </div>
                                </div>
                            </div>
                            <div className="address"><span className="boldText">Address: </span> 9200 Irvine Center Dr #200, Irvine, CA 92618 </div>
                        </div>
                    </div>
                </div>
                <div className="restaurantBubble">
                    <div className="headerTitle">Taco Sinaloa</div>
                    <div className="bottomInfo">
                        <div className="timeInfo"><img src= {greenTimer}/></div>
                        <div className="restaurantInfoContainer">
                            <div className="restaurantInfo">
                                <div className="starsDistanceInfo">
                                    <div className="stars"><span className="boldText">Stars: </span> 4.5</div>
                                    <div className="distance"><span className="boldText">Distance: </span> 5mi</div>
                                </div>
                                <div className="icons">
                                    <div className="dollarSigns">$$$</div>
                                    <div className="addButton">
                                        <img src= {addButton}/>
                                    </div>
                                </div>
                            </div>
                            <div className="address"><span className="boldText">Address: </span> 9200 Irvine Center Dr #200, Irvine, CA 92618 </div>
                        </div>
                    </div>
                </div>
                <div className="restaurantBubble">
                    <div className="headerTitle">Taco Sinaloa</div>
                    <div className="bottomInfo">
                        <div className="timeInfo"><img src= {greenTimer}/></div>
                        <div className="restaurantInfoContainer">
                            <div className="restaurantInfo">
                                <div className="starsDistanceInfo">
                                    <div className="stars"><span className="boldText">Stars: </span> 4.5</div>
                                    <div className="distance"><span className="boldText">Distance: </span> 5mi</div>
                                </div>
                                <div className="icons">
                                    <div className="dollarSigns">$$$</div>
                                    <div className="addButton">
                                        <img src= {addButton}/>
                                    </div>
                                </div>
                            </div>
                            <div className="address"><span className="boldText">Address: </span> 9200 Irvine Center Dr #200, Irvine, CA 92618 </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default ListView; 