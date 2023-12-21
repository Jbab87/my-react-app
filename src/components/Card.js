import katie from "../katie.png"
import star from "../Star 1.png"

export default function Card() {
    return (
        <div className="card">
            <img className="card-image" src={katie}></img>
            <div className="card-info">
                <img className="card-star" src={star}></img>
                <span > 5.0  </span>
                <span className="grey">(6)  </span>
                <span className="grey">.USA</span>

                <p>Life lessons with Katie Zaferes</p>
                <p><span className="bold">From $136</span> / person</p>

            </div>

        </div> 
    )
}