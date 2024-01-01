

export default function Card(props) {

    let badgeText
    if (props.card.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.card.location === "Online") {
        badgeText = "ONLINE"
    }


    return (
        <div className="card">
            {badgeText && <div className='card-badge'>{badgeText}</div>}
            <img className="card-image" src={props.card.coverImg}  ></img>

            <div className="card-info">
                <img src={require('../images/Star 1.png')} className="card-star" ></img>
                <span > {props.card.stats.rating}  </span>
                <span className="grey">({props.card.stats.reviewCount})  </span>
                <span className="grey"> {props.card.location}</span>

                <p>{props.card.title}</p>
                <p><span className="bold">From ${props.card.price}</span> / person</p>

            </div>

        </div> 
    )
}