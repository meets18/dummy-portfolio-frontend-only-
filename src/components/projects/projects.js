import React from "react";
import "./projects.css";
import ippo from "../../assests/ippo.png";
import naruto from "../../assests/naruto.png";
import level from "./../../assests/level.jpg";

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <h2 className="projects-title">My Projects</h2>
            <p className="projects-desc">
                I mostly work with Machine Learning models and problem-solving. I also enjoy building creative, interactive tools and games.
            </p>

            <div className="projects-row">
                <div className="project-card">
                    <img src={ippo} alt="ippo game" className="project-img" />
                    <h3 className="project-card-title">Boxing Game</h3>
                    <p className="project-card-desc">
                        Imagine a boxing game where your opponent evolves according to your patterns of playing. This is exactly that
                    </p>
                </div>

                <div className="project-card">
                    <img src={level} alt="level" className="project-img" />
                    <h3 className="project-card-title">Self Help Application</h3>
                    <p className="project-card-desc">
                        A self-help app which allows you to level in real life and rewards you according to your performance
                    </p>
                </div>
            </div>

            <div className="project-card center-card">
                <img src={naruto}alt="naruto" className="project-img" />
                <h3 className="project-card-title">Naruto Handsign Game</h3>
                <p className="project-card-desc">
                    A Naruto themed game where you can indulge in Handsign battles, Coming Soon :)
                </p>
            </div>
        </section>
    );
};

export default Projects;
