import './CareersPage.css'

export default function CareersPage() {
    return (
        <main>


            <section className="company-header-container">
                <h1 className="recruit-title">THE HEART OF ZACH'S BURGERS</h1>
                <p className="recruit-body">
                    Do you love your community? We do too. We strive to better our
                    communites and believe we can make a difference. Our team is full
                    of big dreamers, problem solvers, challenge takers and leaders of the
                    future. In return for your hard work, we offer competing wages, career opportunities
                    and a supportive enviroment. Join us in the mission for a better tomorrow.
                    Hiring now for management and crew positions in all locations.
                </p>
            </section>


            <h1 className="positions-container-title">AVAILABLE POSITIONS</h1>
            <section className="company-positions-container">
                <div className="positions-card">
                    <div className="positions-card-body-container">
                        <h1 className="positions-title">SERVER</h1>
                        <p className="positions-body">
                            Serves and helps customers.
                            Offering exceptional customer service
                            and leacing our customers leaving with a smile.
                        </p>
                    </div>
                    <img className="positions-image" src="https://imgur.com/XSenBva.png" alt="" />
                </div>
                <div className="positions-card">
                    <div className="positions-card-body-container">
                        <h1 className="positions-title">CHEF</h1>
                        <p className="positions-body">
                            Cooks and prepares meals in a ordered and
                            timely manner.
                        </p>
                    </div>
                    <img className="positions-image" src="https://imgur.com/zPmGQNi.png" alt="" />
                </div>
                <div className="positions-card">
                    <div className="positions-card-body-container">
                        <h1 className="positions-title">CASHIER</h1>
                        <p className="positions-body">
                            Cashes out customers, and ensuring customers were
                            satisfied with there visit.
                        </p>
                    </div>
                    <img className="positions-image" src="https://imgur.com/DlQXxRa.png" alt="" />
                </div>
                <div className="positions-card">
                    <div className="positions-card-body-container">
                        <h1 className="positions-title">MANAGER</h1>
                        <p className="positions-body">
                            Leads the shift and keeps the team organized. As manger, expectations are
                            to complete tasks efficiently and ensure customers are cared for.
                        </p>
                    </div>
                    <img className="positions-image" src="https://imgur.com/lR7dadN.png" alt="" />
                </div>
                <div className="positions-card">
                    <div className="positions-card-body-container">
                        <h1 className="positions-title">ASSISSTANT MANAGER</h1>
                        <p className="positions-body">
                            This position is a mini manager, this position is
                            to train crew members to become a full fledged manager.
                        </p>
                    </div>
                    <img className="positions-image" src="https://cdn2.iconfinder.com/data/icons/avatars-2-7/128/3-512.png" alt="" />
                </div>
                <div className="positions-card">
                    <div className="positions-card-body-container">
                        <h1 className="positions-title">PREPPER</h1>
                        <p className="positions-body">
                            Preps food for the shift and helps keep the kitchen
                            clean.
                        </p>
                    </div>
                    <img className="positions-image" src="https://imgur.com/SiIR3Ah.png" alt="" />
                </div>
            </section>


            <h1 className="company-benefits-container-title">WORK WITH PASSION</h1>
            <section className="company-benefits-container">
                <div className="work-card">
                    <img className="work-image" src="https://imgur.com/hyK1xUv.png" alt="" />
                    <h1 className="work-title">COMPANY VIBES</h1>
                    <p className="work-body">
                        We ensure a comfortable enviroment where people can
                        thrive. Our workplace is motivating, supportive, and most
                        of all fun!
                    </p>
                </div>
                <div className="work-card">
                    <img className="work-image" src="https://imgur.com/v1bhQ9l.png" alt="" />
                    <h1 className="work-title">COMPETITIVE WAGES</h1>
                    <p className="work-body">
                        We believe hard work deserves good pay. Thats why we challenge other
                        companies wages and keep ours competing if not higher. We are
                        committed to encouraging our employees to advance and earn pay
                        raises.

                    </p>
                </div>
                <div className="work-card">
                    <img className="work-image" src="https://imgur.com/BeKNWuy.png" alt="" />
                    <h1 className="work-title">CAREER OPPORTUNITIES</h1>
                    <p className="work-body">
                        We offer paths and opportunities for career advancement
                        with professional development programs and a policy of
                        promoting from within.
                    </p>
                </div>
                <div className="work-card">
                    <img className="work-image" src="https://imgur.com/1MhDVy2.png" alt="" />
                    <h1 className="work-title">WORK-LIFE BALANCE</h1>
                    <p className="work-body">
                        We know how life can be a bumpy road and work isn't everything there
                        is to life. Flexible scheduling and paid vacations allows time for your life
                        outside of work.
                    </p>
                </div>
                <div className="work-card">
                    <img className="work-image" src="https://imgur.com/dMGFMz0.png" alt="" />
                    <h1 className="work-title">EDUCATION SUPPORT</h1>
                    <p className="work-body">
                        If this was a real company... we would offer scholarships, higher level
                        training and tuition reimbursement. We offer the support to help employees
                        build valuable skills for their future.
                    </p>
                </div>
                <div className="work-card">
                    <img className="work-image" src="https://imgur.com/X8xnlSl.png" alt="" />
                    <h1 className="work-title">AFFORDABLE HEALTHCARE</h1>
                    <p className="work-body">
                        We want our team and there family to live comfortably.
                        That's why we offer affordable healthcare, dental and resources
                        in order to navigate through life.
                    </p>
                </div>
            </section>



        </main>
    )
}