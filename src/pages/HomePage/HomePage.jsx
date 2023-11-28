import './HomePage.css'
import { Link } from "react-router-dom";

export default function HomePage({ scrollToTop, user }) {


    scrollToTop();

    const handleClick = () => {
        alert(`You are already signed up`)
    };


    return (
        <main className="home-page">
            <section className="header-container">
                <h1 className="order-title">TIME TO FEAST!</h1>
                <a className="order-link" href="orders/new">ORDER NOW</a>
            </section>
            <section className="home-rewards-container">
                <div className="h-rewards-body">
                    <div>
                        <h1 className="h-rewards-text">ZACH'S REWARDS</h1>
                        <p className="h-rewards-text">JOIN TO START EARNING</p>
                    </div>
                    {user ?
                        <a className="h-rewards-link" href="/rewards" onClick={handleClick}>START EARNING NOW</a>
                        :
                        <a className="h-rewards-link" href="/login">START EARNING NOW</a>
                    }
                </div>
                <img className="h-rewards-image" src="https://imgur.com/pbVmJ7T.png" alt="Table full of food" />
            </section>
            <h1 className="menu-highlights">MENU HIGHLIGHTS</h1>
            <section className="highlights-container">
                <Link className="highlight-items" id="daily" to="/menu">
                    <h2 className="highlight-item-titles">DAILY SPECIALS</h2>
                </Link>
                <Link className="highlight-items" id="appetizers" to="/menu">
                    <h2 className="highlight-item-titles">APPETIZERS</h2>
                </Link>
                <Link className="highlight-items" id="burgers" to="/menu">
                    <h2 className="highlight-item-titles">BURGERS</h2>
                </Link>
                <Link className="highlight-items" id="drinks" to="/menu">
                    <h2 className="highlight-item-titles">DRINKS</h2>
                </Link>
                <Link className="highlight-items" id="desserts" to="/menu">
                    <h2 className="highlight-item-titles">DESSERTS</h2>
                </Link>
                <Link className="highlight-items" id="kids" to="/menu">
                    <h2 className="highlight-item-titles">KIDS</h2>
                </Link>
            </section>
            <section className="bottom-links-container">
                <div className="bottom-links">
                    <img className="bottom-link-images" src="https://imgur.com/rELY0rz.png" alt="" />
                    <p className="bottom-link-body">JOIN THE TEAM</p>
                    <a className="bottom-link-links" href="/careers">Careers</a>
                </div>
                <div className="bottom-links">
                    <img className="bottom-link-images" src="https://imgur.com/8QvVyde.png" alt="" />
                    <p className="botttom-link-body">LEARN ABOUT US</p>
                    <a id="middle-a-tag" className="bottom-link-links" href="/about">About</a>
                </div>
                <div className="bottom-links">
                    <img className="bottom-link-images" src="https://imgur.com/nNl75uu.png" alt="" />
                    <p className="botttom-link-body">SIGN UP FOR DEALS</p>
                    {user ?
                        <a className="bottom-link-links" href="/" onClick={handleClick}>SignUp</a>
                        :
                        <a className="bottom-link-links" href="/login">SignUp</a>
                    }
                </div>
            </section>
        </main>
    )
}