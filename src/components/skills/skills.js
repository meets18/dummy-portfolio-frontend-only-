import React from "react";
import "./skills.css";
import javapng from "../../assests/java.png";
import pythonpng from "../../assests/python.png";
import prompt from "../../assests/prompt.png";
import ml from "../../assests/ml.png";

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I am capable of</span>
            <span className="skillDesc">I am a skilled engineer with profound programming skills and a deep understanding of Machine Learning. I can work in both Java and python and am capable of building prompt templates and fine-tuning models.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={javapng} alt="java" className="skillBarimg" />
                    <div className="skillBartext">
                        <h2>Java</h2>
                        <p>Problem Solving and understanding of Data Structures and Algorithms</p>
                    </div>
                </div>
                    <div className="skillBar">
                    <img src={pythonpng} alt="python" className="skillBarimg" />
                    <div className="skillBartext">
                        <h2>Python</h2>
                        <p>I can code in Python enabling me to work in the field of ML</p>
                    </div>
                </div>
    
                <div className="skillBar">
                    <img src={prompt} alt="prompt" className="skillBarimg" />
                    <div className="skillBartext">
                        <h2>Prompt engineering</h2>
                        <p>I am highly skilled in the field of prompt engineering</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={ml} alt="ml" className="skillBarimg" />
                    <div className="skillBartext">
                        <h2>Machine Learning</h2>
                        <p>I can create machine Learning models</p>
                    </div>
                </div>
            </div>
        </section>
);
}

export default Skills;