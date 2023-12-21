import heroimage from "../Group 82.png"

export default function Hero() {
    return (
        <section className="hero-container">
       <img className="hero-image"  src={heroimage}></img>
       <h1 className="hero-h1">Online Experiences</h1>
       <p className="hero-p">Join unique interactive activities led by
       one-of-a-kind hosts-all without leaving home
       </p>

</section>
    )
}