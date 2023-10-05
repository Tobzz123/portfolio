import React from 'react'
import './skills.css';
import UIDesign from "../../assets/ui-design.png"
import WebDesign from "../../assets/website-design.png"
import AppDesign from "../../assets/app-design.png"

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I am a Full Stack Developer with over 3 years of extensive experience in C#, .NET, SQL, JavaScript, React, SSIS, Angular, TypeScript, and NodeJS. Proven ability to develop user-friendly software with high security and reliability parameters</span>          
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt ="UIDesign" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>Three Layer Architecture</h2>
                    <p>I develop applications using the Three Layer Architecture by establishing a DAL, BLL, and Presentation Layer. I also follow other industry design patterns such as MVC and principles such as SOLID depending on the requirements of the application.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt ="WebDesign" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>Web App Development</h2>
                    <p>I have extensive experience in creating Web Applications using ASP.NET, Angular, and React. Some of the applications I've created include StockView, a stock metrics tracker, a Love Calculator, A Trading Journal, a Google Maps API, and more.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt ="AppDesign" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>App Creation</h2>
                    <p>I also have experience creating iOS and Android Apps using Swift and Java in Android Studio.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills