import './HomePage.css'

export default function HomePage() {
    return (
        <>
            <main>
                <section className="header-container">
                    {/* <img className="food-image" src="https://imgur.com/QEHrXjH.png" alt="" /> */}
                    <div className="order-container">
                        <h1>TIME TO FEAST!</h1>
                        <a className="order-link" href="orders/new">ORDER NOW</a>
                    </div>
                </section>
                <h1 className="menu-highlights">MENU HIGHLIGHTS</h1>
                <section className="highlights-container">
                    <div>
                        <h2>daily specials</h2>
                    </div>
                    <div>
                        <h2>appetizers</h2>
                    </div>
                    <div>
                        <h2>burgers</h2>
                    </div>
                    <div>
                        <h2>drinks</h2>
                    </div>
                    <div>
                        <h2>desserts</h2>
                    </div>
                    <div>
                        <h2>kids</h2>
                    </div>
                </section>
                <section></section>

            </main>
        </>
    )
}