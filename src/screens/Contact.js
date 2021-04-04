import React from 'react'

const Contact = () => {
    return (
        <div className="contact">
            <h1>Get in Touch</h1>
            <p>Trysail transom furl Sed Legs scallywag Jack Ketch chandler mizzenmost reef sails skysail. Shiver me timbers loot bucko belaying pin Sea Legs boom gunwalls booty jury mast fore.</p>
            <form onSubmit="" >
                <h3>Contact Form</h3>

                <div className="form__top">
                    <div className="fields ">
                        <label>Name <span>*</span></label>
                        <input type="text" />
                    </div>
                    <div className="fields">
                        <label>Email Address <span>*</span></label>
                        <input type="email" />
                    </div>
                </div>

                <label>Message <span>*</span></label>
                    <textarea type="email" />

                    <input type="submit" className="submit" value="Send" />


            </form>

        </div>
    )
}

export default Contact
