import React from "react";
import homee from "../../assets/home.jpg";
import video from "../../assets/Video.png"
import { FaStopwatch } from "react-icons/fa";
import "./Home.css";

function Home() {
  return (
    <div>
        <div className="image-container">
        <img src={homee} className="himg" alt="nothing" />
        <h1 className="head-text">InstaMort</h1>
        <h1 className="overlay-text">
            Mortgages made simple
        </h1>
        <p className="para">This website simplifies the mortgage process by 
            offering a seamless,<br/> user-friendly experience for homebuyers. 
            It provides quick approvals,<br/> real-time calculations, and expert 
            guidance to make homeownership more<br/>accessible.</p>
        </div>
        <center className="grad">
        <button className="approval-btn">
            Start my approval
        </button>
        <div className="info-text">
            <FaStopwatch className="icon" /> 3 min | No credit impact
        </div>
        </center>
        <div className="imgbelow">
            <div className="post">
                <img src={video} className="vidimg" alt="nothing"/>
                <p className="vidtext"><b>"I have chosen<br/>Instamort as it<br/> 
                    provided me with<br/>lowest interest rate"</b><br/><i>Amanda-Customer</i></p>
            </div>
            <div className="part">
                <h1 className="fsize">Find out why <br/>we're better.</h1>
                <button className="story-btn ">See all our stories</button>
            </div>
        </div>
    </div>
  );
}

export default Home;
