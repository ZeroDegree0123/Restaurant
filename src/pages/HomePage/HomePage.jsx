import './HomePage.css'

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
                    <div className="rewards-img">

                    </div>
                    <div className="rewards-body">
                        <h2>rewards join to start earning</h2>
                    </div>
                </section>
                <h1 className="menu-highlights">MENU HIGHLIGHTS</h1>
                <section className="highlights-container">
                        <div id="highlight-items" className="daily">
                            <h2>daily specials</h2>
                        </div>
                        <div id="highlight-items" className="appetizer">
                            <h2>appetizers</h2>
                        </div>
                        <div id="highlight-items" className="burger">
                            <h2>burgers</h2>
                        </div>
                        <div id="highlight-items" className="drinks">
                            <h2>drinks</h2>
                        </div>
                        <div id="highlight-items" className="desserts">
                            <h2>desserts</h2>
                        </div>
                        <div id="highlight-items" className="kids">
                            <h2>kids</h2>
                        </div> 
                </section>
                <section className="bottom-links-container">
                    <div className="bottom-links">
                        <a href="">Careers</a>
                        <p>become a member... one of us</p>
                    </div>
                    <div className="bottom-links">
                        <a href="">About</a>
                        <p>become a member... one of us</p>
                    </div>
                    <div className="bottom-links">
                        <a href="">Sign-Up</a>
                        <p>become a member... one of us</p>
                    </div>
                </section>

            </main>
        </>
    )
}