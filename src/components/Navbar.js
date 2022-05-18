const Navbar = () => {
    return (
        <div>
            <nav id="navbar-main" className="navbar navbar-expand-lg navbar-light bg-light sticky">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul id="navbar_list" className="navbar-nav" style={{"width":"100%"}}>
                    <li className="nav-item ml-3 active">
                    <a className="nav-link h4" href="#main_header">Home</a>
                    </li>
                </ul>
                <ul id="navbar_list" className="navbar-nav">
                    <li className="nav-item ml-3">
                    <a className="nav-link h4" href="#main_skills">Skills</a>
                    </li>
                    <li className="nav-item ml-3">
                        <a className="nav-link h4" href="#main_projects">Projects</a>
                    </li>
                    <li className="nav-item ml-3">
                    <a className="nav-link h4" href="#main_about">About</a>
                    </li>
                    <li className="nav-item ml-3">
                    <a className="nav-link h4" href="#main_contact">Contact</a>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;