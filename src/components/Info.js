import React from "react"
import portrait from "../images/portrait.JPG"

function ContactButtons(){
  return (
    <div className="info-button-container">
      <a href="mailto:ryoenoki21@gmail.com"><button className="email-button"><span className="button-icon"><i className="fas fa-envelope" /></span>Email</button></a>
      <a href="https://linkedin.com/in/ryota-enoki" rel="noreferrer" target="_blank"><button className="linkedin-button"><span className="button-icon"><i className="fab fa-linkedin" /></span>LinkedIn</button></a>
    </div>
  )
}

export default function Info() {
  return (
  <div className="info">
    <img src={portrait} className="portrait-img" alt="portrait" />
    <h1>Ryota Enoki</h1>
    <p>Frontend Developer</p>
    <a href="https://ryotaenoki.me/" rel="noreferrer" target="_blank">ryotaenoki.me</a>
    < ContactButtons />
  </div>
  )
}
