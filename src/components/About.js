import profile_image from "../img/profile.png"

const About = () => {
    return (
        <div>
            <section id="main_about">
                <h1 className="text-center">About Me</h1>
                <div className="text-center">
                <img className="rounded-circle pt-5" alt="100x100" src={profile_image}/><br/>
                <div className="container pt-5">
                I finished my Bachelor of Science in Nursing in the Philippines last 2008. I worked well in many countries as health proffesional. I was able to gain a lot of experience that made me realize to connect basically Informative Technology into the Nursing field.
                </div>
                <div className="container pt-5">
                Front End Web Developement is an initial step towards a bigger world of Informative Technology. This makes me feel alived and motivated to face another chapter of my career.
                </div>
                <div className="container pt-5">
                To begin with, I want to combine my clinical skills with my knowledge on frontend web developement. I want to improve the on-going clinical platforms that are used in many clinical settings to gather health data's inorder to analyze pasient care outcomes and train health propffesionals in new pasient care technology.
                </div>
                </div>
                
            </section>
        </div>
    )
}

export default About;