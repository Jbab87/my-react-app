import navlogo from "../logo192.png"

export default function Header() {
    return (
    <header>
        <nav className="nav">
        <img className="nav-logo" src={navlogo}></img>
        <h1 className="nav-title">ReactFacts</h1>
        <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        </nav>
    </header>
    )
}

 