import space from '../img/space.png'
import strapi from '../img/strapi.png'
import texas from '../img/texas.png'
import hotel from '../img/hotel.png'

const Projects = () => {
    return (
        <div>
            <section id="main_projects">
                <h1 className="text-center">Projects</h1>
                    
                <div className="container mx-auto mt-4 pb-5 pt-5">
                    <div className="row">
                    <div className="col-md-3 d-flex justify-content-center pb-5">
                        <div className="card">
                        <img src={space}className="card-img-top" alt="first project"/>
                        <div className="card-body text-center">
                            <h5 className="card-title pt-3">Project exam 2020</h5>
                            <p className="card-text pb-5">Project exam 2020</p>
                            <a href="https://christophertaal.one/spaceX-projectExam2020/" className="btn pb-3"><i className="fab fa-github"></i> Live</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center pb-5">
                        <div className="card">
                        <img src={strapi} className="card-img-top" alt="second project"/>
                        <div className="card-body  text-center">
                            <h5 className="card-title pt-4">Project exam 2021</h5>
                            <p className="card-text pb-5">Project exam 2021</p>
                            <a href="https://github.com/christophertaal/projectResit2021.git" className="btn pb-3"><i className="fab fa-github"></i> Github</a>
                        </div>
                        </div>
                    </div>    
                    <div className="col-md-3 d-flex justify-content-center pb-5">
                        <div className="card">
                        <img src={texas} className="card-img-top" alt="third project"/>
                        <div className="card-body  text-center">
                            <h5 className="card-title pt-3">Collaboration Website</h5>
                            <p className="card-text pb-5">Collaboration Website</p>
                            <a href="www.texas-burger.no" className="btn pb-5"><i className="fab fa-github"></i>Live</a>
                        </div>
                        </div>
                    </div>    
                    <div className="col-md-3 d-flex justify-content-center pb-5">
                        <div className="card">
                        <img src={hotel} className="card-img-top" alt="fourth project"/>
                        <div className="card-body  text-center">
                            <h5 className="card-title pt-3">HotelBooking Website</h5>
                            <p className="card-text pb-5">Hotel Booking Website</p>
                            <a href="http://project-exam-two.herokuapp.com/?fbclid=IwAR0p7_7Twm1GcM0GKmeADss-ttdwHbhxjrUwyjVhhj13lqLIhLxGB0TL1u4" className="btn pb-3"><i className="fab fa-github"></i> Live</a>
                        </div>
                        </div>
                    </div>         
                    </div>
                </div>
                    
                </section>

        </div>
    )
}

export default Projects;