import  ReactDOM  from "react-dom"
import  Footer  from "./components/Footer"
import App from "./App"
import "./index.css"



function ReactPage() { 
return (
    <div>
    <App/>
    <Footer/>
    </div>
)   

}



ReactDOM.render(
    <ReactPage/>, document.getElementById("root")
)