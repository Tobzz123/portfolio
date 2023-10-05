import React from 'react';
import './intro.css';
import bg from '../../assets/headshot.png'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hi, </span>
            <span className="introText">I'm <span className="introName">Ola</span> <br />Full Stack Developer</span>
            <p className="introPara">I am a highly proficient developer with experience in creating <br/> Full Stack Web Applications and REST APIs</p>
            <Link to='contact' spy={true} smooth={true} offset={-50} duration = {500}><button className="btn"><img src={btnImg} alt="Hire" className="btnImg" />Let's Connect</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro