import React from "react";
import "./experience.css";
import google from "../../assests/image.png";
import microsoft from "../../assests/microsoft.png";

const Experience = () => {
    return (
        <section id="experience">
            <h2 className="experience-title">Experience</h2>
            <span className="experience-desc">These are the companies and organisations I have worked with....</span>
            <div className="experience-row">
                <div className="experience-card">
                    <div className="experience-img">
                        <img src={microsoft}alt="Microsoft"/>
                    </div>
                    <h3 className="experience-card-title">Intern at microsoft</h3>
                    <p className="experience-card-desc">Worked as an intern for Microsoft for 6 months.</p>
                </div>
                <div className="experience-card">
                    <div className="experience-img">
                    <img src={google}alt="Google"/>
                    </div>
                    <h3 className="experience-card-title">Full time at Google</h3>
                    <p className="experience-card-desc">Employed at google since 2022</p>
                </div>
            </div>
        </section>
    );
};

export default Experience;
