import React from 'react';

export default function Contactus() {
    return (
        <div className="about-page">
                <video src='/videos/Boxing2.mp4' autoPlay playsInline muted loop className="about-page-hero"/>
                <div className="about-content">
                    <section className="about-section">
                        <h1 className="about-heading">Location</h1>
                        <p className="about-paragraph">
                        121, Clear Water Bay Road<br></br>
                        Clear Water Bay, Kowloon<br></br>
                        Lebanon<br></br>
                        <i class="fa fa-phone fa-sm "></i>: +961 78818644<br></br>
                        <i class="fa fa-fax fa-sm "></i>: +961 76455213<br></br>
                        <i class="fa fa-envelope fa-sm "></i>: 
                        <a href="mailto:getfit@gmail.com ">getfit@gmail.com</a>
                        </p>
                    </section>
                </div>
            </div>
    )
}
