import './RewardsPage.css'


export default function RewardsPage({ scrollToTop, user }) {

    scrollToTop();

    const handleClick = () => {
        alert(`You are already a member`)
    }

    return (
        <main className="rewards-page-container">



            <section className="reward-header-container">
                <img id="burger-animation" className="header-burger-image" src="https://imgur.com/pgIGRqP.png" alt="" />
                <div className="header-center-container">
                    <h1 className="header-title">ZACH'S REWARDS</h1>
                    <p className="header-body">
                        Welcome to Zach's Rewards, where you can enjoy sweet deals
                        and exclusive rewards like a Free Birthday dinner. The more points
                        you get the more tasty delights you get to treat yourself with.
                    </p>
                    {user ?
                        <a className="join-tag" href="/rewards" onClick={handleClick}>JOIN TODAY</a>
                        :
                        <a className="join-tag" href="/login">JOIN TODAY</a>
                    }
                </div>
                <img id="salad-animation" className="header-salad-image" src="https://imgur.com/T95AqEz.png" alt="" />
            </section>



            <section className="benefits-background">
                <div className="reward-benefits-container">
                    <h1 className="benefits-header">BENEFITS FOR MEMBERS</h1>
                    <div className="benefits-card">
                        <img className="card-image" src="https://imgur.com/3kuwbTX.png" alt="" />
                        <h1 className="card-title">FREE BIRTHDAY DINNER</h1>
                        <p className="card-body">
                            Choose any dinner entree and its on us
                            (valid once a year)
                        </p>
                    </div>
                    <div className="benefits-card">
                        <div id="card-image-numbers" className="card-image">
                            <h2 className="number-points">250</h2>
                            <p className="points">POINTS</p>
                        </div>
                        <h1 className="card-title">EVERY 250 POINTS $10 off</h1>
                        <p className="card-body">
                            When you reach 250 points you can redeem them
                            for $10 off your next purchase
                        </p>
                    </div>
                    <div className="benefits-card">
                        <div id="card-image-numbers" className="card-image">
                            <h2 className="number-points">400</h2>
                            <p className="points">POINTS</p>
                        </div>
                        <h1 className="card-title">EVERY 400 POINTS GET A FREE ENTREE</h1>
                        <p className="card-body">
                            When you reach 400 points you can redeem them
                            for a free entree
                        </p>
                    </div>
                    <div className="benefits-card">
                        <img className="card-image" src="https://imgur.com/yumHigF.png" alt="" />
                        <h1 className="card-title">MILITARY REWARDS</h1>
                        <p className="card-body">
                            Benefits for those who have served us proudly
                        </p>
                    </div>
                    <div className="benefits-card">
                        <img className="card-image" src="https://imgur.com/dr1FRBY.png" alt="" />
                        <h1 className="card-title">TEACHER REWARDS</h1>
                        <p className="card-body">
                            Enjoy gifts every month as a thanks for your
                            dedication
                        </p>
                    </div>
                    <div className="benefits-card">
                        <img className="card-image" src="https://imgur.com/MqzAICw.png" alt="" />
                        <h1 className="card-title">SPECIAL OFFERS</h1>
                        <p className="card-body">
                            Every month holds exclusive rewards and gifts
                            that get added to your dashboard!
                        </p>
                    </div>
                    <div className="spacer"></div>
                </div>
            </section>



            <section className="reward-earning-container">

                <div className="earning-main-container">
                    <h1 className="earning-header">HOW TO EARN AND USE YOUR REWARDS</h1>
                    <h2 className="earning-title">-HOW TO EARN</h2>
                    <p className="earning-body">
                        For everytime you visit you earn points
                        based on what you purchase. Points build up overtime
                        and roll over each year
                    </p>
                    <h2 className="earning-title">-HOW TO USE</h2>
                    <p className="earning-body">
                        As a member your rewards and benefits appear each time you
                        go to pay. If theres a special deal or you have enough points
                        to redeem an offer, just apply the reward and we'll handle the
                        rest
                    </p>
                    <h2 className="earning-title">-NOT A MEMBER</h2>
                    <p className="earning-body">Join Today!</p>
                </div>

                <div className="earning-image-contianer">
                    <h2 className="earning-image-body">START EARNING TODAY</h2>
                    <img className="earning-image" src="https://imgur.com/RHSpmXD.png" alt="" />
                </div>

            </section>
        </main>
    )
}