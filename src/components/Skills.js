import html_image from '../img/html.png'
import css_image from '../img/css.png'
import js_image from '../img/js.png'
import sass_image from '../img/sass.png'
import ts_image from '../img/ts.png'
import react_image from '../img/react.png'
import next_image from '../img/next.png'
import wp_image from '../img/wp.png'
import git_image from '../img/git.png'
import bootstrap_image from '../img/bootstrap.jpg'

const Skills = () => {
    return (
        <div>
            <section id="main_skills">
                <h1 className="text-center">Top Expertise</h1>
                
                <div className="container pb-5" style={{"marginTop":"50px"}}>
                <div className="row">
                    <div className="col-md-3 pb-5">
                        <div className="card-sl">
                            <div className="card-image">
                                <img
                                    src={html_image} alt="my skills"/>
                            </div>
                            <div className="card-heading text-center">
                                HTML5
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 pb-5">
                        <div className="card-sl">
                            <div className="card-image">
                                <img
                                    src={css_image} alt="my skills" />
                            </div>
                            <div className="card-heading text-center">
                            CSS3
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 pb-5">
                    <div className="card-sl">
                        <div className="card-image">
                            <img
                                src={sass_image} alt="my skills"/>
                        </div>
                        <div className="card-heading text-center">
                            Sass
                        </div>
                    </div>
                </div>
                <div className="col-md-3 pb-5">
                    <div className="card-sl">
                        <div className="card-image">
                            <img 
                                src={js_image} alt="my skills"/>
                        </div>
                        <div className="card-heading text-center">
                        Javascript
                        </div>
                    </div>
                </div>
                <div className="col-md-3 pb-5">
                    <div className="card-sl">
                        <div className="card-image">
                            <img
                                src={ts_image} alt="my skills"/>
                        </div>
                        <div className="card-heading text-center">
                        TypeScript
                        </div>
                    </div>
                </div>
                <div className="col-md-3 pb-5">
                <div className="card-sl">
                    <div className="card-image">
                        <img
                            src={react_image} alt="my skills"/>
                    </div>
                    <div className="card-heading text-center">
                        React
                    </div>
                </div>
                </div>
                <div className="col-md-3 pb-5">
                    <div className="card-sl">
                        <div className="card-image">
                            <img
                                src={next_image} alt="my skills"/>
                        </div>
                        <div className="card-heading text-center">
                        Next JS
                        </div>
                    </div>
                </div>
                <div className="col-md-3 pb-5">
                    <div className="card-sl">
                        <div className="card-image">
                            <img
                                src={wp_image} alt="my skills"/>
                        </div>
                        <div className="card-heading text-center">
                        WordPress
                        </div>
                    </div>
                </div>
                <div className="col-md-3 pb-5">
                    <div className="card-sl">
                        <div className="card-image">
                            <img
                                src={git_image} alt="my skills" />
                        </div>
                        <div className="card-heading text-center">
                        GIT
                        </div>
                    </div>
                </div>
                <div className="col-md-3 pb-5">
                    <div className="card-sl">
                        <div className="card-image">
                            <img
                                src={bootstrap_image} alt="my skills"/>
                        </div>
                        <div className="card-heading text-center">
                        Bootstrap
                        </div>
                    </div>
                </div>
                </div>  
                </div>
            </section>

        </div>
    )
}

export default Skills;