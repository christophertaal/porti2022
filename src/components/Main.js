import resume from '../img/sample.pdf'

const Main = () => {
    return (
        <div>
            <section id="main_header">
                <div id="header_container" className="text-center">
                    <h1>Hi! I am Christopher Taal</h1>
                    <h3>Web Developer</h3>
                    <button className="btn btn-success"><a className="resume-btn" href={resume} target="_blank">Download Resume</a></button>
                </div>
            </section>
        </div>
    )
}

export default Main;