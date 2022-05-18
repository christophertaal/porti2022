const Contact = () => {
    return (
        <div>
            <section id="main_contact">
                <h1 className="text-center">Get in touch</h1>
                <div className="row pt-5">
                    <div className="col-lg-7 mx-auto">
                        <div className="card mt-2 mx-auto p-4 bg-light">
                            <div className="card-body bg-light">
                                <div className="container">
                                    <form id="contact-form" role="form">
                                        <div className="controls">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group"> 
                                                    <label htmlFor="form_name">Firstname *</label> 
                                                    <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *" 
                                                    required="required" data-error="Firstname is required."/> </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group"> <label htmlFor="form_email">Email *</label> 
                                                    <input id="form_email" type="text" name="surname" className="form-control" placeholder="Please enter your Email *" 
                                                    required="required" data-error="Email is required."/> </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group"> <label htmlFor="form_message">Message *</label> <textarea id="form_message" name="message" 
                                                    className="form-control" placeholder="Write your message here." rows="4" required="required" data-error="Please, leave us a message."></textarea> </div>
                                                </div>
                                                <div className="col-md-12"> 
                                                <input type="submit" className="btn btn-success btn-send pt-2 btn-block " value="Send Message"/> </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div> 
                    </div> 
                </div>
            </section>
        </div>
    )
}

export default Contact;