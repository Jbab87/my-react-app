import  ReactDOM  from "react-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import cardData from "./data"

export default function App() {
      const cards = cardData.map(card => {
            return <Card
            key={card.id}
            card={card}
            />
  }  ) 

 return (

        <div className="container">
        <Navbar/>
        <Hero/>
        <section className="card-section">
        {cards}
        </section>
    
        </div>
 )
 
}




