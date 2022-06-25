import './HomePage.css'
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <main>
                <section className="header-container">
                    <div className="order-container">
                        <h1>TIME TO FEAST!</h1>
                        <a className="order-link" href="orders/new">ORDER NOW</a>
                    </div>
                </section>
                <section className="rewards-container">
                    <div className="rewards-img"></div>
                    <div className="rewards-body">
                        <h1 className="rewards-text">ZACH'S REWARDS</h1>
                        <h4 className="rewards-text">JOIN TO START EARNING</h4>
                        <a className="rewards-link" href="">START EARNING NOW</a>
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
                        <img className="bottom-link-images-1" src="https://imgur.com/cYaa7zE.png" alt="" />
                        <p className="bottom-link-body-1">BECOME APART OF THE TEAM</p>
                        <a id="a-tags" className="bottom-link-links" href="/careers">Careers</a>
                    </div>
                    <div className="bottom-links"> 
                    <img className="bottom-link-images" src="https://imgur.com/hPMlmCu.png" alt="" />
                        <p className="botttom-link-body">LEARN ABOUT US</p>
                        <a id="a-tags" className="bottom-link-links" href="/about">About</a>
                    </div>
                    <div className="bottom-links">
                        <img className="bottom-link-images" src="https://imgur.com/FGYGh5O.png" alt="" />
                        <p className="botttom-link-body">SIGN UP FOR NEWS AND DEALS</p>
                        <a id="a-tags" className="bottom-link-links" href="/logout">Sign-Up</a>
                    </div>
                </section>

            </main>
        </>
    )
}