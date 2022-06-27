import './RewardsPage.css'


export default function RewardsPage() {
    return (
        <>
        <section className="reward-header-container">
            <img className="header-burger-image" src="https://imgur.com/pgIGRqP.png" alt="" />
            <div>
                <h1 className="header-title">ZACHS LOYALTY REWARDS</h1>
                <p className="header-body">
                    Welcome to Zach's Rewards, where you can enjoy sweet deals
                    and exclusive rewards like a Free Birthday dinner. The more points
                    you get the more tasty delights you get to treat yourself with.
                </p>
                <a className="join-tag" href="">JOIN TODAY</a>
                {/* <a href="">CHECK YOUR REWARDS</a> */}
            </div>
            <img className="header-salad-image" src="https://imgur.com/T95AqEz.png" alt="" />
            <div className="spacer"></div>
        </section>
        <section className="reward-benefits-container">
            <div className="benefits-card">
                <img src="" alt="" />
                <h1>benefits container</h1>
                <p>happy bday gift</p>
            </div>
            <div className="benefits-card">
                <img src="" alt="" />
                <h1>benefits container</h1>
                <p>happy bday gift</p>
            </div>
            <div className="benefits-card">
                <img src="" alt="" />
                <h1>benefits container</h1>
                <p>happy bday gift</p>
            </div>
            <div className="benefits-card">
                <img src="" alt="" />
                <h1>benefits container</h1>
                <p>happy bday gift</p>
            </div>
            <div className="benefits-card">
                <img src="" alt="" />
                <h1>benefits container</h1>
                <p>happy bday gift</p>
            </div>
            <div className="benefits-card">
                <img src="" alt="" />
                <h1>benefits container</h1>
                <p>happy bday gift</p>
            </div>
            <div className="spacer"></div>
        </section>
        <section className="reward-earning-container">
            <div>
                <h1>how to earn rewards container</h1>
                <h2>title</h2>
                <p>description</p>
                <h2>title</h2>
                <p>description</p>
                <h2>title</h2>
                <p>description</p>
            </div>
            <div>
                <img src="" alt="" />
            </div>
            {/* <a href="">check your rewards</a> */}
            <div className="spacer"></div>
        </section>
        
        </>
    )
}