import React from 'react'
import skillsList from './about.js'
import resume from "../../assets/document.pdf"
import "./About.css"
const AboutPage = () => {
  return (
    <div className='about'>
      <p className='about-me'>
        <strong>Here are a few things about me: </strong>
        Since completing my CAPES (Caribbean Advanced Proficiency Examination) in Accounting, Communication Studies, and Entrepreneurship, I have worked at a Bank doing data entry, I am a self-motivated, reliable, and disciplined individual who strives to develop myself holistically and to develop skills and knowledge further. I am attentive to details, and a good team player but I am also able to differentiate when a task demands independence, I want to be a part of your organization because I want to get a better understanding of life as a Software Engineer i am currently at an intermediate level in front-end development and currently in the process of reaching an intermediate level in back-end development and to further advance my skills in the field of computer science by completing the projects and tasks that you assign to me, I fully understand that you aren’t just looking for someone hard-working alone but someone who can also grow and develop with the organization, I believe I will be a great fit for this position because of my skills in Problem Solving, computer systems, information technologies, and my ability to learn new skills and technologies quickly.
      </p>
      <div className="skills">
        <ul className="skill-listing">
          {skillsList.map((skill,index) => (
            <li className="logo-cover" key={index}><img className='logos' src={skill.image}/></li>
          ))}
        </ul>
      </div>
      <div className="more">
      <a href="https://github.com/webdevent" className="" target='blank'><button className="about-btn">Github Link</button></a>
          <iframe src={resume} name='Resume'  className='resume'/>
      </div>
    </div>
  )
}

export default AboutPage