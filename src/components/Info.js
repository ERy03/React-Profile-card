import React from "react"

function ContactButtons(){
  return (
    <div className="info-button-container">
      <a href="mailto:ryoenoki21@gmail.com"><button className="email-button"><span className="button-icon"><i class="fas fa-envelope" /></span>Email</button></a>
      <a href="https://linkedin.com/in/ryota-enoki" rel="noreferrer" target="_blank"><button className="linkedin-button"><span className="button-icon"><i class="fab fa-linkedin" /></span>LinkedIn</button></a>
    </div>
  )
}

export default function Info() {
  return (
  <div className="info">
    {/* <img src="http://source.unsplash.com/random/317x317/?portrait" className="portrait-img" alt="portrait" /> */}
    <h1>John / Jane Doe</h1>
    <p>Frontend Developer</p>
    <a href="https://ryotaenoki.me/" rel="noreferrer" target="_blank">ryotaenoki.me</a>
    < ContactButtons />
  </div>
  )
}
