import './AboutPage.css'

export default function AboutPage({ user }) {
    const handleClick = () => {
        alert(`you are already a member`)
    }

    return (
        <main>
            <section className="about-header-container">
                <h2 className="about-header-title">ZACH'S BURGERS IS HERE TO SERVE THE COMMUNITY</h2>
                <p className="about-header-body">
                    Here at Zach's Burgers, we cherish our customers and welcome everyone
                    to enjoy our delicious food. We know a meal is best enjoyed together, with
                    family and friends, and we love to see our customers enjoying there stay. From
                    our juicey burgers, fresh salads, and sweet desserts, there's a little something for
                    everyone to enjoy.
                </p>
            </section>
            <section className="about-body-container">
                <div className="about-body-subcontainer">
                    <img className="about-body-image" src="https://imgur.com/nSKV5Bw.png" alt="" />
                    <div id="about-member-card" className="about-body">
                        <h3 className="about-body-title">BECOME A MEMBER</h3>
                        <p className="about-body-body">
                            Sign up to Learn about the latest updates on menu items, fun events,
                            special offers, and much more.
                        </p>
                        {user ?
                            <a className="about-body-link" href="/about" onClick={handleClick}>JOIN TODAY</a>
                            :
                            <a className="about-body-link" href="/login">JOIN TODAY</a>
                        }
                    </div>
                </div>
                <div id='about-careers-subcontainer' className="about-body-subcontainer">
                    <div className="about-body">
                        <h3 className="about-body-title">CAREERS</h3>
                        <p className="about-body-body">
                            Looking for a new change? Become apart of our team, but most
                            of of all the Zach's Burgers Family. We cherish our staff just as much
                            as our customers. If you like a supportive team, with the motivations to grow
                            and win together, then look no further. Apply today.
                        </p>
                        <a className="about-body-link" href="/careers">EXPLORE CAREERS</a>
                    </div>
                    <img className="about-body-image" src="https://imgur.com/j92LZvD.png" alt="" />
                </div>
            </section>
            <section className="about-community-container">
                <div className="contact-info-container">
                    <h2 className="contact-info-title">Contact info</h2>
                    <hr className="contact-line-break" />
                    <p className="contact-info-body">
                        Did you like my work? Feel free to contact me. I'm always looking for
                        new opportunities and would love to talk. You can check out my git hub, reach me
                        on linkedIn, or feel free to email me.
                    </p>
                    <div className="contact-info-link-container">
                        <a className="contact-info-link" href="https://github.com/ZeroDegree0123" target="_blank" rel="noreferrer">GitHub</a>
                        <a className="contact-info-link" href="https://www.linkedin.com/in/zacharymvasquez/" target="_blank" rel="noreferrer">LinkedIn</a>
                        <a className="contact-info-link" href="mailto:zachary.vasquez.w@gmail.com" target="_blank" rel="noreferrer">Email</a>
                    </div>
                </div>
            </section>
        </main>
    )
}