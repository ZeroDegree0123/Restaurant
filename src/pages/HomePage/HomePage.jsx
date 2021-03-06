import './HomePage.css'
import { Link } from "react-router-dom";

export default function HomePage() {
    const handleClick = () => {
        alert(`You are already signed up`)
    }

    return (
        <>
            <main>
                <section className="header-container">
                    <div className="order-container">
                        <h1 className="order-body">TIME TO FEAST!</h1>
                        <a className="order-link" href="orders/new">ORDER NOW</a>
                    </div>
                </section>
                <section className="rewards-container">
                    <div className="rewards-img"></div>
                    <div className="rewards-body">
                        <h1 className="rewards-text">ZACH'S REWARDS</h1>
                        <h4 id="rewards-middle-text" className="rewards-text">JOIN TO START EARNING</h4>
                        <a className="rewards-link" href="/rewards" onClick={handleClick}>START EARNING NOW</a>
                    </div>
                </section>
                <h1 className="menu-highlights">MENU HIGHLIGHTS</h1>
                <section className="highlights-container">
                    <Link id="highlight-items" className="daily" to="/menu">
                            <h2 className="highlight-item-titles">DAILY SPECIALS</h2>
                    </Link>
                    <Link id="highlight-items" className="appetizers" to="/menu"> 
                            <h2 className="highlight-item-titles">APPETIZERS</h2>
                    </Link>
                    <Link id="highlight-items" className="burgers" to="/menu"> 
                            <h2 className="highlight-item-titles">BURGERS</h2>
                    </Link>
                    <Link id="highlight-items" className="drinks" to="/menu">  
                            <h2 className="highlight-item-titles">DRINKS</h2>
                    </Link>
                    <Link id="highlight-items" className="desserts" to="/menu"> 
                            <h2 className="highlight-item-titles">DESSERTS</h2>
                    </Link>
                    <Link id="highlight-items" className="kids" to="/menu">
                            <h2 className="highlight-item-titles">KIDS</h2>
                    </Link>
                </section>
                <section className="bottom-links-container">
                    <div className="bottom-links">
                        <img id="bottom-link-images-1" className="bottom-link-images" src="https://imgur.com/rELY0rz.png" alt="" />
                        <p className="bottom-link-body-1">BECOME APART OF THE TEAM</p>
                        <a className="bottom-link-links" href="/careers">Careers</a>
                    </div>
                    <div className="bottom-links"> 
                    <img className="bottom-link-images" src="https://imgur.com/8QvVyde.png" alt="" />
                        <p className="botttom-link-body">LEARN ABOUT US</p>
                        <a id="middle-a-tag" className="bottom-link-links" href="/about">About</a>
                    </div>
                    <div className="bottom-links">
                        <img className="bottom-link-images" src="https://imgur.com/nNl75uu.png" alt="" />
                        <p className="botttom-link-body">SIGN UP FOR NEWS AND DEALS</p>
                        <a className="bottom-link-links" href="/" onClick={handleClick}>Sign-Up</a>
                    </div>
                </section>

            </main>
        </>
    )
}