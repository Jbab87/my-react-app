import  ReactDOM  from "react-dom"
import  Footer  from "./Footer"
import Header from "./Header"
import  MainContent  from "./MainContent"
import "./index.css"



function ReactPage() { 
return (
    <div>
    <Header/>
   <MainContent/>
    <Footer/>
    </div>
)   

}



ReactDOM.render(
    <ReactPage/>, document.getElementById("root")


)